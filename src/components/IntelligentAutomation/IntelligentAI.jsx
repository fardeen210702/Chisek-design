import { Container, Box, Typography,IconButton } from '@mui/material'
import iat3 from '../../assets/imageFiles/iat3.png'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';




const IntelligentAI = () => {

    const arr = [
        { title: 'Technology Selection :', description: 'Carefully choose the right AI tools to fit your specific requirements' },
        { title: 'Smooth Integration :', description: 'Integrate AI solutions seamlessly into your existing workflows' },
        { title: 'Data Management :', description: 'Ensure secure and compliant data management to support automation' },
    ]
    return (
        <Container maxWidth={false} className='maincontainer'
            sx={{ marginY: { xs: '100px', lg: '240px' } }}>

            <Box className='box-of-main' sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 } }}>

                {/* left container */}
                <Box className='leftbox' sx={{ width: { xs: '100%', sm: '80%', md: '520px' }, height: { xs: '300px', sm: '400px', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    
                <Box className='image-container'>
                        <img  src={iat3} alt="Placeholder" />
                    </Box>
                </Box>


                {/* rightContainer */}
                <Box className='right-container1' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box sx={{ width: '100%' }}>
                       
                    <Typography className='text' component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px' }}>✨Seamless AI Technology Integration</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>We integrate the most suitable AI tools into your existing systems, ensuring a smooth transition and minimal disruption</Typography>
                    </Box>
                    {arr.map((el, id) => (
                        <Box  key={id}  className='mapcontainer'>
                             <IconButton
                                className='checkicon'  >
                                <CheckIcon className='checkbtn' sx={{ fontSize: 15, color: '#117DCC', }} />
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



            </Box>


        </Container>
    )
}

export default IntelligentAI
