import React from 'react'
import { Box, Container } from '@mui/material'
import TechHeroSection from '../../../components/TextToSpeechcomponents/TechHeroSection';
import Techspeech from '../../../components/TextToSpeechcomponents/Techspeech';
import ImprovedEngagement from '../../../components/TextToSpeechcomponents/ImrovedEngagement';
import CostandEfficiency from '../../../components/TextToSpeechcomponents/CostandEfficiency';
import CustomizationControl from '../../../components/TextToSpeechcomponents/Customization&Control';
import UseCaseTtoS from '../../../components/TextToSpeechcomponents/UseCaseTtoS';
import Transform from '../../../components/TextToSpeechcomponents/Transform';
import { useGLobalContext } from '../../../context/ContextApi';
import '../../../components/Common/TechnologyPagesCSS/style.css'
import './TextToSpeech.css'

const Technologies = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide}  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 200vh'}}} >
      <Box className="content-box">
       <TechHeroSection/>
       <Techspeech/>
       <ImprovedEngagement/>
       <CostandEfficiency/>
       <CustomizationControl/>
       <UseCaseTtoS/>
       <Transform/>

      </Box>
    </Box>
  )
}

export default Technologies
