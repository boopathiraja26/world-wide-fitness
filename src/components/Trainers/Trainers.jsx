import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TRAINERS = [
  {
    id: 1,
    name: 'Marcus Reid',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting · Olympic Lifting',
    exp: '10 yrs exp',
    image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80',
    bio: 'Former national powerlifting champion. Marcus builds absolute strength foundations with surgical precision.',
    accent: '#ef4444',
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    tags: ['Strength', 'Power', 'Olympic'],
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Yoga & Mobility Expert',
    specialty: 'Hatha Yoga · Mobility Flow',
    exp: '8 yrs exp',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    bio: 'Certified RYT-500 instructor. Priya fuses ancient technique with modern sports science for elite recovery.',
    accent: '#f59e0b',
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    tags: ['Yoga', 'Mobility', 'Recovery'],
  },
  {
    id: 3,
    name: 'Diego Vargas',
    role: 'CrossFit & HIIT Coach',
    specialty: 'CrossFit · Metabolic Conditioning',
    exp: '7 yrs exp',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    bio: 'CF-L3 certified and relentlessly intense. Diego engineers workouts that break mental barriers first.',
    accent: '#ef4444',
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    tags: ['CrossFit', 'HIIT', 'Endurance'],
  },
  {
    id: 4,
    name: 'Aisha Okonkwo',
    role: 'Personal Training Director',
    specialty: 'Body Recomposition · Nutrition',
    exp: '12 yrs exp',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    bio: 'NSCA-CSCS certified. Aisha has transformed 200+ bodies through data-driven programming and accountability.',
    accent: '#10b981',
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    tags: ['Personal', 'Nutrition', 'Recomp'],
  },
]

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z" />
  </svg>
)

function TrainerCard({ trainer, index }) {
  const cardRef    = useRef(null)
  const imageRef   = useRef(null)
  const overlayRef = useRef(null)
  const socialsRef = useRef(null)
  const taglineRef = useRef(null)

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
        duration: 0.9,
        ease: 'power3.out',
        delay: (index % 4) * 0.13,
      })

      // Hover interactions
      const card    = cardRef.current
      const img     = imageRef.current
      const overlay = overlayRef.current
      const socials = socialsRef.current
      const tagline = taglineRef.current

      const onEnter = () => {
        gsap.to(img, {
          scale: 1.08,
          duration: 0.7,
          ease: 'power2.out',
        })
        gsap.to(overlay, {
          autoAlpha: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
        gsap.from(socials.children, {
          autoAlpha: 0,
          y: 12,
          duration: 0.35,
          stagger: 0.07,
          ease: 'power2.out',
          overwrite: true,
        })
        gsap.to(tagline, {
          autoAlpha: 0,
          y: -8,
          duration: 0.3,
          ease: 'power2.in',
        })
      }

      const onLeave = () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
        gsap.to(overlay, {
          autoAlpha: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
        gsap.to(tagline, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
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
      className="group relative rounded-sm overflow-hidden cursor-pointer border border-white/5 hover:border-white/15 transition-colors duration-500"
    >

      {/* Image container */}
      <div className="relative h-80 lg:h-96 overflow-hidden bg-zinc-800">
        <img
          ref={imageRef}
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover object-top"
        />

        {/* Permanent gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        {/* Hover overlay with bio + socials */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex flex-col justify-center items-center gap-5 p-6 opacity-0"
          style={{ background: `${trainer.accent}18`, backdropFilter: 'blur(4px)' }}
        >
          {/* Bio */}
          <p className="text-white text-sm text-center leading-relaxed font-light max-w-xs">
            {trainer.bio}
          </p>

          {/* Socials */}
          <div ref={socialsRef} className="flex items-center gap-3">
            {Object.entries(trainer.socials).map(([platform, href]) => (
              <a
                key={platform}
                href={href}
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                style={{
                  background: `${trainer.accent}30`,
                  border: `1px solid ${trainer.accent}50`,
                }}
                aria-label={platform}
              >
                {platform === 'instagram' && <InstagramIcon />}
                {platform === 'twitter'   && <TwitterIcon />}
                {platform === 'linkedin'  && <LinkedInIcon />}
              </a>
            ))}
          </div>

          {/* Book CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-xs font-black tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{ background: trainer.accent, color: '#fff' }}
          >
            Book Session
          </a>
        </div>

        {/* Exp badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="text-[9px] font-black tracking-[0.2em] uppercase px-2 py-1 rounded-sm"
            style={{
              background: `${trainer.accent}25`,
              color: trainer.accent,
              border: `1px solid ${trainer.accent}40`,
            }}
          >
            {trainer.exp}
          </span>
        </div>

      </div>

      {/* Card footer */}
      <div className="bg-zinc-900 p-5 flex flex-col gap-3">

        {/* Name + role */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-white font-black text-lg tracking-tight">
              {trainer.name}
            </h3>
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: trainer.accent }}
            />
          </div>
          <p className="text-gray-500 text-xs tracking-wide mt-0.5">
            {trainer.role}
          </p>
        </div>

        {/* Specialty tagline — hides on hover */}
        <p ref={taglineRef} className="text-gray-600 text-xs leading-snug">
          {trainer.specialty}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {trainer.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm"
              style={{
                background: `${trainer.accent}10`,
                color: `${trainer.accent}cc`,
                border: `1px solid ${trainer.accent}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default function Trainers() {
  const sectionRef = useRef(null)
  const labelRef   = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const stripRef   = useRef(null)

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

  return (
    <section
      ref={sectionRef}
      id="trainers"
      className="relative bg-black text-white py-24 lg:py-36 overflow-hidden"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div className="flex flex-col gap-5">

            <div ref={labelRef} className="flex items-center gap-3">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase">
                Meet The Team
              </span>
            </div>

            <h2
              ref={headingRef}
              className="font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              COACHED BY
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
              >
                THE BEST
              </span>
            </h2>

          </div>

          <p
            ref={subRef}
            className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right"
          >
            Every trainer at World Wide Fitness is handpicked for their
            expertise, passion, and proven ability to deliver results that
            last a lifetime.
          </p>

        </div>

        {/* Trainers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((trainer, index) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              index={index}
            />
          ))}
        </div>

        {/* Bottom strip */}
        <div
          ref={stripRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-sm overflow-hidden border border-white/5"
        >
          {[
            { label: 'All certified', sub: 'NSCA · ACE · NASM · RYT-500' },
            { label: 'Ongoing education', sub: 'Monthly upskilling & workshops' },
            { label: 'Results guaranteed', sub: 'Or your first month is free' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-950 hover:bg-zinc-900 px-8 py-6 flex flex-col gap-1 transition-colors duration-300"
            >
              <span className="text-white font-black text-sm tracking-wide">
                {item.label}
              </span>
              <span className="text-gray-600 text-xs tracking-wide">
                {item.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}