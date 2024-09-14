import React from 'react'
import { Box, Container } from '@mui/material'
import IntelligentAITransformation from '../../../components/IntelligentAutomation/IntelligentAITransformation'
import IntelligentHeroSection from '../../../components/IntelligentAutomation/HeroSection'
import IntelligentAI from '../../../components/IntelligentAutomation/IntelligentAI'
import IntelligentAIimplement from '../../../components/IntelligentAutomation/IntelligentAIimplement'
import IntelligentTransformation from '../../../components/IntelligentAutomation/IntelligentTransformation'
import IntelligentTech from '../../../components/IntelligentAutomation/IntelligentTech'
import IntelligentCasestudy from '../../../components/IntelligentAutomation/IntelligentCasestudy'
import './IntelligentAutomation.css'
import '../../../components/Common/ServicepagesCSS/style.css'
import { useGLobalContext } from '../../../context/ContextApi'

const Services = () => {
  const {handleHide} = useGLobalContext()

  return (
    <Box onClick={handleHide} className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
      <IntelligentHeroSection/>
       <IntelligentAITransformation/>
        <IntelligentAI/>
        <IntelligentAIimplement/>
        <IntelligentTransformation />
        <IntelligentCasestudy />
        <IntelligentTech/>
      </Box>
    </Box>
  )
}

export default Services
