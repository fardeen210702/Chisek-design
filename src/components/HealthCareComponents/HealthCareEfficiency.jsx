import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import h3 from '../../assets/imageFiles/h3.png'
import h4 from '../../assets/imageFiles/h4.png'
import h5 from '../../assets/imageFiles/h5.png'
import h6 from '../../assets/imageFiles/h6.png'

const HealthCareEfficiency = () => {
    const steps = [
        {
            img: h4,
            title: 'Reduced Documentation Time',
            description: 'Save time on clinical documentation with AI-driven speech-to-text',
        },
        {
            img: h5,
            title: 'Higher Accuracy',
            description: 'Improve the accuracy of medical records through automated transcription',
        },
        {
            img: h6,
            title: 'Operational Streamlining',
            description: 'Free up healthcare providers to focus on patient care rather than administrative tasks',
        },
    ];

    return (
        <Container maxWidth={false} className='engagement'
        >


            <Box className='box-custom' sx={{ height: { xs: '500px', sm: '400px', lg: '456px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { lg: 'space-between' } }}>

                {/* image component */}
                <Box className="box-gradient9" >
                    <Box className="box-img">
                        <img src={h3} alt="Placeholder" />
                    </Box>
                </Box>


                <Box className="flex-column" sx={{  gap: { xs: '20px', lg: '24px' } }}>
                    <Box className="padding-box" >
                        
                        <Typography  className="text-highlight"
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            ✨Increased Operational Efficiency
                        </Typography>
                    </Box>
                    <Box className="text-box"
                        sx={{  paddingX: { xs: '15px' }, fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        Implement AI-powered automation to streamline clinical documentation, reducing the administrative burden on healthcare providers and improving accuracy. Speech-to-text technologies further enhance efficiency by automating the transcription of doctor-patient interactions</Box>


                </Box>



            </Box>


            <Box className='flex-box' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} >
                {steps.map((step, index) => (
                    <Box key={index} className="box-card8" sx={{ width: { xs: '360px', sm: '384px' }, height: { xs: 'fit-content', lg: '164px' }}}>


                        <Box className="flex-column-stretch">

                            <Box className="inline-flex-center" >

                                <Avatar className="avatar-wrapper" >
                                    <img src={step.img} alt="icon" />
                                </Avatar>
                                <Typography className="typography-text" sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '600', lineHeight: '30px' }}>
                                    {step.title}
                                </Typography>
                            </Box>
                            <Box className="box-container1" >
                                <Typography className="typography-description" sx={{  fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '25.6px'}}>
                                    {step.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default HealthCareEfficiency;




