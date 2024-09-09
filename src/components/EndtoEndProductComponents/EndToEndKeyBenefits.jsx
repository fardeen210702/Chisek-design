import React from 'react'
import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import e10 from '../../assets/imageFiles/e10.png'
import e11 from '../../assets/imageFiles/e11.png'
import e12 from '../../assets/imageFiles/e12.png'
import s6 from '../../assets/imageFiles/s6.png'

const EndToEndKeyBenefits = () => {

    const arr = [
        { title: 'Holistic Approach  :', description: 'From ideation to launch, we cover all aspects of product development' },
        { title: 'Consistency :', description: 'Ensure that your product remains true to its original concept throughout the development process' },
        { title: 'Streamlined Workflow:', description: 'Avoid delays and disruptions with a well-coordinated development process' },
    ]



    return (
        <Container maxWidth={false}
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}
        >
            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Key Benefits of End-to-End Product Development
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: '#ADADAD', mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
            Experience the full spectrum of product development with Chisel’s end-to-end services. Enjoy a streamlined process, <br /> exceptional product quality, and a competitive edge that sets your business apart in the marketplace
            </Typography>

            {/* mid container */}

            <Box sx={{ width: '100%', maxWidth: '1200px', height: { xs: 'fit-content', md: '470px' }, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 }, padding: {xs:'20px 16px',md:'40px 32px'}, background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', borderRadius: '16px', marginTop: '72px', marginBottom: '32px' }}>

                {/* left container */}
                <Box sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '400', lineHeight: '51.20px', wordWrap: 'break-word' }}>✨</Typography>
                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px', wordWrap: 'break-word' }}> Seamless Process from Concept to Launch</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>Enjoy a smooth, integrated development process where every step is aligned with your vision and business goals</Typography>
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
                        <Box component={'img'} style={{ alignSelf: 'stretch', flex: '1 1 0' }} sx={{objectFit:{xs:'contain'}}} src={e10} alt="Placeholder" />
                    </Box>
                </Box>



            </Box>



            {/* end container */}
            <Box sx={{ width: '100%', maxWidth: '1200px', height: { xs: 'fit-content', md: '735px' }, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' },  boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box sx={{ width: '100%', maxWidth: '588px', height: '100%', padding: '24px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', borderRadius: '16px', boxShadow: '0px 0px 0px inset',  overflow: 'hidden', border: '0.2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', aspectRatio: '540 / 320', borderRadius: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={e11} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ User-Centric Design and Development
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: {xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>
                        Deliver products that truly resonate with users, focusing on intuitive design, functionality, and user satisfaction</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Engaging Designs  ', description: 'Create products that users love, with a focus on user experience' },
                                { title: 'Functionality First ', description: ' Ensure that your product works seamlessly, providing real value to users' },
                                { title: 'Positive Feedback', description: 'Gain customer loyalty with products designed to meet their needs and expectations' }
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
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={e12} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Accelerated Time-to-Market
                        </Typography>
                        <Typography sx={{ color: '#ADADAD',fontSize:{xs:'14px',lg:'18px'}, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>
                        Speed up your product development cycle with our agile methodologies, ensuring you reach the market faster
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Agile Development ', description: 'Leverage agile processes to accelerate development without sacrificing quality' },
                                { title: 'Market Readiness ', description: 'Launch products quickly, allowing you to capitalize on market opportunities' },
                                { title: 'Competitive Advantage ', description: 'Stay ahead of competitors with a faster time-to-market' }
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

export default EndToEndKeyBenefits
