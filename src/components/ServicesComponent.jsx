import React from 'react';
import { Container, Typography, Box, Grid2 } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import service from '../assets/imageFiles/service.png';
import service1 from '../assets/imageFiles/service1.png';
import service2 from '../assets/imageFiles/service2.png';
import service3 from '../assets/imageFiles/service3.png';
import service4 from '../assets/imageFiles/service4.png';
import service5 from '../assets/imageFiles/service5.png';
import service6 from '../assets/imageFiles/service6.png';

const ServicesComponent = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const pics = [service1, service2, service3, service4, service5, service6];

    return (
        <Container>
            <Typography
                variant="h3"
                align="center"
                sx={{
                    mb: 2,
                    color: '#117DCC',
                    fontWeight: 'bold',
                    fontFamily: 'Bebas Neue, Arial, sans-serif',
                    letterSpacing: '2px',
                    fontSize: {
                        xs: '24px',  // Extra small screens
                        sm: '28px',  // Small screens
                        md: '32px',  // Medium screens
                        lg: '36px',  // Large screens
                        xl: '40px',  // Extra large screens
                    },
                }}
            >
                Services We Offer
            </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{
                    mb: 4,
                    color: '#ffffff85',
                    fontSize: {
                        xs: '14px',  // Extra small screens
                        sm: '16px',  // Small screens
                        md: '18px',  // Medium screens
                        lg: '19px',  // Large screens
                    },
                    maxWidth: '1200px',
                    mx: 'auto',
                }}
            >
                Empower your business with our transformative AI services. From automating routine tasks to unlocking deep insights from data, our solutions are designed to drive growth and innovation.
            </Typography>

            {isMatch ? (
                <Grid2 container spacing={4} justifyContent="center">
                    {pics.map((el, id) => (
                        <Grid2 item xs={12} sm={6} md={4} key={id}>
                            <Box
                                component="img"
                                src={el}
                                alt={`Service ${id + 1}`}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                }}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            ) : (
                <Box
                    component="img"
                    src={service}
                    sx={{
                        display: 'block',
                        maxWidth: '100%',
                        mx: 'auto', // Center the image horizontally
                        borderRadius: '8px',
                    }}
                />
            )}
        </Container>
    );
};

export default ServicesComponent;
