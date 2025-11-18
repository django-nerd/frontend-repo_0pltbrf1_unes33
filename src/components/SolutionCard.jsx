import { Link } from 'react-router-dom'

export default function SolutionCard({ icon: Icon, title, desc, bullets, to }) {
  return (
    <Link to={to} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-[#2596be]/30 hover:shadow-[0_0_40px_rgba(37,150,190,0.15)] transition-all block">
      <div className="w-12 h-12 rounded-lg bg-[#2596be]/10 border border-[#2596be]/20 grid place-items-center text-[#2596be] mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-slate-400">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      )}
      <span className="inline-block mt-4 text-sm text-[#2596be] group-hover:translate-x-1 transition-transform">Learn more →</span>
    </Link>
  )
}
