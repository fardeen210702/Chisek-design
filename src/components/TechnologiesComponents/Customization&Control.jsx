import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import t7 from '../../assets/imageFiles/t7.jpg'
import t8 from '../../assets/imageFiles/t8.jpg'

const CustomizationControl
 = () => {


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
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={t7} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Multilingual Support
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>Chisel’s Text to Speech Technology technology supports multiple languages, allowing you to reach a global audience. Convert text into speech in various languages, ensuring that your content is accessible to users worldwide</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Global Reach', description: 'Expand your content’s reach with multilingual Text to Speech support' },
                                { title: 'Language Accessibility ', description: 'Provide content in multiple languages to cater to diverse audiences' },
                                { title: 'Consistent Quality', description: 'Ensure high-quality speech output across different languages' }
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
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={t8} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Customization and Control
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>
                        Tailor the speech output to suit your brand’s voice and tone. Chisel’s Text to Speech Technology technology allows you to customize voice styles, speech rates, and pronunciations, ensuring that your content sounds just right
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Brand Consistency ', description: 'Customize speech output to match your brand’s voice and tone' },
                                { title: 'Flexible Settings :', description: 'Adjust speech rates, voice styles, and pronunciations for optimal results' },
                                { title: 'User Control ', description: 'Empower users with options to control how they experience your content' }
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

export default CustomizationControl

