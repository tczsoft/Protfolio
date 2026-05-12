import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'
import { site } from '../data/site'

export default function Stack() {
  const ref = useReveal()

  return (
    <section id="stack" className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel
          number="02"
          eyebrow="The Stack"
          title={
            <>
              Tools I reach for when something needs to{' '}
              <span className="text-ember-500">actually work</span>.
            </>
          }
        />

        <div ref={ref} className="reveal space-y-10">
          {site.stack.map((group) => (
            <div
              key={group.group}
              className="grid lg:grid-cols-12 gap-6 py-6 border-t border-white/5 first:border-t-0"
            >
              <div className="lg:col-span-3">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-ember-500/80">
                  {group.group}
                </div>
              </div>
              <div className="lg:col-span-9 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm text-zinc-200 bg-ink-900 border border-white/5 rounded-md hover:border-ember-500/40 hover:text-ember-500 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
