import React from 'react';
import { Container, Box, Typography, InputBase, Button } from '@mui/material';

// Main Component
const ExploreAI = () => {
    return (
        <Container className="businesscontainer" sx={{ width: { xs: '100%', xl: '1200px' },  height: { lg: '447px', xs: 'auto' }, gap: { xs: '16px', lg: '56px' } }}>
        <Box className="styled-box" sx={{  height: { lg: '447px', xs: 'auto' }, gap: { xs: '16px', lg: '56px' } }}>
            <Box className="flex-content" sx={{  gap: { xs: '10px', lg: '24px' } }}>
                
                <Typography className="extraordinary-text" sx={{ width: { xs: '100%', lg: '1004px' }, height: { xs: '70px', lg: '140px' }, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: { xs: '20px', sm: '25px', lg: '48px' }, lineHeight: { xs: '30px', lg: '70px' }}}>
                Let’s Create Something Extraordinary Together
                </Typography>
                <Typography className="project-description"  sx={{ width: { xs: '100%', lg: '832px' }, height: { xs: '140px', lg: '60px' }, fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: { xs: '14px', lg: '20px' }, lineHeight: '30px' }}>
                Have a project in mind? Ready to explore AI solutions tailored for you? Enter your email below, and our experts will connect with you to turn your vision into reality.
                </Typography>
            </Box>
            <Box className="response-box" sx={{ width: { xs: '350px', lg: '456px' }}}>
                <InputBase
                 className="email-input"
                    type="email"
                    placeholder="Enter Email"
                    sx={{ fontFamily: 'Inter', fontSize: { xs: '14px', xl: '18px' }, '& input': { padding: '8px', color: '#ADADAD' }, '& .MuiInputBase-input': { fontWeight: 'bold', '&::placeholder': { color: '#ADADAD', opacity: 1 } }, '&:focus': { outline: 'none' }, '&:focus-visible': { outline: 'none' }, '&.Mui-focused': { outline: 'none' } }}
                />
                <Button className="submit-button" variant="contained" sx={{  fontWeight: 700, fontFamily: 'Poppins', fontSize: { xs: '14px', xl: '18px' } }}>
                    Submit
                </Button>
            </Box>
        </Box>
    </Container>
    );
};

export default ExploreAI;




