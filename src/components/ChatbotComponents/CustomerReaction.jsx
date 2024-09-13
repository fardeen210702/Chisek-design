import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import cb2 from '../../assets/imageFiles/cb2.png'
import cb3 from '../../assets/imageFiles/cb3.png'
import cb4 from '../../assets/imageFiles/cb4.png'
import cb5 from '../../assets/imageFiles/cb5.png'

const CustomerReaction = () => {
    const steps = [
        {
            img: cb3,
            title: 'Conversational AI',
            description: 'Deliver human-like interactions with customers through LLM-powered chatbots',
        },
        {
            img: cb4,
            title: 'Instant Support',
            description: 'Provide immediate, accurate responses to customer inquiries',
        },
        {
            img: cb5,
            title: 'Customer Satisfaction',
            description: 'Increase satisfaction by resolving issues quickly and effectively',
        },
    ];

    return (
        <Container maxWidth={false} className='engagement'
        >


            <Box className='box-custom' sx={{ height: { xs: '500px', sm: '400px', lg: '456px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { lg: 'space-between' } }}>

                {/* image component */}
                <Box className="box-gradient" >
                    <Box className="box-img">
                        <img src={cb2} alt="Placeholder" />
                    </Box>
                </Box>


                <Box className="flex-column" sx={{  gap: { xs: '20px', lg: '24px' } }}>
                    <Box className="padding-box" >
                        
                        <Typography  className="text-highlight"
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            ✨ Improved Customer Interaction
                        </Typography>
                    </Box>
                    <Box className="text-box"
                        sx={{  paddingX: { xs: '15px' }, fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        Implement Large Language Models to enhance customer support and engagement by providing intelligent, context-aware responses. Large Language Models can handle a wide range of inquiries, improving customer satisfaction and reducing response times</Box>


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
                                <Typography className="typography-text" sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '700', lineHeight: '30px' }}>
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

export default CustomerReaction;





