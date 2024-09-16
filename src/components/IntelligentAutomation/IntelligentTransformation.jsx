import React from 'react'
import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import iat8 from '../../assets/imageFiles/iat8.png'
import iat9 from '../../assets/imageFiles/iat9.png'
import iat10 from '../../assets/imageFiles/iat10.png'


const IntelligentTransformation = () => {

    const arr = [
        { title: 'Increased Output :', description: 'Automate repetitive tasks to free up resources for higher-value work' },
        { title: 'Faster Turnaround Times :', description: 'Streamlined processes lead to quicker completion of tasks' },
        { title: 'Reduced Errors  :', description: 'Automation minimizes human error, ensuring consistent results' },
    ]



    return (
        <Container maxWidth={false} className='aiContainer'
        >
            <Typography className='h2' variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
                Key Benefits of AI-Powered Business Transformation
            </Typography>
            <Typography className='h22' variant="body1" align="center" sx={{ mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '16px' },lineHeight:'27px' }}>
                By partnering with Chisel for AI-powered business transformation, your organization can unlock a range of benefits that drive growth, <br /> efficiency, and customer satisfaction
            </Typography>

            {/* mid container */}

            <Box className='midcontainer' sx={{ height: { xs: 'fit-content', md: '422px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: 0 }, padding: { xs: '20px 16px', md: '40px 32px' } }}>

                {/* left container */}
                <Box className='leftcontainer' sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box sx={{ width: '100%' }}>

                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '51.20px', wordWrap: 'break-word' }}>✨Data-Driven Decision Making</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>Leverage AI to analyze vast data sets in real-time, enabling precise, informed decisions that drive business growth and innovation.</Typography>
                    </Box>
                    {arr.map((el, id) => (
                        <Box className='map' key={id}>
                            <IconButton className='iconbtn'>
                                <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                            </IconButton>
                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600',fontFamily: 'Inter', }}>{el.title}</Typography>
                                    <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400',fontFamily: 'Inter', }}>{el.description}</Typography>
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* rightContainer */}

                <Box className='secondcontainer3' sx={{ width: { xs: '100%', sm: '80%', md: '494px' }, height: { xs: '300px', sm: '320px', md: '342px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>

                    <Box className='boxcontainer1'>
                        <Box component={'img'} style={{ alignSelf: 'stretch', flex: '1 1 0' }} sx={{ objectFit: { xs: 'contain' } }} src={iat8} alt="Placeholder" />
                    </Box>
                </Box>



            </Box>



            {/* end container */}
            <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '720px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

            <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={iat9} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >
                    <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '36px' }}>
                            ✨ Cost Efficiency
                        </Typography>
                        <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                            Reduce operational costs and optimize resource allocation with intelligent automation solutions that scale with your business                       </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Lower Operational Costs ', description: 'Decrease reliance on manual labor and reduce resource wastage' },
                                { title: 'Optimized Resource Use', description: ' Allocate resources more effectively by automating routine processes' },
                                { title: 'Scalability', description: ' Easily scale automation solutions as your business grows' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                        <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography 
                                        className='item-description'
                                        component="span" sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                   <Box className='nextcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={iat10} alt="placeholder" />
                    </Box>

                    <Box className='.column-box ' >

                    <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '36px' }}>
                            ✨ Improved Process Accuracy
                        </Typography>
                        <Typography className='description-typography ' sx={{  fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px'}}>
                            Achieve consistent, accurate outcomes by automating critical processes, ensuring compliance, and enhancing overall operational efficienc
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Consistent Results', description: 'Ensure reliable, predictable outcomes with AI-driven automation' },
                                { title: 'Compliance Assurance', description: 'Automated processes adhere to regulatory standards' },
                                { title: 'Data-Driven Insights ', description: 'Leverage real-time data for continuous process improvement' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                    <CheckIcon className='checkbtn' sx={{  fontSize: 15 }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography 
                                        className='item-description'
                                        component="span" sx={{  fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

            </Box>




        </Container>
    )
}

export default IntelligentTransformation
