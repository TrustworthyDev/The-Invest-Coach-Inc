import Link from "next/link";
import PillarIcon from "@/components/PillarIcon";
import { ArrowIcon } from "@/components/ui/Button";
import type { Pillar } from "@/data/site";

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <Link
      href={`/services/${pillar.slug}`}
      className="panel panel-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 hover:-translate-y-1.5 hover:border-gold-400/55 hover:shadow-[0_28px_60px_-28px_rgba(227,178,60,0.45)] sm:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold-400/10 blur-3xl transition-colors duration-500 group-hover:bg-gold-400/20"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-13 w-13 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/8 text-gold-300 transition-colors duration-300 group-hover:border-gold-300/60 group-hover:text-gold-200">
          <PillarIcon slug={pillar.slug} className="h-6 w-6" />
        </span>
        <span className="font-display text-3xl font-bold text-gold-400/25 transition-colors duration-300 group-hover:text-gold-400/45">
          {pillar.number}
        </span>
      </div>

      <h3 className="font-display mt-6 text-xl font-bold text-mist-100 transition-colors duration-300 group-hover:text-gold-100 sm:text-[1.35rem]">
        {pillar.name}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-400">{pillar.headline}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {pillar.services.slice(0, 4).map((s) => (
          <li
            key={s}
            className="rounded-full border border-gold-400/18 px-3 py-1 text-[0.72rem] font-semibold tracking-wide text-mist-400"
          >
            {s}
          </li>
        ))}
      </ul>

      <span className="mt-7 inline-flex items-center gap-2 text-[0.85rem] font-bold tracking-wide text-gold-300">
        Explore this pillar
        <ArrowIcon />
      </span>
    </Link>
  );
}
