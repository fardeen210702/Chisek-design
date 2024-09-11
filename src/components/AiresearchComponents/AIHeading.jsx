import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import ai6 from '../../assets/imageFiles/ai6.png'
import ai7 from '../../assets/imageFiles/ai7.png'
import ai8 from '../../assets/imageFiles/ai8.png'
import ai9 from '../../assets/imageFiles/ai9.png'

const AIHeading = () => {

    const steps = [
        {
            img: ai7,
            title: 'Ongoing Research',
            description: 'Stay ahead of the curve with ongoing research into the latest AI trends and innovations',
        },
        {
            img: ai8,
            title: 'Solution Enhancement',
            description: 'Regularly update and enhance AI solutions to maintain their effectiveness and relevance',
        },
        {
            img: ai9,
            title: 'Scalability Planning',
            description: 'Design AI solutions with scalability in mind, allowing your business to grow without technological constraints',
        },
    ];
    return (
        <Container maxWidth={false} className='implementcontainer'
        >
            <Box className='box' sx={{ height: { xs: '500px', sm: '400px', lg: '362px' }, flexDirection: { xs: 'column', sm: 'row' } }}>


                <Box className='textdesc' sx={{ display: 'flex', flexDirection: 'column', paddingY: { xs: '20px', lg: '38px' }, gap: { xs: '20px', lg: '40px' }, flex: 1 }}>


                    <Box className='boxcontent' sx={{ padding: { xs: '10px', md: 0 } }}>


                        <Typography className='text'
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            {'✨[heading not present]'}
                        </Typography>
                    </Box>
                    <Box className='desc'
                        sx={{ fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        We foster a culture of continuous innovation, ensuring your AI solutions evolve with industry trends and technological advancements
                    </Box>


                </Box>

                {/* image component */}
                <Box className='imgbox' >
                    <Box className='box' sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={ai6} alt="Placeholder" />
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

export default AIHeading
