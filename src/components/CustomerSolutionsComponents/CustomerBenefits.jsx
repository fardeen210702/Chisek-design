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
        <Container maxWidth={false}
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Key Benefits of AI-Powered Customer Experience Solutions
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: '#ADADAD', mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
            Enjoy enhanced satisfaction through personalized interactions, achieve greater efficiency by automating routine <br /> tasks, and stay ahead with proactive engagement strategies
            </Typography>

            {/* mid container */}

            <Box sx={{ width: '100%', maxWidth: '1200px', height: { xs: 'fit-content', md: '470px' }, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 }, padding: {xs:'20px 16px',md:'40px 32px'}, background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', borderRadius: '16px', marginTop: '72px', marginBottom: '32px' }}>

                {/* left container */}
                <Box sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '400', lineHeight: '51.20px', wordWrap: 'break-word' }}>✨</Typography>
                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px', wordWrap: 'break-word' }}>  Enhanced Customer Satisfaction</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>Deliver personalized and efficient experiences that meet customer expectations and foster long-term loyalty</Typography>
                    </Box>
                    {arr.map((el, id) => (
                        <Box key={id} sx={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'flex-start', gap: '8px', marginY: '4px' }}>
                            <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: 24, height: 24 }}>
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

                <Box sx={{ width: { xs: '100%', sm: '80%', md: '494px' }, height: { xs: '300px', sm: '320px', md: '342px' }, padding: '16px', borderRadius: '16px', overflow: 'hidden', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    <Box sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box component={'img'} style={{ alignSelf: 'stretch', flex: '1 1 0' }} sx={{objectFit:{xs:'contain'}}} src={c10} alt="Placeholder" />
                    </Box>
                </Box>



            </Box>



            {/* end container */}
            <Box sx={{ width: '100%', maxWidth: '1200px', height: { xs: 'fit-content', md: '735px' }, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' },  boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box sx={{ width: '100%', maxWidth: '588px', height: '100%', padding: '24px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', borderRadius: '16px', boxShadow: '0px 0px 0px inset',  overflow: 'hidden', border: '0.2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', aspectRatio: '540 / 320', borderRadius: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={c11} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Operational Efficiency
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: {xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>
                        Automate routine tasks and streamline customer support processes, allowing your team to focus on higher-value activities</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Reduced Response Times  ', description: 'Improve response times with AI-powered chatbots and automated support systems' },
                                { title: 'Cost Savings  ', description: '  Lower operational costs by automating repetitive tasks' },
                                { title: 'Resource Optimization', description: ' Free up human agents to handle more complex and strategic tasks' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: 24, height: 24 }}>
                                        <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                                    </IconButton>
                                    <Typography sx={{ color: '#FFFFFFE6', fontSize:{xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography component="span" sx={{ color: '#ADADAD', fontSize:{xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', maxWidth: '588px', height: '100%', padding: '24px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', borderRadius: '16px', boxShadow: '0px 0px 0px inset',  overflow: 'hidden', border: '0.2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', aspectRatio: '540 / 320', borderRadius: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={c12} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Proactive Customer Engagement
                        </Typography>
                        <Typography sx={{ color: '#ADADAD',fontSize:{xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>
                        Anticipate customer needs and engage them proactively, improving their experience and increasing your competitive advantage
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Anticipate Needs', description: 'Use AI to predict customer needs and respond proactively' },
                                { title: 'Retention Focus', description: 'Develop targeted strategies to retain customers based on AI insights' },
                                { title: 'Continuous Improvement  ', description: 'Gather and analyze customer feedback to refine engagement strategies' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: 24, height: 24 }}>
                                        <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                                    </IconButton>
                                    <Typography sx={{ color: '#FFFFFFE6',fontSize:{xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography component="span" sx={{ color: '#ADADAD', fontSize:{xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
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
