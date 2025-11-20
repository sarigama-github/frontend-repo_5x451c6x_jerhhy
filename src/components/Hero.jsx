import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
            Available for select projects in 2025
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Designer & Developer crafting immersive digital experiences
          </h1>
          
          <p className="mt-6 text-slate-300/90 text-lg md:text-xl max-w-2xl">
            I fuse minimal aesthetics with cutting-edge 3D to build performant, elegant products.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 text-white font-medium shadow-[0_0_30px_rgba(99,102,241,0.35)]">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-slate-200">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
