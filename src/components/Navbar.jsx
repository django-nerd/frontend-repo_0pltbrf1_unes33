import { useState } from 'react'
import { Shield, Phone, Mail, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-7 h-7 text-[#2596be] drop-shadow-[0_0_12px_rgba(37,150,190,0.6)]" />
            </div>
            <span className="text-white font-semibold tracking-tight group-hover:text-[#2596be] transition-colors">SITEC</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 text-sm text-slate-100 hover:text-[#2596be] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (000) 000-0000</span>
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-[#2596be]/10 text-[#2596be] border border-[#2596be]/20 hover:bg-[#2596be]/20 transition-colors">
              Get a quote
            </a>
          </div>

          <button className="md:hidden grid place-items-center p-2 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 border-t border-white/10">
            <nav className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="mailto:hello@sitec-security.com" className="inline-flex items-center gap-2 text-slate-200/90 hover:text-white">
                <Mail className="w-4 h-4" /> hello@sitec-security.com
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
