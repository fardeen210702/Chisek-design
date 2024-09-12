import React from 'react'
import ServiceHeroSection from '../../../components/AiTransformationComps/ServiceHeroSection'
import BusinessWithAi from '../../../components/AiTransformationComps/BusinessWithAi'
import BusinessTransformation from '../../../components/AiTransformationComps/BusinessTransformation'
import AiTechnology from '../../../components/AiTransformationComps/AiTechnology'
import AiImplementation from '../../../components/AiTransformationComps/AiImplementation'
import AiTransformation from '../../../components/AiTransformationComps/AiTransformation'
import AiCasestudy from '../../../components/AiTransformationComps/AiCasestudy'
import { Box, Container } from '@mui/material';
import '../../../components/Common/servicePagesCSS/style.css'
import './AiTransformation.css'

import { useGLobalContext } from '../../../context/ContextApi'

const Services = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide}  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
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
