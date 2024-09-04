import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardMedia, CardContent, List, ListItem, ListItemIcon } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import image from '../assets/imageFiles/image1.png';
import frame22 from '../assets/imageFiles/Frame22.png';

function AITechnologies() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <Box
            sx={{
                padding: { xs: 2, sm: 4 },
                maxWidth: '1168px',
                margin: 'auto',
                marginY:'5%',

                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* Header Container */}
            <Box
                sx={{
                    padding: { xs: 2, sm: 4 },
                    marginBottom: { xs: 2, sm: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                {/* Element 1 */}
                <Typography
                    variant="h2"
                    sx={{
                        color: '#117DCC',
                        fontFamily: 'Bebas Neue, Arial, sans-serif',
                        letterSpacing: '2px',
                        fontSize: {
                            xs: '24px',  // Extra small screens
                            sm: '28px',  // Small screens
                            md: '32px',  // Medium screens
                            lg: '36px',  // Large screens
                            xl: '40px',  // Extra large screens
                        },
                        fontWeight: 'bold',
                        mb: 1,

                    }}
                >
                    AI TECHNOLOGIES WE MASTER
                </Typography>

                {/* Element 2 */}
                <Typography
                    variant="body1"
                    sx={{
                        color: '#ffffff85',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                        lineHeight: 1.5,
                    }}
                >
                    Discover our expertise in AI technologies, including predictive modeling, image recognition, speech-to-text, and conversational AI, tailored to boost efficiency and innovation.
                </Typography>
            </Box>

            {/* Top Container with Buttons */}
            <Box sx={{border:'1px solid #8080803b', padding:'20px 10px' , borderRadius:'10px' }}>


                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',

                        mb: 4,
                        width: '100%',
                        gap: { xs: 0.5, sm: 1 },
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {['Speech to Text', 'Text to Speech', 'Computer Vision', 'NLP', 'Integrations', 'LLM'].map((label, index) => (
                        <Button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            sx={{
                                borderRadius: '8px',
                                border: '1px solid #80808081',
                                color: '#fff',
                                textDecoration: 'none',
                                position: 'relative',
                                width: { xs: 'calc(100% - 1px)', sm: '173px' },
                                height: '62px',
                                overflow: 'hidden',
                                paddingX: 2,
                                paddingY: 1,
                                fontSize: { xs: '0.9rem', sm: 'clamp(0.9rem, 1.5vw, 0.9rem)' },
                                fontWeight: 'bold',
                                mb: { xs: 1, sm: 0 },
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: activeButton === index ? '#117DCC' : 'transparent',
                                    transition: 'background-color 0.3s ease',
                                },
                                '&:hover:before': {
                                    backgroundColor: '#117DCC',
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>

                {/* Bottom Container with Background */}
                <Box
                    sx={{
                        bgcolor: '#101010',
                        borderRadius: '8px',
                        padding: '10px 15px 10px 10px',
                        paddingY: { xs: 2, sm: 3 },
                        width: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                    }}
                >
                    {/* Left Container */}
                    <Card
                        sx={{
                            bgcolor: 'transparent',
                            borderRadius: '8px',
                            flexGrow: 1,
                            maxWidth: '586px', // 100px more than the right container
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            justifyContent: 'space-between',
                            width: 'calc(100% - 20px)', // Take the remaining width with 20px padding from the left
                            height: '100%',
                            boxShadow: 'none', // Remove any shadow if present
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt="Description"
                            image={frame22}
                            sx={{ width: '80px', height: '80px', borderRadius: '8px', marginLeft: '10px' }}
                        />
                        <CardContent
                            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ color: '#fff', mb: 0.5, fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: 'clamp(1.5rem, 2.5vw, 2.5rem)' } }}
                            >
                                Heading
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#ffffff85', mb: 2, fontSize: { xs: '0.9rem', sm: 'clamp(1rem, 1.5vw, 1.2rem)' } }}>
                                Automate repetitive tasks and streamline business processes.
                            </Typography>
                            <List sx={{ padding: 0, margin: 0 }}>
                                <ListItem sx={{ fontSize: '0.95rem', color: '#ffffff85', mb: 1, display: 'flex', alignItems: 'center', fontFamily: 'inter' }}>
                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                        <span role="img" aria-label="star">✨</span>
                                    </ListItemIcon>
                                    Multi-language support with over 50 languages and dialects
                                </ListItem>
                                <ListItem sx={{ fontSize: '0.95rem', color: '#ffffff85', mb: 1, display: 'flex', alignItems: 'center', fontFamily: 'inter' }}>
                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                        <span role="img" aria-label="star">✨</span>
                                    </ListItemIcon>
                                    Real-time transcription for live captioning and interactive applications
                                </ListItem>
                                <ListItem sx={{ fontSize: '0.95rem', color: '#ffffff85', mb: 1, display: 'flex', alignItems: 'center', fontFamily: 'inter' }}>
                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                        <span role="img" aria-label="star">✨</span>
                                    </ListItemIcon>
                                    Speaker diarization to distinguish between multiple speakers
                                </ListItem>
                                <ListItem sx={{ fontSize: '0.95rem', color: '#ffffff85', mb: 1, display: 'flex', alignItems: 'center', fontFamily: 'inter' }}>
                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                        <span role="img" aria-label="star">✨</span>
                                    </ListItemIcon>
                                    Custom vocabulary integration for industry-specific terminology
                                </ListItem>
                            </List>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<EastIcon/>}
                                sx={{
                                    mt: 2,
                                    width: '192px',
                                    height: '56px',
                                    paddingY: '8px',
                                    paddingX: '24px',
                                    fontWeight: 'bold',
                                    color: '#117DCC',
                                    backgroundColor: '#141414',
                                    borderRadius: '10px',
                                    '&:hover': {
                                        backgroundColor: '#141414',
                                    },
                                    alignSelf: 'flex-start', // Align button at the start
                                }}
                            >
                                View Demo
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Right Container */}
                    <Card
                        sx={{
                            // bgcolor: '#141414',
                            backgroundColor:'transparent',
                            // borderRadius: '8px',
                            padding: '16px',
                            height: '100%',
                            maxWidth: '486px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // border: '1px solid #80808081',
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt="Description"
                            image={image}
                            sx={{
                                maxWidth: '100%',
                                borderRadius: '8px',
                                boxShadow: 'none', // Remove shadow if present
                            }}
                        />
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default AITechnologies;
