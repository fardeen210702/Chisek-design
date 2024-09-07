import React from 'react'
import bg1 from '../assets/imageFiles/bg1.png';
import { Box } from '@mui/material'
import BlogHeroSection from '../components/BlogpageComponents/BlogHerosection';


const Blogs = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: { xs: '-29.5%', md: '-12%', lg: '-9%', xl: '-7.5%' }, backgroundColor: 'transparent', backgroundSize: { xs: '120vh', md: '100% ', xl: '100% 140vh' } }}>
    <Box sx={{ width:'100%',maxWitdh:'1600px' , display:'flex', flexDirection:'column' , alignItems:'center'}} >
     <BlogHeroSection/>
    </Box>
  </Box>
  )
}

export default Blogs
