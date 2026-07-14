import Image from "next/image";
import type { Locale, ResumeContent } from "@/data/resume";
import { DownloadPdfButton } from "@/components/download-pdf-button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { TechBadgeList } from "@/components/tech-badges";

type ResumeViewProps = {
  locale: Locale;
  content: ResumeContent;
};

export function ResumeView({ locale, content }: ResumeViewProps) {
  const {
    ui,
    profile,
    jobInterests,
    skillGroups,
    learning,
    projects,
    languages,
    experience,
    education,
  } = content;

  return (
    <div className="relative z-10 mx-auto min-h-screen w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 animate-fade">
        <LanguageSwitcher locale={locale} label={ui.language} />
        <DownloadPdfButton label={ui.downloadPdf} />
      </div>

      <article className="print-surface rounded-2xl border border-white/70 bg-[var(--surface)] p-6 shadow-[var(--shadow)] backdrop-blur-md sm:p-10 animate-rise">
        <header className="print-break-avoid grid gap-6 border-b border-[var(--line)] pb-8 sm:grid-cols-[auto_1fr] sm:items-end">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] sm:h-32 sm:w-32">
            <Image
              src="/profile.png"
              alt={profile.name}
              fill
              priority
              sizes="128px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Resume
            </p>
            <h1 className="font-[family-name:var(--font-display),var(--font-body-thai)] text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-[var(--ink-muted)] sm:text-xl">
              {profile.headline}
            </p>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">{profile.location}</p>
          </div>
        </header>

        <section className="print-break-avoid mt-8 grid gap-6 border-b border-[var(--line)] pb-8 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              {ui.about}
            </h2>
            <div className="space-y-3 text-base leading-relaxed text-[var(--ink)] sm:text-[1.05rem]">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              {ui.contact}
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed sm:text-base">
              <li>
                <a className="underline-offset-2 hover:underline" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-2 hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </li>
              <li>LINE: {profile.lineId}</li>
              <li>
                <a
                  className="underline-offset-2 hover:underline"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.github}
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="print-break-avoid mt-8 border-b border-[var(--line)] pb-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {ui.jobInterest}
          </h2>
          <ol className="flex flex-wrap gap-x-8 gap-y-2 text-base font-medium text-[var(--ink)]">
            {jobInterests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="mt-8 border-b border-[var(--line)] pb-8">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {ui.experience}
          </h2>
          <div className="space-y-7">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="print-break-avoid">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">{job.role}</h3>
                  <p className="shrink-0 text-sm text-[var(--ink-muted)]">{job.period}</p>
                </div>
                <p className="mt-1 text-[var(--ink-muted)]">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.98rem] leading-relaxed text-[var(--ink)]">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="print-break-avoid mt-8 border-b border-[var(--line)] pb-8">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {ui.skills}
          </h2>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2.5 text-sm font-semibold text-[var(--ink-muted)]">
                  {group.label}
                </p>
                <TechBadgeList items={group.items} />
              </div>
            ))}
          </div>
        </section>

        <section className="print-break-avoid mt-8 border-b border-[var(--line)] pb-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {ui.languages}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-[var(--line)] text-[var(--ink-muted)]">
                  <th className="py-2 pr-3 font-semibold">{ui.languageName}</th>
                  <th className="py-2 px-2 font-semibold">{ui.listening}</th>
                  <th className="py-2 px-2 font-semibold">{ui.speaking}</th>
                  <th className="py-2 px-2 font-semibold">{ui.reading}</th>
                  <th className="py-2 pl-2 font-semibold">{ui.writing}</th>
                </tr>
              </thead>
              <tbody>
                {languages.map((lang) => (
                  <tr key={lang.name} className="border-b border-[var(--line)]/70">
                    <td className="py-2.5 pr-3 font-semibold text-[var(--ink)]">{lang.name}</td>
                    <td className="py-2.5 px-2 text-[var(--ink-muted)]">{lang.listening}</td>
                    <td className="py-2.5 px-2 text-[var(--ink-muted)]">{lang.speaking}</td>
                    <td className="py-2.5 px-2 text-[var(--ink-muted)]">{lang.reading}</td>
                    <td className="py-2.5 pl-2 text-[var(--ink-muted)]">{lang.writing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="print-break-avoid mt-8 border-b border-[var(--line)] pb-8">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {ui.projects}
          </h2>
          <div className="space-y-7">
            {projects.map((project) => (
              <article
                key={project.title}
                className="print-break-avoid border-l-2 border-[var(--accent)] pl-4"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">{project.title}</h3>
                <div className="mt-3 space-y-3 text-[0.98rem] leading-relaxed">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {ui.challenge}
                    </p>
                    <p className="text-[var(--ink)]">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {ui.solution}
                    </p>
                    <p className="text-[var(--ink)]">{project.solution}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {ui.stack}
                    </p>
                    <TechBadgeList items={project.stack} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="print-break-avoid mt-8 border-b border-[var(--line)] pb-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {learning.title}
          </h2>
          <ul className="space-y-2 text-[0.98rem] leading-relaxed text-[var(--ink)]">
            {learning.items.map((item) => (
              <li key={item} className="border-l-2 border-[var(--accent)] pl-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="print-break-avoid mt-8">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {ui.education}
          </h2>
          <div className="space-y-5">
            {education.map((edu) => (
              <article key={`${edu.school}-${edu.period}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-[var(--ink-muted)]">{edu.period}</p>
                </div>
                <p className="mt-1 text-[var(--ink-muted)]">
                  {edu.school}
                  {edu.detail ? ` · ${edu.detail}` : ""}
                  {edu.gpa ? ` · ${edu.gpa}` : ""}
                </p>
              </article>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
