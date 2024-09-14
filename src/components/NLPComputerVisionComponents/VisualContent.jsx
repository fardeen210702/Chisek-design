import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import nlp2 from '../../assets/imageFiles/cv2.png'
import nlp3 from '../../assets/imageFiles/cv3.png'
import nlp4 from '../../assets/imageFiles/cv4.png'
import nlp5 from '../../assets/imageFiles/cv5.png'

const VisualContent = () => {
    const steps = [
        {
            img: nlp3,
            title: 'Image Enhancement',
            description: 'Improve image quality with advanced processing techniques',
        },
        {
            img: nlp4,
            title: 'Color Correction',
            description: 'Ensure accurate and vibrant colors across all visual content',
        },
        {
            img: nlp5,
            title: 'Content Consistency',
            description: 'Maintain a consistent visual standard across platforms',
        },
    ];

    return (
        <Container maxWidth={false} className='engagement'
        >


            <Box className='box-custom' sx={{ height: { xs: '500px', sm: '400px', lg: '456px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { lg: 'space-between' } }}>

                {/* image component */}
                <Box className="box-gradient" >
                    <Box className="box-img">
                        <img src={nlp2} alt="Placeholder" />
                    </Box>
                </Box>


                <Box className="flex-column" sx={{  gap: { xs: '20px', lg: '24px' } }}>
                    <Box className="padding-box" >
                        
                        <Typography  className="text-highlight"
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            ✨ Enhanced Visual Content
                        </Typography>
                    </Box>
                    <Box className="text-box"
                        sx={{  paddingX: { xs: '15px' }, fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        Use Image Processing to enhance the quality of visual content, from sharpening images to correcting colors. This technology ensures that your visual materials are always of the highest quality, whether for marketing, e-commerce, or digital platforms</Box>


                </Box>



            </Box>


            <Box className='flex-box' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} >
                {steps.map((step, index) => (
                    <Box key={index} className="box-card" sx={{ width: { xs: '360px', sm: '384px' }, height: { xs: 'fit-content', lg: '164px' }}}>


                        <Box className="flex-column-stretch">

                            <Box className="inline-flex-center" >

                                <Avatar className="avatar-wrapper" >
                                    <img src={step.img} alt="icon" />
                                </Avatar>
                                <Typography className="typography-text" sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '700', lineHeight: '30px' }}>
                                    {step.title}
                                </Typography>
                            </Box>
                            <Box className="box-container1" >
                                <Typography className="typography-description" sx={{  fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '25.6px'}}>
                                    {step.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default VisualContent;





