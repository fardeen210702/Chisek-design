import React from 'react'
import ServiceHeroSection from '../components/ServicePageComponents/ServiceHeroSection'
import BusinessWithAi from '../components/ServicePageComponents/BusinessWithAi'
import BusinessTransformation from '../components/ServicePageComponents/BusinessTransformation'
import AiTechnology from '../components/ServicePageComponents/AiTechnology'
import AiImplementation from '../components/ServicePageComponents/AiImplementation'
import AiTransformation from '../components/ServicePageComponents/AiTransformation'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'


const Services = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
        <ServiceHeroSection />
        <BusinessTransformation />
        <AiTechnology />
        <AiImplementation />
        <AiTransformation />
        <AiCasestudy />

        <BusinessWithAi />
      </Box>
    </Box>
  )
}

export default Services
