import { Container, Box, Typography } from '@mui/material'
import s5 from '../../assets/imageFiles/s5.png'
import React from 'react'
import s6 from '../../assets/imageFiles/s6.png'


const AiTechnology = () => {

    const arr = [
        { title: 'Technology Selection :', description: 'Choose the right AI tools that align with your business requirements' },
        { title: 'Smooth Integration :', description: 'Implement AI seamlessly into current workflows and systems' },
        { title: 'Data Management :', description: 'Ensure data is secure, compliant, and optimized for AI applications' },
    ]
    return (
        <Container maxWidth={false} className='maincontainer'
            sx={{marginY: {xs:'100px',lg:'240px'}}}>

            <Box className='box' sx={{flexDirection:{xs:'column',md:'row'},gap:{xs:'20px', md:0} }}>

                {/* left container */}
                <Box className='leftbox' sx={{ width: { xs: '100%', sm: '80%', md: '520px' }, height: { xs: '300px', sm: '400px', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    
                    <Box className='image-container'>
                        <img  src={s5} alt="Placeholder" />
                    </Box>
                </Box>


                {/* rightContainer */}
                <Box className='right-container' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box sx={{ width: '100%' }}>

                        <Typography className='text' component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px' }}>✨Seamless AI Technology Integration</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: '#ADADAD', fontSize: {xs:'16px', lg:'20px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>We integrate cutting-edge AI technologies into your existing systems, enhancing efficiency and innovation without disrupting your operations</Typography>
                    </Box>
                    {arr.map((el, id) => (
                        <Box  key={id}  className='mapcontainer'>
                            <Box className='mapimg'>
                                <img src={s6} alt="Icon"  />
                            </Box>
                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' }}>{el.title}</Typography>
                                    <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400' }}>{el.description}</Typography>
                                </Typography>
                            </Box>
                        </Box>)
                    )}
                </Box>



            </Box>


        </Container>
    )
}

export default AiTechnology
