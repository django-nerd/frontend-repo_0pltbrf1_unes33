import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import AnimatedBackdrop from './AnimatedBackdrop'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <AnimatedBackdrop />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-12 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            SITEC — Fire Protection & Enterprise Security
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg md:text-xl text-slate-300"
          >
            We design, install, and maintain systems for fire safety, video surveillance, BMS, intrusion detection, and cybersecurity. One partner to protect your people, assets, and operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="px-5 py-3 rounded-lg bg-[#2596be] text-white font-semibold hover:bg-[#2596be]/90 transition-colors">
              Request a Consultation
            </a>
            <a href="#solutions" className="px-5 py-3 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors">
              Explore Solutions
            </a>
          </motion.div>
          <p className="mt-6 text-sm text-slate-400">ISO-certified processes • Certified engineers • 24/7 monitoring</p>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-xl overflow-hidden border border-[#2596be]/20 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Flame shimmer overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 5.5, repeat: Infinity }}
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 70% 60%, rgba(245,158,11,0.15), transparent 60%)' }}
          />
        </div>
      </div>
    </section>
  )
}
