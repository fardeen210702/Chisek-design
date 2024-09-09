import React from 'react'
import { Box } from '@mui/material'
import IndustryHeroSection from '../components/BankingAndFinanceComponents/IndustryHeroSection'
import bg1 from '../assets/imageFiles/bg1.png';
import EnhancedOperations from '../components/BankingAndFinanceComponents/EnhancedOperations';
import CustomerSatisfaction from '../components/BankingAndFinanceComponents/CustomerSatisfaction';
import EnhancedFraud from '../components/BankingAndFinanceComponents/EnhancedFraud';
import FinancialProducts from '../components/BankingAndFinanceComponents/FinancialProducts';
import Revolutionize from '../components/BankingAndFinanceComponents/Revolutionize';
import AIbankingandFinance from '../components/BankingAndFinanceComponents/AIbankingandFinance';


const BankingAndFinance = ({handlehideDisplay}) => {
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

export default BankingAndFinance
