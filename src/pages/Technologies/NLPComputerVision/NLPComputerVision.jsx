import React from 'react'
import { Box, Container } from '@mui/material'
import HeroSection from '../../../components/NLPComputerVisionComponents/HeroSection'
import Benefits from '../../../components/NLPComputerVisionComponents/Benefits'
import DataAnalyze from '../../../components/NLPComputerVisionComponents/DataAnalyze'
import Imageprocessing from '../../../components/NLPComputerVisionComponents/Imageprocessing'
import StreamlineOperations from '../../../components/NLPComputerVisionComponents/StreamlineOperations'
import VisualContent from '../../../components/NLPComputerVisionComponents/VisualContent'
import UseCase from '../../../components/NLPComputerVisionComponents/UseCase'
import '../../../components/Common/TechnologyPagesCSS/style.css'
import './NLPComputerVision.css'


const NLPComputerVision = () => {
  return (
    <Box  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 200vh'}}} >
      <Box className="content-box">
        <HeroSection/>
        <Benefits />
       <VisualContent/>
       <DataAnalyze/>
       <StreamlineOperations/>
       <UseCase/>
       <Imageprocessing />
      

      </Box>
    </Box>
  )
}

export default NLPComputerVision
