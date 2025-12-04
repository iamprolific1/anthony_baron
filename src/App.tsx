import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Cases from './components/Cases';
import Timeline from './components/Timeline';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Cases />
        <Timeline />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
