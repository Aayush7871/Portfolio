import { FormEvent, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Send } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { links } from '../data/portfolio'

type FormStatus = 'idle' | 'ready'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }
    setStatus('ready')
  }

  return (
    <section id="contact" className="section-shell section-tint">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div><SectionHeading eyebrow="05 / Contact" title="Let’s build something." description="I’m currently looking for software engineering and backend development opportunities where I can learn, contribute, and build meaningful products." /><div className="mt-8 space-y-3"><a className="contact-link" href={links.email}><Mail size={17} /><span><small>Email</small>aayushraj2378@gmail.com</span><ArrowRight size={16} /></a><a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>LinkedIn</small>Connect professionally</span><ArrowRight size={16} /></a><a className="contact-link" href={links.github} target="_blank" rel="noreferrer"><Github size={17} /><span><small>GitHub</small>Explore my code</span><ArrowRight size={16} /></a></div></div>
        <form className="card p-6 sm:p-8" onSubmit={handleSubmit} noValidate><div className="grid gap-5"><label className="form-label">Name<input name="name" autoComplete="name" required minLength={2} placeholder="Your name" /></label><label className="form-label">Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label className="form-label">Message<textarea name="message" required minLength={10} rows={5} placeholder="Tell me a little about the opportunity..." /></label><button className="submit-button" type="submit"><Send size={16} /> Send Message</button>{status === 'ready' && <p className="rounded-md border border-sky-300/15 bg-sky-300/[0.06] px-3 py-2 text-sm text-sky-100" role="status">Thanks—this form is ready for an email service to be connected. You can also reach me directly by email.</p>}</div></form>
      </div>
    </section>
  )
}
