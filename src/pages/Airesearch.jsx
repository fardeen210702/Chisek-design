import React from 'react'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import AIHeroSection from '../components/AiresearchComponents/AIHeroSection'
import Airesearch2 from '../components/AiresearchComponents/Airesearch2'
import Airesearch3 from '../components/AiresearchComponents/Airesearch3'
import Airesearch4 from '../components/AiresearchComponents/Airesearch4'
import Airesearch5 from '../components/AiresearchComponents/Airesearch5'
import Airesearch6 from '../components/AiresearchComponents/Airesearch6'


const Airesearch = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
        <AIHeroSection/>
       <Airesearch2/>
        <Airesearch3 />
        <Airesearch4 />
      <Airesearch5/>
        <AiCasestudy />
    <Airesearch6/>
      </Box>
    </Box>
  )
}

export default Airesearch
