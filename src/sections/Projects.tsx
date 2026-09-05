import { ArrowUpRight, Check, Code2, ExternalLink } from 'lucide-react'
import { Button } from '../components/Button'
import { ProjectPreview } from '../components/ProjectPreview'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading eyebrow="03 / Projects" title="Featured projects" description="A selection of applications focused on useful experiences, clear interfaces, and solid engineering foundations." />
      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <article className="card overflow-hidden" key={project.title}>
            <div className={`grid lg:grid-cols-2 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="flex flex-col p-6 sm:p-8 lg:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-signal">{project.eyebrow}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.title}</h3><p className="mt-4 leading-7 text-mist">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}</div><div className="mt-7"><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Highlights</p><ul className="mt-3 grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <li className="flex items-center gap-2 text-sm text-slate-300" key={feature}><Check size={15} className="shrink-0 text-signal" />{feature}</li>)}</ul></div>{project.title === 'SmartAttend' && <p className="mt-5 flex items-center gap-2 text-sm text-sky-100"><Code2 size={16} className="text-signal" /> Deployed on Render</p>}<div className="mt-8 flex flex-wrap gap-3"><Button href={project.sourceUrl} target="_blank" rel="noreferrer" variant="secondary"><Code2 size={16} /> View Source</Button>{project.demoUrl && <Button href={project.demoUrl} target="_blank" rel="noreferrer" variant="ghost"><ExternalLink size={16} /> Live Demo <ArrowUpRight size={14} /></Button>}</div></div>
              <div className="flex items-center border-t border-line bg-white/[0.018] p-5 sm:p-8 lg:border-l lg:border-t-0"><ProjectPreview type={project.preview} /></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
