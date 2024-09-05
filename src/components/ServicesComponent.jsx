import React from 'react';
import {  Typography, Box, Grid2 , CardMedia } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

import service1 from '../assets/imageFiles/service1.jpg';
import service2 from '../assets/imageFiles/service2.jpg';
import service3 from '../assets/imageFiles/service3.jpg';
import service4 from '../assets/imageFiles/service4.jpg';
import service5 from '../assets/imageFiles/service5.jpg';
import service6 from '../assets/imageFiles/service6.jpg';

const ServicesComponent = () => {
    const serviceData = [
        {
            img: service1,
            title: 'AI Business Transformation',
            description: 'Revolutionize operations, enhance experiences, and drive innovation with AI. We guide you from strategy to implementation and beyond.'
        },
        {
            img: service2,
            title: 'AI Automation & Efficiency',
            description: 'Streamline workflows and boost productivity with AI automation. Optimize processes, cut costs, and focus on strategy'
        },
        {
            img: service3,
            title: 'Enhanced Customer Experience',
            description: 'Delight customers with AI-powered interactions. From chatbots to tailored recommendations, we build loyalty and drive growth.'
        },
        {
            img: service4,
            title: 'Data-Driven Decision Making',
            description: 'Unlock value with AI analytics. Gain insights, predict trends, and drive informed decisions.'
        },
        {
            img: service5,
            title: 'AI Research & Development',
            description: 'Lead with our AI R&D. Explore new tech, develop solutions, and gain a competitive edge'
        },
        {
            img: service6,
            title: 'Technology Consulting for AI Integration',
            description: 'Navigate AI adoption with our expert guidance. We assess readiness, identify opportunities, and plan for success'
        },
    ]



    return (
        <Box sx={{xs:'100%',xl:'1200px' }}>
            <Typography
                variant="h3"
                align="center"
                sx={{
                    mb: 2,
                    color: '#117DCC',
                    fontWeight: 'bold',
                    fontFamily: 'Bebas Neue, Arial, sans-serif',
                    letterSpacing: '1.6px',
                    fontSize: {
                        xs: '24px',  // Extra small screens
                        sm: '28px',  // Small screens
                        md: '32px',  // Medium screens
                        lg: '36px',  // Large screens
                        xl: '40px',  // Extra large screens
                    },
                }}
            >
                Services We Offer
            </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{
                    mb: 4,
                    color: '#ffffff85',
                    fontSize: {
                        xs: '14px',  // Extra small screens
                        sm: '16px',  // Small screens
                        md: '18px',  // Medium screens
                        lg: '19px',  // Large screens
                    },
                    maxWidth: '1200px',
                    marginBottom:'48px',
                    mx: 'auto',
                }}
            >
                Empower your business with our transformative AI services. From automating routine tasks to unlocking deep insights from data, our solutions are designed to drive growth and innovation.
            </Typography>

            <Box sx={{display:'flex', justifyContent:'center' , flexWrap:'wrap' ,gap:'24px',width:'100%'}}>
                {
                    serviceData.map((el,id)=>{
                        return  <Box key={id}
                        sx={{
                          width: {xs:'350px',xl:'384px'},
                          height: {xs:'440px',xl:'480px'},
                          paddingTop: 2,
                          paddingBottom: 3,
                          paddingLeft: 2,
                          paddingRight: 2,
                          background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%)',
                          boxShadow: '0px 0px 0px rgba(255, 255, 255, 0.01) inset',
                          borderRadius: 2,
                          border: '0.20px rgba(112.31, 112.31, 112.31, 0.70) solid',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2,
                          overflow: 'hidden'
                        }}
                      >
                        {/* Image */}
                        <Box
                          sx={{
                            alignSelf: 'stretch',
                            height: 240,
                            borderRadius: 3,
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={el.img}
                            alt="Customer Experience"
                            sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: 1 }}
                          />
                        </Box>
                  
                        {/* Text Section */}
                        <Box
                          sx={{
                            alignSelf: 'stretch',
                            height: 184,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              textAlign: 'center',
                              color: 'rgba(255, 255, 255, 0.90)',
                              fontWeight: 700,
                              lineHeight: '36px',
                              fontFamily: 'Poppins',
                              wordWrap: 'break-word',
                              fontSize:{xs:'18px',lg:'20px',xl:'24px'}
                            }}
                          >
                           {el.title}
                          </Typography>
                  
                          <Typography
                            variant="body1"
                            sx={{
                              textAlign: 'center',
                              color: '#ADADAD',
                              fontWeight: 400,
                              lineHeight: '25.60px',
                              fontFamily: 'Inter',
                              fontSize:{xs:'14px',lg:'14px',xl:'16px'},
                              wordWrap: 'break-word',
                            }}
                          >
                           {el.description}
                          </Typography>
                        </Box>
                      </Box>
                    })
                }

            </Box>
        </Box>
    );
};

export default ServicesComponent;
