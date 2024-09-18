import React from 'react'
import { Container, Box, Typography ,IconButton} from '@mui/material'
import t6 from '../../assets/imageFiles/t6.jpg'
import CheckIcon from '@mui/icons-material/Check';

const CostandEfficiency = () => {

    const arr = [
        { title: 'Cost Savings  :', description: ' costs by eliminating the need for voiceover talent' },
        { title: 'Faster Production :', description: 'Speed up content creation with automated text-to-speech conversion' },
        { title: 'Scalability :', description: ' Easily scale your audio content production with Text to Speech Technology technology' },
    ]
    return (
        <Container maxWidth={false} className="custom-container"
        sx={{marginTop: { xs: '120px', lg: '240px' }}}>


        <Box className="responsive-box2" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 } }}>

            {/* left container */}

            <Box className='responsive-box3' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' },  gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                <Box  sx={{ width: { xs: '100%', lg: '642px' }, }}>

                    <Typography className="customer-insights-text" component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px' }}> ✨Time and Cost Efficiency</Typography>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Typography className="insights-text" sx={{fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px' }}>Automate the process of converting text to speech, saving time and resources. Text to Speech technology eliminates the need for voice actors and reduces production time for audio content</Typography>
                </Box>
                {arr.map((el, id) => (
                    <Box key={id} className="map-box"
                    >
                        <IconButton    
                            
                            className='checkicon'  >
                                    <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#117DCC', }} />
                                </IconButton>

                        <Box sx={{ flex: '1 1 0' }}>
                            <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600', fontFamily: 'Inter' }}>{el.title}</Typography>
                                <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400', fontFamily: 'Inter' }}>{el.description}</Typography>
                            </Typography>
                        </Box>
                    </Box>)
                )}
            </Box>

            {/* rightContainer */}
            <Box className="box-container3" sx={{ width: { xs: '100%', sm: '80%', md: '505px' }, height: { xs: '300px', sm: '400px', md: '487px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                <Box className="inner-box" >
                    <img className="inner-img" src={t6 } alt="Placeholder" />
                </Box>
            </Box>



        </Box>


    </Container>
    )
}

export default CostandEfficiency



