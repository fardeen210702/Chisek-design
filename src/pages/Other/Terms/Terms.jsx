import React from 'react'
import TermsHerosection from '../../../components/TermsComponent/TermsHerosection'
import bg1 from '../../../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import './Terms.css'
const Terms = () => {


  return (
    <Box  className="container-box" sx={{ backgroundSize: { xs: '250% 120vh', md: '100% 110vh', lg: '100% 150vh' } }} >
      <Box className="content-box">
        <TermsHerosection />
      </Box>
    </Box>
  )
}

export default Terms
