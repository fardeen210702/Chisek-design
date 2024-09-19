import React from 'react'
import { Box, Container } from '@mui/material'
import '../../../components/Common/TechnologyPagesCSS/style.css'
import './NLPAnalysis.css'
import HeroSection from '../../../components/NLPAnalysiscomponents/HeroSection';
import Benefits from '../../../components/NLPAnalysiscomponents/Benefits';
import CustomerReaction from '../../../components/NLPAnalysiscomponents/CustomerReaction';
import AutomatedContent from '../../../components/NLPAnalysiscomponents/AutomatedContent'
import SentimentAnalysis from '../../../components/NLPAnalysiscomponents/SentimentAnalysis';
import UseCase from '../../../components/NLPAnalysiscomponents/UseCase'
import PowerOfNlp from '../../../components/NLPAnalysiscomponents/PowerOfNlp'

const NLPAnalysis = () => {
  return (
    <Box   className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 200vh'}}} >
      <Box className="content-box">
        <HeroSection/>
        <Benefits/>
        <CustomerReaction />
        <AutomatedContent />
        <SentimentAnalysis/>
        <UseCase />
        <PowerOfNlp />
      

      </Box>
    </Box>
  )
}

export default NLPAnalysis
