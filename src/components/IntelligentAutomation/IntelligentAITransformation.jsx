import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import iat1 from '../../assets/imageFiles/iat1.png'
import iat2 from '../../assets/imageFiles/iat2.png'
import s2 from '../../assets/imageFiles/s2.png'
import s3 from '../../assets/imageFiles/s3.png'

const IntelligentAITransformation = () => {
    const steps = [
        {
            img: iat2,
            title: 'In-Depth Analysis',
            description: 'We start by understanding your unique business needs and challenges',
        },
        {
            img: s2,
            title: 'Customized Roadmap',
            description: 'Develop a detailed plan, outlining AI initiatives and technologies tailored to your objectives',
        },
        {
            img: s3,
            title: 'Stakeholder Engagement',
            description: 'Ensure alignment and buy-in from all key stakeholders for smooth implementation',
        },
    ];

    return (
        <Container maxWidth={false}
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Our Approach to Intelligent Automation & Efficiency
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: '#ADADAD', mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '16px' },lineHeight:'27px' }}>
            Our tailored approach to Intelligent Automation & Efficiency ensures seamless integration, enhanced productivity, <br /> and continuous optimization for sustainable business growth</Typography>


            <Box sx={{  width: ' 100%', maxWidth: '1200px', height: { xs: '500px', sm:'400px', lg: '362px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, marginBottom: '56px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>


                <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: {xs:'20px',lg:'38px'}, gap: {xs:'20px', lg:'40px'}, flex: 1 }}>
                    <Box sx={{ width: '100%', maxWidth: '552px', padding: '16px' }}>
                        
                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' }, wordWrap: 'break-word' }}
                        >
                            ✨Tailored Automation Strategy  Development
                        </Typography>
                    </Box>
                    <Box
                        sx={{ width: '100%', maxWidth: '541px', color: '#ADADAD',paddingX:{xs:'15px'}, fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' }, wordWrap: 'break-word' }}
                    >
                        We create a customized automation roadmap that aligns with your specific business goals, ensuring strategic and impactful results.
                    </Box>


                </Box>

                {/* image component */}
                <Box sx={{ width: '100%', maxWidth: '511px', height: '100%', padding: '16px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', boxShadow: '0px 0px 0px #FFFFFF inset', borderRadius: '16px', overflow: 'hidden', border: '0.20px solid #2e2e2e', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px' }}>
                    <Box sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ alignSelf: 'stretch', flex: '1 1 0' }} src={iat1} alt="Placeholder" />
                    </Box>
                </Box>

            </Box>


            <Box sx={{ display: 'flex', gap: '24px', flexDirection:{xs:'column',sm:'row'},flexWrap:'wrap',  }} >
                {steps.map((step, index) => (
                    <Box sx={{width:{xs:'360px',sm:'384px'}, height: '100%', padding: '24px 16px', borderRadius: '8px', overflow: 'hidden', border: '0.10px solid #2e2e2e', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
                        <Box sx={{ alignSelf: 'stretch', height: '164px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
                            <Box sx={{ alignSelf: 'stretch', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                                <Avatar sx={{ width: '48px', height: '48px', padding: '8px', background: 'linear-gradient(140deg, #141414 0%, #060606 100%)', boxShadow: '0.6px 1.09px 4.69px rgba(188, 188, 188, 0.17) inset', borderRadius: '52.36px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img style={{ width: '32px', height: '32px' }} src={step.img} alt="icon" />
                                </Avatar>
                                <Typography sx={{ flex: '1 1 0', color: 'rgba(255, 255, 255, 0.90)', fontSize: '20px', fontFamily: 'Poppins', fontWeight: '600', lineHeight: '30px', wordWrap: 'break-word' }}>
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

export default IntelligentAITransformation;
