import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import s1 from '../../assets/imageFiles/s1.png';
import s2 from '../../assets/imageFiles/s2.png';
import s3 from '../../assets/imageFiles/s3.png';
import s4 from '../../assets/imageFiles/s4.png';

const BusinessTransformation = () => {
    const steps = [
        {
            img: s1,
            title: 'Discover & Strategize',
            description: 'Conduct a detailed assessment of your needs and challenges to formulate a strategic AI plan that addresses your unique business goals',
        },
        {
            img: s2,
            title: 'Develop & Test',
            description: 'Create and perfect AI solutions by designing and fine-tuning models to ensure they meet your precise requirements and deliver optimal results',
        },
        {
            img: s3,
            title: 'Launch & Support',
            description: 'Launch the AI solutions within your systems and offer dedicated support to monitor performance and make necessary adjustments for sustained success',
        },
    ];

    return (
        <Container maxWidth={false}
           sx={{justifyContent:'center'}}
            className="container"
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom 
                sx={{ fontWeight: 600, fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}
                className="typography-h4"
            >
                Our Approach to AI-Powered Business Transformation
            </Typography>
            
            <Typography variant="body1" align="center" 
                sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '16px' } }}
                className="typography-body1"
            >
                Chisel's AI-powered business transformation service is built on a foundation of innovation, expertise, and <br /> collaboration
            </Typography>

            <Box 
                sx={{ height: { xs: '500px', sm: '400px', lg: '362px' }, marginTop: { xs: '50px', md: '70px ' },  flexDirection: { xs: 'column', sm: 'row' } }}
                className="box-main"
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: { xs: '20px', lg: '38px' }, gap: { xs: '20px', lg: '40px' }, flex: 1 }}>
                    <Box sx={{ width: '100%', maxWidth: '552px', padding: '16px' }} className="box-content">
                        
                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '40px' }, wordWrap: 'break-word' }}
                        >
                            ✨Tailored AI Strategy <br />Development
                        </Typography>
                    </Box>
                    <Box
                        sx={{  color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px',     }, wordWrap: 'break-word' }}
                        className="box-description"
                    >
                        We craft a personalized AI roadmap aligned with your business goals, ensuring every step is strategic and impactful
                    </Box>
                </Box>


                <Box className='box-container' sx={{ width: '100%', maxWidth: '511px', height: '100%',  borderRadius: '16px' }}
                    >
                    <Box sx={{ alignSelf: 'stretch', borderRadius: '8px', overflow: 'hidden', }} className="image-wrapper">
                        <img  src={s4} alt="Placeholder" />
                    </Box>
                </Box>

            </Box>

            <Box className='step-box-container' sx={{  flexDirection: { xs: 'column', sm: 'row' } }}>
                {steps.map((step, index) => (
                    <Box key={index} sx={{ width: { xs: '360px', sm: '384px' },}} className="step-box ">
                        <Box  className="step-icon">
                            
                            <Box className="step-header">
                                
                                <Avatar className="step-avatar">

                                    <img style={{ width: '32px', height: '32px' }} src={step.img} alt="icon" />
                                    
                                </Avatar>

                                <Typography sx={{  fontSize: '18px', fontFamily: 'Poppins', fontWeight: '600', lineHeight: '30px' }} className="step-title">
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

export default BusinessTransformation;
