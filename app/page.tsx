import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'
import CustomerSection from './components/CustomerSection'
import PricingSection from './components/PricingSection'

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CardSection/>
      <CustomerSection/>
      <PricingSection/>
    </div>
  )
}
