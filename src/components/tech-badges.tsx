import type { TechId } from "@/data/resume";

export type TechMeta = {
  id: TechId;
  label: string;
  /** Filename without .svg under https://cdn.svglogos.dev/logos/ */
  logo: string | null;
  color: string;
};

const CDN = "https://cdn.svglogos.dev/logos";

export const techMeta: Record<TechId, TechMeta> = {
  react: { id: "react", label: "React", logo: "react", color: "#2B7A9B" },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logo: "typescript-icon",
    color: "#3178C6",
  },
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logo: "javascript",
    color: "#B8860B",
  },
  nodejs: { id: "nodejs", label: "Node.js", logo: "nodejs-icon", color: "#3C8D5A" },
  php: { id: "php", label: "PHP", logo: "php", color: "#6C7AB5" },
  laravel: { id: "laravel", label: "Laravel", logo: "laravel", color: "#C2410C" },
  mysql: { id: "mysql", label: "MySQL", logo: "mysql-icon", color: "#2F6F9F" },
  aws: { id: "aws", label: "AWS", logo: "aws", color: "#C27A1C" },
  // LINE is not available on svglogos.dev; badge still shows label
  liff: { id: "liff", label: "LINE LIFF", logo: null, color: "#06C755" },
  go: { id: "go", label: "Go", logo: "go", color: "#00ADD8" },
  python: { id: "python", label: "Python", logo: "python", color: "#3776AB" },
  sql: { id: "sql", label: "SQL", logo: "postgresql", color: "#4A6FA5" },
  git: { id: "git", label: "Git", logo: "git-icon", color: "#E84E31" },
  linux: { id: "linux", label: "Linux", logo: "linux-tux", color: "#5A6B7A" },
  docker: { id: "docker", label: "Docker", logo: "docker-icon", color: "#2496ED" },
  "github-actions": {
    id: "github-actions",
    label: "GitHub Actions",
    logo: "github-actions",
    color: "#3B7C4A",
  },
  postman: { id: "postman", label: "Postman", logo: "postman-icon", color: "#EF5B25" },
  azure: {
    id: "azure",
    label: "Azure AI",
    logo: "microsoft-azure",
    color: "#0078D4",
  },
  openai: {
    id: "openai",
    label: "OpenAI / RAG",
    logo: "openai-icon",
    color: "#1F6B63",
  },
  powerbi: {
    id: "powerbi",
    label: "Power BI",
    logo: "microsoft-power-bi",
    color: "#F2C811",
  },
  firebase: { id: "firebase", label: "Firebase", logo: "firebase", color: "#FFA000" },
  cloud: { id: "cloud", label: "Cloud deploy", logo: "aws", color: "#4B7A8C" },
};

export function TechBadge({ id }: { id: TechId }) {
  const meta = techMeta[id];

  return (
    <span
      className="tech-badge-print inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide text-[var(--ink)]"
      style={{
        borderColor: `${meta.color}40`,
        backgroundColor: `${meta.color}12`,
      }}
    >
      {meta.logo ? (
        // Logos from https://svglogos.dev/ (CDN: cdn.svglogos.dev)
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${CDN}/${meta.logo}.svg`}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 shrink-0 object-contain"
          loading="lazy"
        />
      ) : (
        <span
          className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: meta.color }}
          aria-hidden
        />
      )}
      {meta.label}
    </span>
  );
}

export function TechBadgeList({ items }: { items: TechId[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((id) => (
        <TechBadge key={id} id={id} />
      ))}
    </div>
  );
}
