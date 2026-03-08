export default function Logo({ size = 'md', dark = false }) {
  const sizes = {
    sm: { img: 'h-8', text1: 'text-lg', text2: 'text-lg' },
    md: { img: 'h-10', text1: 'text-xl', text2: 'text-xl' },
    lg: { img: 'h-14', text1: 'text-2xl', text2: 'text-2xl' },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className="flex items-center gap-2.5">
      {/* Icon */}
      <div className={`relative flex-shrink-0 ${s.img} aspect-square`}>
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          {/* Microphone SVG */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[60%] h-[60%]"
          >
            {/* Mic body */}
            <rect x="11" y="2" width="10" height="16" rx="5" fill="white" fillOpacity="0.95"/>
            {/* Mic stand arc */}
            <path
              d="M6 16c0 5.523 4.477 10 10 10s10-4.477 10-10"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Stand line */}
            <line x1="16" y1="26" x2="16" y2="30" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            {/* Base */}
            <line x1="10" y1="30" x2="22" y2="30" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Glow dot */}
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white shadow-sm" />
      </div>

      {/* Text */}
      <div className="leading-none">
        <div className={`font-extrabold tracking-tight ${s.text1} ${dark ? 'text-white' : 'text-gray-900'}`}>
          Karo{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Pitch
          </span>
        </div>
        <div className={`text-[10px] font-medium tracking-widest uppercase mt-0.5 ${dark ? 'text-indigo-300' : 'text-indigo-400'}`}>
          by KaroStartup
        </div>
      </div>
    </div>
  )
}
