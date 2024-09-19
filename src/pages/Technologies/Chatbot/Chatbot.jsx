import React from 'react'
import { Box, Container } from '@mui/material'
import HeroSection from '../../../components/ChatbotComponents/HeroSection'
import Benefits from '../../../components/ChatbotComponents/Benefits'
import CustomerReaction from '../../../components/ChatbotComponents/CustomerReaction'
import DataAnalyze from '../../../components/ChatbotComponents/DataAnalyze'
import LLMs from '../../../components/ChatbotComponents/LLMs'
import UseCase from '../../../components/ChatbotComponents/UseCase'
import UserExp from '../../../components/ChatbotComponents/UserExp'
import '../../../components/Common/TechnologyPagesCSS/style.css'
import './Chatbot.css'

const Chatbot = () => {
  return (
    <Box   className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 200vh'}}} >
      <Box className="content-box">
        <HeroSection />
        <Benefits />
        <CustomerReaction />
        <DataAnalyze/>
        <LLMs/> 
        <UseCase />
        <UserExp />


      </Box>
    </Box>
  )
}

export default Chatbot
