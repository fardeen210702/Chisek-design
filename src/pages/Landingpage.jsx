import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ServicesComponent from '../components/ServicesComponent'
import Industries from '../components/Industries'
import AITechnologies from '../components/AITechnologies'

const Landingpage = () => {
  return (
    <>
    
    <Navbar/>
      <HeroSection/>
      <ServicesComponent/>
      <AITechnologies/>
      <Industries/>

      
    </>
  )
}

export default Landingpage
