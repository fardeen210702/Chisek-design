import React, { useState } from 'react';
import { Box, Button, Typography, Container,IconButton } from '@mui/material';
import nlp9 from '../../assets/imageFiles/nlp9.png';
import nlpvector from '../../assets/imageFiles/nlpvector.png';
import CheckIcon from '@mui/icons-material/Check';



function UseCase() {
    const [activeButton, setActiveButton] = useState(null);
    const arr = [
        { title: 'Challenge  :', description: 'A global brand needed to monitor and understand customer sentiment across various social media platforms to protect its reputation and improve customer satisfaction' },
        { title: 'Solution :', description: ' Chisel implemented NLP-driven sentiment analysis tools that continuously monitor social media mentions, reviews, and feedback, providing real-time insights into customer emotions and brand perception' },
        { title: 'Outcome :', description: 'The brand was able to proactively address negative sentiment, improve customer satisfaction, and enhance its reputation management efforts, leading to a 20% increase in positive brand mentions' },
    ]

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <Container className='usecase-container'
            maxWidth={false}
            sx={{ padding: { xs: 2, sm: 4, md: 0 } }}
        >
            

            <Box className='box44'
                sx={{ padding: { xs: 2, sm: 4 }, marginBottom: { xs: 2, sm: 4 }, }}
            >
                <Typography className="typography-heading"
                    variant="h2"
                    sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' }, fontWeight: 'bold' }}
                >
                   Use Cases of Natural Language Processing
                </Typography>

            </Box>

            <Box className="box-border" >
                <Box className="flex-container"
                    sx={{flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.5, sm: 1, md: 1.3 } }}
                >
                    {['Sentiment Analysis for Brand Management','Automated Report Generation','Multilingual Customer Support'].map((label, index) => (
                        <Button className='animatingBtn'
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            sx={{color:'#ADADAD', fontFamily: 'poppins', border: '1px solid #80808081', width: { xs: 'calc(100% - 1px)', sm: '373.33px' }, textTransform: 'capitalize',fontSize: { xs: '0.9rem', sm: 'clamp(0.9rem, 1.5vw, 0.9rem)', xl: '16px' }, fontWeight: 'bold', mb: { xs: 1, sm: 0 }, '&:before': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', backgroundColor: activeButton === index ? '#117DCC' : 'transparent', transition: 'background-color 0.3s ease' }, '&:hover:before': { backgroundColor: '#117DCC' } }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>

                <Box className='boxwrapper'
                    sx={{ flexDirection: { xs: 'column', lg: 'row' }, }}
                >
                    <Box className='innerbox1' >
                        <Box className='flex-containerr'>
                            <Box className='icon-wrapper'
                            >
                                <Box  component={'img'} src={nlpvector} sx={{ width: 43.64, height: 43.64 }} />
                            </Box>
                            <Typography  className="typography-header"
                            variant="h4" sx={{ fontFamily: 'poppins',  fontWeight: 700, fontSize: { xs: '20px', md: '24px', lg: '26px', xl: '28px' } }}>
                            Sentiment Analysis for Brand <br /> Management
                            </Typography>
                        </Box>

                        {arr.map((el, id) => (
                        <Box className='box-innercontainer'
                         key={id} sx={{ width: {xs:'100%',md:'569px'} }}>

                            <Box className='box-inneritem'
                            >
                                <IconButton    
                                
                                className='checkicon'  >
                                        <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#117DCC', }} />
                                    </IconButton>
                            </Box>
                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography className="typography-title2" component="span" sx={{ fontWeight: '600' }}>{el.title}</Typography>

                                    <Typography className="typography-description2" component="span" sx={{ fontWeight: '400' }}>{el.description}</Typography>
                                </Typography>
                            </Box>
                        </Box>)
                    )}
                        
                    </Box>

                    <Box className='boximgwrapper'
                        sx={{ width: { xs: '100%', lg: 505 }, height: { xs: '100%', lg: 486 }, p: { xs: 0, lg: 2 }}}
                    >
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                            src={nlp9}
                            alt="Sample"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default UseCase;



