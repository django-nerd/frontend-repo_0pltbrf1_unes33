export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-[#2596be]/20 bg-gradient-to-br from-[#2596be]/10 to-slate-900/60 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Ready to elevate safety and security?</h3>
          <p className="mt-3 text-slate-300">Our engineers can audit your sites and design a phased roadmap that fits your budget and compliance requirements.</p>
          <form className="mt-8 grid md:grid-cols-3 gap-3">
            <input type="text" placeholder="Full name" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-[#2596be]/40" />
            <input type="email" placeholder="Work email" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-[#2596be]/40" />
            <input type="tel" placeholder="Phone (optional)" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-[#2596be]/40" />
            <textarea placeholder="Tell us about your project" className="md:col-span-3 px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-[#2596be]/40 min-h-[120px]" />
            <button type="button" className="md:col-span-3 mt-2 px-6 py-3 rounded-lg bg-[#2596be] text-white font-semibold hover:bg-[#2596be]/90 transition-colors">Submit</button>
          </form>
          <p className="mt-4 text-xs text-slate-400">By submitting, you agree to our privacy policy.</p>
        </div>
      </div>
    </section>
  )
}
