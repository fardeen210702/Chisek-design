import React from 'react';
import { Container, Typography, Grid2, Paper, Button, Box } from '@mui/material';
import frameone from '../assets/imageFiles/Frameone.png'
import frametwo from '../assets/imageFiles/Frametwo.png'
import framethree from '../assets/imageFiles/Framethree.png'
import framefour from '../assets/imageFiles/Framefour.png'
import EastIcon from '@mui/icons-material/East';


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
            img: frametwo ,
            btn: 'Learn More'
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 4, backgroundColor: 'transparent' }}>
            {/* First Container */}
            <Grid2 container spacing={3} sx={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                <Grid2 item xs={12} md={8} lg={6}>
                    <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'transparent', textAlign: 'center' }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontFamily: 'Bebas Neue, Arial, sans-serif',
                                letterSpacing: '1.6px',
                                color: '#117DCC',
                                fontWeight: 'bold', // Title Font Bold
                            }}
                        >
                            Industries We Deal In
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#ffffff85', fontSize:{
                                    xs:'14px',
                                    md:'14px',
                                    lg:'20px'
                                }
                            }}
                        >
                            Explore the industries we serve, from healthcare and finance to manufacturing and retail, and see how our AI solutions drive efficiency, enhance customer experiences, and foster innovation across diverse sectors.
                        </Typography>
                    </Paper>
                </Grid2>
            </Grid2>

            {/* Second Container - Data Mapping */}
            <Grid2 container spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center' , marginY:'5%'}}>
                {data.map((item, index) => (
                    <Grid2
                        item
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            width: {
                                xs:'300px',
                                sm:'350px',
                                md:'380px',
                                lg:'530px',
                                xl:'550px',
                                '2xl':'584px',
                            },
                           height:{
                            xs:'340px',
                                
                                md:'320px',
                                lg:'300px',
                                xl:'322px',
                           },
                            maxWidth: '584px', // Fixed width for extra-large screens
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                width: '100%',
                                height:'100%',
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                marginBottom: 2,
                                backgroundColor: '#101010',
                                border: '1px solid #80808025',
                                borderRadius: '10px',
                                boxShadow: 'none',
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                }}
                            >
                                <Box component='img'
                                sx={{width:{
                                    xs:'40px',
                                    sm:'50px',
                                    md:'60px',
                                    lg:'70px',
                                    xl:'80px'
                                },height:{
                                    xs:'40px',
                                    sm:'50px',
                                    md:'60px',
                                    lg:'70px',
                                    xl:'80px'
                                }
                            }}
                                    src={item.img}
                                    alt={item.title}
                                    
                                />
                                <Typography
                                    variant="h6"
                                    style={{
                                        width: 'calc(100% - 96px)', // Adjust width based on image size
                                        color: '#ffffff',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        fontWeight: 'bold', // Title Font Bold
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </div>
                            <Typography
                                variant="body1"
                                style={{
                                    width: '100%',
                                    color: '#ffffff85', // Description color
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    fontSize:{xs:'14px',lg:'19px    '}
                                    
                                   
                                }}
                            >
                                {item.description}
                            </Typography>
                            <Button
                            endIcon={<EastIcon />}
                               
                                style={{
                                    marginTop: '2%', // Push the button to the bottom
                                    width: '143px', // Button width
                                    height: '32px', // Button height
                                    backgroundColor: 'transparent', // Button background color
                                    color: '#117DCC', // Button text color
                                     // Add border for better visibility
                                }}
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
