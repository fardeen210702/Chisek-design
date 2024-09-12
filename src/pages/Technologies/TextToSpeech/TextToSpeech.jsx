import React from 'react'
import bg1 from '../../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import TechHeroSection from '../../../components/TechnologiesComponents/TechHeroSection';
import Techspeech from '../../../components/TechnologiesComponents/Techspeech';
import ImprovedEngagement from '../../../components/TechnologiesComponents/ImrovedEngagement';
import CostandEfficiency from '../../../components/TechnologiesComponents/CostandEfficiency';
import CustomizationControl from '../../../components/TechnologiesComponents/Customization&Control';
import UseCaseTtoS from '../../../components/TechnologiesComponents/UseCaseTtoS';
import Transform from '../../../components/TechnologiesComponents/Transform';
import { useGLobalContext } from '../../../context/ContextApi';
import '../../../components/Common/TechnologyPagesCSS/style.css'
import './TextTpSpeech.css'

const Technologies = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide}  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
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
