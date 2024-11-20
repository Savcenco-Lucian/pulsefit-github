import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Banner_1 from './components/Banner_1'
import Classes from './components/Classes'
import Gym_Spaces from './components/Gym_Spaces'
import Banner_2 from './components/Banner_2'
import PriceCard from './components/PriceCard'
import OurTeam from './components/OurTeam'
import Banner_3 from './components/Banner_3'
import Testimonials from './components/Testimonials'
import Banner_4 from './components/Banner_4'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Banner_1 />
      <Classes />
      <Gym_Spaces />
      <Banner_2 />
      <PriceCard />
      <OurTeam />
      <Banner_3 />
      <Testimonials />
      <Banner_4 />
      <Footer />
    </div>
  )
}

export default App
