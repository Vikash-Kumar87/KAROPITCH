import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    icon: '📝',
    title: 'Apply to Pitch',
    desc: 'Fill out our simple application form with your startup details, traction, and funding requirements.',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Get Shortlisted',
    desc: 'Our expert team reviews your application and shortlists the most promising startups for the cohort.',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    num: '03',
    icon: '🎤',
    title: 'Present to Investors',
    desc: 'Pitch your startup live to a curated group of angel investors and VCs looking for the next big opportunity.',
    color: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Secure Funding & Mentorship',
    desc: 'Close your funding round with matched investors and gain access to our exclusive mentorship network.',
    color: 'from-orange-400 to-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="reveal text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-purple-600 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Your Journey from{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Idea to Investment
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            A simple, transparent 4-step process designed to connect the best startups with the right capital.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-[calc(75%-2rem)] h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-orange-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal group relative flex flex-col items-center text-center p-6 rounded-3xl ${step.bg} border ${step.border} hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default`}
                style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: `${i * 120}ms` }}
              >
                {/* Step number */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-extrabold text-xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{step.icon}</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold shadow-sm">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="reveal text-center mt-12 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '500ms' }}
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl hover:opacity-90 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Your Application
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
