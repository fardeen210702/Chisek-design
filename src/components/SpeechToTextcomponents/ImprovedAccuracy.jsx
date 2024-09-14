import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import speech7 from '../../assets/imageFiles/speech7.png'
import speech8 from '../../assets/imageFiles/speech8.png'

const   ImprovedAccuracy = () => {


    return (
        <Container className='top-container'
            maxWidth={false}
        >
            <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '735px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>

                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={speech7} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                        ✨ Seamless Integration
                        </Typography>

                        <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                        Our Speech to Text technology seamlessly integrates with various platforms and applications, allowing you to incorporate speech-to-text functionality into your existing workflows effortlessly</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Easy Integration ', description: ' Incorporate Speech to Text into your current systems and applications' },
                                { title: 'Workflow Automation', description: 'Automate transcription processes within your existing tools' },
                                { title: 'Flexible Use Cases ', description: 'Apply Speech to Text across different industries and use cases' }
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

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 290' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={speech8} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>
                        ✨ Versatile Applications
                        </Typography>
                        <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                        Speech to Text technology can be used in a variety of scenarios, from transcribing legal documents and medical records to supporting customer service operations. This will makes Speech to Text a valuable tool across multiple sectors
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Legal Transcription', description: 'Convert spoken legal proceedings into accurate text for documentation' },
                                { title: 'Medical Records ', description: ' Streamline the documentation of medical consultations and reports' },
                                { title: 'Customer Support', description: ' Enhance customer service by converting voice inquiries into text for analysis' }
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

export default ImprovedAccuracy










