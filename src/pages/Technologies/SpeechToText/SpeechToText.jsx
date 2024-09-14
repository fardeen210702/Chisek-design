import React from 'react'
import { Box } from '@mui/material'
import { useGLobalContext } from '../../../context/ContextApi';
import '../../../components/Common/TechnologyPagesCSS/style.css'
import './SpeechToText.css'
import HeroSection from '../../../components/SpeechToTextcomponents/HeroSection';
import Benefits from '../../../components/SpeechToTextcomponents/Benefits';
import EnhancedAccessibility from '../../../components/SpeechToTextcomponents/EnhancedAccessibility';
import SeamlessIntegration from '../../../components/SpeechToTextcomponents/SeamlessIntegration';
import ImprovedAccuracy from '../../../components/SpeechToTextcomponents/ImprovedAccuracy';
import SpeechUseCase from '../../../components/SpeechToTextcomponents/SpeechUseCase';
import CommunicationWithAi from '../../../components/SpeechToTextcomponents/CommunicationWithAi';

const SpeechToText = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide}  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 200vh'}}} >
      <Box className="content-box">
        <HeroSection/>
        <Benefits/>
        <EnhancedAccessibility/>
        <SeamlessIntegration/>
        <ImprovedAccuracy/>
        <SpeechUseCase/>
        <CommunicationWithAi/>

      </Box>
    </Box>
  )
}

export default SpeechToText
