import React from 'react'
import bg1 from '../../assets/imageFiles/bg1.png';
import { Box, Container } from '@mui/material'
import TechHeroSection from '../../components/TechnologiesComponents/TechHeroSection';
import Techspeech from '../../components/TechnologiesComponents/Techspeech';
import ImprovedEngagement from '../../components/TechnologiesComponents/ImrovedEngagement';
import CostandEfficiency from '../../components/TechnologiesComponents/CostandEfficiency';
import CustomizationControl from '../../components/TechnologiesComponents/Customization&Control';
import UseCaseTtoS from '../../components/TechnologiesComponents/UseCaseTtoS';
import Transform from '../../components/TechnologiesComponents/Transform';
import { useGLobalContext } from '../../context/ContextApi';

const Technologies = () => {
  const {handleHide} = useGLobalContext()
  return (
    <Box onClick={handleHide} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 14z0vh' } }}>
      <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
       <TechHeroSection/>
       <Techspeech/>
       <ImprovedEngagement/>
       <CostandEfficiency/>
       <CustomizationControl/>
       <UseCaseTtoS/>
       <Transform/>

      </Box>
    </Box>
  )
}

export default Technologies
