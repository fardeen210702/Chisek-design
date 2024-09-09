import React from 'react'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import CustomerHeroSection from '../components/CustomerSolutionsComponents/CustomerHeroSection'
import CustomerExp from '../components/CustomerSolutionsComponents/CustomerExp'
import CustomerInteraction from '../components/CustomerSolutionsComponents/CustomerInteraction'
import CustomerEngagement from '../components/CustomerSolutionsComponents/CustomerEngagement'
import CustomerBenefits from '../components/CustomerSolutionsComponents/CustomerBenefits'
import EleveateCustomerExperience from '../components/CustomerSolutionsComponents/EleveateCustomerExperience'
import CustomerCaseStudy from '../components/CustomerSolutionsComponents/CustomerCaseStudy'



const EndtoEndProductdev = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
        <CustomerHeroSection />
        <CustomerExp />
        <CustomerInteraction />
        <CustomerEngagement/>
        <CustomerBenefits/>
        <CustomerCaseStudy />
        <EleveateCustomerExperience />
      </Box>
    </Box>
  )
}

export default EndtoEndProductdev
