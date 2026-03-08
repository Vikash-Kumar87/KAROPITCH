import { useEffect, useRef } from 'react'

const stats = [
  { value: '500+', label: 'Startups Pitched' },
  { value: '₹120Cr+', label: 'Funding Raised' },
  { value: '200+', label: 'Active Investors' },
  { value: '18', label: 'States Covered' },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const animEls = heroRef.current?.querySelectorAll('.anim')
    animEls?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="anim animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm"
              style={{ animationFillMode: 'forwards', opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              India's #1 Startup Funding Platform
            </div>

            {/* Heading */}
            <h1
              className="anim animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              style={{ animationDelay: '150ms', animationFillMode: 'forwards', opacity: 0 }}
            >
              Pitch Your Startup to{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                India's Top Investors
              </span>
            </h1>

            {/* Sub text */}
            <p
              className="anim animate-fade-in-up text-lg text-slate-300 leading-relaxed max-w-xl"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards', opacity: 0 }}
            >
              Karo Pitch is a platform where founders across India can showcase their startups
              and raise funding from top investors. Your big idea deserves a big stage.
            </p>

            {/* Buttons */}
            <div
              className="anim animate-fade-in-up flex flex-wrap gap-4"
              style={{ animationDelay: '450ms', animationFillMode: 'forwards', opacity: 0 }}
            >
              <a
                href="#apply"
                id="apply"
                className="group relative px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl hover:opacity-95 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Apply to Pitch
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </a>
              <a
                href="#startups"
                className="px-7 py-3.5 text-base font-semibold text-white border-2 border-white/20 rounded-2xl hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Startups
              </a>
            </div>

            {/* Stats */}
            <div
              className="anim animate-fade-in-up grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
              style={{ animationDelay: '600ms', animationFillMode: 'forwards', opacity: 0 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Main card — floating */}
            <div className="animate-float relative z-10 w-full max-w-sm">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">GreenTech Solutions</div>
                    <div className="text-indigo-300 text-xs">CleanTech · Series A</div>
                  </div>
                  <div className="ml-auto px-2.5 py-1 bg-green-400/20 border border-green-400/30 rounded-full text-green-300 text-xs font-medium">
                    Live
                  </div>
                </div>

                {/* Funding bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                    <span>Funding Goal</span>
                    <span className="text-indigo-300 font-semibold">₹2Cr / ₹5Cr</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-2/5 transition-all duration-1000" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Sustainable', 'D2C', 'Impact'].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-indigo-500/20 border border-indigo-400/20 rounded-full text-indigo-300 text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Investors joined */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['A', 'R', 'M', 'S'].map((l, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-indigo-950 flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          background: ['#6366f1', '#8b5cf6', '#ec4899', '#14b8a6'][i],
                        }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-300 text-xs">+12 investors interested</span>
                </div>
              </div>

              {/* Mini floating card */}
              <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl w-44">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white text-xs font-semibold">Shortlisted!</div>
                </div>
                <div className="text-slate-300 text-xs">FinSmart has been selected for pitch day</div>
              </div>

              {/* Another mini card */}
              <div className="absolute -bottom-10 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl w-44">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">₹50L raised</div>
                    <div className="text-slate-400 text-xs">today</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background glow ring */}
            <div className="absolute w-80 h-80 rounded-full border border-indigo-500/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute w-64 h-64 rounded-full border border-purple-500/20" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 10 0 20Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
