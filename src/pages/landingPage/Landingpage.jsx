import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../../components/landingpageComponents/HeroSection'
import ServicesComponent from '../../components/landingpageComponents/ServicesComponent'
import Industries from '../../components/landingpageComponents/IndustriesComponent'
import AITechnologies from '../../components/landingpageComponents/AITechnologies'
import DeliverComponent from '../../components/landingpageComponents/DeliverComponent'
import Testimonials from '../../components/landingpageComponents/Testimonials'
import TrendsContainer from '../../components/landingpageComponents/TrendsContainer'
import ExploreAI from '../../components/landingpageComponents/ExploreAI'
import CaseStudy from '../../components/landingpageComponents/CaseStudy'
import { useGLobalContext } from '../../context/ContextApi'
import './Landingpage.css'


const Landingpage = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide}  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">

    
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
