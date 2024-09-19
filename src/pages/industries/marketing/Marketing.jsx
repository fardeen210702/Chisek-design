  import React from 'react'
import { Box } from '@mui/material'
import bg1 from '../../../assets/imageFiles/bg1.png';
import MarketingBenefits from '../../../components/MarketingComponents/MarketingBenefits'
import MarketingHeroSection from '../../../components/MarketingComponents/MarketingHeroSection';
import MarketingEngagement from '../../../components/MarketingComponents/MarketingEngagement'
import MarketingFrauds from '../../../components/MarketingComponents/MarketingFrauds'
import MarketingContent from '../../../components/MarketingComponents/MarketingContent';
import MarketingUseCase from '../../../components/MarketingComponents/MarketingUseCase'
import MarketingStrategies from '../../../components/MarketingComponents/MarketingStrategies'
import '../../../components/Common/IndustryPagesCSS/style.css'
import './Marketing.css'


const Marketing = () => {
  
  return (
    <Box   className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
       <MarketingHeroSection/>
       <MarketingBenefits/>
       <MarketingEngagement/>
       <MarketingFrauds/>
       <MarketingContent/>
       <MarketingUseCase/>
       <MarketingStrategies/>
      </Box>
    </Box>
  )
}

export default Marketing  
