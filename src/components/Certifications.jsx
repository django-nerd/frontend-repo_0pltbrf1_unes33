import { CheckCircle2, BadgeCheck } from 'lucide-react'

const certs = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'ISO 45001:2018',
  'RINA Certification'
]

const partners = [
  { name: 'Niagara', note: 'Certified Partner' },
  { name: 'Bosch', note: 'Certified Partner' },
  { name: 'Milestone', note: 'Certified Partner' }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Certifications & Partnerships</h2>
          <p className="mt-3 text-slate-300">Proven quality and compliance backed by global standards and industry leaders.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-center gap-2 mb-4 text-[#2596be]">
              <BadgeCheck className="w-5 h-5" />
              <h3 className="text-white font-semibold">Standards</h3>
            </div>
            <ul className="space-y-2">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#2596be]" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-center gap-2 mb-4 text-[#2596be]">
              <BadgeCheck className="w-5 h-5" />
              <h3 className="text-white font-semibold">Collaborations</h3>
            </div>
            <ul className="space-y-2">
              {partners.map((p) => (
                <li key={p.name} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#2596be]" /> {p.name} — <span className="text-slate-400">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
