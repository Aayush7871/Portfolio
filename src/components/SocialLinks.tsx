import { Github, Linkedin, Mail } from 'lucide-react'
import { links } from '../data/portfolio'

type SocialLinksProps = { label?: string }

export function SocialLinks({ label = 'Social links' }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-2" aria-label={label}>
      <a className="social-link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
      <a className="social-link" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
      <a className="social-link" href={links.email} aria-label="Send an email"><Mail size={18} /></a>
    </div>
  )
}
