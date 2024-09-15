import React,{useEffect} from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import progressbar from '../../assets/imageFiles/progressbar.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import bg2 from '../../assets/imageFiles/bg2.png'

const DeliverComponent = () => {
    const steps = [
        {
            title: 'Discover & Strategize',
            description: 'Conduct a detailed assessment of your needs and challenges to formulate a strategic AI plan that addresses your unique business goals',
        },
        {
            title: 'Develop & Test',
            description: 'Create and perfect AI solutions by designing and fine-tuning models to ensure they meet your precise requirements and deliver optimal results',
        },
        {
            title: 'Launch & Support',
            description: 'Launch the AI solutions within your systems and offer dedicated support to monitor performance and make necessary adjustments for sustained success',
        },
    ];


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
      
        const tl = gsap.timeline({
          scrollTrigger:{
              trigger:'.delivercontainer',
              start:'30% bottom',
          }
        })
      
        tl.fromTo('.progressbar ',{y:100,opacity:0},{
          y:0,
          opacity:1,
          duration:2,
          ease:'power3.out'
        })
      
      }, [])
    return (
        <Container className='delivercontainer' maxWidth={false}
            sx={{
               width: { xs: '100%' }}}
        >
            <Box component="img" className='bg-img' src={bg2} />
           
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 600,lineHeight:1.7, fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
                HOW WE DELIVER SUCCESS
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: '#ADADAD', mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '16px' },fontWeight:500,lineHeight:1.5 }}>
                Our streamlined process ensures that we deliver tailored AI solutions efficiently and effectively. From understanding your needs <br /> to implementing the final product,we follow a structured approach to achieve the best results.
            </Typography>
            <Box className='progressbar' sx={{ mt: 4, mb: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box component='img' src={progressbar} sx={{ width: '100%', maxWidth: '1200px', height: 'auto' }} />
            </Box>
            <Grid className='gridcontainer' container spacing={4} justifyContent="center" sx={{width:'100%', maxWidth:'1200px'}} >
                {steps.map((step, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Paper elevation={3} sx={{ padding: 3, textAlign: 'start', backgroundColor: '#101010', color: '#FFFFFF', height: '192px', width: '368px', border: '0.2px solid #262626ef', borderRadius: '10px' }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight:600, fontFamily: 'poppins', fontSize: { xs: '16px', md: '16px' } }}>
                                {step.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#CCCCCC', fontSize:'14px',lineHeight:1.5, fontFamily: 'inter' }}>
                                {step.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DeliverComponent;
