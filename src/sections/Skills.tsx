import { Braces, Database, Server, Wrench } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

const icons = [Braces, Server, Wrench, Database, Braces, Wrench]

export function Skills() {
  return (
    <section id="skills" className="section-shell section-tint">
      <SectionHeading eyebrow="02 / Skills" title="Technical skills" description="A balanced toolkit for building, reasoning about, and shipping software." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group, index) => { const Icon = icons[index]; return <article key={group.title} className="card group p-5"><div className="flex items-center gap-3"><Icon className="text-signal" size={18} /><h3 className="font-medium text-white">{group.title}</h3></div><div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div></article> })}</div>
    </section>
  )
}
