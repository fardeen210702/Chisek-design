import React from 'react'
import { Box, Container } from '@mui/material'
import CustomerHeroSection from '../../../components/CustomerSolutionsComponents/CustomerHeroSection'
import CustomerExp from '../../../components/CustomerSolutionsComponents/CustomerExp'
import CustomerInteraction from '../../../components/CustomerSolutionsComponents/CustomerInteraction'
import CustomerEngagement from '../../../components/CustomerSolutionsComponents/CustomerEngagement'
import CustomerBenefits from '../../../components/CustomerSolutionsComponents/CustomerBenefits'
import EleveateCustomerExperience from '../../../components/CustomerSolutionsComponents/EleveateCustomerExperience'
import CustomerCaseStudy from '../../../components/CustomerSolutionsComponents/CustomerCaseStudy'
import '../../../components/Common/servicePagesCSS/style.css'
import './CustomerSolution.css'
import { useGLobalContext } from '../../../context/ContextApi'



const EndtoEndProductdev = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide} className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
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
