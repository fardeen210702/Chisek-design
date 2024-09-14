import React from 'react'
import bg1 from '../../../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import EndHeroSection from '../../../components/EndtoEndProductComponents/EndHeroSection'
import EndToEndProductDevelopment from '../../../components/EndtoEndProductComponents/EndToEndProductDevelopment'
import EndToEndDesign from '../../../components/EndtoEndProductComponents/EndToEndDesign'
import EndToEndDevAndLaunch from '../../../components/EndtoEndProductComponents/EndToEndDevAndLaunch'
import EndToEndKeyBenefits from '../../../components/EndtoEndProductComponents/EndToEndKeyBenefits'
import EndToEndCustomerExp from '../../../components/EndtoEndProductComponents/EndToEndCustomerExp'
import EndToEndCaseStudy from '../../../components/EndtoEndProductComponents/EndToEndCaseStudy'
import '../../../components/Common/ServicepagesCSS/style.css'
import './EndtoEndProductdev.css'
import { useGLobalContext } from '../../../context/ContextApi';


const EndtoEndProductdev = () => {
  const {handleHide}= useGLobalContext()
  return (
    <Box onClick={handleHide} className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
        <EndHeroSection/>
        <EndToEndProductDevelopment />
        <EndToEndDesign />
        <EndToEndDevAndLaunch/>
        <EndToEndKeyBenefits/>
        <EndToEndCaseStudy />
        <EndToEndCustomerExp />
      </Box>
    </Box>
  )
}

export default EndtoEndProductdev
