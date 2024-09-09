import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import m9 from '../../assets/imageFiles/m9.png'
import m10 from '../../assets/imageFiles/m10.png'

const MarketingContent = () => {


    return (
        <Container
            maxWidth={false}
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}
        >
            <Box sx={{ width: '100%', maxWidth: '1200px', height: { xs: 'fit-content', md: '735px' }, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box sx={{ width: '100%', maxWidth: '588px', height: '100%', padding: '24px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', borderRadius: '16px', boxShadow: '0px 0px 0px inset', overflow: 'hidden', border: '0.2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', aspectRatio: '540 / 320', borderRadius: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={m9} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Automated Content Creation
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>Deploy AI tools to automate content creation processes, from generating headlines to crafting personalized messages. This increases efficiency and allows marketers to focus on higher-value tasks</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Content Automation', description: ' Use AI to create and curate content quickly and efficiently' },
                                { title: 'Personalized Messaging', description: 'Automate the creation of personalized messages for different audience segments' },
                                { title: 'Resource Optimization ', description: 'Free up creative teams to focus on strategy and innovation' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: 24, height: 24 }}>
                                        <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                                    </IconButton>
                                    <Typography sx={{ color: '#FFFFFFE6', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography component="span" sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', maxWidth: '588px', height: '100%', padding: '24px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', borderRadius: '16px', boxShadow: '0px 0px 0px inset', overflow: 'hidden', border: '0.2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', aspectRatio: '540 / 320', borderRadius: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={m10} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Improved Conversion Rates
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>
                        Use AI-driven recommendation systems and dynamic pricing strategies to increase conversion rates. By analyzing customer data in real-time, AI helps optimize the path to purchase
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Recommendation Engines', description: 'Suggest products and offers based on individual customer preferences' },
                                { title: 'Dynamic Pricing ', description: 'Adjust pricing strategies in real-time based on market conditions' },
                                { title: 'Conversion Optimization', description: 'Increase sales by optimizing the customer journey with AI' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: 24, height: 24 }}>
                                        <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                                    </IconButton>
                                    <Typography sx={{ color: '#FFFFFFE6', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography component="span" sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
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
