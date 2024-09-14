import React from 'react'
import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import tt10 from '../../assets/imageFiles/tt10.png'
import tt11 from '../../assets/imageFiles/tt11.png'
import tt12 from '../../assets/imageFiles/tt12.png'
import s6 from '../../assets/imageFiles/s6.png'

const TechTransformation = () => {

    const arr = [
        { title: 'Expert Insights  :', description: 'Leverage our industry knowledge to guide your AI strategy' },
        { title: 'Data-Driven Analysis :', description: 'Make decisions based on comprehensive data and expert recommendations' },
        { title: 'Risk Mitigation:', description: 'Identify and address potential risks before implementation' },
    ]



    return (
        <Container maxWidth={false} className='aiContainer'
        >
            <Typography className='h2' variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Key Benefits of Technology Consulting for AI Integration
            </Typography>

            <Typography className='h22' variant="body1" align="center" sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
            Our expert guidance ensures you make informed decisions, optimize implementation, and achieve <br /> sustainable growth.

            </Typography>

            {/* mid container */}

            <Box className='midcontainer' sx={{ height: { xs: 'fit-content', md: '422px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 }, padding: { xs: '20px 16px', md: '40px 32px' } }}>

                {/* left container */}
                <Box className='leftcontainer' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box sx={{ width: '100%' }}>
                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px', wordWrap: 'break-word' }}>✨ Informed Decision-Making</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>

                    <Typography sx={{ color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>Make confident, data-driven decisions about AI adoption with insights from our expert consulting services
                    </Typography>
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

                <Box className='secondcontainer3' sx={{ width: { xs: '100%', sm: '80%', md: '494px' }, height: { xs: '300px', sm: '320px', md: '342px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box className='boxcontainer1'>
                        <Box component={'img'} style={{ alignSelf: 'stretch', flex: '1 1 0' }} sx={{ objectFit: { xs: 'contain' } }} src={tt10} alt="Placeholder" />
                    </Box>
                </Box>
            </Box>



            {/* end container */}
            <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '735px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>

                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={tt11} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                        ✨ Optimized AI Implementation
                        </Typography>

                        <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                        Ensure your AI initiatives are implemented efficiently and effectively, minimizing disruptions and maximizing ROI   </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Process Automation ', description: 'Automate repetitive tasks to free up valuable resources' },
                                { title: 'Cost Reduction', description: ' Lower operational costs by optimizing processes' },
                                { title: 'Productivity Boost ', description: 'Allow teams to focus on high-value, strategic activities' }
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
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={tt12} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                        ✨ Sustainable Growth and Innovation
                        </Typography>
                        <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                        Drive long-term growth and stay ahead of the competition with AI strategies designed to evolve with your business
                        </Typography>

                        <Box  sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Tailored Interactions', description: 'Customize customer experiences based on individual preferences' },
                                { title: 'Improved Engagement', description: 'Increase customer engagement through personalized communication' },
                                { title: 'Higher Conversion Rates', description: 'Drive sales with targeted, AI-driven recommendations' }
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

export default TechTransformation













   





