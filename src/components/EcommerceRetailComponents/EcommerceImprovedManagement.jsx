import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';
import ec4 from '../../assets/imageFiles/ec4.png'
import ec5 from '../../assets/imageFiles/ec5.png'
import ec6 from '../../assets/imageFiles/ec6.png'
import ec7 from '../../assets/imageFiles/ec7.png'

const EcommerceImprovedManagement = () => {
    const steps = [
        {
            img: ec5,
            title: 'Accurate Tracking',
            description: 'Use AI to monitor inventory levels and identify misplaced or damaged items',
        },
        {
            img: ec6,
            title: 'Stockout Reduction',
            description: 'Predict demand and adjust inventory accordingly to minimize stockouts',
        },
        {
            img: ec7,
            title: 'Efficient Categorization',
            description: 'Automate product tagging and categorization to improve search accuracy',
        },
    ];

    return (
        <Container maxWidth={false} className='engagement'
        >


            <Box className='box-custom' sx={{ height: { xs: '500px', sm: '400px', lg: '456px' }, marginTop: { xs: '50px', md: '100px ', lg: '166px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { lg: 'space-between' } }}>

                {/* image component */}
                <Box className="box-gradient9" >
                    <Box className="box-img">
                        <img src={ec4} alt="Placeholder" />
                    </Box>
                </Box>


                <Box className="flex-column" sx={{  gap: { xs: '20px', lg: '24px' } }}>
                    <Box className="padding-box" >
                        
                        <Typography  className="text-highlight"
                            component="span"
                            sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' } }}
                        >
                            ✨Improved Inventory Management
                        </Typography>
                    </Box>
                    <Box className="text-box"
                        sx={{  paddingX: { xs: '15px' }, fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' } }}
                    >
                        Implement AI-driven image recognition and predictive modeling to optimize inventory management. These technologies help retailers track inventory levels, reduce stockouts, and manage product categorization more efficiently</Box>


                </Box>



            </Box>


            <Box className='flex-box' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} >
                {steps.map((step, index) => (
                    <Box key={index} className="box-card8" sx={{ width: { xs: '360px', sm: '384px' }, height: { xs: 'fit-content', lg: '164px' }}}>


                        <Box className="flex-column-stretch">

                            <Box className="inline-flex-center" >

                                <Avatar className="avatar-wrapper" >
                                    <img src={step.img} alt="icon" />
                                </Avatar>
                                <Typography className="typography-text" sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '600', lineHeight: '30px' }}>
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

export default EcommerceImprovedManagement;




