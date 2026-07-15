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
    <div className="print-root relative z-10 mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 animate-fade">
        <LanguageSwitcher locale={locale} label={ui.language} />
        <DownloadPdfButton label={ui.downloadPdf} />
      </div>

      <article className="print-surface rounded-2xl border border-white/70 bg-[var(--surface)] p-6 shadow-[var(--shadow)] backdrop-blur-md sm:p-10 animate-rise">
        <header className="print-break-avoid grid gap-5 sm:grid-cols-[auto_1fr] sm:items-end">
          <div className="print-photo relative h-28 w-28 overflow-hidden rounded-2xl bg-[var(--accent-soft)] sm:h-32 sm:w-32">
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
            <p className="print-eyebrow mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Resume
            </p>
            <h1 className="font-[family-name:var(--font-display),var(--font-body-thai)] text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
              {profile.name}
            </h1>
            <p className="print-headline mt-3 text-lg text-[var(--ink-muted)] sm:text-xl">
              {profile.headline}
            </p>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">{profile.location}</p>
          </div>
        </header>

        <section className="print-break-avoid resume-full mt-8">
          <h2 className="print-keep-with-next mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {ui.about}
          </h2>
          <div className="space-y-3 text-base leading-relaxed text-[var(--ink)] sm:text-[1.05rem]">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="resume-columns mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.75fr)] lg:items-start lg:gap-10">
          {/* Left: meta & supporting facts */}
          <aside className="resume-sidebar space-y-7">
            <section className="print-break-avoid">
              <h2 className="print-keep-with-next mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
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
                    className="underline-offset-2 hover:underline break-all"
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
                <li>
                  <a
                    className="underline-offset-2 hover:underline"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ui.linkedin}
                  </a>
                </li>
              </ul>
            </section>

            <section className="print-break-avoid">
              <h2 className="print-keep-with-next mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {ui.jobInterest}
              </h2>
              <ol className="space-y-1.5 text-base font-medium text-[var(--ink)]">
                {jobInterests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="print-section">
              <h2 className="print-keep-with-next mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {ui.skills}
              </h2>
              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.label} className="print-break-avoid">
                    <p className="mb-2 text-sm font-semibold text-[var(--ink-muted)]">
                      {group.label}
                    </p>
                    <TechBadgeList items={group.items} />
                  </div>
                ))}
              </div>
            </section>

            <section className="print-break-avoid">
              <h2 className="print-keep-with-next mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {ui.languages}
              </h2>
              <ul className="space-y-3 text-sm leading-relaxed sm:text-base">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <p className="font-semibold text-[var(--ink)]">{lang.name}</p>
                    <p className="mt-0.5 text-[var(--ink-muted)]">
                      {ui.listening} {lang.listening}
                      {" · "}
                      {ui.speaking} {lang.speaking}
                    </p>
                    <p className="text-[var(--ink-muted)]">
                      {ui.reading} {lang.reading}
                      {" · "}
                      {ui.writing} {lang.writing}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="print-section">
              <h2 className="print-keep-with-next mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {ui.education}
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <article key={`${edu.school}-${edu.period}`} className="print-break-avoid">
                    <h3 className="print-keep-with-next text-base font-semibold text-[var(--ink)] sm:text-lg">
                      {edu.degree}
                    </h3>
                    <p className="mt-0.5 text-sm text-[var(--ink-muted)]">{edu.period}</p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">
                      {edu.school}
                      {edu.detail ? ` · ${edu.detail}` : ""}
                      {edu.gpa ? ` · ${edu.gpa}` : ""}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </aside>

          {/* Right: narrative content */}
          <div className="resume-main space-y-8">
            <section className="print-section">
              <h2 className="print-keep-with-next mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {ui.experience}
              </h2>
              <div className="space-y-7">
                {experience.map((job) => (
                  <article key={`${job.company}-${job.period}`} className="print-break-avoid">
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                      <h3 className="print-keep-with-next text-lg font-semibold text-[var(--ink)]">
                        {job.role}
                      </h3>
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

            <section className="print-section">
              <h2 className="print-keep-with-next mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {ui.projects}
              </h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <article key={project.title} className="print-case print-break-avoid">
                    <h3 className="print-keep-with-next text-lg font-semibold text-[var(--ink)]">
                      {project.title}
                    </h3>
                    <div className="print-case-body mt-3 space-y-3 text-[0.98rem] leading-relaxed">
                      <div className="print-case-row">
                        <p className="print-case-label mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                          {ui.challenge}
                        </p>
                        <p className="text-[var(--ink)]">{project.challenge}</p>
                      </div>
                      <div className="print-case-row">
                        <p className="print-case-label mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                          {ui.solution}
                        </p>
                        <p className="text-[var(--ink)]">{project.solution}</p>
                      </div>
                      <div className="print-case-row">
                        <p className="print-case-label mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                          {ui.result}
                        </p>
                        <p className="text-[var(--ink)]">{project.result}</p>
                      </div>
                      <div className="print-case-row print-case-stack">
                        <p className="print-case-label mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                          {ui.stack}
                        </p>
                        <TechBadgeList items={project.stack} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="print-omit">
              <h2 className="print-keep-with-next mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {learning.title}
              </h2>
              <ul className="space-y-2 text-[0.98rem] leading-relaxed text-[var(--ink)]">
                {learning.items.map((item) => (
                  <li key={item} className="pl-0">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
