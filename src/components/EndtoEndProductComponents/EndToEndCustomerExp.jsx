import React from 'react';
import { Container, Box, Typography, InputBase, Button } from '@mui/material';


const EndToEndCustomerExp = () => {
    return (
        <Container sx={{ width: { xs: '100%', xl: '1200px' }, marginY: '10%', height: { lg: '447px', xs: 'auto' }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '16px', lg: '56px' } }}>
            <Box sx={{ width: '100%', backgroundColor: '#101010', height: { lg: '447px', xs: 'auto' }, borderRadius: '16px', border: '0.20px solid #707070', padding: '56px 16px 32px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '16px', lg: '56px' }, zIndex: '1' }}>
                <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '10px', lg: '24px' } }}>
                    <Typography sx={{ width: { xs: '100%', lg: '1004px' }, height: { xs: '70px', lg: '140px' }, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: { xs: '20px', sm: '25px', lg: '48px' }, lineHeight: { xs: '30px', lg: '70px' }, textAlign: 'center', color: '#FFFFFF' }}>
                    Ready to Elevate Your Customer Experience?
                    </Typography>
                    <Typography sx={{ width: { xs: '100%', lg: '832px' }, height: { xs: '140px', lg: '60px' }, fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: { xs: '14px', lg: '20px' }, lineHeight: '30px', color: '#ADADAD', textAlign: 'center' }}>
                    Contact us today to discover how we can help you create personalized, efficient, and engaging customer interactions that drive loyalty and growth.
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: '350px', lg: '456px' }, height: 'auto', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF0A' }}>
                    <InputBase
                        type="email"
                        placeholder="Enter Email"
                        sx={{ width: '424px', fontWeight: 'bold', color: '#ADADAD', fontFamily: 'Inter', fontSize: { xs: '14px', xl: '18px' }, '& input': { padding: '8px', color: '#ADADAD' }, '& .MuiInputBase-input': { fontWeight: 'bold', '&::placeholder': { color: '#ADADAD', opacity: 1 } }, '&:focus': { outline: 'none' }, '&:focus-visible': { outline: 'none' }, '&.Mui-focused': { outline: 'none' } }}
                    />
                    <Button variant="contained" sx={{ width: '138px', height: '56px', borderRadius: '8px', backgroundColor: '#117DCC', color: 'white', fontWeight: 700, fontFamily: 'Poppins', fontSize: { xs: '14px', xl: '18px' } }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default EndToEndCustomerExp;
