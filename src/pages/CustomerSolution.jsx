import React from 'react'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import CustomerHeroSection from '../components/CustomerSolutionsComponents/CustomerHeroSection'
import Customer2 from '../components/CustomerSolutionsComponents/Customer2'
import Customer3 from '../components/CustomerSolutionsComponents/Customer3'
import Customer4 from '../components/CustomerSolutionsComponents/Customer4'
import Customer5 from '../components/CustomerSolutionsComponents/Customer5'
import Customer6 from '../components/CustomerSolutionsComponents/Customer6'
import Customer7 from '../components/CustomerSolutionsComponents/Customer7'



const EndtoEndProductdev = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
        <CustomerHeroSection />
        <Customer2 />
        <Customer3 />
        <Customer4/>
        <Customer5/>
        <Customer7 />
        <Customer6 />
      </Box>
    </Box>
  )
}

export default EndtoEndProductdev
