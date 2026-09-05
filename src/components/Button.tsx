import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-signal text-slate-950 hover:bg-sky-200 border-signal',
    secondary: 'border-line bg-panel text-slate-100 hover:border-slate-500 hover:bg-white/[0.06]',
    ghost: 'border-transparent bg-transparent text-mist hover:text-white hover:bg-white/[0.05]',
  }

  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
