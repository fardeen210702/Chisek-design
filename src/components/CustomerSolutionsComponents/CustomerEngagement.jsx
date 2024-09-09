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
        <Container maxWidth={false}
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}
        >
            <Box sx={{ width: ' 100%', maxWidth: '1200px', height: { xs: '500px', sm: '400px', lg: '362px' }, marginBottom: '56px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>


                <Box sx={{ display: 'flex', flexDirection: 'column', paddingY: { xs: '20px', lg: '38px' }, gap: { xs: '20px', lg: '40px' }, flex: 1 }}>
                    <Box sx={{ width: '100%', maxWidth: '642px', padding: { xs: '10px', md: 0 } }}>
                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '400', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' }, wordWrap: 'break-word' }}
                        >
                            ✨
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: { xs: '36px', sm: '42px', md: '51.20px' }, wordWrap: 'break-word' }}
                        >
                             Proactive Engagement and Retention
                        </Typography>
                    </Box>
                    <Box
                        sx={{ width: '100%', maxWidth: '541px', color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', sm: '30px', md: '34px' }, wordWrap: 'break-word' }}
                    >
                        Use AI to anticipate customer needs and proactively engage them, increasing retention and loyalty
                    </Box>


                </Box>

                {/* image component */}
                <Box sx={{ width: '100%', maxWidth: '487px', height: '100%', padding: '16px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', boxShadow: '0px 0px 0px #FFFFFF inset', borderRadius: '16px', overflow: 'hidden', border: '0.20px solid #707070', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px' }}>
                    <Box sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ alignSelf: 'stretch', flex: '1 1 0' }} src={c6} alt="Placeholder" />
                    </Box>
                </Box>

            </Box>


            <Box sx={{ width: '100%', display: 'flex', gap: { xs: '16px', sm: '24px' }, flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'center' }, padding: { xs: '16px', xl: '24px' } }}>
  {steps.map((step, index) => (
    <Box key={index} sx={{ width: { xs: '100%', sm: '384px' }, height: { xs: 'auto', sm: '405px' }, padding: { xs: '16px', sm: '24px 16px' }, borderRadius: '8px', overflow: 'hidden', border: '0.10px solid #A0A0A0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: { xs: '16px', sm: '24px' } }}>
      <Box sx={{ width: '100%', height: { xs: 'auto', sm: '240px' }, borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={step.img} alt="Placeholder" />
      </Box>
      <Box sx={{ width: '100%', height: { xs: 'auto', sm: '93px' }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px' }}>
        <Typography sx={{ width: '100%', height: '33px', textAlign: 'center', color: '#FFFFFFE6', fontSize: { xs: '18px', sm: '22px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '33px', wordWrap: 'break-word' }}>{step.title}</Typography>
        <Typography sx={{ width: '100%', textAlign: 'center', color: '#ADADAD', fontSize: { xs: '14px', sm: '16px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '25.60px', wordWrap: 'break-word' }}>{step.description}</Typography>
      </Box>
    </Box>
  ))}
</Box>
            




        </Container>
    )
}

export default CustomerEngagement
