import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CardSection/>
    </div>
  )
}
