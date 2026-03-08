import { useEffect, useRef } from 'react'

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Connect Founders with Investors',
    desc: 'Bridge the gap between promising Indian founders and the investors eager to back the next big idea.',
    color: 'bg-indigo-50 border-indigo-100',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Discover High-Potential Startups',
    desc: 'Curated, vetted startups across industries — from SaaS to D2C — ready for their next phase of growth.',
    color: 'bg-purple-50 border-purple-100',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Build India's Startup Ecosystem",
    desc: 'We believe in a stronger Bharat through entrepreneurship — fuelling local innovation on a global stage.',
    color: 'bg-pink-50 border-pink-100',
  },
]

export default function About() {
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
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="reveal text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-semibold mb-4">
            About Karo Pitch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            The Platform Built for{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Indian Founders
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Karo Pitch is a startup discovery and investor connection platform built to help
            early-stage founders pitch their ideas directly to investors and gain visibility
            across India's vibrant startup ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Visual */}
          <div
            className="reveal relative transition-all duration-700 delay-200"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 border border-indigo-100 shadow-xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />

              <div className="relative space-y-5">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-indigo-50">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">🚀</div>
                  <div>
                    <div className="font-bold text-gray-800">500+ Startups</div>
                    <div className="text-gray-500 text-sm">Pitched & discovered on our platform</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-purple-50">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">💼</div>
                  <div>
                    <div className="font-bold text-gray-800">200+ Investors</div>
                    <div className="text-gray-500 text-sm">Actively looking for the next big startup</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">🇮🇳</div>
                  <div>
                    <div className="font-bold text-gray-800">18+ States</div>
                    <div className="text-gray-500 text-sm">Founders from every corner of Bharat</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white border border-indigo-100 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-700 text-sm font-semibold">Applications Open</span>
            </div>
          </div>

          {/* Right — Highlights */}
          <div className="space-y-5">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`reveal flex gap-4 p-5 rounded-2xl border transition-all duration-700 hover:shadow-md hover:-translate-y-0.5 ${h.color}`}
                style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: `${i * 120 + 300}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{h.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
