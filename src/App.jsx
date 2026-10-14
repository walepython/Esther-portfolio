import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Strategy from './components/Strategy'
import ContentShowcase from './components/Content'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Strategy />
      <ContentShowcase />
      <Contact />
      <Footer />
    </>
  )
}