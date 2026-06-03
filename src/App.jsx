import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services  from './components/Services'
import Stats from './components/Stats'
function App() {
  return (
    <>
      <Navbar />
       <Hero />
       <About />
      <Services />
      <Stats />
       

      {/* Temporary dark background so navbar is visible */}
      <section id="hero" className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <h1 className="text-white text-5xl font-bold">Welcome to the Gym</h1>
      </section>

      <section id="programs" className="min-h-screen bg-zinc-900" />
      <section id="trainers" className="min-h-screen bg-zinc-800" />
      <section id="pricing" className="min-h-screen bg-zinc-900" />
      <section id="gallery" className="min-h-screen bg-zinc-800" />
      <section id="contact" className="min-h-screen bg-zinc-900" />   
    </>
  )
}

export default App