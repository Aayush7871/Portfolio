import { ArrowDownRight, Download } from 'lucide-react'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'
import { links } from '../data/portfolio'

function TerminalPanel() {
  return (
    <div className="terminal-panel animate-enter delay-150" aria-label="Illustrative code editor">
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3"><span className="size-2 rounded-full bg-red-300/70" /><span className="size-2 rounded-full bg-amber-200/70" /><span className="size-2 rounded-full bg-emerald-300/70" /><p className="ml-2 text-[11px] text-slate-500">aayush.ts</p></div>
      <pre className="overflow-hidden px-5 py-6 text-[12px] leading-7 text-slate-400"><code><span className="text-sky-200">const</span> engineer = {'{'}{`\n`}  focus: <span className="text-emerald-200">'reliable systems'</span>,{`\n`}  tools: [<span className="text-emerald-200">'Python'</span>, <span className="text-emerald-200">'APIs'</span>],{`\n`}  mindset: <span className="text-emerald-200">'keep learning'</span>{`\n`}{'}'}{`\n\n`}engineer.<span className="text-sky-200">build</span>();</code></pre>
      <div className="mx-5 mb-5 rounded-md border border-sky-300/10 bg-sky-300/[0.04] px-3 py-2 text-[11px] text-sky-100/80">✓ ready to solve the next problem</div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="animate-enter">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3 py-1.5 text-xs font-medium text-sky-100"><span className="size-1.5 rounded-full bg-signal" /> Computer Science Student · Software Engineering</p>
          <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">Building reliable software and solving real-world problems.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg">Computer Science undergraduate with a strong foundation in Data Structures &amp; Algorithms, Object-Oriented Programming, Operating Systems, and DBMS. I build practical applications using Python, backend frameworks, REST APIs, databases, and modern development tools.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="#projects"><ArrowDownRight size={17} /> View Projects</Button><Button href={links.resume} download variant="secondary"><Download size={16} /> Download Resume</Button></div>
          <div className="mt-10 flex items-center gap-4"><p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Find me online</p><SocialLinks /></div>
        </div>
        <TerminalPanel />
      </div>
    </section>
  )
}
