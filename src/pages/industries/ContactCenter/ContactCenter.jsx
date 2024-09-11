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

const ContactCenter = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-13%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
       
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
