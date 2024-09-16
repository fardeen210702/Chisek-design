import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import tt1 from '../../assets/imageFiles/tt1.png'
import tt2 from '../../assets/imageFiles/tt2.png'
import  tt3 from '../../assets/imageFiles/tt3.png'
import tt4 from '../../assets/imageFiles/tt4.png'

const TechTransforming = () => {
    const steps = [
        {
            img: tt2,
            title: 'Comprehensive Evaluation',
            description: 'Assess your existing technology infrastructure, data management practices, and team capabilities',
        },
        {
            img: tt3,
            title: 'Gap Analysis',
            description: 'Identify areas that need enhancement to support AI integration',
        },
        {
            img: tt4,
            title: 'Customized Recommendations',
            description: 'Provide actionable insights and tailored strategies to prepare your business for AI',
        },
    ];

    return (
        <Container maxWidth={false}
           sx={{justifyContent:'center'}}
            className="container"
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom 
                sx={{ fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}
                className="typography-h4"
            >
               Our Approach to Technology Consulting for AI Integration
            </Typography>
            
            <Typography variant="body1" align="center" 
                sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' },lineHeight:'27px'   }}
                className="typography-body1"
            >
                Our tailored approach ensures your business is AI-ready, from assessing current capabilities to <br /> identifying opportunities and crafting a strategic roadmap
            </Typography>

            <Box 
                sx={{ height: { xs: '500px', sm: '400px', lg: '362px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' },  flexDirection: { xs: 'column', sm: 'row' } }}
                className="box-main"
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: { xs: '20px', lg: '38px' }, gap: { xs: '20px', lg: '40px' }, flex: 1 }}>
                    <Box sx={{ width: '100%', maxWidth: '552px', padding: '16px' }} className="box-content">
                        
                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' }, wordWrap: 'break-word' }}
                        >
                           ✨ AI Readiness Assessment
                        </Typography>
                    </Box>
                    <Box
                        sx={{  color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' }, wordWrap: 'break-word' }}
                        className="box-description"
                    >
                        We start by evaluating your organization’s current capabilities, identifying gaps, and determining your readiness for AI adoption
                    </Box>
                </Box>


                <Box className='box-container' sx={{ width: '100%', maxWidth: '511px', height: '100%',  borderRadius: '16px' }}
                    >
                    <Box sx={{ alignSelf: 'stretch', borderRadius: '8px', overflow: 'hidden', }} className="image-wrapper">
                        <img  src={tt1} alt="Placeholder" />
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

export default TechTransforming;








