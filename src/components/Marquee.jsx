import { site } from '../data/site'

export default function Marquee() {
  // Flatten skills into a marquee loop
  const items = site.stack.flatMap((g) => g.items)
  const loop = [...items, ...items]

  return (
    <div className="relative border-y border-white/5 py-6 overflow-hidden bg-ink-900/40">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-medium text-zinc-600 hover:text-ember-500 transition-colors flex items-center gap-12"
          >
            {item}
            <span className="text-ember-500/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
