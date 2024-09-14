import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import tt6 from '../../assets/imageFiles/tt6.png'
import tt7 from '../../assets/imageFiles/tt7.png'
import tt8 from '../../assets/imageFiles/tt8.png'
import tt9 from '../../assets/imageFiles/tt9.png'

const TechImplementation = () => {

    const steps = [
        {
            img: tt7,
            title: 'Strategic Planning',
            description: 'Develop a clear and actionable AI integration plan',
        },
        {
            img: tt8,
            title: 'Technology Selection',
            description: 'Identify the right AI tools and platforms tailored to your needs',
        },
        {
            img: tt9,
            title: 'Timeline and Milestones',
            description: 'Outline a detailed timeline with key milestones for tracking progress',
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
                            ✨AI Integration Roadmap <br /> Development
                        </Typography>
                    </Box>
                    <Box className='desc'
                        sx={{ fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        We create a strategic roadmap for seamless AI integration, detailing the steps, technologies, and timelines required for successful implementation
                    </Box>


                </Box>

                {/* image component */}
                <Box className='imgbox22' >
                    <Box className='box11' sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={tt6} alt="Placeholder" />
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

export default TechImplementation




