import React from 'react'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import AIHeroSection from '../components/AiresearchComponents/AIHeroSection'
import AIdevAndResearch from '../components/AiresearchComponents/AIdevAndResearch'
import AICustomDev from '../components/AiresearchComponents/AICustomDev'
import AIHeading from '../components/AiresearchComponents/AIHeading'
import AIKeyBenefits from '../components/AiresearchComponents/AIKeyBenefits'
import AIInnovate from '../components/AiresearchComponents/AIInnovate'


const Airesearch = ({ handlehideDisplay }) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width: '100%', maxWitdh: '1600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <AIHeroSection />
        <AIdevAndResearch />
        <AICustomDev />
        <AIHeading />
        <AIKeyBenefits />
        <AiCasestudy />
        <AIInnovate />
      </Box>
    </Box>
  )
}

export default Airesearch
