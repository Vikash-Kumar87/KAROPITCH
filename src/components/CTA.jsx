import { useEffect, useRef } from 'react'

export default function CTA() {
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
      { threshold: 0.2 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta" ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 sm:p-16 text-center shadow-2xl transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full" />

          {/* Stars decoration */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 text-2xl animate-pulse"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              ✦
            </div>
          ))}

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              Applications Open — Cohort 4
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Ready to Pitch Your Startup?
            </h2>
            <p className="text-indigo-100 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Join hundreds of founders who've raised funding, found mentors, and scaled their
              startups through the Karo Pitch platform. Your moment is now.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#apply"
                className="group px-8 py-4 text-base font-bold text-indigo-700 bg-white rounded-2xl hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Apply Now
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">🚀</span>
              </a>
              <a
                href="#partner"
                id="partner"
                className="px-8 py-4 text-base font-bold text-white border-2 border-white/40 rounded-2xl hover:bg-white/15 hover:border-white hover:-translate-y-1 transition-all duration-300"
              >
                Partner With Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-indigo-200">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to Apply
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Curated Investor Network
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mentorship Access
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Equity Taken
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
