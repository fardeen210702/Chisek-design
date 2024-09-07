import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import image from '../../assets/imageFiles/image1.png';
import bg2 from '../../assets/imageFiles/bg2.png';
import faceIcon from '../../assets/imageFiles/faceIcon.png';

function AITechnologies() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <Container
            maxWidth={false}
            sx={{ padding: { xs: 2, sm: 4, md: 0 }, width: '100%', marginY: '5%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}
        >
            <Box
                component="img"
                src={bg2}
                sx={{ position: 'absolute', width: '100%', height: '200%', top: 0, left: 0, zIndex: -1, objectFit: 'cover' }}
            />

            <Box
                sx={{ padding: { xs: 2, sm: 4 }, marginBottom: { xs: 2, sm: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}
            >
                <Typography
                    variant="h2"
                    sx={{ color: '#117DCC', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' }, fontWeight: 'bold', mb: 1 }}
                >
                    AI TECHNOLOGIES WE MASTER
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ color: '#ADADAD', fontSize: { xs: '14px', sm: '1rem', md: '1.2rem', xl: '18px' }, lineHeight: 1.5, fontFamily: 'inter' }}
                >
                    Discover our expertise in AI technologies, including predictive modeling, image recognition, speech-to-text, and conversational AI, tailored to <br /> boost efficiency and innovation.
                </Typography>
            </Box>

            <Box sx={{ border: '0.2px solid #8080803b', padding: '24px 16px', borderRadius: '10px' }}>
                <Box
                    sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mb: 4, width: '100%', gap: { xs: 0.5, sm: 1, md: 1.3 }, justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    {['Speech to Text', 'Text to Speech', 'Computer Vision', 'NLP', 'Integrations', 'LLM'].map((label, index) => (
                        <Button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            sx={{ borderRadius: '8px', fontFamily: 'poppins', border: '1px solid #80808081', color: '#ADADAD', textDecoration: 'none', position: 'relative', width: { xs: 'calc(100% - 1px)', sm: '174.6px' }, height: '62px', overflow: 'hidden', textTransform: 'capitalize', paddingX: 1, paddingY: 1, fontSize: { xs: '0.9rem', sm: 'clamp(0.9rem, 1.5vw, 0.9rem)', xl: '16px' }, fontWeight: 'bold', mb: { xs: 1, sm: 0 }, '&:before': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', backgroundColor: activeButton === index ? '#117DCC' : 'transparent', transition: 'background-color 0.3s ease' }, '&:hover:before': { backgroundColor: '#117DCC' } }}
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
                                <Box component={'img'} src={faceIcon} sx={{ width: 43.64, height: 43.64 }} />
                            </Box>
                            <Typography variant="h4" sx={{ fontFamily: 'poppins', color: 'rgba(255, 255, 255, 0.90)', fontWeight: 700, fontSize: { xs: '20px', md: '24px', lg: '26px', xl: '28px' } }}>
                                Speech to Text
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={{ color: '#ADADAD', fontWeight: 500, fontSize: { xs: '15px', md: '16px', lg: '17px', xl: '18px' }, fontFamily: 'inter' }}>
                            Automate repetitive tasks and streamline business processes
                        </Typography>

                        <Typography variant="body2" sx={{ color: '#ADADAD', fontSize: { xs: '15px', md: '16px', lg: '17px', xl: '18px' }, fontFamily: 'inter' }}>
                            ✨ Multi-language support with over 50 languages and dialects
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ADADAD', fontSize: { xs: '15px', md: '16px', lg: '17px', xl: '18px' }, fontFamily: 'inter' }}>
                            ✨ Real-time transcription for live captioning and interactive applications
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ADADAD', fontSize: { xs: '15px', md: '16px', lg: '17px', xl: '18px' }, fontFamily: 'inter' }}>
                            ✨ Speaker diarization to distinguish between multiple speakers
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ADADAD', fontSize: { xs: '15px', md: '16px', lg: '17px', xl: '18px' }, fontFamily: 'inter' }}>
                            ✨ Custom vocabulary integration for industry-specific terminology
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ width: 192, height: 56, padding: '12px 24px', fontFamily: 'Poppins', fontWeight: '700', mt: 2, background: 'rgba(255, 255, 255, 0.04)', borderRadius: 1, color: '#117DCC', textTransform: 'none', display: 'flex', gap: '5px', alignItems: 'center', fontSize: '18px' }}
                        >
                            View Demo <EastIcon />
                        </Button>
                    </Box>

                    <Box
                        sx={{ width: { xs: '100%', lg: 505 }, height: { xs: '100%', lg: 486 }, p: { xs: 0, lg: 2 }, background: 'linear-gradient(0deg, #101010 0%, #101010 100%)', boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.14) inset', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0.2px solid rgba(112.31, 112.31, 112.31, 0.70)' }}
                    >
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                            src={image}
                            alt="Sample"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default AITechnologies;
