import React from 'react';
// import { Box, Typography, Divider, Button, Grid2, IconButton } from '@mui/material';
// import vector from '../../assets/imageFiles/Vector.jpg';
// import casestudy from '../../assets/imageFiles/casestudy.png';
// import leftarrow from '../../assets/imageFiles/leftarrow.png';
// import rightarrow from '../../assets/imageFiles/rightarrow.png';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import bg2 from '../../assets/imageFiles/bg2.png'

// 

import { Container, Box, Typography, Divider, IconButton, Button } from '@mui/material'
import leftarrow from '../../assets/imageFiles/leftarrow.png';
import casestudy from '../../assets/imageFiles/casestudy.png';
import rightarrow from '../../assets/imageFiles/rightarrow.png';
import s14 from '../../assets/imageFiles/s14.png';
import s15 from '../../assets/imageFiles/s15.png';
import s16 from '../../assets/imageFiles/s16.png';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const MainComponent = () => {
    // 
    
    const caseData = {
        title: "Transforming Customer Support with AI Chatbots",
        sections: [
            {
                description: "✨Average response time decreased from 12 minutes to 30 seconds, leading to a 75% improvement."
            },
            {
                description: "✨Reduced the need for additional customer support staff by 50%, saving $200,000 annually."
            },
            {
                description: "✨Extended support hours from 8 hours a day to 24/7, accommodating customers in different time zones."
            }
        ],
        stats: [
            {
                percentage: "$2000",
                label: "Saved Annually"
                
            },
            {
                percentage: "40%",
                label: "Customer Satisfaction"
               

            },
            {
                percentage: "75%",
                label: "Response Time"
              
            }
        ]
    };

    return (
        <Container maxWidth={false} className='casecontainer'>

        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Case Studies: AI Success Stories
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#ADADAD', mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
            To illustrate the impact of AI-powered business transformation, we've compiled real-world examples of how our clients have successfully <br /> leveraged AI to overcome challenges and achieve remarkable results.
        </Typography>


            <Box className='box3' sx={{  height: { xs: 'fit-content', md: '643px' } }}
            >

            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%',marginX:{xl:'5px'} }}>
                <Box component={'img'} src={leftarrow}  sx={{height:{xs:'22px' , xl:'30px'}}} />
            </Box>

            <Box className='box4' sx={{ gap: { xs: '10px' }, flexDirection: { xs: 'column', md: 'row' } }}>

                <Box  className='box5' sx={{ width: { xs: '100%', sm: '100%', md: '716px' }, height: '100%', paddingTop: 3, paddingLeft: { xs: 2, sm: 4 }, paddingRight: { xs: 2, sm: 4 } }}>

                    <Box className='box6'>
                        <Box sx={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box component={'img'} src={casestudy} sx={{ width: 24, height: 24 }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                            <Typography sx={{ color: '#117DCC', fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, lineHeight: '27px', textAlign: 'center' }}>Case Study #1</Typography>
                        </Box>
                    </Box>

                    <Box className='box7' sx={{ gap: {xs:'18px',md:'24px'} }}>
                        
                        <Typography sx={{ fontSize: { xs: '20px', md: 22,lg:24 }, fontWeight: 700, lineHeight: '36px', color: 'rgba(255, 255, 255, 0.90)' }}>{caseData.title}</Typography>

                        <Typography sx={{ fontSize: { xs: '14px', md: 16,lg:18}, fontWeight: 400, lineHeight: '27px', color: '#ADADAD' }}>By integrating the AI chatbots into their platform, the company aimed to improve customer satisfaction, reduce response times, and streamline support processes.</Typography>

                        {caseData.sections.map((section, index) => (
                            <Box key={index} sx={{ display: 'inline-flex', alignItems: 'flex-start', gap: 1 }}>
                               
                                <Typography>
                                   
                                    <Typography component="span" sx={{ color: '#ADADAD', fontSize: { xs: '14px', md:16, lg: 18 } }}>{section.description}</Typography>
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box className='casebox' sx={{ height: { xs: 'fit-content', md: '104px' },marginTop:{xs:'40px',sm:0} }}>
                        {caseData.stats.map((item, index) => (
                            <React.Fragment key={index}>
                                <Box className='fragmentbox' >
                                    <Box className='fragmentinnerbox' >
                                        <Typography sx={{ color: 'rgba(255,255,255,0.90)', fontSize: { xs: '16px',md:'18px', lg: '24px' }, fontFamily: 'Inter', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>{item.percentage}</Typography>
                                    </Box>
                                    <Typography sx={{ color: '#ADADAD', fontSize: { xs: '12px', md: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>{item.label}</Typography>
                                </Box>
                                {index !== caseData.stats.length - 1 && (<Box sx={{ width: '1px', alignSelf: 'stretch', background: 'rgba(217, 217, 217, 0.40)' }} />)}
                            </React.Fragment>
                        ))}
                    </Box>

                    <Button  sx={{ width: { xs: '180px', md: '216px' }, height: { xs: '50px', md: 64 }, paddingTop: '15.96px', paddingX: '32px', background: 'rgba(255, 255, 255, 0.04)', borderTopLeftRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', marginLeft: { xs: 10,sm:30, md: '300px', lg:'470px' } }}> 

                        <Box className='casebtn' sx={{  gap: { xs: '6px', md: '8px' } }}>
                            <Typography sx={{ color: '#117DCC', fontSize: { xs: 14, md: '20px' }, fontFamily: 'Poppins', fontWeight: 700, lineHeight: '30px', wordWrap: 'break-word' }}>Read more</Typography>
                            <ArrowForwardIcon />
                        </Box>
                    </Button>
                </Box>

                <Box className='caseimgbox' sx={{display: { xs: 'none', md: 'block' } }}>
                    <Box component={'img'} src={s16} sx={{ width: '100%', height: '101%' }} />
                </Box>

            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', marginX:{xl:'5px'} }}>
                <Box component={'img'} src={rightarrow} sx={{height:{xs:'22px' ,xl:'30px'}}} />

            </Box>

        </Box>

        <Box className='progress-bar'>
                <Box className='progress-item item1' />
                <Box className='progress-item item2' />
                <Box className='progress-item item3' />
            </Box>
        

    </Container>
    );
};

export default MainComponent;
