import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import cc8 from '../../assets/imageFiles/cc8.png'
import cc9 from '../../assets/imageFiles/cc9.png'

const PriceStrategies = () => {


    return (
        <Container className='top-container'
        maxWidth={false}
    >
        <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '735px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

            <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>

                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={cc8} alt="placeholder" />
                </Box>

                <Box className='column-box ' >

                    <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                    ✨ Streamlined Operations with Automated Support
                    </Typography>

                    <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                    Deploy AI-driven automation tools to handle repetitive tasks, such as call routing, data entry, and follow-ups. This frees up human agents to focus on complex customer inquiries and high-value interactions</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                        {[
                            { title: 'Content Automation ', description: 'Use AI to create and curate content quickly and efficiently' },
                            { title: 'Personalized Messaging', description: ' Automate the creation of personalized messages for different audience segments' },
                            { title: 'Resource Optimization ', description: ' Free up creative teams to focus on strategy and innovation' }
                        ].map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                <IconButton className='checkicon' >
                                    <CheckIcon className='checkbtn' sx={{ fontSize: 15,color:'#117DCC' }} />
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

                <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 260' }}>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={cc9} alt="placeholder" />
                </Box>

                <Box className='column-box ' >

                    <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                    ✨ Improved Quality Assurance
                    </Typography>
                    <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                    Implement AI-driven speech analytics and sentiment analysis to monitor and evaluate customer interactions. This helps ensure high service quality, identify training needs, and enhance overall customer experience
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                        {[
                            { title: 'Recommendation Engines', description: 'Suggest products and offers based on individual customer preferences' },
                            { title: 'Dynamic Pricing', description: ' Adjust pricing strategies in real-time based on market conditions' },
                            { title: 'Conversion Optimization', description: 'Increase sales by optimizing the customer journey with AI' }
                        ].map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                <IconButton className='checkicon' >
                                    <CheckIcon className='checkbtn' sx={{ fontSize: 15,color:'#117DCC' }} />
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

export default PriceStrategies









