import { ArrowUpRight, Mail, Phone, Linkedin, MapPin } from 'lucide-react'
import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'
import { site } from '../data/site'

export default function Contact() {
  const ref = useReveal()

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel
          number="05"
          eyebrow="Contact"
          title={
            <>
              Got a project that needs{' '}
              <span className="text-ember-500">forging?</span>
            </>
          }
        />

        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              I'm currently {site.status.toLowerCase()} and open to full-time
              roles, contract work, and interesting freelance builds. The
              fastest way to reach me is email.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 mt-4"
            >
              <span className="font-display text-3xl md:text-4xl font-semibold text-zinc-100 group-hover:text-ember-500 transition-colors break-all">
                {site.email}
              </span>
              <ArrowUpRight className="h-6 w-6 text-zinc-500 group-hover:text-ember-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>

          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/5 space-y-5">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={site.phone}
              href={`tel:${site.phone.replace(/\s+/g, '')}`}
            />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value={site.linkedinLabel}
              href={site.linkedin}
              external
            />
            <ContactRow
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={site.location}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, value, href, external }) {
  const inner = (
    <>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2 flex items-center gap-2">
        <span className="text-ember-500">{icon}</span>
        {label}
      </div>
      <div className="text-zinc-200 group-hover:text-ember-500 transition-colors flex items-center gap-2">
        {value}
        {href && (
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </>
  )

  if (!href) return <div>{inner}</div>
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group block"
    >
      {inner}
    </a>
  )
}
