import React from 'react';
import { Container, Box, Typography, InputBase, Button } from '@mui/material';

// Main Component
const ExploreAI = () => {
    return (
        <Container
            sx={{
                width: {
                    xs: '100%',
                    xl: '1200px'
                },
                // backgroundColor: '#101010',
                marginY: '10%',
                height: {
                    lg: '447px',
                    xs: 'auto'
                },
                // borderRadius: '16px',
                // border: '0.2px solid #707070',
                // padding: '56px 16px 32px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: {
                    xs: '16px',
                    lg: '56px'
                },
            }}
        >
            {/* New Container inside Main Container */}
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#101010',
                    height: {
                        lg: '447px',
                        xs: 'auto'
                    },
                    borderRadius: '16px',
                    border: '0.2px solid #707070',
                    padding: '56px 16px 32px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: {
                        xs: '16px',
                        lg: '56px'
                    },
                }}
            >
                {/* First Container */}
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        gap: {
                            xs: '10px',
                            lg: '24px'
                        },
                    }}
                >
                    {/* Heading */}
                    <Typography
                        sx={{
                            width: {
                                xs: '100%',
                                lg: '1004px'
                            },
                            height: {
                                xs: '70px',
                                lg: '140px'
                            },
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: {
                                xs: '20px',
                                sm: '25px',
                                lg: '48px'
                            },
                            lineHeight: {
                                xs: '30px',
                                lg: '70px'
                            },
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}
                    >
                        Let’s Create Something Extraordinary Together
                    </Typography>

                    {/* Subheading */}
                    <Typography
                        sx={{
                            width: {
                                xs: '100%',
                                lg: '832px'
                            },
                            height: {
                                xs: '140px',
                                lg: '60px'
                            },
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: {
                                xs: '14px',
                                lg: '20px'
                            },
                            lineHeight: '30px',
                            color: '#ADADAD',
                            textAlign: 'center',
                        }}
                    >
                        Have a project in mind? Ready to explore AI solutions tailored for you? Enter your email below, and our experts will connect with you to turn your vision into reality.
                    </Typography>
                </Box>

                {/* Second Container */}
                <Box
                    sx={{
                        width: {
                            xs: '350px',
                            lg: '456px'
                        },
                        height: 'auto',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF0A',
                    }}
                >
                    <InputBase
                        type="email"
                        placeholder="Enter Email"
                        sx={{
                            width: '424px',
                            fontWeight: 'bold',
                            color: '#ADADAD',
                            '& input': {
                                padding: '8px',
                                color: '#ADADAD',
                            },
                            '& .MuiInputBase-input': {
                                fontWeight: 'bold',
                                '&::placeholder': {
                                    color: '#ADADAD',
                                    opacity: 1, // Ensures the color is fully applied
                                },
                            },
                            '&:focus': {
                                outline: 'none',
                            },
                            '&:focus-visible': {
                                outline: 'none',
                            },
                            '&.Mui-focused': {
                                outline: 'none',
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            width: '138px',
                            height: '56px',
                            borderRadius: '8px',
                            backgroundColor: '#117DCC',
                            color: '#FFFFFF',
                            fontWeight: 700
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ExploreAI;
