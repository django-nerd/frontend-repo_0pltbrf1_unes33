import { motion } from 'framer-motion'

export default function AnimatedBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Security glow (brand blue) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-24 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(37,150,190,0.35), rgba(37,150,190,0.1) 40%, transparent 60%)' }}
      />

      {/* Fire energy (amber) */}
      <motion.div
        initial={{ x: 40, y: -20, opacity: 0 }}
        animate={{ x: [40, -20, 20], y: [-20, 30, -10], opacity: 0.8 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute -bottom-40 -right-32 w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 60% 60%, rgba(245,158,11,0.28), rgba(245,158,11,0.08) 45%, transparent 70%)' }}
      />

      {/* Subtle pulse to imply shield */}
      <motion.div
        initial={{ opacity: 0.2, scale: 0.9 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.95, 1.02, 0.95] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-24 rounded-[48px] blur-2xl border border-white/5"
        style={{ background: 'radial-gradient(ellipse at center, rgba(37,150,190,0.10), transparent 60%)' }}
      />
    </div>
  )
}
