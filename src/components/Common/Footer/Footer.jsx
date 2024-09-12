import React from 'react';
import { Box, Typography, IconButton, Divider, InputBase } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/imageFiles/arrow.png';
import frame from '../../../assets/imageFiles/Frame.png';
import './Footer.css'


const Footer = () => {

    function scrollToTop(){
        window.scrollTo(0,0)
    }

    return (
        <Box className='Footercontainer'
            sx={{padding: { xs: '20px', sm: '30px', md: '40px 60px', lg: '40px 120px' },
            }}
        >
            {/* Footer Top Section */}
            <Box
                sx={{
                    display: { xs: 'block', sm: 'flex' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: { sm: 'space-between' },
                    mb: { xs: 4, sm: 6 },
                    gap: { xs: 3, sm: 6 }, 
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mb: { xs: 2, sm: 0 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: 2 }}>
                        <Box component='img' src={frame}
                            sx={{
                                width: { xs: '60px', sm: '72px' },
                                height: { xs: '60px', sm: '72px' },
                                borderRadius: '50%',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: { xs: '18px', sm: '24px' },
                                fontFamily: 'Poppins',
                                fontWeight: 'bold',
                                mb: 2,
                            }}
                        >
                            Chisel Solutions
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: { xs: '16px', sm: '22px' },
                            fontFamily: 'Poppins',
                            fontWeight: 'medium',
                            mb: 2,
                            textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
                        }}
                    >
                        Stay in the loop with our newsletter!
                    </Typography>
                    <Box sx={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
                        <InputBase
                            sx={{
                                width: '100%',
                                color: '#adadad',
                                fontSize: '14px',
                                fontFamily: 'Poppins',
                                borderRadius: '4px',
                                padding: '10px',
                            }}
                            placeholder="Enter e-mail address"
                        />
                        <Box component='img' src={arrow} className='imgcomponent' />
                        <Divider className='divider'
                           
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: '12px',
                            fontFamily: 'Inter',
                            opacity: 0.6,
                            lineHeight: '18px',
                            textAlign: { xs: 'center', sm: 'start' }, // Center text on small screens
                            maxWidth: '100%',
                            mt: 2,
                        }}
                    >
                        Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'block', sm: 'flex' },
                        justifyContent: { sm: 'space-between' },
                        flexDirection: { xs: 'column', sm: 'row' },
                        textAlign:{xs:'center', md:'start'},
                        width: '100%',
                        maxWidth: { xs: 'none', sm: '600px' },
                        mb: { xs: 4, sm: 0 },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px',}}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'Poppins',
                                fontWeight: 'bold',
                                marginY: {
                                    xs: '30px',
                                    md: 1
                                },
                            }}
                        >
                            Industries
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Healthcare</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Finance</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>E-commerce & Retail</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Manufacturing & Logistics</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'Poppins',
                                fontWeight: 'bold',
                                marginY: {
                                    xs: '30px',
                                    md: 1
                                },
                            }}
                        >
                            Technologies
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Speech to Text</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Text to Speech</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>NLP</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Image Processing</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>LLM</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Computer Vision</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'Poppins',
                                fontWeight: 'bold',
                                marginY: {
                                    xs: '30px',
                                    md: 1
                                },

                            }}
                        >
                            Company
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>About Us</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Blog</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Careers</Typography>
                            <Typography sx={{ color: '#adadad', fontSize: '14px', fontFamily: 'Inter' }}>Contact Us</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* hr line */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    left: '0px',
                    bottom: { xs: '100px', sm: '80px', },
                    height: '0',
                    marginY: '2%',
                    border: '0.5px solid gray',

                    zIndex: 1, 
                }}
            />
            {/* Footer Bottom Section */}
            <Box
                sx={{
                    display: { xs: 'block', sm: 'flex' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        textAlign: { xs: 'center', sm: 'left' },
                        mb: { xs: 2, sm: 0 },
                    }}
                >
                    © 2024 All rights reserved
                </Typography>

                <Box sx={{display:'flex' , gap:'10px'}}>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        textAlign: { xs: 'center', sm: 'left' },
                        mb: { xs: 2, sm: 0 },textDecoration:'none',
                        color:'white'
                    }}
                    component={Link}
                    to='/privacypolicy'
                    onClick={scrollToTop}
                    >
                        Privacy
                    </Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        textAlign: { xs: 'center', sm: 'left' },
                        mb: { xs: 2, sm: 0 },textDecoration:'none',
                        color:'white'
                    }}
                    component={Link}
                    to='/terms&conditions'
                    onClick={scrollToTop}

                    >
                        Terms
                    </Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        textAlign: { xs: 'center', sm: 'left' },
                        mb: { xs: 2, sm: 0 },
                    }}>
                        Cookies
                    </Typography>


                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: { xs: 'center', sm: 'flex-end' },
                    }}
                >
                    <IconButton className='iconButton'
                    >
                        <Facebook sx={{ color: 'white', width: '15px', height: '15px' }} />
                    </IconButton>
                    <IconButton className='iconButton'
                       
                    >
                        <Twitter sx={{ color: 'white', width: '15px', height: '15px' }} />
                    </IconButton>
                    <IconButton
                        className='iconButton'
                    >
                        <LinkedIn sx={{ color: 'white', width: '15px', height: '15px' }} />
                    </IconButton>
                    <IconButton
                        className='iconButton'
                    >
                        <Instagram sx={{ color: 'white', width: '15px', height: '15px' }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;