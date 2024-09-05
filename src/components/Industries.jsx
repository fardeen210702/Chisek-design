import React from 'react';
import { Container, Typography, Grid2, Paper, Button, Box } from '@mui/material';
import frameone from '../assets/imageFiles/Frameone.png'
import frametwo from '../assets/imageFiles/Frametwo.png'
import framethree from '../assets/imageFiles/Framethree.png'
import framefour from '../assets/imageFiles/Framefour.png'
import EastIcon from '@mui/icons-material/East';
import bg2 from '../assets/imageFiles/bg2.png'



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
        <Container maxWidth='xl'  sx={{position:'relative', mt: 4, backgroundColor: 'transparent' , zIndex:'2', width:'100%' }}>
 {/* bg png */}
 <Box
                component="img"
                src={bg2}
                sx={{
                    position: 'absolute',
                    width: '100%', // Adjust size as needed
                    height: '150%', // Adjust size as needed
                    top: 0,
                    left: 0,
                    zIndex: '-1',
                    transform: 'rotate(180deg)',  // Rotate the image by 45 degrees
                    // transformOrigin: 'center', // Rotate around the center
                    objectFit: 'cover ',
                }}
            />


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
                                fontSize: {
                                    xs: '24px',  // Extra small screens
                                    sm: '28px',  // Small screens
                                    md: '32px',  // Medium screens
                                    lg: '36px',  // Large screens
                                    xl: '40px',  // Extra large screens
                                  }
                            }}
                        >
                            Industries We Deal In
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#ADADAD', fontSize:{
                                    xs:'14px',
                                    md:'14px',
                                    lg:'16px',
                                    xl:'18px'
                                },
                                fontFamily:'inter'
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
                                border: '0.2px solid #80808025',
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
                                        fontFamily:'poppins',
                                        fontWeight: 'bold', // Title Font Bold
                                        fontSize: {
                                            xs: '14px',  // Extra small screens
                                             md:'16px',
                                            lg: '20px',  // Large screens
                                            xl: '22px',  // Extra large screens
                                          }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </div>
                            <Typography sx={{fontSize:{xs:'14px', xl:'16px'}}}
                                variant="body1"
                                style={{
                                    width: '100%',
                                    color: '#ffffff85', // Description color
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                        fontFamily:'poppins',
 
                                }}
                            >
                                {item.description}
                            </Typography>
                            <Button
                            endIcon={<EastIcon />}
                               
                                style={{
                                    fontFamily:'poppins',
                                    marginTop: '2%', // Push the button to the bottom
                                    width: '143px', // Button width
                                    height: '32px', // Button height
                                    backgroundColor: 'transparent', // Button background color
                                    color: '#117DCC', // Button text color
                                     // Add border for better visibility
                                     fontSize:{xs:'14px',md:'16px',xl:'18px'}
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
