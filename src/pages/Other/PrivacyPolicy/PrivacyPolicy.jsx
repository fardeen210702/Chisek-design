import { Box } from '@mui/material'
import React from 'react'
import PrivacyHeroSection from '../../../components/PrivacyPolicyComponents/PrivacyHeroSection'
import bg1 from '../../../assets/imageFiles/bg1.png';
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {

  return (
    <Box  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">

      <PrivacyHeroSection/>
    </Box>
  </Box>
  )
}

export default PrivacyPolicy
