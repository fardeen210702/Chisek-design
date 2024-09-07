import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import I2 from '../../assets/imageFiles/I2.png'
import I5 from '../../assets/imageFiles/I5.png'
import I4 from '../../assets/imageFiles/I4.png'
import I3 from '../../assets/imageFiles/I3.png'

const CustomerSatisfaction = () => {
    const steps = [
        {
            img: I3,
            title: 'Personalized Interactions',
            description: 'Offer customized financial advice based on customer profiles',
        },
        {
            img: I4,
            title: '24/7 Availability',
            description: 'Provide round-the-clock support with AI-driven chatbots',
        },
        {
            img: I5,
            title: 'Higher Engagement',
            description: 'Increase customer loyalty through personalized services',
        },
    ];

    return (
        <Container maxWidth={false}
            sx={{
                width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}
        >
         

            <Box sx={{  width: ' 100%', maxWidth: '1200px', height: { xs: '500px', sm:'400px', lg: '456px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, marginBottom: '56px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' },justifyContent:{lg:'space-between'} }}>

                {/* image component */}
                <Box sx={{ width: '100%', maxWidth: '472px', height: '100%', padding: '16px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', boxShadow: '0px 0px 0px #FFFFFF inset', borderRadius: '16px', overflow: 'hidden', border: '0.20px solid #707070', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px' }}>
                    <Box sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ alignSelf: 'stretch', flex: '1 1 0' }} src={I2} alt="Placeholder" />
                    </Box>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: {xs:'20px', lg:'24px'} }}>
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
                             Improved Customer Satisfaction
                        </Typography>
                    </Box>
                    <Box
                        sx={{ width: '100%', maxWidth: '541px', color: '#ADADAD',paddingX:{xs:'15px'}, fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' }, wordWrap: 'break-word' }}
                    >
                        Implement AI-powered chatbots and LLMs to provide personalized financial advice and 24/7 customer support. These technologies enhance customer engagement and satisfaction by delivering tailored experiences that meet individual needs</Box>


                </Box>

                

            </Box>


            <Box sx={{ display: 'flex', gap: '24px', flexDirection:{xs:'column',sm:'row'},flexWrap:'wrap',  }} >
                {steps.map((step, index) => (
                    <Box sx={{width:{xs:'360px',sm:'384px'}, height: {xs:'fit-content' , lg:'164px'}, padding: '24px 16px', borderRadius: '8px', overflow: 'hidden', border: '0.10px solid #A0A0A0', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
                        <Box sx={{ alignSelf: 'stretch', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
                            <Box sx={{ alignSelf: 'stretch', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                                <Avatar sx={{ width: '48px', height: '48px', padding: '8px', background: 'linear-gradient(140deg, #141414 0%, #060606 100%)', boxShadow: '0.6px 1.09px 4.69px rgba(188, 188, 188, 0.17) inset', borderRadius: '52.36px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img style={{ width: '32px', height: '32px' }} src={step.img} alt="icon" />
                                </Avatar>
                                <Typography sx={{ flex: '1 1 0', color: 'rgba(255, 255, 255, 0.90)', fontSize: '20px', fontFamily: 'Poppins', fontWeight: '700', lineHeight: '30px', wordWrap: 'break-word' }}>
                                    {step.title}
                                </Typography>
                            </Box>
                            <Box sx={{ alignSelf: 'stretch', height: '52px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px' }}>
                                <Typography sx={{ color: '#ADADAD', fontSize: {xs:'14px',md:'16px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '25.6px', wordWrap: 'break-word' }}>
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

export default CustomerSatisfaction;
