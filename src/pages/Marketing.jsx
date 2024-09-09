import React from 'react'
import { Box } from '@mui/material'
import bg1 from '../assets/imageFiles/bg1.png';
import MarketingBenefits from '../components/MarketingComponents/MarketingBenefits'
import MarketingHeroSection from '../components/MarketingComponents/MarketingHeroSection';
import MarketingEngagement from '../components/MarketingComponents/MarketingEngagement'
import MarketingFrauds from '../components/MarketingComponents/MarketingFrauds'
import MarketingContent from '../components/MarketingComponents/MarketingContent';
import MarketingUseCase from '../components/MarketingComponents/MarketingUseCase'
import MarketingStrategies from '../components/MarketingComponents/MarketingStrategies'

const Marketing = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-13%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
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
