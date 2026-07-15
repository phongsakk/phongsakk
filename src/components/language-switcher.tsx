import Link from "next/link";
import type { Locale } from "@/data/resume";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const activeClass =
    "bg-[var(--accent)] text-white hover:brightness-110";
  const idleClass =
    "text-[var(--ink-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--ink)]";

  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <span className="no-print sr-only">{label}</span>
      <div className="inline-flex overflow-hidden rounded-md border border-[var(--line)] bg-white/80">
        <Link
          href="/th"
          hrefLang="th"
          className={`px-3 py-2 font-medium transition ${
            locale === "th" ? activeClass : idleClass
          }`}
          style={locale === "th" ? { color: "#ffffff" } : undefined}
          aria-current={locale === "th" ? "page" : undefined}
        >
          ไทย
        </Link>
        <Link
          href="/en"
          hrefLang="en"
          className={`px-3 py-2 font-medium transition ${
            locale === "en" ? activeClass : idleClass
          }`}
          style={locale === "en" ? { color: "#ffffff" } : undefined}
          aria-current={locale === "en" ? "page" : undefined}
        >
          EN
        </Link>
      </div>
    </div>
  );
}
