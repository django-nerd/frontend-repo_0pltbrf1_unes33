import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950" style={{ backgroundImage: 'radial-gradient(1000px 400px at 10% -10%, rgba(16,185,129,0.12), transparent), radial-gradient(800px 300px at 100% 10%, rgba(16,185,129,0.08), transparent)'}}>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Industries />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aegis Secure. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-emerald-300">About</a>
            <a href="#solutions" className="hover:text-emerald-300">Solutions</a>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
