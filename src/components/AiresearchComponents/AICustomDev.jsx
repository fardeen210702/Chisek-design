import { Container, Box, Typography } from '@mui/material'
import ai2 from '../../assets/imageFiles/ai2.png'
import React from 'react'
import s6 from '../../assets/imageFiles/s6.png'

const AICustomDev = () => {

    const arr = [
        { title: 'Needs Assessment  :', description: 'Collaborate with your team to understand specific business needs and challenges' },
        { title: 'Solution Design :', description: ' Develop custom AI solutions that address your unique requirements and objectives' },
        { title: 'Iterative Development :', description: 'Utilize an agile approach to refine AI solutions, incorporating feedback and making continuous improvements' },
    ]
    return (
        <Container maxWidth={false} className='maincontainer'
            sx={{marginY: {xs:'100px',lg:'240px'}}}>

            <Box className='box-of-main' sx={{flexDirection:{xs:'column',md:'row'},gap:{xs:'20px', md:0} }}>


                {/* left container */}
               <Box className='leftbox' sx={{ width: { xs: '100%', sm: '80%', md: '520px' }, height: { xs: '300px', sm: '400px', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
               <Box className='image-container'>
                        <img  src={ai2} alt="Placeholder" />
                    </Box>
                </Box>



                {/* rightContainer */}
                <Box className='right-container1' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    <Box sx={{ width: '100%' }}>
                        
                    <Typography className='text' component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px' }}>✨ Custom AI Solution Development</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                    <Typography sx={{ color: '#ADADAD', fontSize: {xs:'16px', lg:'20px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>We develop bespoke AI solutions tailored to address your unique business challenges, ensuring that you gain a competitive edge</Typography>
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

export default AICustomDev
