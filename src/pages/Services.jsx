import React from 'react'
import ServiceHeroSection from '../components/ServicePageComponents/ServiceHeroSection'
import { Box, Container } from '@mui/material'
import BusinessWithAi from '../components/ServicePageComponents/BusinessWithAi'
import BusinessTransformation from '../components/ServicePageComponents/BusinessTransformation'
import AiTechnology from '../components/ServicePageComponents/AiTechnology'
import AiImplementation from '../components/ServicePageComponents/AiImplementation'
import AiTransformation from '../components/ServicePageComponents/AiTransformation'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'

const Services = () => {
  return (

    <Box  sx={{  width:'100%' , maxWidth:'1600px'}} >
    <ServiceHeroSection/>
    <BusinessTransformation/>
    <AiTechnology/>
    <AiImplementation/>
    <AiTransformation/>
    <AiCasestudy/>
    <BusinessWithAi/>
    </Box>
  )
}

export default Services
