type IconProps = { className?: string };

/** Line-art gold icons, one per pillar. Stroke uses currentColor. */
const paths: Record<string, React.ReactNode> = {
  "ai-automation": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2.5" />
      <path d="M10.2 10.5h3.6M10.2 13.5h2.2" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M18.4 5.6l-2.5 2.5M8.1 15.9l-2.5 2.5" />
    </>
  ),
  "business-consulting": (
    <>
      <path d="M3.5 19.5h17" />
      <path d="M6 19.5v-6M11 19.5V8M16 19.5v-9" />
      <path d="M4.5 8.5 9 4.8l4 2.6 6-4.3" />
      <path d="M16.4 3.1H19.5v3.1" />
    </>
  ),
  "website-development": (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6 6.7h.01M8.4 6.7h.01M10.8 6.7h.01" />
      <path d="m9.6 12.6-2 2.2 2 2.2M14.4 12.6l2 2.2-2 2.2" />
    </>
  ),
  "content-creation": (
    <>
      <path d="M5 3.5h9l5 5v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
      <path d="M13.6 3.7v5.1h5.1" />
      <path d="M7.5 13h9M7.5 16.4h6" />
    </>
  ),
  "lead-generation": (
    <>
      <path d="M3.5 4.5h17l-6.4 7.6v6.2l-4.2 2.2v-8.4Z" />
      <path d="M18.8 15.5h3.2M20.4 13.9v3.2" />
    </>
  ),
};

export default function PillarIcon({
  slug,
  className = "",
}: IconProps & { slug: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[slug] ?? paths["business-consulting"]}
    </svg>
  );
}
