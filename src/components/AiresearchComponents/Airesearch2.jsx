import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import ai1 from '../../assets/imageFiles/ai1.png'
import ai3 from '../../assets/imageFiles/ai3.png'
import ai4 from '../../assets/imageFiles/ai4.png'
import ai5 from '../../assets/imageFiles/ai5.png'
const Airesearch2 = () => {
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
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Our Approach to AI Research & Development
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: '#ADADAD', mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
            We explore emerging technologies, develop custom AI solutions tailored to your needs, and drive <br /> continuous innovation
            </Typography>


            <Box sx={{  width: ' 100%', maxWidth: '1200px', height: { xs: '500px', sm:'400px', lg: '362px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, marginBottom: '56px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>


                <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: {xs:'20px',lg:'38px'}, gap: {xs:'20px', lg:'40px'}, flex: 1 }}>
                    <Box sx={{ width: '100%', maxWidth: '552px', padding: '16px' }}>
                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '400', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' }, wordWrap: 'break-word' }}
                        >
                            ✨
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' }, wordWrap: 'break-word' }}
                        >
                             Exploring Emerging <br /> Technologies
                        </Typography>
                    </Box>
                    <Box
                        sx={{ width: '100%', maxWidth: '541px', color: '#ADADAD',paddingX:{xs:'15px'}, fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' }, wordWrap: 'break-word' }}
                    >
                       We continuously scan the AI landscape to identify and evaluate the latest technologies, ensuring your business leverages cutting-edge advancements
                    </Box>


                </Box>

                {/* image component */}
                <Box sx={{ width: '100%', maxWidth: '511px', height: '100%', padding: '16px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', boxShadow: '0px 0px 0px #FFFFFF inset', borderRadius: '16px', overflow: 'hidden', border: '0.20px solid #707070', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px' }}>
                    <Box sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ alignSelf: 'stretch', flex: '1 1 0' }} src={ai1} alt="Placeholder" />
                    </Box>
                </Box>

            </Box>


            <Box sx={{ display: 'flex', gap: '24px', flexDirection:{xs:'column',sm:'row'},flexWrap:'wrap',  }} >
                {steps.map((step, index) => (
                    <Box sx={{width:{xs:'360px',sm:'384px'}, height: '100%', padding: '24px 16px', borderRadius: '8px', overflow: 'hidden', border: '0.10px solid #A0A0A0', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
                        <Box sx={{ alignSelf: 'stretch', height: '164px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
                            <Box sx={{ alignSelf: 'stretch', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                                <Avatar sx={{ width: '48px', height: '48px', padding: '8px', background: 'linear-gradient(140deg, #141414 0%, #060606 100%)', boxShadow: '0.6px 1.09px 4.69px rgba(188, 188, 188, 0.17) inset', borderRadius: '52.36px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img style={{ width: '32px', height: '32px' }} src={step.img} alt="icon" />
                                </Avatar>
                                <Typography sx={{ flex: '1 1 0', color: 'rgba(255, 255, 255, 0.90)', fontSize: '20px', fontFamily: 'Poppins', fontWeight: '700', lineHeight: '30px', wordWrap: 'break-word' }}>
                                    {step.title}
                                </Typography>
                            </Box>
                            <Box sx={{ alignSelf: 'stretch', height: '52px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px' }}>
                                <Typography sx={{ color: '#ADADAD', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '25.6px', wordWrap: 'break-word' }}>
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

export default Airesearch2;
