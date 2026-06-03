import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    id: '01',
    title: 'Weight Training',
    desc: 'Build raw strength and sculpt your physique with periodized programming designed for maximum hypertrophy and power output.',
    tag: 'Strength',
    image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80',
    accent: '#ef4444',
  },
  {
    id: '02',
    title: 'Cardio',
    desc: 'Torch calories and supercharge your endurance with high-performance cardio zones equipped with the latest machines.',
    tag: 'Endurance',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&q=80',
    accent: '#f97316',
  },
  {
    id: '03',
    title: 'CrossFit',
    desc: 'Functional movements at high intensity. Forge a complete athlete through constantly varied workouts that never let you plateau.',
    tag: 'Functional',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    accent: '#ef4444',
  },
  {
    id: '04',
    title: 'Personal Training',
    desc: 'One-on-one sessions with elite certified coaches who build custom programs, track every rep, and keep you accountable.',
    tag: 'Elite',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    accent: '#f97316',
  },
  {
    id: '05',
    title: 'Yoga',
    desc: 'Restore mobility, sharpen focus, and cultivate deep core strength through expert-led sessions for all skill levels.',
    tag: 'Recovery',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    accent: '#ef4444',
  },
  {
    id: '06',
    title: 'Zumba',
    desc: 'High-energy dance fitness that burns serious calories while keeping every session an absolute blast. No experience needed.',
    tag: 'Dance',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&q=80',
    accent: '#f97316',
  },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Card reveal on scroll
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
        autoAlpha: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        delay: (index % 3) * 0.12,
      })

      // Line grow on scroll
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
        ease: 'power3.out',
        delay: (index % 3) * 0.12 + 0.3,
      })

      // Hover: image zoom
      const card = cardRef.current
      const img = imageRef.current

      const onEnter = () => {
        gsap.to(img, {
          scale: 1.08,
          duration: 0.6,
          ease: 'power2.out',
        })
        gsap.to(contentRef.current, {
          y: -4,
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      const onLeave = () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
        gsap.to(contentRef.current, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mouseenter', onEnter)
      card.addEventListener('mouseleave', onLeave)

      return () => {
        card.removeEventListener('mouseenter', onEnter)
        card.removeEventListener('mouseleave', onLeave)
      }

    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative bg-zinc-900 rounded-sm overflow-hidden border border-white/5 hover:border-white/15 transition-colors duration-500 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          ref={imageRef}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

        {/* Tag badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm"
            style={{
              background: `${service.accent}20`,
              color: service.accent,
              border: `1px solid ${service.accent}40`,
            }}
          >
            {service.tag}
          </span>
        </div>

        {/* Number */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-white/10 font-black text-5xl leading-none select-none">
            {service.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="p-6 flex flex-col gap-3">

        {/* Animated line */}
        <div
          ref={lineRef}
          className="h-px w-8"
          style={{ background: service.accent }}
        />

        <h3 className="text-white font-black text-xl tracking-tight group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
          {service.desc}
        </p>

        {/* CTA link */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className="text-xs font-bold tracking-widest uppercase transition-colors duration-300"
            style={{ color: service.accent }}
          >
            Learn More
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: service.accent }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </div>

      </div>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: service.accent }}
      />
    </div>
  )
}

export default function Services() {
  const sectionRef  = useRef(null)
  const labelRef    = useRef(null)
  const headingRef  = useRef(null)
  const subRef      = useRef(null)

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

      gsap.from(subRef.current, {
        scrollTrigger: {
          trigger: subRef.current,
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
      id="services"
      className="relative bg-zinc-950 text-white py-24 lg:py-36 overflow-hidden"
    >

      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div className="flex flex-col gap-5">

            {/* Label */}
            <div ref={labelRef} className="flex items-center gap-3">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase">
                What We Offer
              </span>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              TRAIN WITHOUT
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
              >
                LIMITS
              </span>
            </h2>

          </div>

          {/* Sub text */}
          <p
            ref={subRef}
            className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right"
          >
            Six world-class disciplines under one roof. Whether you are
            chasing strength, endurance, or balance — we have a program
            built exactly for you.
          </p>

        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-red-500/60 rounded-sm text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-red-600/5"
          >
            Book a Free Trial
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