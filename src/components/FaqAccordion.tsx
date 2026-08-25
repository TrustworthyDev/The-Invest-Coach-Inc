import { faqs } from "@/data/site";

/**
 * Native <details> accordion — keyboard accessible and fully functional
 * without JavaScript.
 */
export default function FaqAccordion() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {faqs.map((item) => (
        <details
          key={item.q}
          name="faq"
          className="panel group rounded-2xl px-5 py-1 transition-colors duration-300 open:border-gold-400/45 sm:px-7"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[1rem] font-bold text-mist-100 transition-colors group-open:text-gold-100 hover:text-gold-200 sm:text-[1.05rem] [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/35 text-gold-300 transition-transform duration-300 group-open:rotate-45"
            >
              <span className="absolute h-3.5 w-0.5 rounded bg-current" />
              <span className="absolute h-0.5 w-3.5 rounded bg-current" />
            </span>
          </summary>
          <p className="pr-10 pb-6 text-[0.95rem] leading-relaxed text-mist-300">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
