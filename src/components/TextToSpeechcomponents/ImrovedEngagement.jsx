import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import t2 from '../../assets/imageFiles/t2.jpg'
import t3 from '../../assets/imageFiles/t3.png'
import t4 from '../../assets/imageFiles/t4.png'
import t5 from '../../assets/imageFiles/t5.png'

const ImprovedEngagement = () => {
    const steps = [
        {
            img: t3,
            title: 'Interactive Experiences',
            description: 'Create dynamic and engaging content with natural-sounding speech',
        },
        {
            img: t4,
            title: 'E-learning & Podcasts',
            description: 'Make educational content more accessible and engaging with Text to Speech',
        },
        {
            img: t5,
            title: 'Increased Retention',
            description: 'Improve content retention by offering auditory learning options',
        },
    ];

    return (
        <Container maxWidth={false} className='engagement'
        >


            <Box className='box-custom' sx={{ height: { xs: '500px', sm: '400px', lg: '456px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { lg: 'space-between' } }}>

                {/* image component */}
                <Box className="box-gradient" >
                    <Box className="box-img">
                        <img src={t2} alt="Placeholder" />
                    </Box>
                </Box>


                <Box className="flex-column" sx={{  gap: { xs: '20px', lg: '24px' } }}>
                    <Box className="padding-box" >
                        
                        <Typography  className="text-highlight"
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            ✨Improved User Engagement
                        </Typography>
                    </Box>
                    <Box className="text-box"
                        sx={{  paddingX: { xs: '15px' }, fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        Text to Speech Technology technology enhances user engagement by offering a more interactive and dynamic experience. Whether for e-learning, podcasts, or customer service, Text to Speech Technology makes content more engaging and easier to consume</Box>


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

export default ImprovedEngagement;





