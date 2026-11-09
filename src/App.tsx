import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Education } from '@/sections/Education'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Skills } from '@/sections/Skills'
import { Solutions } from '@/sections/Solutions'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
