import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import CTA from './components/CTA'
import Certifications from './components/Certifications'
import CertsRibbon from './components/CertsRibbon'

function App() {
  return (
    <div className="min-h-screen bg-slate-950" style={{ backgroundImage: 'radial-gradient(1000px 400px at 10% -10%, rgba(37,150,190,0.12), transparent), radial-gradient(800px 300px at 100% 10%, rgba(37,150,190,0.08), transparent)'}}>
      <Navbar />
      <main>
        <Hero />
        <CertsRibbon />
        <Solutions />
        <Industries />
        <Certifications />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SITEC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#certifications" className="hover:text-[#2596be]">Certifications</a>
            <a href="#solutions" className="hover:text-[#2596be]">Solutions</a>
            <a href="#contact" className="hover:text-[#2596be]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
