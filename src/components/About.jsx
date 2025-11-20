import { motion } from 'framer-motion'
import { Code2, Boxes, Rocket, Sparkles } from 'lucide-react'

const skills = [
  { name: 'Web Design', icon: Sparkles, level: 90 },
  { name: 'Frontend Dev', icon: Code2, level: 92 },
  { name: '3D + Motion', icon: Boxes, level: 85 },
  { name: 'Product Strategy', icon: Rocket, level: 80 },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-6 text-slate-300/90 leading-relaxed">
              I’m a multidisciplinary designer-developer focused on building premium, modern interfaces that feel effortless. My approach blends systems thinking, motion, and delightful micro-interactions with solid engineering.
            </p>
            <p className="mt-4 text-slate-300/80">
              Tools I love: React, Three.js/Spline, Framer Motion, Tailwind, Figma.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5"
              >
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-sky-400" />
                  <div className="text-slate-100 font-medium">{s.name}</div>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: s.level + '%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="block h-full rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 shadow-[0_0_20px_rgba(14,165,233,0.35)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
