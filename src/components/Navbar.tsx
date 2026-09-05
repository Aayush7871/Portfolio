import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { links, navigation } from '../data/portfolio'
import { Button } from './Button'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a className="text-sm font-semibold tracking-tight text-white" href="#home" onClick={closeMenu}>Aayush<span className="text-signal">.</span></a>
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
        </div>
        <div className="hidden lg:block"><Button href={links.resume} download aria-label="Download resume"><Download size={16} /> Resume</Button></div>
        <button className="grid size-10 place-items-center rounded-lg border border-line text-slate-200 transition hover:border-slate-500 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X size={19} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/[0.06] bg-ink px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item) => <a key={item.href} className="rounded-md px-3 py-2.5 text-sm text-mist hover:bg-white/[0.05] hover:text-white" href={item.href} onClick={closeMenu}>{item.label}</a>)}
            <Button className="mt-3" href={links.resume} download onClick={closeMenu}><Download size={16} /> Download Resume</Button>
          </div>
        </div>
      )}
    </header>
  )
}
