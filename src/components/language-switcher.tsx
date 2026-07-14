import Link from "next/link";
import type { Locale } from "@/data/resume";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-[var(--ink-muted)]">
      <span className="no-print sr-only">{label}</span>
      <div className="inline-flex overflow-hidden rounded-md border border-[var(--line)] bg-white/70">
        <Link
          href="/th"
          hrefLang="th"
          className={`px-3 py-2 font-medium transition ${
            locale === "th"
              ? "bg-[var(--accent)] text-white"
              : "hover:bg-[var(--accent-soft)]"
          }`}
          aria-current={locale === "th" ? "page" : undefined}
        >
          ไทย
        </Link>
        <Link
          href="/en"
          hrefLang="en"
          className={`px-3 py-2 font-medium transition ${
            locale === "en"
              ? "bg-[var(--accent)] text-white"
              : "hover:bg-[var(--accent-soft)]"
          }`}
          aria-current={locale === "en" ? "page" : undefined}
        >
          EN
        </Link>
      </div>
    </div>
  );
}
