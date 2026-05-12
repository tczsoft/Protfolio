export default function SectionLabel({ number, title, eyebrow }) {
  return (
    <div className="mb-12 lg:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-ember-500 tracking-widest">
          {number}
        </span>
        <span className="h-px w-12 bg-ember-500/40" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-zinc-100 max-w-3xl">
        {title}
      </h2>
    </div>
  )
}
