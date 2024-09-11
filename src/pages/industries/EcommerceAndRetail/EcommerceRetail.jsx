import React from 'react'
import { Box } from '@mui/material'
import bg1 from '../../../assets/imageFiles/bg1.png';
import EcommerceHeroSection from '../../../components/EcommerceRetailComponents/EcommerceHeroSection'
import EcommerceBenefits from '../../../components/EcommerceRetailComponents/EcommerceBenefits'
import EcommerceImprovedManagement from '../../../components/EcommerceRetailComponents/EcommerceImprovedManagement'
import EcommerceRetention from '../../../components/EcommerceRetailComponents/EcommerceRetention'
import EcommercePricingStrategies from '../../../components/EcommerceRetailComponents/EcommercePricingStrategies';
import EcommerceUseCase from '../../../components/EcommerceRetailComponents/EcommerceUseCase'
import EcommerceServices from '../../../components/EcommerceRetailComponents/EcommerceServices'
import { useGLobalContext } from '../../../context/ContextApi';
const EcommerceRetail = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-13%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
       
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
