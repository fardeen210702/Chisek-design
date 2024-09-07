import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../components/landingpageComponents/HeroSection'
import ServicesComponent from '../components/landingpageComponents/ServicesComponent'
import Industries from '../components/landingpageComponents/Industries'
import AITechnologies from '../components/landingpageComponents/AITechnologies'
import DeliverComponent from '../components/landingpageComponents/DeliverComponent'
import Testimonials from '../components/landingpageComponents/Testimonials'
import TrendsContainer from '../components/landingpageComponents/TrendsContainer'
import ExploreAI from '../components/landingpageComponents/ExploreAI'
import CaseStudy from '../components/landingpageComponents/CaseStudy'

const Landingpage = () => {
  return (
    <Box sx={{ width:'100%', display:'flex', flexDirection:'column' , alignItems:'center'}}>
    <Box sx={{maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}}>

    
      <HeroSection/>
      <ServicesComponent/>
      <AITechnologies/>
      <Industries/>
      <DeliverComponent/>
      <CaseStudy/>
      <Testimonials/>
      <TrendsContainer/>
      <ExploreAI/>
      
    </Box>

      
    </Box>
  )
}

export default Landingpage
