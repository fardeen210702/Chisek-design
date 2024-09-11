import React from 'react'
import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import c10 from '../../assets/imageFiles/c10.png'
import c11 from '../../assets/imageFiles/c11.png'
import c12 from '../../assets/imageFiles/c12.png'
import s6 from '../../assets/imageFiles/s6.png'

const CustomerBenefits = () => {

    const arr = [
        { title: 'Tailored Interactions   :', description: 'Provide customers with personalized experiences that resonate with their preferences' },
        { title: 'Quick Resolutions :', description: 'Resolve customer issues faster with AI-driven support solutions' },
        { title: 'Loyalty Building :', description: ' Increase customer retention by consistently meeting and exceeding expectations' },
    ]



    return (
        <Container maxWidth={false} className='aiContainer'
        >
            <Typography className='h2' variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
                Key Benefits of AI-Powered Customer Experience Solutions
            </Typography>
            <Typography className='h22' variant="body1" align="center" sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
                Enjoy enhanced satisfaction through personalized interactions, achieve greater efficiency by automating routine <br /> tasks, and stay ahead with proactive engagement strategies
            </Typography>

            {/* mid container */}

            <Box className='midcontainer' sx={{ height: { xs: 'fit-content', md: '422px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 }, padding: { xs: '20px 16px', md: '40px 32px' } }}>

                {/* left container */}
                <Box className='leftcontainer' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box sx={{ width: '100%' }}>

                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px', wordWrap: 'break-word' }}>  ✨Enhanced Customer Satisfaction</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>Deliver personalized and efficient experiences that meet customer expectations and foster long-term loyalty</Typography>
                    </Box>
                    {arr.map((el, id) => (
                        <Box className='map' key={id}>
                            <IconButton className='iconbtn'>
                                <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                            </IconButton>

                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' }}>{el.title}</Typography>
                                    <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400' }}>{el.description}</Typography>
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* rightContainer */}

                <Box className='secondcontainer' sx={{ width: { xs: '100%', sm: '80%', md: '494px' }, height: { xs: '300px', sm: '320px', md: '342px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box className='box'>
                        <Box component={'img'} style={{ alignSelf: 'stretch', flex: '1 1 0' }} sx={{ objectFit: { xs: 'contain' } }} src={c10} alt="Placeholder" />
                    </Box>
                </Box>



            </Box>



            {/* end container */}
            <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '735px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>
                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>

                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={c11} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                            ✨ Operational Efficiency
                        </Typography>
                        <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                            Automate routine tasks and streamline customer support processes, allowing your team to focus on higher-value activities</Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Reduced Response Times  ', description: 'Improve response times with AI-powered chatbots and automated support systems' },
                                { title: 'Cost Savings  ', description: '  Lower operational costs by automating repetitive tasks' },
                                { title: 'Resource Optimization', description: ' Free up human agents to handle more complex and strategic tasks' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                        <CheckIcon className='checkbtn' sx={{  fontSize: 15 }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography 
                                        className='item-description'
                                        component="span" sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

              <Box className='nextcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={c12} alt="placeholder" />
                    </Box>


                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                            ✨ Proactive Customer Engagement
                        </Typography>
                        <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                            Anticipate customer needs and engage them proactively, improving their experience and increasing your competitive advantage
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Anticipate Needs', description: 'Use AI to predict customer needs and respond proactively' },
                                { title: 'Retention Focus', description: 'Develop targeted strategies to retain customers based on AI insights' },
                                { title: 'Continuous Improvement  ', description: 'Gather and analyze customer feedback to refine engagement strategies' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                <IconButton className='checkicon' >
                                     <CheckIcon className='checkbtn' sx={{  fontSize: 15 }} />
                                 </IconButton>
                                 <Typography className='item-title' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                     {item.title}: <Typography 
                                     className='item-description'
                                     component="span" sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                 </Typography>
                             </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>




        </Container>
    )
}

export default CustomerBenefits
