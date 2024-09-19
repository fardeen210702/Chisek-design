import React from 'react'
import bg1 from '../../assets/imageFiles/bg1.png';
import { Box } from '@mui/material'
import BlogHeroSection from '../../components/BlogpageComponents/BlogHerosection';
import './Blogs.css'

const Blogs = () => {
  return (
    <Box  className="container-box" sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}} >
    <Box className="content-box">

     <BlogHeroSection/>
    </Box>
  </Box>
  )
}

export default Blogs
