import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">/ portfolio</a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          ))}
        </div>

        <button aria-label="Toggle menu" className="md:hidden text-slate-200" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* mobile */}
      {open && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={close} className="block text-slate-200 py-2">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
