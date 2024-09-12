import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Frame from '../../assets/imageFiles/Frame24.png';
import aiimage from '../../assets/imageFiles/aiimage.png';
import vector from '../../assets/imageFiles/Vector1.png';

const HeroSection = () => {
  return (
    <Container  className="container-wrapper"
      maxWidth={false}
      sx={{ paddingTop: { xs: '80px', lg: '300px' }, height: { xs: '100vh',md:'130vh', lg: '800px' } }}
    >
      <Box className="box-styled" >
        <Box component={'img'} sx={{ width: 24, height: 24 }} src={aiimage} alt="placeholder" />
        <Typography className="typography-styled" sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px'}}>
          Crafting AI Excellence
        </Typography>
      </Box>

      <Box>
        <Typography className="typography-header"
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold',  fontSize: { xs: '1.8rem', md: '2rem', lg: '3rem', xl: '48px' }, fontFamily: 'inter' }}
        >
          Accelerate Innovation and Optimize Your Business<br />
          with Tailored AI Solutions
          <Box component={'img'} src={vector} sx={{ width: { xs: '15px', md: '18px', lg: '26px' }, position: 'absolute', right: { lg: '255px', xl: '255px' } }} />
        </Typography>

        <Typography className='typography-body'
          variant="body1"
          component="p"
          sx={{ lineHeight: 1.6, fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '18px' } }}
        >
          Unlock the future with AI solutions tailored to your needs. Enhance efficiency, drive innovation, and position <br /> your business for sustained success.
        </Typography>
      </Box>

      <Button className='button-outlined'
        variant="outlined"
        color="secondary"  //unable to apply external css to this button
        sx={{ background: '#a0a0a028', color: '#117DCC', marginTop: '48px', gap: '12px', padding: '15px', borderRadius: '8px', border: '1px solid gray', textTransform: 'capitalize', fontWeight: 'bolder', fontSize: { xl: '18px' } }}
      >
        Let's Get Started <EastIcon />
      </Button>

      <Box component='img' src={Frame} className='component-img' />
    </Container>
  );
}

export default HeroSection;
