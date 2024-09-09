import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Frame from '../../assets/imageFiles/Frame24.png';
import aiimage from '../../assets/imageFiles/aiimage.png';
import vector from '../../assets/imageFiles/Vector 1.png';

const ServiceHeroSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: { xs: '80px', lg: '190px' }, height: { xs: '100vh',md:'130vh', lg: '800px' }, gap: '20px' }}
    >
      <Box
        sx={{ width: '149px', height: '32px', pl: 2, pr: 2, pt: 0.5, pb: 0.5, background: '#a0a0a028', color: '#117DCC', borderRadius: '8px', border: '0.5px solid gray', borderWidth: '0.2px', textTransform: 'capitalize', fontWeight: 'bold', marginY: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
      >
        <Box component={'img'} sx={{ width: 24, height: 24 }} src={aiimage} alt="placeholder" />
        <Typography sx={{ textAlign: 'center', color: '#117DCC', fontSize: '14px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>
          AI Services
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold', marginBottom: 3, color: 'white', fontSize: { xs: '1.8rem', md: '2rem', lg: '3rem', xl: '48px' }, position: 'relative', width: '100%', fontFamily: 'inter' }}
        >
          End-to-End AI-Powered Product <br /> Development Services
          <Box component={'img'} src={vector} sx={{ width: { xs: '15px', md: '18px', lg: '26px' }, position: 'absolute', right: { lg: '165px' } }} />
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{width:'100%', lineHeight: 1.6, color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '18px' } }}
        >
         From concept to launch, Chisel’s end-to-end product development ensures your ideas become successful, <br /> market-ready products
        </Typography>
      </Box>

      <Button
        variant="outlined"
        color="secondary"
        sx={{ background: '#a0a0a028', color: '#117DCC', marginTop: '48px', gap: '12px', padding: '15px', borderRadius: '8px', border: '1px solid gray', textTransform: 'capitalize', fontWeight: 'bolder', fontSize: { xl: '18px' } }}
      >
         Get Started Today <EastIcon />
      </Button>

      <Box component='img' src={Frame} sx={{ width: '84px', height: '66px', marginTop: '7%' }} />
    </Container>
  );
}

export default ServiceHeroSection;
