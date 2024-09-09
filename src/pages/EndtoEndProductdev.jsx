import React from 'react'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import EndHeroSection from '../components/EndtoEndProductComponents/EndHeroSection'
import EndToEnd2 from '../components/EndtoEndProductComponents/EndToEnd2'
import EndToEnd3 from '../components/EndtoEndProductComponents/EndToEnd3'
import EndToEnd4 from '../components/EndtoEndProductComponents/EndToEnd4'
import EndToEnd5 from '../components/EndtoEndProductComponents/EndToEnd5'
import EndToEnd6 from '../components/EndtoEndProductComponents/EndToEnd6'
import EndToEnd7 from '../components/EndtoEndProductComponents/EndToEnd7'



const EndtoEndProductdev = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
        <EndHeroSection/>
        <EndToEnd2 />
        <EndToEnd3 />
        <EndToEnd4/>
        <EndToEnd5/>
        <EndToEnd7 />
        <EndToEnd6 />
      </Box>
    </Box>
  )
}

export default EndtoEndProductdev
