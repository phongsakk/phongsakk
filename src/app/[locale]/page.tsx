import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ResumeView } from "@/components/resume-view";
import { isLocale, locales, resumeByLocale, type Locale } from "@/data/resume";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const content = resumeByLocale[raw];
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      languages: {
        th: "/th",
        en: "/en",
      },
    },
  };
}

export default async function ResumePage({ params }: PageProps) {
  const { locale: raw } = await params;

  if (!isLocale(raw)) {
    notFound();
  }

  const locale: Locale = raw;
  const content = resumeByLocale[locale];

  return (
    <div lang={locale}>
      <ResumeView locale={locale} content={content} />
    </div>
  );
}
