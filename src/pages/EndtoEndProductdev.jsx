import React from 'react'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import EndHeroSection from '../components/EndtoEndProductComponents/EndHeroSection'
import EndToEndProductDevelopment from '../components/EndtoEndProductComponents/EndToEndProductDevelopment'
import EndToEndDesign from '../components/EndtoEndProductComponents/EndToEndDesign'
import EndToEndDevAndLaunch from '../components/EndtoEndProductComponents/EndToEndDevAndLaunch'
import EndToEndKeyBenefits from '../components/EndtoEndProductComponents/EndToEndKeyBenefits'
import EndToEndCustomerExp from '../components/EndtoEndProductComponents/EndToEndCustomerExp'
import EndToEndCaseStudy from '../components/EndtoEndProductComponents/EndToEndCaseStudy'



const EndtoEndProductdev = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
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
