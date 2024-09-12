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
        <Container className='AIcontainer'
            maxWidth={false}
            sx={{ padding: { xs: 2, sm: 4, md: 0 }}}
        >
            <Box className='background-image'
                component="img"
                src={bg2}
            />

            <Box className='aibox'
                sx={{ padding: { xs: 2, sm: 4 }, marginBottom: { xs: 2, sm: 4 } }}
            >
                <Typography className='aitypo'
                    variant="h2"
                    sx={{  fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' }, fontWeight: 'bold' }}
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

            <Box className='outer-box ' >
                <Box className='inner-box'
                    sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.5, sm: 1, md: 3,lg:3.4 }}}
                >
                    {['Speech to Text', 'Text to Speech', 'Computer Vision', 'NLP', 'Integrations', 'LLM'].map((label, index) => (
                        <Button
                            key={index} //unable to apply external css here
                            onClick={() => handleButtonClick(index)}
                            sx={{ borderRadius: '8px', fontFamily: 'poppins', border: '1px solid #80808081', color: '#ADADAD', textDecoration: 'none', position: 'relative', width: { xs: 'calc(100% - 1px)', sm: '174.6px' }, height: '62px', overflow: 'hidden', textTransform: 'capitalize', paddingX: 1, paddingY: 1, fontSize: { xs: '0.9rem', sm: 'clamp(0.9rem, 1.5vw, 0.9rem)', xl: '16px' }, fontWeight: 'bold', mb: { xs: 1, sm: 0 }, '&:before': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', backgroundColor: activeButton === index ? '#117DCC' : 'transparent', transition: 'background-color 0.3s ease' }, '&:hover:before': { backgroundColor: '#117DCC' } }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>

                <Box className='btnouter-box'
                    sx={{ flexDirection: { xs: 'column', lg: 'row' }}}
                >
                    <Box className='btninner-box' >
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Box className='icon-wrapper' >
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

                    <Box className='box-component1'
                        sx={{ width: { xs: '100%', lg: 505 }, height: { xs: '100%', lg: 486 }, p: { xs: 0, lg: 2 } }}
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
