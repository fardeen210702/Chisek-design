import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import ai1 from '../../assets/imageFiles/ai1.png'
import ai3 from '../../assets/imageFiles/ai3.png'
import ai4 from '../../assets/imageFiles/ai4.png'
import ai5 from '../../assets/imageFiles/ai5.png'
const AIdevAndResearch = () => {
    const steps = [
        {
            img: ai3,
            title: 'Technology Scouting',
            description: 'Identify promising AI technologies that align with your industry and business goals',
        },
        {
            img: ai4,
            title: 'Feasibility Studies',
            description: 'Conduct in-depth evaluations to determine the viability of new AI technologies for your organization',
        },
        {
            img: ai5,
            title: 'Prototype Development',
            description: 'Create prototypes to test and refine emerging AI technologies before full-scale implementation',
        },
    ];

    return (
        <Container maxWidth={false}
            sx={{ justifyContent: 'center' }}
            className="container"
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom
                sx={{ fontWeight: '600', fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px'}}
                className="typography-h4"
            >
                Our Approach to AI Research & Development
            </Typography>
            <Typography variant="body1" align="center"
                sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '16px' } }}
                className="typography-body1"
            >
                We explore emerging technologies, develop custom AI solutions tailored to your needs, and drive <br /> continuous innovation
            </Typography>


            <Box
                sx={{ height: { xs: '500px', sm: '400px', lg: '362px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, flexDirection: { xs: 'column', sm: 'row' } }}
                className="box-main"
            >


                <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: { xs: '20px', lg: '38px' }, gap: { xs: '20px', lg: '40px' }, flex: 1 }}>
                    <Box sx={{ width: '100%', maxWidth: '552px', padding: '16px' }} className="box-content">

                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: { xs: '36px', sm: '40px' }, wordWrap: 'break-word' }}
                        >
                            ✨ Exploring Emerging <br /> Technologies
                        </Typography>
                    </Box>
                    <Box
                        sx={{  color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '35px',     }, wordWrap: 'break-word' }}
                        className="box-description"
                    >
                        We continuously scan the AI landscape to identify and evaluate the latest technologies, ensuring your business leverages cutting-edge advancements
                    </Box>
                </Box>

                {/* image component */}

                <Box className='box-container' sx={{ width: '100%', maxWidth: '511px', height: '100%', borderRadius: '16px' }}
                >
                    <Box sx={{ alignSelf: 'stretch', borderRadius: '8px', overflow: 'hidden', }} className="image-wrapper">
                        <img src={ai1} alt="Placeholder" />
                    </Box>
                </Box>

            </Box>


            <Box className='step-box-container' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>

                {steps.map((step, index) => (
                    <Box key={index} sx={{ width: { xs: '360px', sm: '384px' }, }} className="step-box">

                        <Box className="step-icon">
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

export default AIdevAndResearch;
