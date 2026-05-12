import { ArrowDownRight, MapPin } from 'lucide-react'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background grid + radial accent [background-size:48px_48px]*/}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-faint  opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-radial-ember pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ember-500" />
          </span>
          <span className="text-xs font-mono text-zinc-300 tracking-wider">
            {site.status.toUpperCase()}
          </span>
        </div>

        {/* Mono meta line */}
        <div className="font-mono text-xs text-zinc-500 mb-6 tracking-wider animate-fade-up">
          // {site.role.toUpperCase()} · {site.experienceLength.toUpperCase()}
        </div>

        {/* Massive name display */}
        <h1 className="font-display text-[clamp(2rem,11vw,4.5rem)] leading-[0.9] font-bold text-zinc-100 tracking-tight animate-fade-up">
          Vinayagam<span className="text-ember-500">.</span>
          <br />
          <span className="text-zinc-500">forging</span>{' '}
          <span className="text-zinc-100">software.</span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-7 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed animate-fade-up">
            {site.summary}
          </p>

          <div className="lg:col-span-5 lg:justify-self-end space-y-3 animate-fade-up">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-ember-500" />
              <span className="text-zinc-300">{site.location}</span>
              <span className="text-zinc-600">·</span>
              <span className="font-mono text-xs text-zinc-500">UTC+05:30</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-ember-500 hover:bg-ember-400 text-ink-950 text-sm font-semibold rounded-md transition-colors"
              >
                See selected work
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 hover:border-ember-500/60 hover:text-ember-500 text-zinc-200 text-sm font-medium rounded-md transition-colors"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden animate-fade-up">
          {site.stats.map((s) => (
            <div
              key={s.label}
              className="bg-ink-900/80 px-6 py-6 hover:bg-ink-800 transition-colors"
            >
              <div className="font-display text-3xl md:text-4xl font-semibold text-zinc-100">
                {s.value}
                {s.unit && (
                  <span className="text-sm font-mono text-zinc-500 ml-1">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs text-zinc-500 font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-600">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-ember-500/60 to-transparent" />
      </div>
    </section>
  )
}
