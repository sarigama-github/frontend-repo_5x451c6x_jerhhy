import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a aria-label="GitHub" href="#" className="text-slate-300 hover:text-white"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="#" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
          <a aria-label="Email" href="#" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
