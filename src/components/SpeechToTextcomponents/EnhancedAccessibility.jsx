import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import speech2 from '../../assets/imageFiles/speech2.png'
import speech3 from '../../assets/imageFiles/speech3.png'
import speech4 from '../../assets/imageFiles/speech4.png'
import speech5 from '../../assets/imageFiles/speech5.png'


const EnhancedAccessibility = () => {
    const steps = [
        {
            img: speech3,
            title: 'Inclusive Communication',
            description: 'Provide accessible content for users with hearing impairments',
        },
        {
            img: speech4,
            title: 'Real-Time Transcription',
            description: 'Make educational content more accessible and engaging with Text to Speech ',
        },
        {
            img: speech5,
            title: 'Compliance',
            description: 'Meet accessibility standards by offering Speech to Text as a communication aid',
        },
    ];

    return (
        <Container maxWidth={false} className='engagement'
        >


            <Box className='box-custom' sx={{ height: { xs: '500px', sm: '400px', lg: '456px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { lg: 'space-between' } }}>

                {/* image component */}
                <Box className="box-gradient" >
                    <Box className="box-img">
                        <img src={speech2} alt="Placeholder" />
                    </Box>
                </Box>


                <Box className="flex-column" sx={{  gap: { xs: '20px', lg: '24px' } }}>
                    <Box className="padding-box" >
                        
                        <Typography  className="text-highlight"
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            ✨ Enhanced Accessibility
                        </Typography>
                    </Box>
                    <Box className="text-box"
                        sx={{  paddingX: { xs: '15px' }, fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        Speech to Text technology makes content more accessible to users with hearing impairments by providing real-time transcription during meetings, conferences, or videos. This ensures that everyone can participate fully, regardless of their hearing ability</Box>


                </Box>



            </Box>


            <Box className='flex-box' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} >
                {steps.map((step, index) => (
                    <Box key={index} className="box-card" sx={{ width: { xs: '360px', sm: '384px' }, height: { xs: 'fit-content', lg: '164px' }}}>


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

export default EnhancedAccessibility;





