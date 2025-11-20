import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Simulate sending
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Let’s build something great</h2>
            <p className="mt-4 text-slate-300/85">Tell me a little about your project, timeline, and goals. I’ll respond within 24 hours.</p>
          </div>

          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="jane@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-300">Message</label>
              <textarea required rows="5" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="What are we building?" />
            </div>
            <div className="mt-5 flex items-center gap-4">
              <button type="submit" className="rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-white font-medium shadow-[0_0_30px_rgba(99,102,241,0.35)]">Send Message</button>
              <div className="text-sm text-slate-400">{status}</div>
            </div>
          </motion.form>
        </div>
      </div>

      {/* floating spheres */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.1 }} className="absolute left-10 top-10 h-8 w-8 rounded-full bg-sky-400/30 blur-md" />
        <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="absolute right-16 bottom-20 h-6 w-6 rounded-full bg-fuchsia-400/30 blur-md" />
        <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 }} className="absolute right-1/3 top-1/3 h-5 w-5 rounded-full bg-violet-400/30 blur-md" />
      </div>
    </section>
  )
}
