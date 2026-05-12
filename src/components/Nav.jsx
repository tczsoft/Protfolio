import { useEffect, useState } from 'react'
import { site } from '../data/site'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Work' },
  // { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-ink-950/70 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <span className="h-8 w-8 grid place-items-center rounded-md border border-ember-500/40 text-ember-500 font-mono text-sm font-bold group-hover:bg-ember-500/10 transition-colors">
            {site.initials}
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium text-zinc-100">{site.name}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-mono">
              {site.role}
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-2"
            >
              <span className="font-mono text-[10px] text-ember-500/80 group-hover:text-ember-500">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink-950 bg-ember-500 hover:bg-ember-400 rounded-md transition-colors"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-zinc-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-zinc-300 hover:text-ember-500 transition-colors flex items-center gap-3"
              >
                <span className="font-mono text-xs text-ember-500/70">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-flex justify-center items-center gap-2 px-4 py-2.5 text-sm font-medium text-ink-950 bg-ember-500 rounded-md"
            >
              Get in touch →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
