import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'
import { site } from '../data/site'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="work" className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel
          number="03"
          eyebrow="Experience"
          title={
            <>
              Where I've been{' '}
              <span className="text-ember-500">putting in the reps</span>.
            </>
          }
        />

        <div ref={ref} className="reveal space-y-12">
          {site.experience.map((role) => (
            <article
              key={role.company}
              className="group relative grid lg:grid-cols-12 gap-6 p-6 lg:p-8 rounded-xl border border-white/5 bg-ink-900/40 hover:border-ember-500/30 hover:bg-ink-900/80 transition-all"
            >
              {/* Left col: meta */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2">
                  {role.current && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-ember-500/10 text-ember-500 border border-ember-500/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember-500 animate-pulse" />
                      Current
                    </span>
                  )}
                  <span className="font-mono text-xs text-zinc-500">
                    {role.period}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-zinc-100">
                  {role.company}
                </h3>
                <div className="text-sm text-zinc-400">
                  {role.role}
                  <br />
                  <span className="text-zinc-500">{role.location}</span>
                </div>
              </div>

              {/* Right col: bullets */}
              <ul className="lg:col-span-8 space-y-3">
                {role.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-zinc-300 text-[15px] leading-relaxed"
                  >
                    <span className="font-mono text-xs text-ember-500/70 mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
