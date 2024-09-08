import React from 'react'
import { Box } from '@mui/material'
import IndustryHeroSection from '../components/IndustriesComponents/IndustryHeroSection'
import bg1 from '../assets/imageFiles/bg1.png';
import EnhancedOperations from '../components/IndustriesComponents/EnhancedOperations';
import CustomerSatisfaction from '../components/IndustriesComponents/CustomerSatisfaction';
import EnhancedFraud from '../components/IndustriesComponents/EnhancedFraud';
import FinancialProducts from '../components/IndustriesComponents/FinancialProducts';
import Revolutionize from '../components/IndustriesComponents/Revolutionize';
import AIbankingandFinance from '../components/IndustriesComponents/AIbankingandFinance';


const Industries = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-13%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
       
       <IndustryHeroSection/>
       <EnhancedOperations/>
       <CustomerSatisfaction/>
       <EnhancedFraud/>
       <FinancialProducts/>
       <AIbankingandFinance/>
       <Revolutionize/>
      </Box>
    </Box>
  )
}

export default Industries
