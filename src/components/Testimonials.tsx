import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal as="li" key={t.quote} delay={i * 120} className="h-full">
          <figure className="panel panel-hover flex h-full flex-col rounded-2xl p-7 hover:-translate-y-1.5 hover:border-gold-400/45">
            <svg
              viewBox="0 0 32 24"
              aria-hidden="true"
              className="h-7 w-9 text-gold-400/45"
              fill="currentColor"
            >
              <path d="M13 0v10.6C13 18.2 8.5 23 1.6 24L0 20.6c3.6-.9 5.6-3 5.9-6H1.4V0H13Zm19 0v10.6C32 18.2 27.5 23 20.6 24L19 20.6c3.6-.9 5.6-3 5.9-6h-4.5V0H32Z" />
            </svg>
            <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-mist-200">
              {t.quote}
            </blockquote>
            <figcaption className="mt-7 border-t border-gold-400/15 pt-5">
              <span className="block text-[0.95rem] font-bold text-gold-100">{t.name}</span>
              <span className="mt-0.5 block text-[0.82rem] text-mist-400">{t.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
