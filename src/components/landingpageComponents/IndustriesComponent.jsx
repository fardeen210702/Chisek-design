import React, { useEffect } from 'react';
import { Container, Typography, Grid2, Paper, Button, Box, duration } from '@mui/material';
import frameone from '../../assets/imageFiles/Frameone.png';
import frametwo from '../../assets/imageFiles/Frametwo.png';
import framethree from '../../assets/imageFiles/Framethree.png';
import framefour from '../../assets/imageFiles/Framefour.png';
import EastIcon from '@mui/icons-material/East';
import bg2 from '../../assets/imageFiles/bg2.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Industries = () => {
    const data = [
        {
            title: 'Healthcare',
            description: "Enhance patient care with AI-driven symptom checkers, virtual assistants, and mental health support, while using predictive modeling for risk stratification, disease prevention, and treatment optimization, and streamline clinical documentation with speech-to-text technology.",
            img: frameone,
            btn: 'Learn More'
        },
        {
            title: 'E-Commerce and Retail',
            description: "Boost shopping with AI-driven recommendations, abandoned cart recovery, and customer service, while using image recognition for visual search and inventory management, and predictive modeling for demand forecasting and pricing optimization.",
            img: framefour,
            btn: 'Learn More'
        },
        {
            title: 'Finance',
            description: "Leverage AI for personalized financial advice, document analysis, and automated customer support, while using predictive modeling for credit risk and fraud detection, and text-to-speech for accessibility and enhanced IVR systems.",
            img: framethree,
            btn: 'Learn More'
        },
        {
            title: 'Manufacturing & Logistics',
            description: "Utilize predictive modeling for equipment maintenance, quality control, and supply chain optimization, while employing speech-to-text for hands-free operation and efficient quality inspections.",
            img: frametwo,
            btn: 'Learn More'
        },
    ];


useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.industrycontainer',
        start:'40% bottom',
    }
  })

  tl.fromTo('.grid',{y:100,opacity:0},{
    y:0,
    opacity:1,
    duration:1,
    ease:'power3.out'
  })

}, [])



    return (
        <Container className='industrycontainer' maxWidth={false} >
            {/* bg png */}
            <Box className='bg-img'
                component="img"
                src={bg2}
            />

            {/* First Container */}
            <Box className='industry1container'  container >
                
                    
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px', color: '#117DCC', fontWeight: 'bold', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' } }}
                        >
                            Industries We Deal In
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ color: '#ADADAD', fontSize: {xs:'14px',md:'16px'}, fontFamily: 'inter' }}
                        >
                            Explore the industries we serve, from healthcare and finance to manufacturing and retail, and see how our AI solutions drive efficiency, enhance customer experiences, and foster innovation across diverse sectors.
                        </Typography>
                    
                
            </Box>

            {/* Second Container - Data Mapping */}
            <Grid2 className='grid' container spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', marginY: '5%',gap:'30px' }}>
                {data.map((item, index) => (
                    <Grid2 className='grid-item'
                        item
                        key={index}
                        sx={{  width: { xs: '300px', sm: '350px', md: '380px', lg: '500px' }, height: { xs: '340px', md: '320px', lg: '280px'  } }}
                    >
                        <Paper elevation={0} sx={{ width: '100%', height: '100%', padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 2, backgroundColor: '#101010', border: '0.2px solid #262626ef', borderRadius: '16px', boxShadow: 'none' }}>
                            <div className='paperinner-div' >
                                <Box
                                    component='img'
                                    sx={{ width: { xs: '40px', md: '50px' }, height: { xs: '40px', md: '50px' } }}
                                    src={item.img}
                                    alt={item.title}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{ width: 'calc(100% - 96px)', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'poppins', fontWeight: 600, fontSize: { xs: '14px', md: '16px', lg: '20px' } }}
                                >
                                    {item.title}
                                </Typography>
                            </div>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: '14px', color: '#ffffff85', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', fontFamily: 'poppins',lineHeight:1.5 }}
                            >
                                {item.description}
                            </Typography>
                            <Button
                                endIcon={<EastIcon />}
                                sx={{fontFamily: 'poppins', marginTop: '2%', width: '170px', height: '32px', backgroundColor: 'transparent', color: '#117DCC', fontSize: { xs: '14px', md: '16px' },textTransform:'capitalize',display:'flex',justifyContent:'flex-start',fontWeight:500 }}
                            >
                                {item.btn}
                            </Button>
                        </Paper>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
}

export default Industries;
