import React from 'react'
import { Container, Box, Typography,IconButton } from '@mui/material'
import cv1 from '../../assets/imageFiles/cv1.png'
import CheckIcon from '@mui/icons-material/Check';


const Benefits = () => {

    const arr = [
        { title: 'Real-Time Detection :', description: 'Identify defects and inconsistencies instantly with automated image analysis' },
        { title: 'Consistency Assurance :', description: 'Maintain high product standards with continuous monitoring' },
        { title: 'Data-Driven Decisions :', description: 'Waste Reduction' },
    ]
    return (
        <Container maxWidth={false} className='benefits-container' sx={{marginTop:'100px'}}>
            
        <Typography className='typography-h4 ' variant="h4" component="h2" align="center" gutterBottom sx={{  fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px'}, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px,', mb:'120px' }}>
        Benefits of Image Processing
    </Typography>

    <Box className='box-container' sx={{flexDirection:{xs:'column',md:'row'},gap:{xs:'20px', md:0} }}>

        {/* left container */}
        


        <Box className='left-box' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

            <Box sx={{ width: {xs:'100%',lg:'642px'}, }}>

                <Typography className='opt-campaign' component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px' }}>✨ Automated Quality Control</Typography>
            </Box>
            <Box sx={{ width: '100%', }}>
                <Typography  className="desc-text" sx={{ fontSize: {xs:'16px', lg:'18px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px'}}>Leverage Image Processing technology to automate quality control processes, ensuring consistent product standards and reducing human error. By identifying defects in real-time, businesses can enhance product quality and minimize waste</Typography>
            </Box>
            {arr.map((el, id) => (
                <Box key={id} className="flex-start-box" >
                    <IconButton    
                        
                        className='checkicon'  >
                                <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#117DCC', }} />
                            </IconButton>
                    <Box sx={{ flex: '1 1 0' }}>
                        <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                            <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' , fontFamily: 'Inter'}}>{el.title}</Typography>
                            <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400', fontFamily: 'Inter' }}> {el.description}</Typography>
                        </Typography>
                    </Box>
                </Box>)
            )}
        </Box>

        {/* rightContainer */}
        <Box className="right-container" sx={{ width: { xs: '100%', sm: '80%', md: '505px' }, height: { xs: '300px', sm: '400px', md: '487px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
            <Box className="flex-container">
                <img className="image"  src={cv1} alt="Placeholder" />
            </Box>
        </Box>



    </Box>


</Container>
    )
}

export default Benefits






