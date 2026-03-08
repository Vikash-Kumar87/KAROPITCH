import { useEffect, useRef } from 'react'

const categories = [
  {
    emoji: '🛍️',
    title: 'D2C Brands',
    desc: 'Direct-to-consumer brands disrupting traditional retail with innovative products.',
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    text: 'text-rose-600',
  },
  {
    emoji: '📱',
    title: 'Consumer Startups',
    desc: 'Scalable consumer-facing tech products solving everyday problems for millions.',
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    text: 'text-violet-600',
  },
  {
    emoji: '🏭',
    title: 'MSMEs',
    desc: 'Micro, small & medium enterprises building sustainable local businesses with global potential.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    text: 'text-amber-600',
  },
  {
    emoji: '💻',
    title: 'SaaS Startups',
    desc: 'Software-as-a-Service companies building the next generation of business tools.',
    color: 'from-sky-400 to-blue-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    text: 'text-sky-600',
  },
  {
    emoji: '⚙️',
    title: 'Manufacturing',
    desc: 'Innovative manufacturers modernising Indian production with cutting-edge technology.',
    color: 'from-teal-400 to-emerald-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    text: 'text-teal-600',
  },
  {
    emoji: '🇮🇳',
    title: 'Bharat-focused',
    desc: 'Startups solving grassroots problems for Tier 2, 3 cities and rural communities across India.',
    color: 'from-indigo-400 to-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    text: 'text-indigo-600',
  },
]

export default function WhoCanApply() {
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
    <section id="who-can-apply" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="reveal text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-rose-50 border border-rose-100 rounded-full text-rose-600 text-sm font-semibold mb-4">
            Who Can Apply
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            We Welcome{' '}
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
              All Innovators
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Whether you're a first-time founder or a seasoned entrepreneur, if you're building
            something impactful for India — Karo Pitch is for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal group relative overflow-hidden p-6 rounded-3xl ${cat.bg} border ${cat.border} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 cursor-default`}
              style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: `${i * 80}ms` }}
            >
              {/* BG gradient blob */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${cat.color} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {cat.emoji}
              </div>

              <h3 className={`text-lg font-bold mb-2 ${cat.text}`}>{cat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>

              <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${cat.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                Apply Now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
