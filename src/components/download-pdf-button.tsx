"use client";

type DownloadPdfButtonProps = {
  label: string;
};

export function DownloadPdfButton({ label }: DownloadPdfButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      style={{ background: "var(--accent-gradient)", color: "#ffffff" }}
    >
      {label}
    </button>
  );
}
