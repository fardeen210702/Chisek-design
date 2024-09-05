import React from 'react';
import { Box, Typography, Divider, Button, Grid2, IconButton } from '@mui/material';
import vector from '../assets/imageFiles/Vector.jpg';
import casestudy from '../assets/imageFiles/casestudy.png';
import leftarrow from '../assets/imageFiles/leftarrow.png';
import rightarrow from '../assets/imageFiles/rightarrow.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainComponent = () => {
    return (
        <Box sx={{
            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingX: {
                xs: '10px',
                md: '24px',
                lg: '28px'
            },
            marginTop: { xs: '100px', lg: '200px' }, marginBottom: { xs: '150px', lg: '240px' }
        }}>
            <Box sx={{ width: { xs: '100%', xl: '1200px' }, textAlign: 'center', padding: '16px' }}>
                {/* Title */}
                <Typography
                    sx={{
                        color: '#117DCC',
                        fontSize: { xs: '24px', sm: '32px', md: '40px' }, // Responsive font size
                        fontFamily: 'Bebas Neue',
                        fontWeight: '400',
                        lineHeight: { xs: '20px', md: '25px', lg: '29px' },
                        letterSpacing: '1.60px',
                        wordWrap: 'break-word',
                    }}
                >
                    Proof of Work
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        color: '#ADADAD',
                        fontSize: { xs: '14px', sm: '18px', lg: '20px' }, // Responsive font size
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        lineHeight: { xs: '20px', sm: '26px', lg: '30px' },
                        wordWrap: 'break-word',
                        marginTop: '24px',
                        marginBottom: '48px'
                    }}
                >
                    See how we've helped businesses like yours achieve extraordinary results with our tailored AI solutions. Our case studies showcase the tangible benefits our clients have experienced through our innovative approach.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', height: { xs: 'fit-content', lg: '100%' }, alignItems: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', marginX: '3px' }}>
                    <img src={leftarrow} alt="Left Arrow" />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '24px',
                        width: '100%',
                        padding: {
                            xs: '16px 0',
                            lg: '16px'
                        },
                        border: {
                            md: '0.2px solid gray'
                        },
                        borderRadius: '10px',
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                lg: '100%',
                                xl: '716px'
                            },
                            height: {
                                xl: '573px'
                            },

                            borderRadius: '16px',
                            boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(112, 112, 112, 0.7)',
                            display: 'flex',
                            flexGrow: {
                                md: 1
                            },
                            flexDirection: 'column',
                            gap: '8px',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            padding: {
                                xs: '24px 12px',
                                lg: '24px 32px 0 32px'
                            },
                            overflow: 'hidden',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                            <Box sx={{ width: '32px', height: '32px' }} component='img' src={casestudy} />
                            <Typography
                                sx={{
                                    color: '#117dcc',
                                    fontSize: { xs: '14px', md: '16px', lg: '18px' }, // Responsive font size
                                    fontWeight: 'normal',
                                    fontFamily: 'Inter',
                                    lineHeight: { xs: '20px', md: '27px' },
                                    textAlign: 'center',
                                }}
                            >
                                Case Study #1
                            </Typography>
                        </Box>

                        {/* Case Study Content */}
                        <Box
                            sx={{
                                height: {
                                    xs: 'fit-content',
                                    lg: '431px'
                                },
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    height: { xs: 'fit-content', lg: '125px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: { xs: '18px', md: '20px', lg: '24px' }, // Responsive font size
                                        fontWeight: 'bold',
                                        fontFamily: 'Poppins',
                                        lineHeight: { xs: '28px', md: '36px' },
                                        width: '100%',
                                    }}
                                >
                                    Transforming Customer Support with AI Chatbots
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#adadad',
                                        fontSize: { xs: '12px', md: '14px', lg: '15px', xl: '18px' }, // Responsive font size
                                        fontWeight: 'normal',
                                        fontFamily: 'Inter',
                                        lineHeight: { xs: '20px', md: '27px' },
                                        width: '100%',
                                    }}
                                >
                                    By integrating the AI chatbots into their platform, the company aimed to improve customer satisfaction, reduce response times, and streamline support processes.
                                </Typography>
                            </Box>

                            {/* Stats Section */}
                            <Box sx={{
                                height: { xs: 'fit-content', lg: '194px' }, display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', marginY: {
                                    xs: '10px',
                                    md: '0'
                                }
                            }}>
                                <Typography
                                    sx={{
                                        color: '#adadad',
                                        fontSize: { xs: '12px', md: '14px', lg: '15px', xl: '18px' }, // Responsive font size
                                        fontWeight: 'normal',
                                        fontFamily: 'Inter',
                                        lineHeight: { xs: '20px', md: '27px' },
                                    }}
                                >
                                    ✨ Average response time decreased from 12 minutes to 30 seconds, leading to a 75% improvement.
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#adadad',
                                        fontSize: { xs: '12px', md: '14px', lg: '15px', xl: '18px' }, // Responsive font size
                                        fontWeight: 'normal',
                                        fontFamily: 'Inter',
                                        lineHeight: { xs: '20px', md: '27px' },
                                    }}
                                >
                                    ✨ Reduced the need for additional customer support staff by 50%, saving $200,000 annually.
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#adadad',
                                        fontSize: { xs: '12px', md: '14px', lg: '15px', xl: '18px' }, // Responsive font size
                                        fontWeight: 'normal',
                                        fontFamily: 'Inter',
                                        lineHeight: { xs: '20px', md: '27px' },
                                    }}
                                >
                                    ✨ Extended support hours from 8 hours a day to 24/7, accommodating customers in different time zones.
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 3, marginY: { xs: '10px' } }}>
                                {/* Saved Annually */}
                                <Grid2 container direction="column" sx={{ flex: '1 1 0', gap: 1, }}>
                                    <Typography variant="h4" color="white" fontWeight="700" sx={{ wordWrap: 'break-word', fontSize: { xs: '14px', md: '24px' } }}>
                                        $2000
                                    </Typography>
                                    <Typography variant="body1" color="#ADADAD" fontWeight="400" sx={{ wordWrap: 'break-word', fontSize: { xs: '14px', md: '16px' } }}>
                                        Saved Annually
                                    </Typography>
                                </Grid2>
                                <Divider orientation="vertical" flexItem sx={{ background: 'rgba(217, 217, 217, 0.40)' }} />

                                {/* Customer Satisfaction */}
                                <Grid2 container direction="column" sx={{ flex: '1 1 0', gap: 1 }}>
                                    <Typography variant="h4" color="white" fontWeight="700" sx={{ wordWrap: 'break-word', fontSize: { xs: '14px', md: '24px' } }}>
                                        40%
                                    </Typography>
                                    <Typography variant="body1" color="#ADADAD" fontWeight="400" sx={{ wordWrap: 'break-word', fontSize: { xs: '14px', md: '16px' } }}>
                                        Customer Satisfaction
                                    </Typography>
                                </Grid2>
                                <Divider orientation="vertical" flexItem sx={{ background: 'rgba(217, 217, 217, 0.40)' }} />

                                {/* Response Time */}
                                <Grid2 container direction="column" sx={{ flex: '1 1 0', gap: 1 }}>
                                    <Typography variant="h4" color="white" fontWeight="700" sx={{ wordWrap: 'break-word', fontSize: { xs: '14px', md: '24px' } }}>
                                        75%
                                    </Typography>
                                    <Typography variant="body1" color="#ADADAD" fontWeight="400" sx={{ wordWrap: 'break-word', fontSize: { xs: '14px', md: '16px' } }}>
                                        Response Time
                                    </Typography>
                                </Grid2>
                            </Box>


                            <Box
                                sx={{
                                    width: '100%',
                                    height: '64px',
                                    paddingTop: '32px',
                                    paddingBottom: '32px',
                                    paddingLeft: '32px',
                                    paddingRight: '32px',

                                    // border:'1px solid red',
                                    borderTopLeftRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'end',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    marginLeft: '10%',
                                    marginTop: {
                                        md: '1%',
                                        lg: '-2%',
                                        xl: '0%'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: { xs: '170px', md: '216px' },
                                        height: { xs: '50px', md: '64px' },
                                        background: 'rgba(255, 255, 255, 0.04)',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: { xs: 1, md: 2 }, // Responsive gap
                                        // border:'1px solid green',
                                        paddingX: '15px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#117DCC',
                                            fontSize: { xs: '12px', md: '15px' }, // Responsive font size
                                            fontFamily: 'Poppins',
                                            // height:'64px',
                                            fontWeight: 700,
                                            lineHeight: '30px',
                                            wordWrap: 'break-word',
                                            width: '112px',
                                        }}
                                    >
                                        Read more
                                    </Typography>
                                    <IconButton
                                        sx={{

                                            position: 'relative',
                                            backgroundColor: 'transparent',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                    >
                                        <ArrowForwardIcon
                                            sx={{

                                                color: '#117DCC',
                                            }}
                                        />
                                    </IconButton>
                                </Box>
                            </Box>


                        </Box>
                    </Box>

                    {/* Image Section */}
                    <Box
                        sx={{
                            display: { xs: 'none', lg: 'block' }, // Visible from md onwards
                            width: '428px',
                            height: {
                                lg: '500px',
                                xl: '100%'
                            },
                            paddingLeft: '16px',
                            paddingRight: '16px',
                            paddingTop: '32px',
                            paddingBottom: '50px',
                            background: 'linear-gradient(0deg, #101010 0%, #101010 100%)',
                            borderRadius: 2,
                            overflow: 'hidden',
                            border: '0.20px rgba(112.31, 112.31, 112.31, 0.70) solid',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box component={'img'} src={vector} sx={{
                            width: '100%', borderRadius: 10.75,
                            height: '100%',
                        }} />

                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', marginX: '3px' }}>
                    <img src={rightarrow} alt="Right Arrow" />
                </Box>
            </Box>


            <Box sx={{ width: '100%', height: '6px', marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <Box
                    sx={{
                        width: '61.3px',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: 'rgba(255, 255, 255, 0.80)',
                        borderRadius: '99px',
                    }}
                />
                <Box
                    sx={{
                        width: '61.3px',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '99px',
                        border: '0.5px solid',
                    }}
                /> <Box
                    sx={{
                        width: '61.3px',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '99px',
                        border: '0.5px solid',
                    }}
                />


            </Box>

        </Box>
    );
};

export default MainComponent;
