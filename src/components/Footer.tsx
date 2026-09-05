import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Aayush Raj. All rights reserved.</p>
        <SocialLinks label="Footer social links" />
      </div>
    </footer>
  )
}
