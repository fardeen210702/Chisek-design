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
import Footer from '../components/Footer'
import CaseStudy from '../components/CaseStudy'

const Landingpage = () => {
  return (
    <Box sx={{ width:'100%', display:'flex', flexDirection:'column' , alignItems:'center'}}>
    <Box sx={{maxWitdh:'1600px', border:'1px solid pink' , display:'flex', flexDirection:'column' , alignItems:'center'}}>

    <Navbar/>
      <HeroSection/>
      <ServicesComponent/>
      <AITechnologies/>
      <Industries/>
      <DeliverComponent/>
      <CaseStudy/>
      <Testimonials/>
      <TrendsContainer/>
      <ExploreAI/>
      <Footer/>
      
    </Box>

      
    </Box>
  )
}

export default Landingpage
