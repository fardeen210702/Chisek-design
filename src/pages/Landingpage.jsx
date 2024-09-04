import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ServicesComponent from '../components/ServicesComponent'
import Industries from '../components/Industries'
import AITechnologies from '../components/AITechnologies'
import DeliverComponent from '../components/DeliverComponent'
import Testimonials from '../components/Testimonials'
import TrendsContainer from '../components/TrendsContainer'
import ExploreAI from '../components/ExploreAI'
// import Footer from '../components/Footer'

const Landingpage = () => {
  return (
    <>
    
    <Navbar/>
      <HeroSection/>
      <ServicesComponent/>
      <AITechnologies/>
      <Industries/>
      <DeliverComponent/>
      <Testimonials/>
      <TrendsContainer/>
      <ExploreAI/>
      {/* <Footer/> */}
      

      
    </>
  )
}

export default Landingpage
