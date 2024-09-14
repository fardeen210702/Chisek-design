import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import c6 from '../../assets/imageFiles/c6.png'
import c7 from '../../assets/imageFiles/c7.png'
import c8 from '../../assets/imageFiles/c8.png'
import c9 from '../../assets/imageFiles/c9.png'

const CustomerEngagement = () => {

    const steps = [
        {
            img: c7,
            title: 'Predictive Analytics',
            description: 'Leverage AI to predict customer behavior and identify opportunities for proactive engagement',
        },
        {
            img: c8,
            title: 'Targeted Retention Strategies',
            description: 'Develop and implement retention strategies based on AI-driven insights',
        },
        {
            img: c9,
            title: 'Feedback Loops',
            description: 'Use AI to gather and analyze customer feedback, driving continuous improvement in customer experience',
        },
    ];
    return (
        <Container maxWidth={false} className='implementcontainer'
        >
            <Box className='implementbox' sx={{ height: { xs: '500px', sm: '400px', lg: '362px' }, flexDirection: { xs: 'column', sm: 'row' } }}>


                <Box className='textdesc' sx={{ display: 'flex', flexDirection: 'column', paddingY: { xs: '20px', lg: '38px' }, gap: { xs: '20px', lg: '40px' }, flex: 1 }}>


                    <Box className='boxcontent' sx={{ padding: { xs: '10px', md: 0 } }}>

                        <Typography className='text'
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            ✨Proactive Engagement and Retention
                        </Typography>
                    </Box>
                    <Box className='desc'
                        sx={{ fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        Use AI to anticipate customer needs and proactively engage them, increasing retention and loyalty
                    </Box>


                </Box>

                {/* image component */}
                <Box className='imgbox22' >
                    <Box className='box11' sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={c6} alt="Placeholder" />
                    </Box>
                </Box>

            </Box>


            <Box className='mapbox' sx={{ gap: { xs: '16px', sm: '24px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', sm: 'center' }, padding: { xs: '16px', xl: '24px' } }}>
            {steps.map((step, index) => (
                    <Box className='stepbox' key={index} sx={{ width: { xs: '100%', sm: '384px' }, height: { xs: 'auto', sm: '405px' }, padding: { xs: '16px', sm: '24px 16px' }, gap: { xs: '16px', sm: '24px' } }}>

                        <Box sx={{ height: { xs: 'auto', sm: '240px' } }} className='mapcontent'>
                            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={step.img} alt="Placeholder" />
                        </Box>

                        <Box className='mapdetails' sx={{ height: { xs: 'auto', sm: '93px' } }}>

                            <Typography className='title' sx={{ fontSize: { xs: '18px', sm: '22px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '33px'}}>{step.title}</Typography>

                            <Typography className='desc' sx={{ fontSize: { xs: '14px', sm: '16px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '25.60px' }}>{step.description}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>





        </Container>
    )
}

export default CustomerEngagement
