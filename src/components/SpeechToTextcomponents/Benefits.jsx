import React from 'react'
import { Container, Box, Typography,IconButton } from '@mui/material'
import t1 from '../../assets/imageFiles/t1.jpg'
import speech1 from '../../assets/imageFiles/speech1.png'
import CheckIcon from '@mui/icons-material/Check';


const Benefits = () => {

    const arr = [
        { title: 'Faster Transcription :', description: 'Convert speech to text in real-time, reducing manual typing efforts' },
        { title: 'Efficient Documentation :', description: ' Streamline the documentation process by transcribing spoken content immediately' },
        { title: 'Time Savings :', description: 'Save time by automating the conversion of speech into text' },
    ]
    return (
        <Container maxWidth={false} className='benefits-container' sx={{marginTop:'100px'}}>
            
        <Typography className='typography-h4 ' variant="h4" component="h2" align="center" gutterBottom sx={{  fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px'}, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px', mb:'120px' }}>
        Benefits of Speech to Text Technology
    </Typography>

    <Box className='box-container' sx={{flexDirection:{xs:'column',md:'row'},gap:{xs:'20px', md:0} }}>

        {/* left container */}
        


        <Box className='left-box' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

            <Box sx={{ width: {xs:'100%',lg:'642px'}, }}>

                <Typography className='opt-campaign' component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px' }}>✨ Increased Productivity</Typography>
            </Box>
            <Box sx={{ width: '100%', }}>
                <Typography  className="desc-text" sx={{ fontSize: {xs:'16px', lg:'18px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px'}}>Speech to Text technology boosts productivity by enabling faster and more efficient transcription of spoken words into text. Whether for meetings, interviews, or dictation, Speech to Text allows users to capture information quickly and accurately</Typography>
            </Box>
            {arr.map((el, id) => (
                <Box key={id} className="flex-start-box" >
                    <IconButton    
                        
                        className='checkicon'  >
                                <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#117DCC', }} />
                            </IconButton>
                    <Box sx={{ flex: '1 1 0' }}>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                            <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600', fontFamily: 'Inter' }}>{el.title}</Typography>
                            <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400', fontFamily: 'Inter' }}> {el.description}</Typography>
                        </Typography>
                    </Box>
                </Box>)
            )}
        </Box>

        {/* rightContainer */}
        <Box className="right-container" sx={{ width: { xs: '100%', sm: '80%', md: '505px' }, height: { xs: '300px', sm: '400px', md: '487px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
            <Box className="flex-container">
                <img className="image"  src={speech1} alt="Placeholder" />
            </Box>
        </Box>



    </Box>


</Container>
    )
}

export default Benefits






