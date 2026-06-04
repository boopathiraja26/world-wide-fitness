import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CONTACT_INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: '42 Fitness Avenue, Salem',
    sub: 'Tamil Nadu, India 636001',
    accent: '#ef4444',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    sub: 'Mon – Sat, 6am – 10pm',
    accent: '#f59e0b',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@worldwidefitness.in',
    sub: 'We reply within 2 hours',
    accent: '#10b981',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Hours',
    value: 'Mon – Sat: 5am – 11pm',
    sub: 'Sunday: 7am – 8pm',
    accent: '#3b82f6',
  },
]

const WHATSAPP_NUMBER = '919876543210'
const WHATSAPP_MSG    = encodeURIComponent("Hi! I'd like to know more about membership plans at World Wide Fitness.")

function InputField({ label, id, type = 'text', placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`
          w-full bg-zinc-900 border rounded-sm px-4 py-3
          text-white text-sm placeholder-gray-600
          outline-none transition-all duration-300
          ${focused
            ? 'border-red-500/60 bg-zinc-800/80'
            : 'border-white/10 hover:border-white/20'
          }
        `}
      />
    </div>
  )
}

function SelectField({ label, id, value, onChange, options, required }) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`
          w-full bg-zinc-900 border rounded-sm px-4 py-3
          text-sm outline-none transition-all duration-300
          appearance-none cursor-pointer
          ${focused
            ? 'border-red-500/60 bg-zinc-800/80 text-white'
            : 'border-white/10 hover:border-white/20 text-gray-400'
          }
          ${value ? 'text-white' : 'text-gray-600'}
        `}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-zinc-900 text-white">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function TextareaField({ label, id, placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={4}
        className={`
          w-full bg-zinc-900 border rounded-sm px-4 py-3
          text-white text-sm placeholder-gray-600
          outline-none transition-all duration-300 resize-none
          ${focused
            ? 'border-red-500/60 bg-zinc-800/80'
            : 'border-white/10 hover:border-white/20'
          }
        `}
      />
    </div>
  )
}

export default function Contact() {
  const sectionRef  = useRef(null)
  const labelRef    = useRef(null)
  const headingRef  = useRef(null)
  const subRef      = useRef(null)
  const leftRef     = useRef(null)
  const rightRef    = useRef(null)
  const mapRef      = useRef(null)
  const infoRef     = useRef(null)

  const [form, setForm]         = useState({ name: '', email: '', phone: '', plan: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]    = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

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

      gsap.from(leftRef.current, {
        scrollTrigger: { trigger: leftRef.current, start: 'top 85%' },
        autoAlpha: 0, x: -40, duration: 0.9, ease: 'power3.out', delay: 0.1,
      })

      gsap.from(rightRef.current, {
        scrollTrigger: { trigger: rightRef.current, start: 'top 85%' },
        autoAlpha: 0, x: 40, duration: 0.9, ease: 'power3.out', delay: 0.2,
      })

      gsap.from(infoRef.current.children, {
        scrollTrigger: { trigger: infoRef.current, start: 'top 88%' },
        autoAlpha: 0, y: 20, duration: 0.6, ease: 'power3.out', stagger: 0.1,
      })

      gsap.from(mapRef.current, {
        scrollTrigger: { trigger: mapRef.current, start: 'top 90%' },
        autoAlpha: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.2,
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-black text-white py-24 lg:py-36 overflow-hidden"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">

          <div ref={labelRef} className="flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase">
              Get In Touch
            </span>
            <span className="w-8 h-px bg-red-500" />
          </div>

          <h2
            ref={headingRef}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            START YOUR
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
            >
              JOURNEY
            </span>
          </h2>

          <p
            ref={subRef}
            className="text-gray-500 text-sm leading-relaxed max-w-md"
          >
            Ready to transform your life? Reach out and one of our coaches
            will get back to you within 2 hours to plan your first session.
          </p>

        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">

          {/* Left — Contact info */}
          <div ref={leftRef} className="flex flex-col gap-8">

            {/* Info cards */}
            <div ref={infoRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_INFO.map((info, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-5 rounded-sm border border-white/5 hover:border-white/15 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all duration-300 group"
                >
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center"
                    style={{
                      background: `${info.accent}15`,
                      color: info.accent,
                      border: `1px solid ${info.accent}30`,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] tracking-widest uppercase font-bold mb-1">
                      {info.label}
                    </p>
                    <p className="text-white text-sm font-bold leading-snug">
                      {info.value}
                    </p>
                    <p className="text-gray-600 text-xs mt-0.5">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-sm border border-emerald-500/25 hover:border-emerald-500/60 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-emerald-400 font-black text-sm tracking-wide">
                  Chat on WhatsApp
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Instant replies during gym hours
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </a>

            {/* Map placeholder */}
            <div
              ref={mapRef}
              className="relative rounded-sm overflow-hidden border border-white/5 h-52"
            >
              <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center gap-3">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center animate-pulse">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-sm">World Wide Fitness</p>
                    <p className="text-gray-500 text-xs">42 Fitness Avenue, Salem, TN</p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold tracking-widest uppercase text-red-500 hover:text-red-400 transition-colors border border-red-500/30 hover:border-red-500/60 px-3 py-1.5 rounded-sm"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right — Contact form */}
          <div
            ref={rightRef}
            className="relative rounded-sm border border-white/5 bg-zinc-900/40 p-8"
          >
            {/* Form top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-t-sm" />

            {!submitted ? (
              <>
                <div className="flex flex-col gap-1 mb-8">
                  <h3 className="text-white font-black text-xl tracking-tight">
                    Book a Free Consultation
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Fill in your details and we will reach out within 2 hours.
                  </p>
                </div>

                <div className="flex flex-col gap-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      id="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={update('name')}
                      required
                    />
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={update('email')}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Phone"
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={update('phone')}
                    />
                    <SelectField
                      label="Interested Plan"
                      id="plan"
                      value={form.plan}
                      onChange={update('plan')}
                      options={[
                        { value: '',         label: 'Select a plan...' },
                        { value: 'basic',    label: 'Basic — ₹29/mo'    },
                        { value: 'standard', label: 'Standard — ₹59/mo' },
                        { value: 'premium',  label: 'Premium — ₹99/mo'  },
                      ]}
                    />
                  </div>

                  <TextareaField
                    label="Message"
                    id="message"
                    placeholder="Tell us about your fitness goals..."
                    value={form.message}
                    onChange={update('message')}
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email}
                    className={`
                      group relative w-full py-4 rounded-sm text-sm font-black tracking-widest uppercase
                      overflow-hidden transition-all duration-300 active:scale-[0.98]
                      ${loading || !form.name || !form.email
                        ? 'bg-zinc-700 text-gray-500 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-500 text-white cursor-pointer'
                      }
                    `}
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    By submitting you agree to our Privacy Policy. No spam, ever.
                  </p>

                </div>
              </>
            ) : (
              /* Success state */
              <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={2} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-black text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    Thanks {form.name.split(' ')[0]}! One of our coaches will reach out to you at{' '}
                    <span className="text-white">{form.email}</span> within 2 hours.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', plan: '', message: '' }) }}
                  className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-sm"
                >
                  Send Another
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}