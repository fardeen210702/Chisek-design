import React from 'react';
import { Box, Typography, IconButton, Divider, InputBase } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import arrow from '../../../assets/imageFiles/arrow.png';
import frame from '../../../assets/imageFiles/Frame.png';
import './Footer.css'; // Import the external CSS file

const Footer = () => {
    return (
        <Box className="footer-container">
            {/* Footer Top Section */}
            <Box className="footer-top" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '16px', md: '125px' }, width: {xs:'100%',md:'1200px'} }}>
                <Box className="footer-top-left" sx={{ width: { xs: '100%', md: '513px' }, marginBottom: '16px' }}>
                    <Box className="footer-logo">
                        <Box component='img' src={frame} className="footer-frame" />
                        <Typography className="footer-title">
                            Chisel Solutions
                        </Typography>
                    </Box>
                    <Typography className="footer-subtitle">
                        Stay in the loop with our newsletter!
                    </Typography>
                    <Box className="footer-input-container">
                        <InputBase
                            sx={{ color: '#ADADAD', width: '100%', fontSize: '14px', borderRadius: '4px', padding: '10px' }}
                            className="footer-input"
                            placeholder="Enter e-mail address"
                        />
                        <Box component='img' src={arrow} className="footer-arrow" />
                        <Divider className="footer-divider" />
                    </Box>
                    <Typography className="footer-description">
                        Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates.
                    </Typography>
                </Box>
                <Box className="footer-links" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '32px', md: '56.5px' } }}>
                    <Box className="footer-links-column">
                        <Typography className="footer-links-title">Industries</Typography>
                        <Box className="footer-links-items">
                            <Typography className="footer-link">Healthcare</Typography>
                            <Typography className="footer-link">Finance</Typography>
                            <Typography className="footer-link">E-commerce & Retail</Typography>
                            <Typography className="footer-link">Manufacturing & Logistics</Typography>
                        </Box>
                    </Box>
                    <Box className="footer-links-column">
                        <Typography className="footer-links-title">Technologies</Typography>
                        <Box className="footer-links-items">
                            <Typography className="footer-link">Speech to Text</Typography>
                            <Typography className="footer-link">Text to Speech</Typography>
                            <Typography className="footer-link">NLP</Typography>
                            <Typography className="footer-link">Image Processing</Typography>
                            <Typography className="footer-link">LLM</Typography>
                            <Typography className="footer-link">Computer Vision</Typography>
                        </Box>
                    </Box>
                    <Box className="footer-links-column">
                        <Typography className="footer-links-title">Company</Typography>
                        <Box className="footer-links-items">
                            <Typography className="footer-link">About Us</Typography>
                            <Typography className="footer-link">Blog</Typography>
                            <Typography className="footer-link">Careers</Typography>
                            <Typography className="footer-link">Contact Us</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* hr line */}
            <Box className="footer-hr-line" sx={{mb:{xs:'16%',sm:'2%'}}} />

            {/* Footer Bottom Section */}
            <Box className="footer-bottom" sx={{ width: '100%', maxWidth: '1200px', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: { xs: '16px', md: '16px' } }}>
                <Typography className="footer-copyright">
                    © 2024 All rights reserved
                </Typography>
                <Typography className='privacyLinks' sx={{ display: 'flex', gap: '37px', fontSize: '14px', textAlign: 'center' }}>
                    <Typography className='privacyLink'>Privacy</Typography>
                    <Typography className='privacyLink'>Terms</Typography>
                    <Typography className='privacyLink'>Cookies</Typography>
                </Typography>
                <Box className="footer-social-icons">
                    <IconButton className="footer-social-icon">
                        <Facebook className="footer-icon" />
                    </IconButton>
                    <IconButton className="footer-social-icon">
                        <Twitter className="footer-icon" />
                    </IconButton>
                    <IconButton className="footer-social-icon">
                        <LinkedIn className="footer-icon" />
                    </IconButton>
                    <IconButton className="footer-social-icon">
                        <Instagram className="footer-icon" />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
