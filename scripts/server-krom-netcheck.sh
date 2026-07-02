#!/usr/bin/env bash
# server กรม (TB-API-GATEWAY) — network diagnostic for Cloud Functions API
# Usage: bash server-krom-netcheck.sh
#        bash server-krom-netcheck.sh /path/to/report.txt

set -u

HOST="${HOST:-asia-southeast1-tbit-excise.cloudfunctions.net}"
API_PATH="${API_PATH:-/apiv2-Winesearch_Excise}"
URL="https://${HOST}${API_PATH}"
CONNECT_TIMEOUT="${CONNECT_TIMEOUT:-15}"
REPORT="${1:-/tmp/server-krom-netcheck-$(date +%Y%m%d-%H%M%S).txt}"

section() {
  echo
  echo "================================================================"
  echo "=== $1"
  echo "================================================================"
}

run() {
  echo "+ $*"
  "$@" 2>&1 || true
}

have() {
  command -v "$1" >/dev/null 2>&1
}

tcp_check() {
  local target="$1" port="$2"
  if have nc; then
    nc -zv -w "$CONNECT_TIMEOUT" "$target" "$port" 2>&1
    return
  fi
  if timeout "$CONNECT_TIMEOUT" bash -c "echo > /dev/tcp/${target}/${port}" 2>/dev/null; then
    echo "TCP ${port} OK (bash /dev/tcp)"
  else
    echo "TCP ${port} FAIL (bash /dev/tcp)"
  fi
}

{
  section "Meta"
  echo "hostname: $(hostname)"
  echo "date:     $(date -Iseconds 2>/dev/null || date)"
  echo "user:     $(whoami)"
  echo "target:   ${URL}"
  echo "report:   ${REPORT}"

  section "DNS"
  if have getent; then
    run getent hosts "$HOST"
  elif have host; then
    run host "$HOST"
  elif have nslookup; then
    run nslookup "$HOST"
  else
    echo "no DNS lookup tool found"
  fi

  section "Ping (ICMP)"
  if have ping; then
    run ping -c 3 "$HOST"
  else
    echo "ping not available"
  fi

  section "TCP 443"
  tcp_check "$HOST" 443

  section "Proxy environment"
  env | grep -i proxy || echo "(no proxy env vars)"

  if [[ -f /etc/environment ]]; then
    echo "--- /etc/environment ---"
    grep -i proxy /etc/environment 2>/dev/null || echo "(none)"
  fi

  section "curl — IPv4 HEAD"
  if have curl; then
    run curl -4 -v --connect-timeout "$CONNECT_TIMEOUT" --max-time 30 -I "$URL"
  else
    echo "curl not available"
  fi

  section "curl — default (may use IPv6) HEAD"
  if have curl; then
    run curl -v --connect-timeout "$CONNECT_TIMEOUT" --max-time 30 -I "$URL"
  fi

  section "curl — IPv4 POST (minimal body, no auth)"
  if have curl; then
    run curl -4 -v --connect-timeout "$CONNECT_TIMEOUT" --max-time 30 \
      -X POST \
      -H "content-type: application/json" \
      -d '{"Name":"NETCHECK","Vintage":"1993","BottleSize":"750ml","Avb":12.5}' \
      "$URL"
  fi

  section "HTTPS baseline — google.com"
  if have curl; then
    run curl -4 -I --connect-timeout "$CONNECT_TIMEOUT" --max-time 20 https://www.google.com
  fi

  section "HTTPS baseline — cloudfunctions.net"
  if have curl; then
    run curl -4 -I --connect-timeout "$CONNECT_TIMEOUT" --max-time 20 https://cloudfunctions.net
  fi

  section "Routing"
  if have ip; then
    run ip route
    echo
    run ip -4 addr show
  else
    run route -n 2>/dev/null || true
  fi

  section "Traceroute to target (TCP 443 if possible)"
  if have traceroute; then
    run traceroute -n -T -p 443 "$HOST"
  elif have tracepath; then
    run tracepath "$HOST"
  else
    echo "traceroute/tracepath not available"
  fi

  section "UFW"
  if have ufw; then
    run sudo ufw status verbose
  else
    echo "ufw not installed"
  fi

  section "iptables OUTPUT (first 30 lines)"
  if have iptables; then
    run sudo iptables -L OUTPUT -n -v
    echo
    echo "--- rules mentioning 443 / DROP / REJECT ---"
    sudo iptables -L -n -v 2>/dev/null | grep -E '443|DROP|REJECT' || echo "(none)"
  else
    echo "iptables not available"
  fi

  section "firewalld"
  if have firewall-cmd; then
    run sudo firewall-cmd --list-all
  else
    echo "firewalld not installed"
  fi

  section "SELinux"
  if have getenforce; then
    run getenforce
  else
    echo "getenforce not available"
  fi

  section "Quick verdict hints"
  echo "Interpretation guide:"
  echo "  - ping OK + TCP 443 FAIL  => firewall blocking outbound HTTPS"
  echo "  - curl -4 OK, default FAIL => likely IPv6 issue; use curl -4 or fix IPv6 route"
  echo "  - google.com FAIL          => general HTTPS egress blocked on server กรม"
  echo "  - TCP OK but HTTP 401/403  => network OK; check JWT / API auth"
  echo "  - TCP OK but HTTP 4xx/5xx  => network OK; check API payload / function status"

} | tee "$REPORT"

echo
echo "Done. Report saved to: $REPORT"
