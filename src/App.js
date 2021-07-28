import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import CardSection from './Components/CardSection'
import Footer from './Components/Footer'

const App = () =>{
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <CardSection />
      <Footer />
    </div>
  )
}

export default App