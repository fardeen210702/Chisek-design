import React from 'react'
import { Box } from '@mui/material'
import bg1 from '../../../assets/imageFiles/bg1.png';
import ContactCenterHeroSection from '../../../components/contactCenterComponents/ContactCenterHeroSection'
import ContactCenterBenefits from '../../../components/contactCenterComponents/ContactCenterBenefits'
import OptimizedWorkForce from '../../../components/contactCenterComponents/OptimizedWorkForce'
import CustomerEngagement from '../../../components/contactCenterComponents/CustomerEngagement'
import PriceStrategies from '../../../components/contactCenterComponents/PriceStrategies'
import CCUseCases from '../../../components/contactCenterComponents/CCUseCases'
import ContactCenterServices from '../../../components/contactCenterComponents/ContactCenterServices';
import { useGLobalContext } from '../../../context/ContextApi';
import '../../../components/Common/IndustryPagesCSS/style.css'
import './ContactCenter.css'

const ContactCenter = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide}  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
       
       <ContactCenterHeroSection/>
       <ContactCenterBenefits/>
       <OptimizedWorkForce/>
       <CustomerEngagement/>
       <PriceStrategies/>
       <CCUseCases/>
       <ContactCenterServices/>
      </Box>
    </Box>
  )
}

export default ContactCenter
