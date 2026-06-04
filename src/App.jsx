import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Services      from './components/Services'
import Stats         from './components/Stats'
import Membership    from './components/Membership'
import Trainers      from './components/Trainers'
import Gallery       from './components/Gallery'
import Testimonials  from './components/Testimonials'
import Contact       from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Give DOM time to paint then refresh all ScrollTriggers
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Membership />
      <Trainers />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App