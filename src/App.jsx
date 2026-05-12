import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 noise">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
