import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import h9 from '../../assets/imageFiles/h9.png'
import h10 from '../../assets/imageFiles/h10.png'

const HealthCareAccess = () => {


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
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={h9} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Accessibility and Inclusivity
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>Enhance accessibility for all patients with AI-powered solutions, such as real-time captioning during telehealth appointments and virtual mental health support. Speech-to-text technologies make healthcare more inclusive for patients with hearing impairments</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Inclusive Care ', description: ' Provide accessible healthcare services for patients with disabilities' },
                                { title: 'Real-Time Support', description: 'Offer real-time captioning and virtual mental health services' },
                                { title: 'Broadened Access ', description: 'Make healthcare services more accessible and inclusive with AI' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: 24, height: 24 }}>
                                        <CheckIcon sx={{ color: '#C73F2F', fontSize: 15 }} />
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
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={h10} alt="placeholder" />
                    </Box>
                    <Box sx={{ alignSelf: 'stretch', height: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ color: '#FFFFFFE6', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>
                        ✨ Optimized Resource Allocation
                        </Typography>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px', wordWrap: 'break-word' }}>
                        AI-driven patient risk stratification and disease prediction tools help healthcare providers allocate resources more effectively. By identifying high-risk patients, healthcare facilities can prioritize care, reduce unnecessary ER visits, and optimize resource utilization
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Efficient Resource Use', description: 'Allocate healthcare resources based on AI-driven patient risk assessments' },
                                { title: 'Reduced ER Visits', description: 'Lower unnecessary ER visits with AI-powered symptom checkers and triage' },
                                { title: 'Resource Optimization', description: 'Optimize the use of healthcare resources with AI insights' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: 24, height: 24 }}>
                                        <CheckIcon sx={{ color: '#C73F2F', fontSize: 15 }} />
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

export default HealthCareAccess
