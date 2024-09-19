import React from 'react'
import { Box } from '@mui/material'
import EcommerceHeroSection from '../../../components/EcommerceRetailComponents/EcommerceHeroSection'
import EcommerceBenefits from '../../../components/EcommerceRetailComponents/EcommerceBenefits'
import EcommerceImprovedManagement from '../../../components/EcommerceRetailComponents/EcommerceImprovedManagement'
import EcommerceRetention from '../../../components/EcommerceRetailComponents/EcommerceRetention'
import EcommercePricingStrategies from '../../../components/EcommerceRetailComponents/EcommercePricingStrategies';
import EcommerceUseCase from '../../../components/EcommerceRetailComponents/EcommerceUseCase'
import EcommerceServices from '../../../components/EcommerceRetailComponents/EcommerceServices'
import '../../../components/Common/IndustryPagesCSS/style.css'
import './EcommerceRetail.css'

const EcommerceRetail = () => {
  return (
    <Box   className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
       
       <EcommerceHeroSection/>
       <EcommerceBenefits/>
       <EcommerceImprovedManagement/>
       <EcommerceRetention/>
       <EcommercePricingStrategies/>
       <EcommerceUseCase/>
       <EcommerceServices/>
      </Box>
    </Box>
  )
}

export default EcommerceRetail
