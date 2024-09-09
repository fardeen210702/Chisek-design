import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import cc10 from '../../assets/imageFiles/cc10.png';
import cc11 from '../../assets/imageFiles/cc11.png';
import I10 from '../../assets/imageFiles/I10.png'
import s6 from '../../assets/imageFiles/s6.png'

const   CCUseCases = () => {


    const [activeButton, setActiveButton] = useState(null);
    const arr = [
        { title: 'Challenge  :', description: 'A large contact center faced challenges in managing high volumes of customer inquiries, leading to long wait times and decreased customer satisfaction' },
        { title: 'Solution :', description: ' Chisel implemented AI-driven chatbots and virtual agents to handle routine inquiries and provide personalized assistance, significantly reducing wait times' },
        { title: 'Outcome :', description: 'The contact center achieved a 50% reduction in wait times and a 30% increase in customer satisfaction, with chatbots handling 60% of incoming inquiries' },
    ]

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

  return (
    <Container
            maxWidth={false}
            sx={{ padding: { xs: 2, sm: 4, md: 0 }, width: '100%', marginY: '5%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}
        >
            

            <Box
                sx={{ padding: { xs: 2, sm: 4 }, marginBottom: { xs: 2, sm: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}
            >
                <Typography
                    variant="h2"
                    sx={{ color: '#117DCC', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' }, fontWeight: 'bold', mb: 1 }}
                >
                  Use Cases of AI in Contact Centers
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ color: '#ADADAD', fontSize: { xs: '14px', sm: '1rem', md: '1.2rem', xl: '18px' }, lineHeight: 1.5, fontFamily: 'inter' }}
                >
                   Discover our expertise in AI technologies, including predictive modeling, image recognition, speech-to-text, and conversational AI, tailored to boost efficiency and innovation
                </Typography>
            </Box>

            <Box sx={{ border: '0.2px solid #8080803b', padding: '24px 16px', borderRadius: '10px' }}>
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mb: 4, width: '100%', gap: { xs: 0.5, sm: 1, md: 1.3 }, justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    {['Conversational AI for Customer Support','AI-Driven Workforce Management','Speech Analytics for Quality Assurance'].map((label, index) => (
                        <Button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            sx={{ borderRadius: '8px', fontFamily: 'poppins', border: '1px solid #80808081', color: '#ADADAD', textDecoration: 'none', position: 'relative', width: { xs: 'calc(100% - 1px)', sm: '373.33px' }, height: '62px', overflow: 'hidden', textTransform: 'capitalize', paddingX: 1, paddingY: 1, fontSize: { xs: '0.9rem', sm: 'clamp(0.9rem, 1.5vw, 0.9rem)', xl: '16px' }, fontWeight: 'bold', mb: { xs: 1, sm: 0 }, '&:before': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', backgroundColor: activeButton === index ? '#117DCC' : 'transparent', transition: 'background-color 0.3s ease' }, '&:hover:before': { backgroundColor: '#117DCC' } }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>

                <Box
                    sx={{ width: '100%', height: '100%', p: 3, background: 'linear-gradient(0deg, #101010 0%, #101010 100%)', borderRadius: 2, border: '0.2px solid rgba(112.31, 112.31, 112.31, 0.70)', display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3 }}
                >
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start' }}
                    >
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Box
                                sx={{ width: 80, height: 80, p: 2, background: 'linear-gradient(140deg, #141414 0%, #060606 100%)', boxShadow: '1px 1.82px 7.82px rgba(188.54, 188.54, 188.54, 0.17) inset', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Box component={'img'} src={cc10} sx={{ width: 43.64, height: 43.64 }} />
                            </Box>
                            <Typography variant="h4" sx={{ fontFamily: 'poppins', color: 'rgba(255, 255, 255, 0.90)', fontWeight: 700, fontSize: { xs: '20px', md: '24px', lg: '26px', xl: '28px' } }}>
                            Conversational AI for Customer Support
                            </Typography>
                        </Box>

                        {arr.map((el, id) => (
                        <Box key={id} sx={{ width: {xs:'100%',md:'569px'}, height: 'auto', display: 'flex', alignItems: 'flex-start', gap: '16px', }}>
                            <Box sx={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={s6} alt="Icon" style={{ width: '24px', height: '24px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', boxShadow: '4px 0px 9px 2px #BCBCBC4D inset', borderRadius: '50%', border: '0.08px solid' }} />
                            </Box>
                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' }}>{el.title}</Typography>
                                    <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400' }}>{el.description}</Typography>
                                </Typography>
                            </Box>
                        </Box>)
                    )}
                        <Button 
                            variant="contained"
                            sx={{ width: '100%', height: {xs:'fit-content',md:32}, padding: '12px 24px', fontFamily: 'Poppins', fontWeight: '400', mt: 2, background: 'rgba(255, 255, 255, 0.04)', borderRadius: 1, color: '#117DCC', textTransform: 'none', display: 'flex', gap: '5px', alignItems: {xs:'start',md:'center'},justifyContent:'start', fontSize: '18px',marginTop:'50px' }}
                        >
                            <Box component={'img'} src={I10} />

                            Key Technologies  : Conversational AI, Virtual agents
                        </Button>
                    </Box>

                    <Box
                        sx={{ width: { xs: '100%', lg: 505 }, height: { xs: '100%', lg: 486 }, p: { xs: 0, lg: 2 }, background: 'linear-gradient(0deg, #101010 0%, #101010 100%)', boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.14) inset', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.2px solid rgba(112.31, 112.31, 112.31, 0.70)' }}
                    >
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                            src={cc11}
                            alt="Sample"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
  )
}

export default CCUseCases
