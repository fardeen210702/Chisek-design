import React from 'react'
import { Container, Typography, Button, Box , Avatar } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import Frame from '../assets/imageFiles/Frame24.png'
import aiimage from '../assets/imageFiles/aiimage.png'
import vector from '../assets/imageFiles/Vector 1.png'

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
          lg:'730px'

        },
        backgroundColor:'transparent',
        padding: 2,
        gap:'20px'
      }}
    >
       <Box
      sx={{
        width: '230px',
        height: '32px',
        pl: 2,
        pr: 2,
        pt: 0.5,
        pb: 0.5,
        background: 'rgba(255, 255, 255, 0.05)',
        // borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,background:'#a0a0a028' , color:'#117DCC',borderRadius:'8px',border:'1px solid gray' ,textTransform: 'capitalize', fontWeight:'bolder',marginY:'20px'
      }}
    >
      <Avatar
        sx={{ width: 24, height: 24 }}
        src={aiimage}
        alt="placeholder"
      />
      <Typography
        sx={{
          textAlign: 'center',
          color: '#117DCC',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 400,
          lineHeight: '24px',
          wordWrap: 'break-word',
        }}
      >
        Crafting AI Excellence
      </Typography>
    </Box>

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
        },position:'relative'  }}
      >
        Accelerate Innovation and Optimize Your Business<br />
        with Tailored AI Solutions
         <Box component={'img'}  src={vector} sx={{width:{xs:'15px' , md:'18px' , lg:'26px'}, position:'absolute',right:{ lg:'268px',xl:'287px'}}}/>
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
        sx={{background:'#a0a0a028' , color:'#117DCC',marginTop:'48px' , gap:'12px',padding:'15px',borderRadius:'8px',border:'1px solid gray' ,textTransform: 'capitalize', fontWeight:'bolder' ,}}
      >
        Let's Get Started  <EastIcon/>
      </Button>

      <Box component='img' src={Frame}  sx={{width:'84px' , height:'66px' , marginTop:'7%'}}/>
    </Box>
  )
}

export default HeroSection;
