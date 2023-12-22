import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='snap-mandatory snap-y'>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default App
