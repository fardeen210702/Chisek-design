import React from 'react'
import { Box } from '@mui/material'
import bg1 from '../assets/imageFiles/bg1.png';
import MarketingStrategies from '../components/MarketingComponents/MarketingStrategies'
import HealthCareHeroSection from '../components/HealthCareComponents/HealthCareHeroSection';
import HealthCareBenefits from '../components/HealthCareComponents/HealthCareBenefits';
import HealthCareEfficiency from '../components/HealthCareComponents/HealthCareEfficiency'
import HealthCareEngagement from '../components/HealthCareComponents/HealthcareEngagement'
import HealthCareAccess from '../components/HealthCareComponents/HealthCareAccess'
import HealthCareUseCase from '../components/HealthCareComponents/HealthCareUseCase'
import HealthCareServices from '../components/HealthCareComponents/HealthCareServices'


const HealthCare = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-13%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
       
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
