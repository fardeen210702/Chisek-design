import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import progressbar from '../assets/imageFiles/progressbar.png';


const DeliverComponent = () => {
    const steps = [
        {
            title: 'Discover & Strategize',
            description: 'Conduct a detailed assessment of your needs and challenges to formulate a strategic AI plan that addresses your unique business goals',
        },
        {
            title: 'Develop & Test',
            description: 'Create and perfect AI solutions by designing and fine-tuning models to ensure they meet your precise requirements and deliver optimal results',
        },
        {
            title: 'Launch & Support',
            description: 'Launch the AI solutions within your systems and offer dedicated support to monitor performance and make necessary adjustments for sustained success',
        },
    ];

    return (
        <Container

            sx={{
                my: '12%', // Added vertical margin (top and bottom)
                width: { xs: '100%', xl: '1200px' },
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingX: '20px',
                position: 'relative',zIndex:'1',overflow:'hidden'
            }}
        >

            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 'bold',fontSize: {xs: '28px',sm: '32px',md: '40px',}, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px', }}>
                HOW WE DELIVER SUCCESS
            </Typography>
            <Typography variant="body1" align="center" sx={{
                color: '#ADADAD', mb: 4, fontFamily: 'inter',
                fontSize: {
                    xs: '14px',
                    md: '14px',
                    lg: '18px'
                }
            }}>
                Our streamlined process ensures that we deliver tailored AI solutions efficiently and effectively. From understanding your needs to implementing the final product, we follow a structured approach to achieve the best results.
            </Typography>

            <Box sx={{ mt: 4, mb: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box
                    component='img'
                    src={progressbar}
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                />
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {steps.map((step, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12} sm={6} md={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',

                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: 'start', // Aligned content to the start (left-aligned)
                                backgroundColor: '#101010',
                                color: '#FFFFFF',
                                height: '192px',
                                width: '368px',
                                border: '0.2px solid #202020',
                                borderRadius: '10px' // Added border radius
                            }}
                        >
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'poppins' ,fontSize: {xs: '16px',md: '18px',xl:'22px'},}}>
                                {step.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#CCCCCC', fontSize: { xs: '14px',md:'15px',xl:'16px' }, fontFamily: 'inter' }}>
                                {step.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DeliverComponent;
