import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/site";

function StepIcon({ index, className = "" }: { index: number; className?: string }) {
  const glyphs = [
    // 1 — Discover (magnifier over chart)
    <g key="0">
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 4.5 4.5" />
      <path d="M8 11.4l1.8-2 1.8 1.4 1.6-2.6" />
    </g>,
    // 2 — Strategize (blueprint)
    <g key="1">
      <path d="M4 5.5h16v13H4z" />
      <path d="M4 9.5h16M9 9.5v9" />
      <path d="M12.4 13h4.2M12.4 15.6h2.6" />
    </g>,
    // 3 — Implement (gear + check)
    <g key="2">
      <path d="M12 3.5v2.2M12 18.3v2.2M4.6 12h2.2M17.2 12h2.2M6.8 6.8l1.6 1.6M15.6 15.6l1.6 1.6M17.2 6.8l-1.6 1.6M8.4 15.6l-1.6 1.6" />
      <circle cx="12" cy="12" r="3.4" />
    </g>,
    // 4 — Scale (rising bars + arrow)
    <g key="3">
      <path d="M4 19.5h16" />
      <path d="M7 19.5v-4.5M12 19.5v-8M17 19.5v-12" />
      <path d="M14.6 5.2H17.4v2.8" />
    </g>,
  ];

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
      {glyphs[index]}
    </svg>
  );
}

/**
 * Four horizontal cards connected by a gold line with arrows on desktop,
 * stacking into a vertical rail on mobile.
 */
export default function ProcessSteps({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="relative">
      {/* Connecting gold line — desktop only, sits behind the cards. */}
      <div
        aria-hidden="true"
        className="rule-gold absolute top-13 right-0 left-0 hidden h-px lg:block"
      />

      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 110} className="group relative h-full">
            {/* Arrow between cards on desktop */}
            {i < processSteps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-13 -right-4 z-20 hidden -translate-y-1/2 text-gold-300 lg:block"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                  <path
                    d="M3 8h9m0 0-3.2-3.2M12 8l-3.2 3.2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}

            <div className="panel panel-hover flex h-full flex-col rounded-2xl p-6 group-hover:-translate-y-1.5 group-hover:border-gold-400/55 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-ink-950 text-gold-300 shadow-[0_0_0_6px_rgba(7,8,12,0.9)] transition-all duration-300 group-hover:border-gold-300 group-hover:text-gold-200">
                  <StepIcon index={i} className="h-6 w-6" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(120deg,#e3b23c,#fbecc4)] text-[0.7rem] font-bold text-ink-950">
                    {step.number}
                  </span>
                </span>
                <span className="text-[0.7rem] font-bold tracking-[0.28em] text-gold-300 uppercase">
                  {step.kicker}
                </span>
              </div>

              <h3 className="font-display mt-6 text-lg font-bold text-mist-100 sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-400">{step.summary}</p>

              {detailed && (
                <>
                  {"pointsLabel" in step && step.pointsLabel && (
                    <p className="mt-5 text-[0.85rem] font-semibold text-mist-300">
                      {step.pointsLabel}
                    </p>
                  )}
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[0.9rem] text-mist-300">
                        <svg
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-300"
                          fill="none"
                        >
                          <path
                            d="m3.5 8.4 3 3 6-6.8"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-semibold">{p}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
