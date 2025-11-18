import { Building2, Factory, Hospital, GraduationCap, Warehouse, Plane } from 'lucide-react'

const industries = [
  { icon: Building2, name: 'Commercial Offices' },
  { icon: Factory, name: 'Industrial & Manufacturing' },
  { icon: Hospital, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Warehouse, name: 'Logistics & Warehousing' },
  { icon: Plane, name: 'Airports & Transportation' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Built for Your Environment</h2>
          <p className="mt-3 text-slate-300">Solutions tailored to sector standards and regulations.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, name }) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2596be]/10 border border-[#2596be]/20 grid place-items-center text-[#2596be]">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-white font-medium">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
