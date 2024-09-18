import React, { useState } from 'react';
import { Box, Button, Typography, Container,IconButton } from '@mui/material';
import cb9 from '../../assets/imageFiles/cb9.png';
import cbvector from '../../assets/imageFiles/cbvector.png';
import CheckIcon from '@mui/icons-material/Check';



function UseCase() {
    const [activeButton, setActiveButton] = useState(null);
    const arr = [
        { title: 'Challenge  :', description: 'A digital marketing agency needed to produce large volumes of content across multiple channels while maintaining quality and consistency' },
        { title: 'Solution :', description: 'Chisel implemented Large Language Models to automate content creation, generating blog posts, social media content, and newsletters with minimal human input' },
        { title: 'Outcome :', description: ' The agency increased content output by 50%, reduced production time by 40%, and maintained consistent quality across all platforms' },
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
                    sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 'bold' }}
                >
                  Use Cases of Large Language Models
                </Typography>

            </Box>

            <Box className="box-border" >
                <Box className="flex-container"
                    sx={{flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.5, sm: 1, md: 1.3 } }}
                >
                    {['Automated Content Generation','Better Customer Support','Multilingual Content Creation'].map((label, index) => (
                        <Button className='animatingBtn'
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            sx={{color:'#ADADAD', fontFamily: 'poppins', border: '1px solid #1e1e1e', width: { xs: 'calc(100% - 1px)', sm: '373.33px' }, textTransform: 'capitalize',fontSize: { xs: '0.9rem', sm: 'clamp(0.9rem, 1.5vw, 0.9rem)', xl: '16px' }, fontWeight: '500', mb: { xs: 1, sm: 0 }, '&:before': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', backgroundColor: activeButton === index ? '#117DCC' : 'transparent', transition: 'background-color 0.3s ease' }, '&:hover:before': { backgroundColor: '#117DCC' } }}
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
                                <Box  component={'img'} src={cbvector} sx={{ width: 43.64, height: 43.64 }} />
                            </Box>
                            <Typography  className="typography-header"
                            variant="h4" sx={{ fontFamily: 'poppins',  fontWeight: 600, fontSize: { xs: '20px', md: '24px' } }}>
                           Automated Content Generation
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
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography className="typography-title2" component="span" sx={{ fontWeight: '600', fontFamily: 'Inter' }}>{el.title}</Typography>

                                    <Typography className="typography-description2" component="span" sx={{ fontWeight: '400', fontFamily: 'Inter' }}>{el.description}</Typography>
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
                            src={cb9}
                            alt="Sample"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default UseCase;



