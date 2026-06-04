import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS = [
  {
    id: 1,
    name: 'James Whitfield',
    role: 'Member since 2021',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    plan: 'Premium',
    quote:
      'I have trained at five different gyms across three cities. Nothing comes close to this place. The coaches actually care. Marcus completely rebuilt my squat form in two sessions and I PR\'d within a month.',
    result: '+42 lbs on squat',
    accent: '#ef4444',
  },
  {
    id: 2,
    name: 'Sunita Rao',
    role: 'Member since 2022',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    plan: 'Standard',
    quote:
      'Priya\'s yoga classes transformed how my body recovers. I was skeptical at first — I thought yoga was just stretching. Twelve months later I have zero back pain for the first time in a decade.',
    result: 'Pain-free after 10 yrs',
    accent: '#f59e0b',
  },
  {
    id: 3,
    name: 'Derek Mensah',
    role: 'Member since 2020',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    plan: 'Premium',
    quote:
      'Diego\'s CrossFit programming is no joke. I dropped 18 kg in six months while actually getting stronger. The community here keeps you accountable in the best possible way.',
    result: '-18 kg in 6 months',
    accent: '#ef4444',
  },
  {
    id: 4,
    name: 'Alicia Torres',
    role: 'Member since 2023',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    plan: 'Standard',
    quote:
      'Aisha built me a nutrition and training plan that finally stuck. I have tried everything over the years. Within three months I saw changes I could not achieve in three years on my own.',
    result: 'First visible abs at 38',
    accent: '#10b981',
  },
  {
    id: 5,
    name: 'Rohan Iyer',
    role: 'Member since 2022',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    plan: 'Basic',
    quote:
      'Started on the Basic plan just to see how it felt. The equipment is premium, the floor is always clean, and the atmosphere is serious without being intimidating. Upgraded to Premium after two weeks.',
    result: 'Upgraded within 2 weeks',
    accent: '#3b82f6',
  },
  {
    id: 6,
    name: 'Fatima Al-Hassan',
    role: 'Member since 2021',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5,
    plan: 'Premium',
    quote:
      'The personal training sessions are worth every single rupee. I get a fully customised program each week based on how my body is responding. No other gym has offered me anything close to this level.',
    result: 'Custom weekly programming',
    accent: '#f59e0b',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          viewBox="0 0 24 24"
          fill={s <= rating ? '#f59e0b' : 'none'}
          stroke="#f59e0b"
          strokeWidth={1.5}
          className="w-3.5 h-3.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
        },
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: (index % 3) * 0.13,
      })
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col gap-5 p-7 rounded-sm border border-white/5 hover:border-white/15 bg-zinc-900/60 hover:bg-zinc-900 transition-all duration-500"
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-sm"
        style={{
          background: `linear-gradient(to right, transparent, ${review.accent}, transparent)`,
        }}
      />

      {/* Quote mark */}
      <div
        className="absolute top-5 right-6 font-black text-6xl leading-none select-none pointer-events-none"
        style={{ color: `${review.accent}15` }}
      >
        &ldquo;
      </div>

      {/* Stars + plan */}
      <div className="flex items-center justify-between">
        <StarRating rating={review.rating} />
        <span
          className="text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm"
          style={{
            background: `${review.accent}15`,
            color: review.accent,
            border: `1px solid ${review.accent}30`,
          }}
        >
          {review.plan}
        </span>
      </div>

      {/* Quote */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1 relative z-10">
        {review.quote}
      </p>

      {/* Result badge */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-sm self-start"
        style={{
          background: `${review.accent}10`,
          border: `1px solid ${review.accent}25`,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={review.accent}
          strokeWidth={2}
          className="w-3 h-3 flex-shrink-0"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span
          className="text-[10px] font-black tracking-widest uppercase"
          style={{ color: review.accent }}
        >
          {review.result}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover object-top border-2"
            style={{ borderColor: `${review.accent}40` }}
          />
          <div
            className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-zinc-900"
            style={{ background: review.accent }}
          />
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-tight">
            {review.name}
          </p>
          <p className="text-gray-600 text-xs">{review.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef    = useRef(null)
  const labelRef      = useRef(null)
  const headingRef    = useRef(null)
  const subRef        = useRef(null)
  const stripRef      = useRef(null)
  const sliderRef     = useRef(null)
  const [active, setActive] = useState(0)
  const intervalRef   = useRef(null)

  // Featured slider auto-play
  const goTo = useCallback((index) => {
    setActive(index)
  }, [])

  const next = useCallback(() => {
    setActive((i) => (i + 1) % REVIEWS.length)
  }, [])

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [next])

  // Animate slider on active change
  useEffect(() => {
    if (!sliderRef.current) return
    gsap.from(sliderRef.current, {
      autoAlpha: 0,
      x: 20,
      duration: 0.5,
      ease: 'power3.out',
    })
  }, [active])

  // Section header reveals
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(labelRef.current, {
        scrollTrigger: { trigger: labelRef.current, start: 'top 85%' },
        autoAlpha: 0, y: 20, duration: 0.6, ease: 'power3.out',
      })

      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        autoAlpha: 0, y: 40, duration: 0.9, ease: 'power3.out', delay: 0.1,
      })

      gsap.from(subRef.current, {
        scrollTrigger: { trigger: subRef.current, start: 'top 88%' },
        autoAlpha: 0, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.15,
      })

      gsap.from(stripRef.current, {
        scrollTrigger: { trigger: stripRef.current, start: 'top 92%' },
        autoAlpha: 0, y: 20, duration: 0.6, ease: 'power3.out',
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const featured = REVIEWS[active]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-zinc-950 text-white py-24 lg:py-36 overflow-hidden"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/4 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">

          <div ref={labelRef} className="flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase">
              Real Results
            </span>
            <span className="w-8 h-px bg-red-500" />
          </div>

          <h2
            ref={headingRef}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            WHAT OUR
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
            >
              MEMBERS SAY
            </span>
          </h2>

          <p
            ref={subRef}
            className="text-gray-500 text-sm leading-relaxed max-w-md"
          >
            Over 74 verified reviews. These are the stories of real people
            who committed, trusted the process, and changed their lives.
          </p>

        </div>

        {/* Featured spotlight slider */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-white/5 rounded-sm p-8 lg:p-12 bg-zinc-900/40 relative overflow-hidden">

          {/* Spotlight glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700"
            style={{ background: `${featured.accent}08` }}
          />

          {/* Left: avatar + quote */}
          <div ref={sliderRef} className="flex flex-col gap-6">

            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-amber-500" />
              <span className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                Featured Review
              </span>
            </div>

            {/* Big quote */}
            <div
              className="font-black text-6xl leading-none select-none"
              style={{ color: `${featured.accent}30` }}
            >
              &ldquo;
            </div>

            <p
              className="text-white font-light leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              {featured.quote}
            </p>

            {/* Result */}
            <div
              className="flex items-center gap-2 self-start px-4 py-2 rounded-sm"
              style={{
                background: `${featured.accent}15`,
                border: `1px solid ${featured.accent}35`,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke={featured.accent} strokeWidth={2} className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: featured.accent }}>
                {featured.result}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/5">
              <img
                src={featured.avatar}
                alt={featured.name}
                className="w-12 h-12 rounded-full object-cover border-2"
                style={{ borderColor: `${featured.accent}50` }}
              />
              <div>
                <p className="text-white font-black tracking-tight">{featured.name}</p>
                <p className="text-gray-500 text-xs">{featured.role}</p>
              </div>
              <div className="ml-auto">
                <StarRating rating={featured.rating} />
              </div>
            </div>

          </div>

          {/* Right: controls + dots */}
          <div className="flex flex-col gap-8 lg:items-end">

            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => { clearInterval(intervalRef.current); prev() }}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/5"
                aria-label="Previous review"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => { clearInterval(intervalRef.current); next() }}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/5"
                aria-label="Next review"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Avatar dots */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {REVIEWS.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => { clearInterval(intervalRef.current); goTo(i) }}
                  className="relative transition-all duration-300"
                  aria-label={`Go to review by ${r.name}`}
                >
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className={`w-9 h-9 rounded-full object-cover object-top transition-all duration-300 ${
                      active === i
                        ? 'ring-2 ring-offset-2 ring-offset-zinc-900 opacity-100 scale-110'
                        : 'opacity-30 hover:opacity-60 scale-100'
                    }`}
                    style={active === i ? { ringColor: r.accent } : {}}
                  />
                </button>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-xs tabular-nums">
                {String(active + 1).padStart(2, '0')}
              </span>
              <div className="w-24 h-px bg-white/10 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-500"
                  style={{ width: `${((active + 1) / REVIEWS.length) * 100}%` }}
                />
              </div>
              <span className="text-gray-600 text-xs tabular-nums">
                {String(REVIEWS.length).padStart(2, '0')}
              </span>
            </div>

          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <div
          ref={stripRef}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 py-8 border-t border-white/5"
        >
          {[
            { value: '4.8★', label: 'Average Rating' },
            { value: '74+', label: 'Verified Reviews' },
            { value: '100%', label: 'Real Members' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-white font-black text-2xl tracking-tight">
                {item.value}
              </span>
              <span className="text-gray-600 text-xs tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}