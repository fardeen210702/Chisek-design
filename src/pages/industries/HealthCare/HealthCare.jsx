import React from 'react'
import { Box } from '@mui/material'
import HealthCareHeroSection from '../../../components/HealthCareComponents/HealthCareHeroSection';
import HealthCareBenefits from '../../../components/HealthCareComponents/HealthCareBenefits';
import HealthCareEfficiency from '../../../components/HealthCareComponents/HealthCareEfficiency'
import HealthCareEngagement from '../../../components/HealthCareComponents/HealthcareEngagement'
import HealthCareAccess from '../../../components/HealthCareComponents/HealthCareAccess'
import HealthCareUseCase from '../../../components/HealthCareComponents/HealthCareUseCase'
import HealthCareServices from '../../../components/HealthCareComponents/HealthCareServices'
import { useGLobalContext } from '../../../context/ContextApi';
import '../../../components/Common/IndustryPagesCSS/style.css'
import './HealthCare.css'

const HealthCare = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide}  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
       
       <HealthCareHeroSection/>
       <HealthCareBenefits/>
       <HealthCareEfficiency/>
       <HealthCareEngagement/>
       <HealthCareAccess/>
       <HealthCareUseCase/>
       <HealthCareServices/>
      </Box>
    </Box>
  )
}

export default HealthCare
