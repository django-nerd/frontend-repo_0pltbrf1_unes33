import { Link, useParams } from 'react-router-dom'
import { Flame, Video, ScanLine, Shield, LockKeyhole, ShieldCheck, ArrowLeft } from 'lucide-react'

const copy = {
  'fire-protection': {
    title: 'Fire Protection',
    icon: Flame,
    lead: 'NFPA-compliant detection, suppression, and lifecycle maintenance to protect people and assets.',
    points: [
      'Addressable & conventional detection',
      'Gas, water-mist & sprinkler suppression',
      'Commissioning, testing & inspections',
      '24/7 monitoring and service SLAs'
    ]
  },
  'video-surveillance': {
    title: 'Video Surveillance (CCTV)',
    icon: Video,
    lead: 'Enterprise-grade IP cameras, video analytics, and secure remote access across sites.',
    points: [
      'VMS/NVR design and deployment',
      'AI analytics: intrusion, counting, LPR',
      'Hardening & network segmentation',
      'Health monitoring & alerts'
    ]
  },
  'intrusion-detection': {
    title: 'Intrusion Detection',
    icon: ScanLine,
    lead: 'Perimeter and internal intrusion systems with rapid dispatch and incident workflows.',
    points: [
      'Perimeter beams & microwave sensors',
      'Grade-compliant control panels',
      'Alarm verification & dispatch',
      'Maintenance & event reporting'
    ]
  },
  'bms-integration': {
    title: 'BMS Integration',
    icon: Shield,
    lead: 'HVAC, lighting, access and fire systems unified via open protocols for efficiency and safety.',
    points: [
      'BACnet, Modbus & Niagara frameworks',
      'Cross-system automation & dashboards',
      'Energy optimization & alarms',
      'Redundancy & failover design'
    ]
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    icon: LockKeyhole,
    lead: 'Hardening and continuous monitoring for OT and security networks to reduce cyber risk.',
    points: [
      'Asset inventory & risk assessment',
      'Network segmentation & zero-trust',
      'Patch management & backups',
      'Threat detection & incident response'
    ]
  },
  'monitoring': {
    title: '24/7 Monitoring',
    icon: ShieldCheck,
    lead: 'UL-listed monitoring with SLAs, health checks and escalation playbooks.',
    points: [
      'Multi-site monitoring & reporting',
      'Proactive device health checks',
      'Tiered escalation & dispatch',
      'Integrations with VMS/PSIM'
    ]
  }
}

export default function SolutionPage() {
  const { slug } = useParams()
  const data = copy[slug]

  if (!data) {
    return (
      <div className="min-h-[60vh] grid place-items-center text-white px-6">
        <div className="text-center">
          <p className="text-2xl font-semibold">Solution not found</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-[#2596be]">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </div>
    )
  }

  const Icon = data.icon

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[#2596be] mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#2596be]/10 border border-[#2596be]/20 grid place-items-center text-[#2596be]">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{data.title}</h1>
              <p className="mt-3 text-slate-300">{data.lead}</p>
            </div>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {data.points.map((p) => (
              <li key={p} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-slate-200">• {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
