import React from 'react'
import AiCasestudy from '../components/ServicePageComponents/AiCasestudy'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box } from '@mui/material'
import TechHeroSection from '../components/TechConsultingComponents/TechHeroSection'
import Technology from '../components/TechConsultingComponents/Technology'
import TechImplement from '../components/TechConsultingComponents/TechImplement'
import TechTransformation from '../components/TechConsultingComponents/TechTransformation'
import TechWithAi from '../components/TechConsultingComponents/TechWithAi'
import TechTransforming from '../components/TechConsultingComponents/TechTransforming'



const TechConsulting = ({handlehideDisplay}) => {
  return (
    <Box onClick={handlehideDisplay} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
        <TechHeroSection />
        <TechTransforming />
        <Technology />
        <TechImplement/>
        <TechTransformation />
        <AiCasestudy />
        <TechWithAi/>
      </Box>
    </Box>
  )
}

export default TechConsulting
