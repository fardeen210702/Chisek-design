import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Frame from '../../assets/imageFiles/Frame24.png';
import h1 from '../../assets/imageFiles/h1.png';
import h2 from '../../assets/imageFiles/h2.png';


const HealthCareHeroSection = () => {
  return (
    <Container  className='hero-container'
    maxWidth={false} 
    sx={{ paddingTop: { xs: '80px', lg: '190px',xl:'250px' }, height: { xs: '100vh',md:'130vh', lg: '800px' } }}
  >
    <Box className='hero-box1'
      sx={{   fontWeight: 'bold', marginY: '20px',}}
    >
      <Box component={'img'} sx={{ width: 24, height: 24 }} src={h1} alt="placeholder" />
      
      <Typography className='ai-services-text' sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word',color:'#C73F2F' }}>
      Healthcare
      </Typography>
    </Box>

    <Box>
      <Typography className='heading'
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold',  fontSize: { xs: '1.8rem', md: '36px', lg:'40px'}, fontFamily: 'inter' }}
      >
     Advance Healthcare with AI for Better <br /> Outcomes 
        <Box component={'img'} src={h2} sx={{ width: { xs: '15px', md: '18px', lg: '26px' }, position: 'absolute', right: { lg: '330px' } , bottom:{xs:'18px',lg:"25px"} }} />
      </Typography>

      <Typography
      className='heading-text'
        variant="body1"
        component="p"
        sx={{fontSize: { xs: '14px', sm: '16px', md: '16px' },fontFamily: 'inter' }}
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

export default HealthCareHeroSection;





