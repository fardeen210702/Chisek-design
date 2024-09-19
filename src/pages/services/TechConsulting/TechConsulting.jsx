import React from 'react'
import AiCasestudy from '../../../components/AiTransformationComps/AiCasestudy'
import bg1 from '../../../assets/imageFiles/bg1.png';
import { Box } from '@mui/material'
import TechHeroSection from '../../../components/TechConsultingComponents/TechHeroSection'
import Technology from '../../../components/TechConsultingComponents/Technology'
import TechTransformation from '../../../components/TechConsultingComponents/TechTransformation'
import TechWithAi from '../../../components/TechConsultingComponents/TechWithAi'
import TechTransforming from '../../../components/TechConsultingComponents/TechTransforming'
import TechImplementation from '../../../components/TechConsultingComponents/TechImplementation';
import '../../../components/Common/ServicepagesCSS/style.css'
import './TechConsulting.css'



const TechConsulting = () => {

  
  return (
    <Box className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
        <TechHeroSection />
        <TechTransforming />
        <Technology />
        <TechImplementation/>
        <TechTransformation />
        <AiCasestudy />
        <TechWithAi/>
      </Box>
    </Box>
  )
}

export default TechConsulting
