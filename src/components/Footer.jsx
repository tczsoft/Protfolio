import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3 text-zinc-500">
          <span className="h-7 w-7 grid place-items-center rounded-md border border-white/10 text-ember-500 font-mono text-xs font-bold">
            {site.initials}
          </span>
          <span className="font-mono text-xs">
            © {year} · {site.name} · Forged with React + Tailwind
          </span>
        </div>
        <div className="flex items-center gap-5 text-xs font-mono text-zinc-500">
          <a href={`mailto:${site.email}`} className="hover:text-ember-500 transition-colors">
            EMAIL
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ember-500 transition-colors"
          >
            LINKEDIN
          </a>
          <a href="#top" className="hover:text-ember-500 transition-colors">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
