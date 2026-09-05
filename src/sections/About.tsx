import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div><SectionHeading eyebrow="01 / About" title="A practical approach to software." /><div className="mt-7 space-y-5 text-base leading-8 text-mist"><p>I’m a Computer Science undergraduate specializing in Software Engineering at Jain University, Bangalore. I enjoy building software applications, working with backend technologies, designing APIs, managing databases, and solving programming problems.</p><p>My technical foundation includes Data Structures &amp; Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks. I’m particularly interested in backend and software engineering roles where I can build scalable and reliable applications while continuously improving my problem-solving skills.</p></div></div>
        <article className="card p-6 sm:p-7"><div className="flex size-10 items-center justify-center rounded-lg border border-sky-300/15 bg-sky-300/[0.06] text-signal"><GraduationCap size={20} /></div><p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-signal">Education</p><h3 className="mt-3 text-xl font-semibold text-white">Jain University, Bangalore</h3><p className="mt-2 text-sm leading-6 text-mist">Bachelor of Technology in Computer Science <span className="text-slate-400">(Software Engineering)</span></p><div className="mt-7 border-t border-line pt-4 text-sm text-slate-300">2023 — 2027</div></article>
      </div>
    </section>
  )
}
