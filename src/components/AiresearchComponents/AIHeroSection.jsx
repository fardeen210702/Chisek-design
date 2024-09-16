import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Frame from '../../assets/imageFiles/Frame24.png';
import aiimage from '../../assets/imageFiles/aiimage.png';
import vector from '../../assets/imageFiles/Vector1.png';

const AIHeroSection = () => {
  return (
    <Container  className='hero-container'
    maxWidth={false} 
    sx={{ paddingTop: { xs: '80px', lg: '190px',xl:'250px' }, height: { xs: '100vh',md:'130vh', lg: '800px' } }}
  >
       <Box className='hero-box11'
      sx={{ marginY: '20px',}}
    >
        <Box component={'img'} sx={{ width: 24, height: 24 }} src={aiimage} alt="placeholder" />

        <Typography sx={{ textAlign: 'center', color: '#117DCC', fontSize: '14px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>
          AI Services
        </Typography>
      </Box>

      <Box>
        <Typography className='heading'
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 600,  fontSize: { xs: '1.8rem', md: '2rem', lg:'40px' }, fontFamily: 'inter', lineHeight:1.2}}
      >
          AI Research & Development <br /> Services
          <Box component={'img'} src={vector} sx={{ width: { xs: '15px', md: '18px', lg: '26px' }, position: 'absolute', right: { lg: '303px' } , bottom:{xs:'18px',lg:"25px"} }} />
        </Typography>

        <Typography
      className='heading-text'
        variant="body1"
        component="p"
        sx={{fontSize: { xs: '14px', sm: '16px' },fontFamily:'inter',lineHeight:1.5 }}
      >
        Stay ahead in your industry by exploring emerging AI technologies and developing custom solutions with <br /> Chisel’s expert R&D services
        </Typography>
      </Box>

      <Button className='btn1'
      variant="outlined"
      color="secondary"
      sx={{ color:'#117DCC',backgroundColor:'#a0a0a028',marginTop:'48px',padding:'15px',border:'1px solid #a0a0a028',borderRadius:'8px',textTransform: 'capitalize', fontWeight: 500, fontSize:'14px' }}
    >
        Let's Get Started <EastIcon />
      </Button>

      <Box component='img' src={Frame} sx={{ width: '84px', height: '66px', marginTop: '7%' }} />
    </Container>
  );
}

export default AIHeroSection;
