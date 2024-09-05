import React from 'react';
import { Container, Typography, Box, Paper, Chip, Avatar } from '@mui/material';
import bg2 from '../assets/imageFiles/bg2.png'


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
        <Container maxWidth={false} sx={{  position: 'relative' ,zIndex:'1',display:'flex',flexDirection:'column',alignItems:'center' }}>
 <Box
        component="img"
        src={bg2}
        sx={{
          position: 'absolute',
          width: '100%', // Adjust size as needed
          height: '220%', // Adjust size as needed
          top: 0,
          left: 0,
          zIndex: '-1',
          objectFit: 'cover ',
        }}
      />


            <Typography variant="h4" component="h2" sx={{ color: '#00A3FF', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '2px',fontSize: {xs: '28px',sm: '32px',md: '40px',} }}>
                TESTIMONIALS
            </Typography>
            <Typography variant="body1" sx={{
                color: '#CCCCCC', my: 3, textAlign: 'center', fontSize: {
                    xs: '14px', sm: '16px', md: '18px'
                } , fontFamily:'inter'
            }}>
                Don't just take our word for it—hear from our satisfied clients. Our testimonials highlight the positive experiences and <br />outcomes that businesses have achieved by partnering with us.
            </Typography>

            {/* Wrapper for both testimonial sections */}
            <Box sx={{ position: 'relative', width: '100%' ,  overflow: 'hidden' }}>
                {/* Left gradient box */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '182px',
                        height: '100%',
                        background: 'linear-gradient(to right, black, transparent)',
                        zIndex: 1,
                        display: {
                            xs: 'none',
                            md: 'block'
                        },
                    }}
                />
                {/* Right gradient box */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '182px',
                        height: '100%',
                        background: 'linear-gradient(to left, black, transparent)',
                        zIndex: 1,
                        display: {
                            xs: 'none',
                            md: 'block'
                        },
                    }}
                />

                {/* Top testimonials */}
                <Box
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        marginBottom: '24px',
                        gap: '10px',

                        display: {
                            xs: 'flex',
                            sm: 'flex',
                            md: 'flex'
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
                    {topTestimonials.map((testimonial, index) => (
                        <Paper
                            key={index}
                            elevation={3}
                            sx={{
                                backgroundColor: '#101010',
                                color: '#FFFFFF',
                                padding: 3,
                                borderRadius: '10px',
                                width: '100%',
                        border:'0.2px solid #707070',

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
                            <Typography variant="body1" sx={{ mb: 2, color: '#ADADAD' ,fontFamily:'inter', fontSize:{xs:'14px', xl:'16px'} }}>
                                {testimonial.text}
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold',fontFamily:'poppins' , fontSzie:{xs:'16px',xl:'18px'}}}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#777777',fontFamily:'inter', fontSize:{xs:'14px'} }}>
                                        {testimonial.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                </Box>

                {/* Bottom testimonials */}
                <Box
                    sx={{
                        position: 'relative',
                        marginBottom: '24px',
                        marginLeft: {
                            md: '-10%'
                        },
                        gap: '10px',
                        width: '100%',
                        display: {
                            xs: 'flex',
                            sm: 'flex',
                            md: 'flex'
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
                        <Paper
                            key={index}
                            elevation={3}
                            sx={{
                                backgroundColor: '#101010',
                                color: '#FFFFFF',
                                padding: 3,
                                borderRadius: '10px',
                        border:'0.2px solid #707070',
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
                            <Typography variant="body1" sx={{ mb: 2, color: '#ADADAD', fontFamily:'inter' }}>
                                {testimonial.text}
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' ,fontFamily:'poppins' }}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#777777',fontFamily:'inter' }}>
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
