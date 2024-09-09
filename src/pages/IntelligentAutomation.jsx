import React from 'react'
import BusinessWithAi from '../components/ServicePageComponents/BusinessWithAi'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import IntelligentAITransformation from '../components/IntelligaentAutomationComponent/IntelligentAITransformation'
import IntelligentHeroSection from '../components/IntelligaentAutomationComponent/IntelligentHeroSection'
import IntelligentAI from '../components/IntelligaentAutomationComponent/IntelligentAI'
import IntelligentAIimplement from '../components/IntelligaentAutomationComponent/IntelligentAIimplement'
import IntelligentTransformation from '../components/IntelligaentAutomationComponent/IntelligentTransformation'
import IntelligentTech from '../components/IntelligaentAutomationComponent/IntelligentTech'
import IntelligentCasestudy from '../components/IntelligaentAutomationComponent/IntelligentCasestudy'


const Services = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
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
