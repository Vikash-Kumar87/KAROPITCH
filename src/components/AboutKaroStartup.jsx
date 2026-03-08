import { useEffect, useRef } from 'react'
import Logo from './Logo'

const metrics = [
  { value: '10,000+', label: 'Founder Stories', icon: '📖' },
  { value: '5M+', label: 'Monthly Readers', icon: '👥' },
  { value: '50+', label: 'Cities Covered', icon: '🏙️' },
  { value: '8 Yrs', label: 'In The Ecosystem', icon: '🏆' },
]

export default function AboutKaroStartup() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="karo-startup" ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Metrics */}
          <div
            className="reveal transition-all duration-700"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-3xl mb-2">{m.icon}</div>
                  <div className="text-2xl font-extrabold text-white">{m.value}</div>
                  <div className="text-slate-400 text-sm mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Logo row */}
            <div className="mt-6">
              <Logo size="md" dark={true} />
            </div>
          </div>

          {/* Right — Text */}
          <div
            className="reveal transition-all duration-700 delay-200"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-semibold mb-5">
              About KaroStartup
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              India's Most Loved{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Startup Community
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              KaroStartup is one of India's leading startup storytelling platforms sharing
              thousands of founder journeys and building a strong community of entrepreneurs
              across the country.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From bootstrapped hustlers in Bhagalpur to VC-backed unicorn founders in Bangalore,
              we've covered it all. Our mission is simple — inspire, educate, and connect India's
              next generation of entrepreneurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://karostartup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Visit KaroStartup
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="#community"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
