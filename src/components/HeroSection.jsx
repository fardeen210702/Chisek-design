import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Frame from '../assets/imageFiles/Frame 24.png'

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height:{
          xs:'100vh',
          lg:'120vh'

        },
        backgroundColor:'transparent',
        padding: 2,
        gap:'20px'
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2,padding:'4px 15px',borderRadius:'10px',border:'1px solid gray',background:'#a0a0a028',color:'#117DCC',textTransform: 'capitalize',  }}
      >
        AI Crafting Excellence
      </Button>

      <Box sx={{ marginBottom: 4, }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold', marginBottom: 3 ,color:'white' ,  fontSize: {
          
          xs: '1.8rem',     
          md: '2rem',  
          lg: '3rem',  
          xl: '3.2rem'      
        }  }}
      >
        Accelerate Innovation and Optimize Your Business<br />
        with Tailored AI Solutions
      </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{ lineHeight: 1.6 , color:'#ffffff85' ,fontSize: {
            xs: '14px',  // Extra small screens
            sm: '16px',  // Small screens
            md: '18px',  // Medium screens
            lg: '19px',  // Large screens

        },}}
        >
          Unlock the future with AI solutions tailored to your needs. Enhance efficiency, drive innovation, and position <br /> your business
          for sustained success.
        </Typography>
      </Box>

      <Button
       variant="outlined"
        color="secondary"
        sx={{background:'#a0a0a028' , color:'#117DCC' , gap:'12px',padding:'15px',borderRadius:'8px',border:'1px solid gray' ,textTransform: 'capitalize', fontWeight:'bolder' ,}}
      >
        Let's Get Started  <EastIcon/>
      </Button>

      <Box component='img' src={Frame}  sx={{width:'84px' , height:'66px' , marginTop:'7%'}}/>
    </Box>
  );
};

export default HeroSection;
