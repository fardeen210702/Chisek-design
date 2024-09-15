import React from 'react';
import { Container, Typography, Box, Paper, Chip, Avatar } from '@mui/material';
import bg2 from '../../assets/imageFiles/bg2.png'


const testimonialsData = [
    {
        tags: [
            {
                color: '#564519',
                title: 'ERP Tool',
                border: '#564519'
            },
            {
                color: '#7b1d92',
                title: 'Cloud Management',
                border: '#4B035D'
            }

        ],
        text: "The team's AI strategy turned our data into actionable insights. Our productivity has never been better.",
        name: 'David M',
        title: 'Business Owner',
        avatar: '/path/to/avatar1.png',

    },
    {
        tags: [
            {
                color: '#564519',
                title: 'ERP Tool',
                border: '#564519'
            },
            {
                color: '#7b1d92',
                title: 'Cloud Management',
                border: '#4B035D'
            }

        ],
        text: "The team's AI strategy turned our data into actionable insights. Our productivity has never been better.",
        name: 'David M',
        title: 'Business Owner',
        avatar: '/path/to/avatar1.png',

    },
    {
        tags: [
            {
                color: '#8f7120',
                title: 'ERP Tool',
                border: '#564519'
            },
            {
                color: '#035D58',
                title: 'AI/ML',
                border: '#035D58'
            }

        ],
        text: 'Our business transformed overnight with their AI solutions. Efficiency and customer satisfaction have skyrocketed!',
        name: 'Jane Smith',
        title: 'Business Owner',
        avatar: '/path/to/avatar2.png',
    },
    {
        tags: [
            {
                color: '#624200',
                title: 'Chatbot',
                border: '#564519'
            },
            {
                color: '#035D58',
                title: 'AI/ML',
                border: '#035D58'
            }

        ],
        text: 'Their expertise in AI helped us automate key processes, saving us time and money. Highly recommend!',
        name: 'Michael T',
        title: 'Business Owner',
        avatar: '/path/to/avatar3.png',
    },
    {
        tags: [
            {
                color: '#8f7120',
                title: 'ERP Tool',
                border: '#564519'
            },
            {
                color: '#7b1d92',
                title: 'Cloud Management',
                border: '#4B035D'
            }

        ],
        text: "The team's AI strategy turned our data into actionable insights. Our productivity has never been better.",
        name: 'David M',
        title: 'Business Owner',
        avatar: '/path/to/avatar1.png',
    },
    {
        tags: [
            {
                color: '#8f7120',
                title: 'ERP Tool',
                border: '#564519'
            },
            {
                color: '#035D58',
                title: 'AI/ML',
                border: '#035D58'
            }

        ],
        text: 'Our business transformed overnight with their AI solutions. Efficiency and customer satisfaction have skyrocketed!',
        name: 'Jane Smith',
        title: 'Business Owner',
        avatar: '/path/to/avatar2.png',
    },
    {
        tags: [
            {
                color: '#8f7120',
                title: 'ERP Tool',
                border: '#564519'
            },
            {
                color: '#035D58',
                title: 'AI/ML',
                border: '#035D58'
            }

        ],
        text: 'Our business transformed overnight with their AI solutions. Efficiency and customer satisfaction have skyrocketed!',
        name: 'Jane Smith',
        title: 'Business Owner',
        avatar: '/path/to/avatar2.png',
    },
    {
        tags: [
            {
                color: '#624200',
                title: 'Chatbot',
                border: '#564519'
            },
            {
                color: '#035D58',
                title: 'AI/ML',
                border: '#035D58'
            }

        ],
        text: 'Their expertise in AI helped us automate key processes, saving us time and money. Highly recommend!',
        name: 'Michael T',
        title: 'Business Owner',
        avatar: '/path/to/avatar3.png',
    },
    {
        tags: [
            {
                color: '#8f7120',
                title: 'ERP Tool',
                border: '#564519'
            },
            {
                color: '#7b1d92',
                title: 'Cloud Management',
                border: '#4B035D'
            }

        ],
        text: "The team's AI strategy turned our data into actionable insights. Our productivity has never been better.",
        name: 'David M',
        title: 'Business Owner',
        avatar: '/path/to/avatar1.png',
    },
    {
        tags: [
            {
                color: '#624200',
                title: 'Chatbot',
                border: '#564519'
            },
            {
                color: '#035D58',
                title: 'AI/ML',
                border: '#035D58'
            }

        ],
        text: 'Their expertise in AI helped us automate key processes, saving us time and money. Highly recommend!',
        name: 'Michael T',
        title: 'Business Owner',
        avatar: '/path/to/avatar3.png',
    },
];


