import { useEffect, useRef } from 'react'

const startups = [
  {
    name: 'GreenTech Solutions',
    category: 'CleanTech',
    emoji: '🌱',
    desc: "Building India's first solar-powered cold storage network for farmers, reducing post-harvest losses by 40%.",
    ask: '₹3 Cr',
    stage: 'Seed',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50',
    border: 'border-green-100',
    tag: 'text-green-700',
    tagBg: 'bg-green-100',
  },
  {
    name: 'FinSmart',
    category: 'Fintech',
    emoji: '💳',
    desc: "AI-powered credit scoring for India's unbanked population, enabling instant microloans without collateral.",
    ask: '₹5 Cr',
    stage: 'Pre-Series A',
    color: 'from-indigo-400 to-blue-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    tag: 'text-indigo-700',
    tagBg: 'bg-indigo-100',
  },
  {
    name: 'HealthBridge',
    category: 'HealthTech',
    emoji: '🏥',
    desc: 'Telemedicine platform connecting rural India to specialist doctors via AI-assisted diagnostic tools.',
    ask: '₹8 Cr',
    stage: 'Series A',
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    tag: 'text-rose-700',
    tagBg: 'bg-rose-100',
  },
  {
    name: 'AgroFuture',
    category: 'AgriTech',
    emoji: '🌾',
    desc: 'Precision farming platform using satellite imagery and IoT sensors to increase crop yields by 35%.',
    ask: '₹4 Cr',
    stage: 'Seed',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    tag: 'text-amber-700',
    tagBg: 'bg-amber-100',
  },
  {
    name: 'EduRise',
    category: 'EdTech',
    emoji: '📚',
    desc: 'Vernacular skill learning platform helping tier-2 youth access job-ready courses in their native language.',
    ask: '₹2.5 Cr',
    stage: 'Seed',
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    tag: 'text-violet-700',
    tagBg: 'bg-violet-100',
  },
  {
    name: 'LogiSwift',
    category: 'LogiTech',
    emoji: '🚚',
    desc: 'Last-mile logistics platform optimising delivery routes for SMBs in non-metro cities using ML.',
    ask: '₹6 Cr',
    stage: 'Pre-Series A',
    color: 'from-sky-400 to-cyan-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    tag: 'text-sky-700',
    tagBg: 'bg-sky-100',
  },
]

export default function FeaturedStartups() {
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
    <section id="startups" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="reveal text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full text-amber-600 text-sm font-semibold mb-4">
            Featured Startups
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Discover Startups That Are{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Changing India
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Hand-picked high-potential startups actively raising funding. Browse, connect, and invest.
          </p>
        </div>

        {/* Startup grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((s, i) => (
            <div
              key={s.name}
              className={`reveal group flex flex-col ${s.bg} border ${s.border} rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400`}
              style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: `${i * 80}ms` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${s.color} p-6`}>
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
                    {s.emoji}
                  </div>
                  <div className="text-right">
                    <div className="text-white/80 text-xs font-medium">Raising</div>
                    <div className="text-white font-extrabold text-lg">{s.ask}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-bold text-xl">{s.name}</h3>
                  <div className={`inline-block mt-1.5 px-2.5 py-0.5 bg-white/20 rounded-full text-white text-xs font-medium`}>
                    {s.category}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="flex-1 flex flex-col p-6">
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{s.desc}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 ${s.tagBg} ${s.tag} rounded-full text-xs font-semibold`}>
                    {s.stage}
                  </span>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                    View Startup
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div
          className="reveal text-center mt-12 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '500ms' }}
        >
          <a
            href="#all-startups"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl hover:opacity-90 hover:shadow-xl hover:shadow-amber-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            Browse All Startups
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
