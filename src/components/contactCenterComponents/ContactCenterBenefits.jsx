import React from 'react'
import { Container, Box, Typography, IconButton } from '@mui/material'
import cc2 from '../../assets/imageFiles/cc2.png'
import CheckIcon from '@mui/icons-material/Check';


const ContactCenterBenefits = () => {

    const arr = [
        { title: 'Personalized Interactions :', description: 'Deliver customized service based on customer history and preferences' },
        { title: 'Reduced Wait Times  :', description: ' Use AI-driven chatbots to handle routine inquiries instantly' },
        { title: 'Increased Satisfaction  :', description: '  Improve customer satisfaction with responsive and efficient service' },
    ]
    return (
        <Container maxWidth={false} className='benefits-container' sx={{marginTop:{md:'3%',xl:'7%'}}}>
        <Typography className='typography-h4 ' variant="h4" component="h2" align="center" gutterBottom sx={{  fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px,', mb:'120px' }}>
        Benefits of AI in Contact Centers

    </Typography>

    <Box className='box-container' sx={{flexDirection:{xs:'column',md:'row'},gap:{xs:'20px', md:0} }}>

        {/* left container */}
        


        <Box className='left-box' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

            <Box sx={{ width: {xs:'100%',lg:'642px'}, }}>

                <Typography className='opt-campaign' component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px' }}> ✨ Enhanced Customer Experience</Typography>
            </Box>
            <Box sx={{ width: '100%', }}>
                <Typography  className="desc-text" sx={{ fontSize: {xs:'16px', lg:'20px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px'}}>Implement AI-powered conversational agents and chatbots to provide personalized, efficient, and responsive customer service. These tools handle common inquiries, offer tailored assistance, and ensure customers receive timely support  </Typography>
            </Box>
            {arr.map((el, id) => (
                <Box key={id} className="flex-start-box" >
                    <IconButton    
                        
                        className='checkicon'  >
                                <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#117DCC', }} />
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
        <Box className="right-container" sx={{ width: { xs: '100%', sm: '80%', md: '505px' }, height: { xs: '300px', sm: '400px', md: '487px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
            <Box className="flex-container">
                <img className="image"  src={cc2} alt="Placeholder" />
            </Box>
        </Box>



    </Box>


</Container>
    )
}

export default ContactCenterBenefits





