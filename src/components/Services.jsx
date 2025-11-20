import { motion } from 'framer-motion'
import { MonitorSmartphone, Shapes, Palette, AppWindow } from 'lucide-react'

const items = [
  { title: 'Web Design', icon: Palette, desc: 'Premium, minimal, user-first interfaces that convert and delight.' },
  { title: '3D & Motion', icon: Shapes, desc: 'Spline/Three.js visuals, particles, and micro-interactions.' },
  { title: 'Branding', icon: MonitorSmartphone, desc: 'Visual identity systems and product marketing assets.' },
  { title: 'App Development', icon: AppWindow, desc: 'Robust, scalable frontends in React with TypeScript.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Services</h2>
        <p className="mt-3 text-slate-300/85 max-w-2xl">A focused set of offerings tailored for premium products.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <it.icon className="h-6 w-6 text-sky-400" />
              <div className="mt-4 text-lg font-semibold text-white">{it.title}</div>
              <p className="mt-2 text-slate-300/85 text-sm">{it.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(300px_100px_at_var(--x,50%)_var(--y,0%),rgba(168,85,247,0.25),transparent_70%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
