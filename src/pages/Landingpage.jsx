import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../components/landingpageComponents/HeroSection'
import ServicesComponent from '../components/landingpageComponents/ServicesComponent'
import Industries from '../components/landingpageComponents/IndustriesComponent'
import AITechnologies from '../components/landingpageComponents/AITechnologies'
import DeliverComponent from '../components/landingpageComponents/DeliverComponent'
import Testimonials from '../components/landingpageComponents/Testimonials'
import TrendsContainer from '../components/landingpageComponents/TrendsContainer'
import ExploreAI from '../components/landingpageComponents/ExploreAI'
import CaseStudy from '../components/landingpageComponents/CaseStudy'
import bg1 from '../assets/imageFiles/bg1.png';


const Landingpage = () => {
  return (
    <Box sx={{ width:'100%', display:'flex', flexDirection:'column' , alignItems:'center',backgroundImage: `url(${bg1})`,backgroundRepeat:'no-repeat', backgroundPosition: 'top',marginTop:{ xs:'-29.5%', md:'-10%',lg:'-9%',xl:'-7.5%'}, backgroundColor: 'transparent',backgroundSize:{  xs:'120vh',md:'100% ',xl:'100% 140vh'}}}>
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
