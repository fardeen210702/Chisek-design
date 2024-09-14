import React from 'react'
import { Container, Box, Typography,IconButton } from '@mui/material'
import h8 from '../../assets/imageFiles/h8.png'
import CheckIcon from '@mui/icons-material/Check';


const MarketingFrauds = () => {

    const arr = [
        { title: 'Virtual Support   :', description: 'Offer personalized patient support through virtual health assistants' },
        { title: 'Increased Adherence :', description: ' Improve patient adherence to treatment plans with AI-driven reminders' },
        { title: 'Engagement Enhancement:', description: 'Boost patient engagement with accessible and responsive AI tools' },
    ]
    return (
        <Container maxWidth={false} className="custom-container"
        sx={{marginTop: { xs: '120px', lg: '240px' }}}>


        <Box className="responsive-box2" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 } }}>

            {/* left container */}

            <Box className='responsive-box3' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' },  gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                <Box  sx={{ width: { xs: '100%', lg: '642px' }, }}>

                    <Typography className="customer-insights-text" component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px' }}> ✨Improved Patient Engagement</Typography>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Typography className="insights-text" sx={{fontSize: { xs: '16px', lg: '20px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px' }}>Utilize virtual health assistants and AI-powered chatbots to provide patients with personalized support, including medication reminders and appointment scheduling. These conversational AI tools enhance patient engagement and adherence to treatment plans</Typography>
                </Box>
                {arr.map((el, id) => (
                    <Box key={id} className="map-box"
                    >
                        <IconButton    
                            
                            className='checkicon'  >
                                    <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#C73F2F', }} />
                                </IconButton>

                        <Box sx={{ flex: '1 1 0' }}>
                            <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' }}>{el.title}</Typography>
                                <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400' }}>{el.description}</Typography>
                            </Typography>
                        </Box>
                    </Box>)
                )}
            </Box>

            {/* rightContainer */}
            <Box className="box-container3" sx={{ width: { xs: '100%', sm: '80%', md: '505px' }, height: { xs: '300px', sm: '400px', md: '487px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                <Box className="inner-box" >
                    <img className="inner-img" src={h8} alt="Placeholder" />
                </Box>
            </Box>



        </Box>


    </Container>
    )
}

export default MarketingFrauds




