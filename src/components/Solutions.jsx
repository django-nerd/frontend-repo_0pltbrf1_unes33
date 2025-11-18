import { ShieldCheck, Flame, Video, ScanLine, Shield, LockKeyhole } from 'lucide-react'

const solutions = [
  {
    icon: Flame,
    title: 'Fire Protection',
    desc: 'Consulting, design, installation, and maintenance of fire detection and suppression systems. NFPA-compliant with regular inspections.',
    bullets: ['Addressable detection', 'Gas & water suppression', 'Monitoring & maintenance']
  },
  {
    icon: Video,
    title: 'Video Surveillance (CCTV)',
    desc: 'High-definition IP cameras, analytics, and remote monitoring to secure facilities and operations across sites.',
    bullets: ['VMS & NVR solutions', 'AI-based analytics', 'Secure remote access']
  },
  {
    icon: ScanLine,
    title: 'Intrusion Detection',
    desc: 'Perimeter and indoor protection with sensors, control panels, and 24/7 response integration.',
    bullets: ['Perimeter sensors', 'Smart panels', 'Alarm monitoring']
  },
  {
    icon: Shield,
    title: 'BMS Integration',
    desc: 'Unified building management: HVAC, access control, and fire systems working together for efficiency and safety.',
    bullets: ['Open protocols (BACnet, Modbus)', 'Dashboards', 'Automation sequences']
  },
  {
    icon: LockKeyhole,
    title: 'Cybersecurity',
    desc: 'Hardening for OT and security networks: segmentation, patching, and continuous monitoring to reduce risk.',
    bullets: ['Network audits', 'Segmentation & zero-trust', 'Incident response']
  },
  {
    icon: ShieldCheck,
    title: '24/7 Monitoring',
    desc: 'Certified monitoring services with rapid dispatch and Service Level Agreements for peace of mind.',
    bullets: ['UL-listed SOC', 'Dispatch protocols', 'SLA-backed response']
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Integrated Security Solutions</h2>
          <p className="mt-3 text-slate-300">End-to-end delivery from design to maintenance — one accountable partner.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-emerald-400/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-400/10 border border-emerald-400/20 grid place-items-center text-emerald-300 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-400">
                {bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
