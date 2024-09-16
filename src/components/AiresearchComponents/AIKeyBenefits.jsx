import React from 'react'
import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ai10 from '../../assets/imageFiles/ai10.png'
import ai11 from '../../assets/imageFiles/ai11.png'
import ai12 from '../../assets/imageFiles/ai12.png'


const AIKeyBenefits = () => {

    const arr = [
        { title: 'Stay Ahead :', description: ' Be the first to adopt and benefit from the latest AI technologies' },
        { title: 'Drive Innovation :', description: ' Use AI to create new products, services, or business models that set you apart from the competition' },
        { title: 'Market Leadership :', description: ' Position your business as an industry leader through continuous AI-driven innovation' },
    ]



    return (
        <Container maxWidth={false} className='aiContainer'
        >
            <Typography className='h2' variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Key Benefits of AI Research & Development
            </Typography>

             <Typography className='h22' variant="body1" align="center" sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', lg: '16px' },lineHeight:'26px' }}>
            Our tailored approach ensures you lead the market with pioneering innovation, custom AI <br /> solutions for unique challenges, and a sustainable competitive advantage
            </Typography>

            {/* mid container */}

            <Box className='midcontainer' sx={{ height: { xs: 'fit-content', md: '422px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 }, padding: { xs: '20px 16px', md: '40px 32px' } }}>


                {/* left container */}
                <Box className='leftcontainer' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box sx={{ width: '100%' }}>
                       
                    <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px', wordWrap: 'break-word' }}>✨ Pioneering Innovation</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>

                       <Typography sx={{ color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>Leverage cutting-edge AI technologies to stay ahead of competitors and lead your industry in innovation</Typography>
                    </Box>
                    {arr.map((el, id) => (
                       <Box className='map' key={id}>
                       <IconButton className='iconbtn'>
                           <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                       </IconButton>

                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
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

                        <Box component={'img'} style={{ alignSelf: 'stretch', flex: '1 1 0' }} sx={{objectFit:{xs:'contain'}}} src={ai10} alt="Placeholder" />
                    </Box>
                </Box>



            </Box>



            {/* end container */}
            <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '730px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

            <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

            <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>

                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={ai11} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '36px' }}>
                        ✨ Tailored Solutions for Unique Challenges
                        </Typography>

                          <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                        Address your specific business challenges with custom AI solutions designed to meet your unique needs</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Custom Development ', description: 'Get AI solutions tailored to your business’s exact requirements' },
                                { title: 'Specific Problem Solving', description: ' Tackle your most pressing challenges with bespoke AI technologies' },
                                { title: 'Better Outcomes ', description: ' Achieve superior results with solutions that are designed specifically for your business' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                        <CheckIcon className='checkbtn' sx={{  fontSize: 15 }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography 
                                        className='item-description'
                                        component="span" sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box className='nextcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                     <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={ai12} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                       <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '36px' }}>
                        ✨ Sustainable Competitive Advantage
                        </Typography>
                        <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                        Build a lasting competitive edge with AI solutions that evolve with your business and industry trends
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Continuous Improvement', description: 'Regularly update and refine AI solutions to maintain your competitive advantage' },
                                { title: 'Scalability', description: 'Ensure that your AI solutions grow alongside your business' },
                                { title: 'Long-Term Success ', description: 'Secure your position in the market with sustainable, AI-driven innovations' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                <IconButton className='checkicon' >
                                     <CheckIcon className='checkbtn' sx={{  fontSize: 15 }} />
                                 </IconButton>
                                 <Typography className='item-title' sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                     {item.title}: <Typography 
                                     className='item-description'
                                     component="span" sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
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

export default AIKeyBenefits
