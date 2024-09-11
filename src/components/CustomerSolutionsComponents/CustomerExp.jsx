import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import c1 from '../../assets/imageFiles/c1.png'
import c2 from '../../assets/imageFiles/c2.png'
import c3 from '../../assets/imageFiles/c3.png'
import c4 from '../../assets/imageFiles/c4.png'
const CustomerExp = () => {
    const steps = [
        {
            img: c2,
            title: 'AI-Powered Chatbots',
            description: 'Implement intelligent chatbots that handle routine inquiries, freeing up your team for more complex issues',
        },
        {
            img: c3,
            title: '24/7 Availability',
            description: 'Ensure customers receive timely support anytime, anywhere with AI-driven solutions',
        },
        {
            img: c4,
            title: 'Seamless Escalation',
            description: 'Integrate AI with your customer service systems to seamlessly escalate issues to human agents when needed',
        },
    ];

    return (
        <Container maxWidth={false}
           sx={{justifyContent:'center'}}
            className="container"
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom 
                sx={{ fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}
                className="typography-h4"
            >
            Our Approach to AI-Powered Customer Experience Solutions
            </Typography>

              <Typography variant="body1" align="center" 
                sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}
                className="typography-body1"
            >
            Transform your customer interactions with Chisel’s AI-Powered Customer Experience Solutions. Our approach focuses on <br /> delivering personalized, efficient, and proactive engagements that enhance satisfaction and loyalty
            </Typography>

            <Box 
                sx={{ height: { xs: '500px', sm: '400px', lg: '362px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' },  flexDirection: { xs: 'column', sm: 'row' } }}
                className="box-main"
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: { xs: '20px', lg: '38px' }, gap: { xs: '20px', lg: '40px' }, flex: 1 }}>
                    <Box sx={{ width: '100%', maxWidth: '552px', padding: '16px' }} className="box-content">
                       
                    <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' }, wordWrap: 'break-word' }}
                        >
                              ✨Automated Customer Support
                        </Typography>
                    </Box>
                    <Box
                        sx={{  color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' }, wordWrap: 'break-word' }}
                        className="box-description"
                    >
                      Streamline your customer support with AI-driven automation, reducing response times and improving efficiency without sacrificing quality
                    </Box>


                </Box>

                {/* image component */}
                <Box className='box-container' sx={{ width: '100%', maxWidth: '511px', height: '100%',  borderRadius: '16px' }}
                    >
                    <Box sx={{ alignSelf: 'stretch', borderRadius: '8px', overflow: 'hidden', }} className="image-wrapper">
                        <img  src={c1} alt="Placeholder" />
                    </Box>
                </Box>

            </Box>


            <Box className='step-box-container' sx={{  flexDirection: { xs: 'column', sm: 'row' } }}>
            {steps.map((step, index) => (
                    <Box key={index} sx={{ width: { xs: '360px', sm: '384px' },}} className="step-box">
                        <Box  className="step-icon">
                            
                            <Box className="step-header">
                                
                                <Avatar className="step-avatar">

                                    <img style={{ width: '32px', height: '32px' }} src={step.img} alt="icon" />
                                    
                                </Avatar>

                                <Typography sx={{  fontSize: '20px', fontFamily: 'Poppins', fontWeight: '700', lineHeight: '30px' }} className="step-title">
                                    {step.title}
                                </Typography>
                            </Box>

                            <Box className="step-description">
                                <Typography className='typo' sx={{  fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '25.6px' }}>
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

export default CustomerExp;
