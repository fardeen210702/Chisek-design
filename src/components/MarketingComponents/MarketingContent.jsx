import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import m9 from '../../assets/imageFiles/m9.png'
import m10 from '../../assets/imageFiles/m10.png'

const MarketingContent = () => {


    return (
        <Container className='top-container'
            maxWidth={false}
        >
            <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '735px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>

                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={m9} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                        ✨ Automated Content Creation
                        </Typography>

                        <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                        Deploy AI tools to automate content creation processes, from generating headlines to crafting personalized messages. This increases efficiency and allows marketers to focus on higher-value tasks</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Content Automation ', description: 'Use AI to create and curate content quickly and efficiently' },
                                { title: 'Personalized Messaging', description: ' Automate the creation of personalized messages for different audience segments' },
                                { title: 'Resource Optimization ', description: ' Free up creative teams to focus on strategy and innovation' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                        <CheckIcon className='checkbtn' sx={{ fontSize: 15,color:'#7A64C1' }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography
                                            className='item-description'
                                            component="span" sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box className='nextcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 290' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={m10} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                        ✨ Improved Conversion Rates
                        </Typography>
                        <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                        Use AI-driven recommendation systems and dynamic pricing strategies to increase conversion rates. By analyzing customer data in real-time, AI helps optimize the path to purchase
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Recommendation Engines', description: 'Suggest products and offers based on individual customer preferences' },
                                { title: 'Dynamic Pricing', description: ' Adjust pricing strategies in real-time based on market conditions' },
                                { title: 'Conversion Optimization', description: 'Increase sales by optimizing the customer journey with AI' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                        <CheckIcon className='checkbtn' sx={{ fontSize: 15,color:'#7A64C1' }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography
                                            className='item-description'
                                            component="span" sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
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

export default MarketingContent