const Testimonials = () => {
    const topTestimonials = testimonialsData.slice(0, 5);
    const bottomTestimonials = testimonialsData.slice(5, 10);

    return (
        <Container className='testimonialcontainer' maxWidth={false} >
       <Box className='bg-img' sx={{height:'200%',top:'-50%'}}
        component="img"
        src={bg2}
      />
            <Typography variant="h4" component="h2" sx={{ color: '#00A3FF', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px',fontSize: {xs: '28px',sm: '32px',} }}>
                TESTIMONIALS
            </Typography>
            <Typography variant="body1" sx={{
                color: '#CCCCCC', my: 3, textAlign: 'center', fontSize: {
                    xs: '14px', sm: '16px'
                } , fontFamily:'inter',mb:'50px'
            }}>
                Don't just take our word for it—hear from our satisfied clients. Our testimonials highlight the positive experiences and <br />outcomes that businesses have achieved by partnering with us.
            </Typography>

            {/* Wrapper for both testimonial sections */}
            <Box sx={{ position: 'relative', width:'100%' ,  overflow: 'hidden' }}>
                {/* Left gradient box */}
                <Box className='leftgradient-overlay'
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'block'
                        },
                    }}
                />
                {/* Right gradient box */}
                <Box className='right-gradient-overlay'
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'block'
                        },
                    }}
                />

                {/* Top testimonials */}
                <Box className='toptestimonials'
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row'
                        },
                        alignItems: {
                            xs: 'center',
                            sm: 'center',
                            md: 'flex-start'
                        }
                    }}
                >
                    {topTestimonials.map((testimonial, index) => (
                        <Paper // can not apply external css on paper
                            key={index}
                            elevation={3}
                            sx={{
                                backgroundColor: '#101010',
                                color: '#FFFFFF',
                                padding: 3,
                                borderRadius: '16px',
                                width: '100%',
                                border:'0.2px solid #2a2a2a',
                                maxWidth: '383px',
                                height: '222px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexShrink: 0,
                                mb: {
                                    xs: '16px',
                                    sm: '16px',
                                    md: '0'
                                },
                                mr: {
                                    xs: 0,
                                    sm: 0,
                                    md: '20px'
                                }
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                {testimonial.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag.title}
                                        sx={{
                                            // backgroundColor: tag.color,
                                            borderColor: tag.border,
                                            color:tag.color,
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            marginRight: 1,
                                            marginBottom: 1,
                                        fontFamily:'inter',
                                        borderRadius: '4px',fontSize:'12px'
                                        }}
                                    />
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2, color: '#ADADAD' ,fontFamily:'inter', fontSize:'14px',lineHeight:1.5 }}>
                                {testimonial.text}
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600,fontFamily:'poppins' , fontSzie:'16px'}}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#777777',fontFamily:'inter', fontSize:'12px' }}>
                                        {testimonial.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                </Box>

                {/* Bottom testimonials */}
                <Box className=' bottomTestimonials'
                    sx={{
                        marginLeft: {
                            md: '-10%'
                        },
                        
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row'
                        },
                        alignItems: {
                            xs: 'center',
                            sm: 'center',
                            md: 'flex-start'
                        }
                    }}
                >
                    {bottomTestimonials.map((testimonial, index) => (
                        <Paper //unable to apply external css
                            key={index}
                            elevation={3}
                            sx={{
                                backgroundColor: '#101010',
                                color: '#FFFFFF',
                                padding: 3,
                                borderRadius: '16px',
                                border:'0.2px solid #2a2a2a',
                                width: '100%',
                                maxWidth: '383px',
                                height: '222px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexShrink: 0,
                                mb: {
                                    xs: '16px',
                                    sm: '16px',
                                    md: '0'
                                },
                                ml: {
                                    xs: 0,
                                    sm: 0,
                                    md: '20px'
                                }
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                {testimonial.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag.title}
                                        sx={{
                                             // backgroundColor: tag.color,
                                             borderColor: tag.border,
                                             color:tag.color,
                                             fontFamily:'inter',
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            marginRight: 1,
                                            marginBottom: 1,
                                            borderRadius: '4px'
                                        }}
                                    />
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2, color: '#ADADAD', fontFamily:'inter',fontSize:'14px' }}>
                                {testimonial.text}
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                                <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600,fontFamily:'poppins' , fontSzie:'16px'}}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#777777',fontFamily:'inter', fontSize:'12px' }}>
                                        {testimonial.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default Testimonials;
