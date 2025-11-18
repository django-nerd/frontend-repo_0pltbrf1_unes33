import { ShieldCheck, Flame, Video, ScanLine, Shield, LockKeyhole } from 'lucide-react'
import SolutionCard from './SolutionCard'

const solutions = [
  {
    icon: Flame,
    title: 'Fire Protection',
    key: 'fire-protection',
    desc: 'Consulting, design, installation, and maintenance of fire detection and suppression systems. NFPA-compliant with regular inspections.',
    bullets: ['Addressable detection', 'Gas & water suppression', 'Monitoring & maintenance']
  },
  {
    icon: Video,
    title: 'Video Surveillance (CCTV)',
    key: 'video-surveillance',
    desc: 'High-definition IP cameras, analytics, and remote monitoring to secure facilities and operations across sites.',
    bullets: ['VMS & NVR solutions', 'AI-based analytics', 'Secure remote access']
  },
  {
    icon: ScanLine,
    title: 'Intrusion Detection',
    key: 'intrusion-detection',
    desc: 'Perimeter and indoor protection with sensors, control panels, and 24/7 response integration.',
    bullets: ['Perimeter sensors', 'Smart panels', 'Alarm monitoring']
  },
  {
    icon: Shield,
    title: 'BMS Integration',
    key: 'bms-integration',
    desc: 'Unified building management: HVAC, access control, and fire systems working together for efficiency and safety.',
    bullets: ['Open protocols (BACnet, Modbus)', 'Dashboards', 'Automation sequences']
  },
  {
    icon: LockKeyhole,
    title: 'Cybersecurity',
    key: 'cybersecurity',
    desc: 'Hardening for OT and security networks: segmentation, patching, and continuous monitoring to reduce risk.',
    bullets: ['Network audits', 'Segmentation & zero-trust', 'Incident response']
  },
  {
    icon: ShieldCheck,
    title: '24/7 Monitoring',
    key: 'monitoring',
    desc: 'Certified monitoring services with rapid dispatch and Service Level Agreements for peace of mind.',
    bullets: ['UL-listed SOC', 'Dispatch protocols', 'SLA-backed response']
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,150,190,0.08),transparent_60%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Integrated Security Solutions</h2>
          <p className="mt-3 text-slate-300">End-to-end delivery from design to maintenance — one accountable partner.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ icon, title, desc, bullets, key }) => (
            <SolutionCard key={key} icon={icon} title={title} desc={desc} bullets={bullets} to={`/solutions/${key}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
