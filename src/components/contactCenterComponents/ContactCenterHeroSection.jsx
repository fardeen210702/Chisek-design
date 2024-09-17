import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Frame from '../../assets/imageFiles/Frame24.png';
import cc1 from '../../assets/imageFiles/cc1.png';
import vector from '../../assets/imageFiles/Vector1.png';



const ContactCenterHeroSection = () => {
  return (
    <Container  className='hero-container'
    maxWidth={false} 
    sx={{ paddingTop: { xs: '80px', lg: '190px',xl:'250px' }, height: { xs: '100vh',md:'130vh', lg: '800px' } }}
  >
    <Box className='hero-box1'
      sx={{ width: 'fit-content',  fontWeight: 'bold', marginY: '20px',}}
    >
      <Box component={'img'} sx={{ height: 24 }} src={cc1} alt="placeholder" />
      
      <Typography className='ai-services-text' sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word',color:'#117DCC' }}>
      Contact centers   
      </Typography>
    </Box>

    <Box>
      <Typography className='heading'
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold',  fontSize: { xs: '1.8rem', md: '36px', lg: '40px' }, fontFamily: 'inter' ,lineHeight:1.3 }}
      >
     Upgrade Your Contact Center with AI <br /> Solutions
        <Box component={'img'} src={vector} sx={{ width: { xs: '15px', md: '18px', lg: '26px' }, position: 'absolute', right: { lg: '334px' } , bottom:{xs:'18px',lg:"24px"}}} />
      </Typography>

      <Typography
      className='heading-text'
        variant="body1"
        component="p"
        sx={{fontSize: { xs: '14px', sm: '16px' },fontFamily:'inter' }}
      >
    Chisel’s AI solutions empower healthcare providers to improve patient outcomes, streamline operations, and deliver <br /> personalized care
      </Typography>
    </Box>

    <Button className='btn1'
      variant="outlined"
      color="secondary"
      sx={{ color:'#117DCC',backgroundColor:'#a0a0a028',marginTop:'48px',padding:'15px',border:'1px solid #2e2e2e',borderRadius:'8px',textTransform: 'capitalize', fontWeight: 'bolder', fontSize: { xl: '18px' } }}
    >
       Get Started Today <EastIcon />
    </Button>

    <Box component='img' src={Frame} sx={{ width: '84px', height: '66px', marginTop: '7%' }} />
  </Container>
  );
}

export default ContactCenterHeroSection;

 




