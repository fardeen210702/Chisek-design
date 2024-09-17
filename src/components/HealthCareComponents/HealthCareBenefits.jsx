import { Container, Box, Typography,IconButton } from '@mui/material'
import h3 from '../../assets/imageFiles/m3.png'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';


const HealthCareBenefits = () => {

    const arr = [
        { title: 'Personalized Treatment  :', description: 'Tailor treatment plans to individual patient needs with AI-driven insights' },
        { title: 'Proactive Care :', description: 'Identify high-risk patients and intervene early to prevent complications' },
        { title: 'Improved Outcomes :', description: 'Enhance patient outcomes through AI-powered personalized care' },
    ]
    return (
        <Container maxWidth={false} className='benefits-container' sx={{marginTop:{md:'3%',xl:'7%'}}}>
                <Typography className='typography-h4 ' variant="h4" component="h2" align="center" gutterBottom sx={{  fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px', mb:'100px' }}>
                Benefits of AI in Healthcare
            </Typography>

            <Box className='box-container' sx={{flexDirection:{xs:'column',md:'row'},gap:{xs:'20px', md:0} }}>

                {/* left container */}
                


                <Box className='left-box' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box sx={{ width: {xs:'100%',lg:'642px'}, }}>

                        <Typography className='opt-campaign' component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px' }}> ✨Optimized Campaign <br /> Performance</Typography>
                    </Box>
                    <Box sx={{ width: '100%', }}>
                        <Typography  className="desc-text" sx={{ fontSize: {xs:'16px', lg:'18px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px'}}>Leverage AI-driven predictive analytics to optimize marketing campaigns. These technologies analyze customer behavior and market trends, enabling marketers to make data-driven decisions that improve campaign outcomes</Typography>
                    </Box>
                    {arr.map((el, id) => (
                        <Box key={id} className="flex-start-box" >
                            <IconButton    
                                
                                className='checkicon'  >
                                        <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#C73F2F', }} />
                                    </IconButton>
                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' , fontFamily: 'Inter'}}> {el.title}</Typography>
                                    <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400' , fontFamily: 'Inter'}}> {el.description}</Typography>
                                </Typography>
                            </Box>
                        </Box>)
                    )}
                </Box>

                {/* rightContainer */}
                <Box className="right-container0" sx={{ width: { xs: '100%', sm: '80%', md: '505px' }, height: { xs: '300px', sm: '400px', md: '487px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    <Box className="flex-container">
                        <img className="image"  src={h3} alt="Placeholder" />
                    </Box>
                </Box>



            </Box>


        </Container>
    )
}

export default HealthCareBenefits
