import { useEffect, useRef } from 'react'

const investors = [
  {
    name: 'Arjun Mehra',
    role: 'Angel Investor',
    focus: 'D2C & Consumer Tech',
    desc: 'Former founder turned investor. Backed 30+ startups across India. Looking for bold founders solving real consumer problems.',
    avatar: 'AM',
    color: 'from-indigo-500 to-purple-600',
    tags: ['D2C', 'Consumer', 'Series A'],
    investments: '30+',
  },
  {
    name: 'Priya Sharma',
    role: 'VC Partner at NextIndia',
    focus: 'SaaS & Fintech',
    desc: "Led investments in 15+ SaaS companies. Passionate about B2B technology transforming India's enterprise landscape.",
    avatar: 'PS',
    color: 'from-purple-500 to-pink-500',
    tags: ['SaaS', 'Fintech', 'B2B'],
    investments: '15+',
  },
  {
    name: 'Rahul Khanna',
    role: 'Co-Founder, BharatVC',
    focus: 'Bharat & AgriTech',
    desc: "Deep-rooted in India's Tier 2 startup ecosystem. Specialises in funding founders solving Bharat's most pressing challenges.",
    avatar: 'RK',
    color: 'from-emerald-500 to-teal-600',
    tags: ['Agri', 'Bharat', 'Impact'],
    investments: '22+',
  },
  {
    name: 'Meera Joshi',
    role: 'Managing Partner, GrowthX',
    focus: 'HealthTech & EdTech',
    desc: 'Former surgeon turned healthcare investor. Backing health-focused founders building the future of wellness in India.',
    avatar: 'MJ',
    color: 'from-rose-500 to-orange-500',
    tags: ['HealthTech', 'EdTech', 'Impact'],
    investments: '18+',
  },
  {
    name: 'Vikram Sood',
    role: 'Partner, ZeroOne Capital',
    focus: 'Deep Tech & Manufacturing',
    desc: "Ex-IIT engineer backing founders reimagining India's manufacturing sector with AI, robotics and advanced materials.",
    avatar: 'VS',
    color: 'from-sky-500 to-blue-600',
    tags: ['DeepTech', 'AI', 'Manufacturing'],
    investments: '12+',
  },
  {
    name: 'Sanya Gupta',
    role: 'Angel & LP at FounderClub',
    focus: 'Climate & Sustainability',
    desc: 'Climate activist turned investor. Looking for green startups that prove sustainability and profitability can coexist.',
    avatar: 'SG',
    color: 'from-lime-500 to-green-600',
    tags: ['CleanTech', 'Climate', 'ESG'],
    investments: '10+',
  },
]

export default function Investors() {
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
    <section id="investors" ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="reveal text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-50 border border-sky-100 rounded-full text-sky-600 text-sm font-semibold mb-4">
            Our Investors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Meet Investors Looking for{' '}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              the Next Big Startup
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Our network of angels, VCs and institutional investors are actively looking to back bold founders from across India.
          </p>
        </div>

        {/* Investor grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((inv, i) => (
            <div
              key={inv.name}
              className="reveal group bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
              style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: `${i * 100}ms` }}
            >
              {/* Top */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${inv.color} flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {inv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 truncate">{inv.name}</div>
                  <div className="text-gray-500 text-sm truncate">{inv.role}</div>
                  <div className={`mt-0.5 text-xs font-semibold bg-gradient-to-r ${inv.color} bg-clip-text text-transparent`}>
                    {inv.focus}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-2xl font-extrabold text-gray-800">{inv.investments}</div>
                  <div className="text-xs text-gray-400">Deals</div>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">{inv.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {inv.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal text-center mt-12 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '600ms' }}
        >
          <p className="text-gray-500 mb-4">Are you an investor looking for the next big opportunity?</p>
          <a
            href="#partner"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-indigo-600 border-2 border-indigo-200 rounded-2xl hover:bg-indigo-50 hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200"
          >
            Partner With Us as an Investor →
          </a>
        </div>
      </div>
    </section>
  )
}
