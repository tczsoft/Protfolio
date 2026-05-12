import SectionLabel from './SectionLabel'
import useReveal from '../hooks/useReveal'
import { site } from '../data/site'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel
          number="01"
          eyebrow="About"
          title={
            <>
              I design, build, and ship{' '}
              <span className="text-ember-500">real products</span> — not just
              prototypes.
            </>
          }
        />

        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p>{site.summary}</p>
            <p>
              My day-to-day spans the entire stack — from React component
              architecture and Tailwind-driven design systems on the front, to
              Express APIs, MongoDB schemas, and AWS deployments on the back. I
              care about response times, accessible interfaces, and code that
              the next developer will thank me for.
            </p>
            <p>
              Outside the keyboard I follow the craft side of software — clean
              git histories, considered commits, and small, reviewable PRs.
            </p>
          </div>

          <aside className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/5">
            <div className="space-y-6">
              <Detail label="Currently" value="Arrow Throught — Chennai" />
              <Detail label="Based in" value={site.location} />
              <Detail
                label="Specialties"
                value="MERN · MEAN · React Native · AWS"
              />
              <Detail
                label="Education"
                value={
                  <>
                    {site.education[0].degree}
                    <br />
                    <span className="text-zinc-500">
                      {site.education[0].school} · {site.education[0].year} ·{' '}
                      {site.education[0].grade}
                    </span>
                  </>
                }
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Detail({ label, value }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2">
        {label}
      </div>
      <div className="text-zinc-200">{value}</div>
    </div>
  )
}
