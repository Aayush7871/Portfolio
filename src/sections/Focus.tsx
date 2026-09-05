import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { focusAreas } from '../data/portfolio'

export function Focus() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end"><SectionHeading eyebrow="04 / Focus" title="Currently exploring" description="Building depth where thoughtful software design meets dependable systems." /><div className="grid gap-2 sm:grid-cols-2">{focusAreas.map((area) => <div className="focus-item" key={area}><span>{area}</span><ArrowUpRight size={16} /></div>)}</div></div>
    </section>
  )
}
