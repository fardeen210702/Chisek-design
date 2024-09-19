import React from 'react'
import { Box } from '@mui/material'
import IndustryHeroSection from '../../../components/BankingAndFinanceComponents/IndustryHeroSection'
import bg1 from '../../../assets/imageFiles/bg1.png';
import EnhancedOperations from '../../../components/BankingAndFinanceComponents/EnhancedOperations';
import CustomerSatisfaction from '../../../components/BankingAndFinanceComponents/CustomerSatisfaction';
import EnhancedFraud from '../../../components/BankingAndFinanceComponents/EnhancedFraud';
import FinancialProducts from '../../../components/BankingAndFinanceComponents/FinancialProducts';
import Revolutionize from '../../../components/BankingAndFinanceComponents/Revolutionize';
import AIbankingandFinance from '../../../components/BankingAndFinanceComponents/AIbankingandFinance';
import '../../../components/Common/IndustryPagesCSS/style.css'
import './BankingAndFinance.css'


const BankingAndFinance = () => {
  
  return (
    <Box  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
      <Box className="content-box">
       
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
