import { Container, Box, Typography ,IconButton} from '@mui/material'
import cc7 from '../../assets/imageFiles/cc7.png'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';


const CustomerEngagement = () => {

    const arr = [
        { title: 'Predictive Insights :', description: '  Anticipate customer needs and take proactive steps to address them' },
        { title: 'Increased Retention :', description: 'Engage customers before they consider leaving, improving retention rates' },
        { title: 'Issue Prevention  :', description: 'Improve order fulfillment accuracy and speed with AI insights' },
    ]
    return (
        <Container maxWidth={false} className="custom-container"
        sx={{marginTop: { xs: '120px', lg: '240px' }}}>


        <Box className="responsive-box2" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 } }}>

            {/* left container */}

            <Box className='responsive-box3' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' },  gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                <Box  sx={{ width: { xs: '100%', lg: '642px' }, }}>

                    <Typography className="customer-insights-text" component="span" sx={{  fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px' }}> ✨Proactive Customer Engagement</Typography>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Typography className="insights-text" sx={{fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px' }}>Utilize AI-driven predictive analytics to anticipate customer needs and engage them proactively. AI can identify patterns and trends, enabling contact centers to address issues before they escalate</Typography>
                </Box>
                {arr.map((el, id) => (
                    <Box key={id} className="map-box"
                    >
                        <IconButton    
                            
                            className='checkicon'  >
                                    <CheckIcon  className='checkbtn' sx={{ fontSize: 15,color:'#117DCC', }} />
                                </IconButton>

                        <Box sx={{ flex: '1 1 0' }}>
                            <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' , fontFamily: 'Inter'}}> {el.title}</Typography>
                                <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400' , fontFamily: 'Inter'}}> {el.description}</Typography>
                            </Typography>
                        </Box>
                    </Box>)
                )}
            </Box>

            {/* rightContainer */}
            <Box className="box-container3" sx={{ width: { xs: '100%', sm: '80%', md: '505px' }, height: { xs: '300px', sm: '400px', md: '487px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                <Box className="inner-box" >
                    <img className="inner-img" src={cc7} alt="Placeholder" />
                </Box>
            </Box>



        </Box>


    </Container>
    )
}

export default CustomerEngagement




