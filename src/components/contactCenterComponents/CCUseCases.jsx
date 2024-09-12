import React, { useState } from 'react';
import { Box, Button, Typography, Container,IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import cc10 from '../../assets/imageFiles/cc10.png';
import cc11 from '../../assets/imageFiles/cc11.png';
import I10 from '../../assets/imageFiles/I10.png'

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
    <Container className='usecase-container'
            maxWidth={false}
            sx={{ padding: { xs: 2, sm: 4, md: 0 } }}
        >
            

            <Box className='box4'
                sx={{ padding: { xs: 2, sm: 4 }, marginBottom: { xs: 2, sm: 4 }, }}
            >
                <Typography className="typography-heading"
                    variant="h2"
                    sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' }, fontWeight: 'bold' }}
                >
                   Use Cases of AI in Contact Centers
                </Typography>

                <Typography className="typography-body"
                    variant="body1"
                    sx={{ fontSize: { xs: '14px', sm: '1rem', md: '1.2rem', xl: '18px' }, lineHeight: 1.5, fontFamily: 'inter' }}
                >
                   Discover our expertise in AI technologies, including predictive modeling, image recognition, speech-to-text, and conversational AI, <br />  tailored to boost efficiency and innovation
                </Typography>
            </Box>

            <Box className="box-border" >
                <Box className="flex-container"
                    sx={{flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.5, sm: 1, md: 1.3 } }}
                >
                    {['AI-Driven Campaign Optimization','Personalized Email Marketing','Automated Content Creation'].map((label, index) => (
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
                                <Box  component={'img'} src={cc10} sx={{ width: 43.64, height: 43.64 }} />
                            </Box>
                            <Typography  className="typography-header"
                            variant="h4" sx={{ fontFamily: 'poppins',  fontWeight: 700, fontSize: { xs: '20px', md: '24px', lg: '26px', xl: '28px' } }}>
                            Automating Customer Support
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
                        <Button 
                            variant="contained"
                            sx={{  height: {xs:'fit-content',md:32}, fontFamily: 'Poppins', fontWeight: '400', mt: 2, background: 'rgba(255, 255, 255, 0.04)', borderRadius: 1, color: '#117DCC', textTransform: 'none', display: 'flex', gap: '5px', alignItems: {xs:'start',md:'center'},justifyContent:'start', fontSize: '16px',marginTop:'50px' }}
                        >
                            <Box component={'img'} src={I10} />

                            Key Technologies  : Conversational AI, Virtual agents
                        </Button>
                    </Box>

                    <Box className='boximgwrapper'
                        sx={{ width: { xs: '100%', lg: 505 }, height: { xs: '100%', lg: 486 }, p: { xs: 0, lg: 2 }}}
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






