import { ArrowUpRight } from 'lucide-react'
import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'
import { site } from '../data/site'

export default function Projects() {
  const ref = useReveal()

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel
          number="04"
          eyebrow="Selected Work"
          title={
            <>
              A few things I've{' '}
              <span className="text-ember-500">forged</span> recently.
            </>
          }
        />

        <div ref={ref} className="reveal space-y-6">
          {site.projects.map((p, idx) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block p-8 lg:p-10 rounded-xl border border-white/5 bg-ink-900/40 hover:border-ember-500/40 hover:bg-ink-900 transition-all overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-ember-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-1 font-mono text-xs text-ember-500/80">
                  / 0{idx + 1}
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-zinc-100 group-hover:text-ember-500 transition-colors">
                      {p.title}
                    </h3>
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                      // {p.tag}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed max-w-2xl">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-white/5 border border-white/10 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 lg:text-right space-y-3">
                  <div className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                    {p.year}
                  </div>
                  <div className="inline-flex items-center gap-2 text-zinc-300 group-hover:text-ember-500 transition-colors">
                    <span className="text-sm">Visit live site</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Placeholder card teasing more */}
          <div className="p-8 lg:p-10 rounded-xl border border-dashed border-white/10 bg-ink-900/20 text-center">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2">
              In the workshop
            </div>
            <p className="text-zinc-400">
              More case studies coming soon.{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-ember-500 hover:underline"
              >
                Want a private walkthrough?
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
