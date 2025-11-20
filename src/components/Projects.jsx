import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Commerce',
    tag: 'E-commerce Experience',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    desc: 'A performant storefront with 3D product previews and delightful micro-interactions.'
  },
  {
    title: 'Orbit UI',
    tag: 'Design System',
    image: 'https://images.unsplash.com/photo-1566479790936-ef1179f46ad5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmJpdCUyMFVJfGVufDB8MHx8fDE3NjM2MDU2NjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'A scalable, accessible design system with motion guidelines and themeable tokens.'
  },
  {
    title: 'Astra Studio',
    tag: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    desc: 'Minimal, premium portfolio experience featuring cinematic hero and 3D scenes.'
  },
]

function Card({ p, onOpen }) {
  return (
    <motion.button
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
    >
      <div className="aspect-[16/11] overflow-hidden">
        <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
      </div>
      <div className="p-5">
        <div className="text-xs uppercase tracking-wide text-slate-400">{p.tag}</div>
        <div className="mt-1 text-lg font-semibold text-white">{p.title}</div>
        <div className="mt-2 text-slate-300/80 text-sm">{p.desc}</div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_120px_at_var(--x,50%)_var(--y,0%),rgba(59,130,246,0.25),transparent_70%)]" />
    </motion.button>
  )
}

function Modal({ open, onClose, project }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-6 bg-slate-950/80 backdrop-blur">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        <div className="aspect-[16/9]">
          <img src={project.image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="text-xs uppercase tracking-wide text-slate-400">{project.tag}</div>
          <h3 className="mt-1 text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 text-slate-300/90">{project.desc}</p>
          <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-slate-200">Close</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const onOpen = (p) => { setSelected(p); setOpen(true) }
  const onClose = () => setOpen(false)

  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Work</h2>
            <p className="mt-3 text-slate-300/85 max-w-2xl">A selection of premium, high-performance interfaces and brand experiences.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.title} onMouseMove={(e) => {
              const el = e.currentTarget
              const rect = el.getBoundingClientRect()
              el.style.setProperty('--x', `${e.clientX - rect.left}px`)
              el.style.setProperty('--y', `${e.clientY - rect.top}px`)
            }}>
              <Card p={p} onOpen={() => onOpen(p)} />
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={onClose} project={selected || projects[0]} />
    </section>
  )
}
