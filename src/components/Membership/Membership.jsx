import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  {
    end: 4.8,
    decimals: 1,
    suffix: '',
    prefix: '',
    label: 'Average Rating',
    sublabel: 'Across all platforms',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    accent: '#f59e0b',
  },
  {
    end: 74,
    decimals: 0,
    suffix: '+',
    prefix: '',
    label: 'Verified Reviews',
    sublabel: 'From real members',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    accent: '#3b82f6',
  },
  {
    end: 1000,
    decimals: 0,
    suffix: '+',
    prefix: '',
    label: 'Active Members',
    sublabel: 'And growing every day',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: '#ef4444',
  },
  {
    end: 7,
    decimals: 0,
    suffix: '+',
    prefix: '',
    label: 'Elite Programs',
    sublabel: 'For every fitness level',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: '#10b981',
  },
]

function StatCard({ stat, index }) {
  const cardRef    = useRef(null)
  const numberRef  = useRef(null)
  const lineRef    = useRef(null)
  const iconRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Card slide up reveal
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.12,
      })

      // Icon pop in
      gsap.from(iconRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'back.out(1.7)',
        delay: index * 0.12 + 0.2,
      })

      // Accent line grow
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.12 + 0.1,
      })

      // Animated counter
      const obj = { val: 0 }
      gsap.to(obj, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
        val: stat.end,
        duration: 2.2,
        ease: 'power2.out',
        delay: index * 0.12 + 0.3,
        onUpdate() {
          if (!numberRef.current) return
          const display = stat.decimals > 0
            ? obj.val.toFixed(stat.decimals)
            : Math.floor(obj.val).toLocaleString()
          numberRef.current.textContent =
            stat.prefix + display + stat.suffix
        },
      })

    }, cardRef)

    return () => ctx.revert()
  }, [index, stat])

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-white/5 hover:border-white/15 bg-zinc-900 hover:bg-zinc-800/80 transition-all duration-500 cursor-default"
    >

      {/* Left accent line */}
      <div
        ref={lineRef}
        className="absolute left-0 top-0 w-0.5 h-full rounded-full"
        style={{ background: stat.accent }}
      />

      {/* Card inner */}
      <div className="p-8 flex flex-col gap-5">

        {/* Icon */}
        <div
          ref={iconRef}
          className="w-10 h-10 rounded-sm flex items-center justify-center"
          style={{
            background: `${stat.accent}15`,
            color: stat.accent,
            border: `1px solid ${stat.accent}30`,
          }}
        >
          {stat.icon}
        </div>

        {/* Number */}
        <div className="flex flex-col gap-1">
          <span
            ref={numberRef}
            className="font-black leading-none tracking-tight text-white"
            style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              color: stat.accent,
            }}
          >
            {stat.prefix}0{stat.suffix}
          </span>

          {/* Star row for rating */}
          {stat.decimals > 0 && (
            <div className="flex items-center gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  viewBox="0 0 24 24"
                  fill={s <= 4 ? '#f59e0b' : 'none'}
                  stroke="#f59e0b"
                  strokeWidth={1.5}
                  className="w-3.5 h-3.5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          )}
        </div>

        {/* Labels */}
        <div className="flex flex-col gap-0.5 border-t border-white/5 pt-4">
          <span className="text-white font-bold text-sm tracking-wide">
            {stat.label}
          </span>
          <span className="text-gray-500 text-xs tracking-wide">
            {stat.sublabel}
          </span>
        </div>

      </div>

      {/* Bottom glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${stat.accent}, transparent)` }}
      />
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const labelRef   = useRef(null)
  const headingRef = useRef(null)
  const quoteRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(labelRef.current, {
        scrollTrigger: {
          trigger: labelRef.current,
          start: 'top 85%',
        },
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      })

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
        autoAlpha: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      })

      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 88%',
        },
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.15,
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative bg-black text-white py-24 lg:py-36 overflow-hidden"
    >

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/4 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">

          <div ref={labelRef} className="flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase">
              By The Numbers
            </span>
            <span className="w-8 h-px bg-red-500" />
          </div>

          <h2
            ref={headingRef}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            RESULTS THAT
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
            >
              SPEAK LOUD
            </span>
          </h2>

          <p
            ref={quoteRef}
            className="text-gray-500 text-sm leading-relaxed max-w-md"
          >
            Numbers don't lie. Every metric below is earned through
            sweat, consistency, and an unrelenting standard of excellence.
          </p>

        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom quote strip */}
        <div className="mt-16 border border-white/5 rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-900/40">
          <div className="flex flex-col gap-1">
            <p className="text-white font-black text-lg tracking-tight">
              Ready to become the next success story?
            </p>
            <p className="text-gray-500 text-sm">
              Join over 1000 members already transforming their lives.
            </p>
          </div>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group flex items-center gap-3 px-7 py-3.5 bg-red-600 hover:bg-red-500 text-white text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            Get Started Today
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}