import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '500+', label: 'Lives Transformed' },
  { value: '50+', label: 'Expert Programs' },
]

const PILLARS = [
  {
    number: '01',
    title: 'Elite Coaching',
    desc: 'Every trainer is certified, experienced, and obsessed with your progress.',
  },
  {
    number: '02',
    title: 'Smart Programming',
    desc: 'Science-backed training plans built around your body and your goals.',
  },
  {
    number: '03',
    title: 'Real Community',
    desc: 'A culture of discipline, respect, and relentless mutual motivation.',
  },
]

export default function About() {
  const sectionRef   = useRef(null)
  const labelRef     = useRef(null)
  const headingRef   = useRef(null)
  const bodyRef      = useRef(null)
  const pillarsRef   = useRef(null)
  const statsRef     = useRef(null)
  const imageARef    = useRef(null)
  const imageBRef    = useRef(null)
  const imageLineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Left column: text reveal ──────────────────────────────
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

      gsap.from(bodyRef.current, {
        scrollTrigger: {
          trigger: bodyRef.current,
          start: 'top 85%',
        },
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      })

      // ── Pillars stagger ───────────────────────────────────────
      gsap.from(pillarsRef.current.children, {
        scrollTrigger: {
          trigger: pillarsRef.current,
          start: 'top 85%',
        },
        autoAlpha: 0,
        x: -30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.1,
      })

      // ── Stats stagger ─────────────────────────────────────────
      gsap.from(statsRef.current.children, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 90%',
        },
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
      })

      // ── Image A: slide in from right ──────────────────────────
      gsap.from(imageARef.current, {
        scrollTrigger: {
          trigger: imageARef.current,
          start: 'top 80%',
        },
        autoAlpha: 0,
        x: 60,
        duration: 1.1,
        ease: 'power3.out',
      })

      // ── Image B: slide in from left with delay ────────────────
      gsap.from(imageBRef.current, {
        scrollTrigger: {
          trigger: imageBRef.current,
          start: 'top 85%',
        },
        autoAlpha: 0,
        x: -40,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.25,
      })

      // ── Vertical line grow ────────────────────────────────────
      gsap.from(imageLineRef.current, {
        scrollTrigger: {
          trigger: imageLineRef.current,
          start: 'top 80%',
        },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.2,
        ease: 'power3.inOut',
        delay: 0.3,
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-zinc-950 text-white overflow-hidden py-24 lg:py-36"
    >

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/40 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Top grid: text + images ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text content */}
          <div className="flex flex-col gap-8">

            {/* Label */}
            <div ref={labelRef} className="flex items-center gap-3">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              NOT JUST A
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
              >
                GYM.
              </span>
              A FORGE.
            </h2>

            {/* Body text */}
            <div ref={bodyRef} className="flex flex-col gap-4">
              <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                World Wide Fitness was built on a single belief — that every
                person carries untapped potential waiting to be unleashed.
                We don't just provide equipment. We build warriors.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                Since 2012, we have helped over 500 members redefine their
                physical and mental limits through elite programming,
                world-class facilities, and a community unlike any other.
              </p>
            </div>

            {/* Pillars */}
            <div ref={pillarsRef} className="flex flex-col gap-4 mt-2">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
                >
                  <span className="text-red-500/60 font-black text-sm tracking-widest mt-0.5 group-hover:text-red-500 transition-colors duration-300">
                    {pillar.number}
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right — image stack */}
          <div className="relative h-[500px] lg:h-[680px]">

            {/* Main large image */}
            <div
              ref={imageARef}
              className="absolute top-0 right-0 w-4/5 h-4/5 rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="Elite gym training"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating second image */}
            <div
              ref={imageBRef}
              className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-sm overflow-hidden border-4 border-zinc-950"
            >
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80"
                alt="Gym equipment"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>

            {/* Decorative vertical line */}
            <div
              ref={imageLineRef}
              className="absolute top-0 left-[37%] w-px h-full bg-gradient-to-b from-red-500/60 via-red-500/20 to-transparent"
            />

            {/* Decorative label on image */}
            <div className="absolute top-6 left-6 z-10 bg-black/70 backdrop-blur-sm border border-white/10 rounded-sm px-3 py-2">
              <p className="text-white font-black text-lg leading-none">EST.</p>
              <p className="text-red-500 font-black text-2xl leading-none">2012</p>
            </div>

          </div>

        </div>

        {/* ── Stats row ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-20 bg-white/5 rounded-sm overflow-hidden border border-white/5"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-950 px-8 py-8 flex flex-col gap-1 hover:bg-zinc-900 transition-colors duration-300 group"
            >
              <span
                className="font-black text-white leading-none group-hover:text-red-500 transition-colors duration-300"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {stat.value}
              </span>
              <span className="text-gray-500 text-xs tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}