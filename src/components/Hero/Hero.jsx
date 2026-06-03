import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef     = useRef(null)
  const taglineRef  = useRef(null)
  const headlineRef = useRef(null)
  const sublineRef  = useRef(null)
  const ctaRef      = useRef(null)
  const scrollRef   = useRef(null)
  const overlayRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      gsap.set(
        [taglineRef.current, headlineRef.current, sublineRef.current, ctaRef.current, scrollRef.current],
        { autoAlpha: 0, y: 30 }
      )
      gsap.set(overlayRef.current, { autoAlpha: 1 })

      tl.to(overlayRef.current,  { autoAlpha: 0, duration: 1.2, ease: 'power2.inOut' })
        .to(taglineRef.current,  { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.4')
        .to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 0.9 }, '-=0.5')
        .to(sublineRef.current,  { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.6')
        .to(ctaRef.current,      { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.5')
        .to(scrollRef.current,   { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80"
          alt="Gym background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* Intro overlay */}
      <div ref={overlayRef} className="absolute inset-0 z-30 bg-black pointer-events-none" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Main content */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12">
        {/* Tagline badge */}
        <div ref={taglineRef} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-xs tracking-[0.2em] uppercase backdrop-blur-sm bg-white/5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Premium Fitness Experience
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] uppercase"
        >
          FORGE YOUR
          <span className="block text-red-600">LIMITS</span>
        </h1>

        {/* Sub headline */}
        <p
          ref={sublineRef}
          className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed"
        >
          Elite training programs, world-class coaches, and a community
          that pushes you beyond what you thought possible.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-widest uppercase rounded-sm overflow-hidden transition-all duration-300 active:scale-95"
          >
            Start Your Journey
          </a>

          <a
            href="#programs"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold text-sm tracking-widest uppercase rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
          >
            View Programs
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
          {[
            { value: '500+', label: 'Members' },
            { value: '50+',  label: 'Programs' },
            { value: '15+',  label: 'Expert Trainers' },
          ].map((stat, i) => (
            <div key={i} className="border-l border-white/15 pl-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        ref={scrollRef}
        onClick={() =>
          document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="relative block w-px h-12 bg-white/20 overflow-hidden">
          <span
            className="absolute top-0 left-0 w-full h-full bg-white"
            style={{ animation: 'scrollLine 2s ease-in-out infinite' }}
          />
        </span>
      </button>

      {/* Scroll line animation keyframe */}
      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(300%);  opacity: 0; }
        }
      `}</style>
    </section>
  )
}
