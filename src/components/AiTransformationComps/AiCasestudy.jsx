import React from 'react';
import { Container, Box, Typography, Divider, IconButton, Button } from '@mui/material'
import leftarrow from '../../assets/imageFiles/leftarrow.png';
import casestudy from '../../assets/imageFiles/casestudy.png';
import rightarrow from '../../assets/imageFiles/rightarrow.png';
import s14 from '../../assets/imageFiles/s14.png';
import s15 from '../../assets/imageFiles/s15.png';
import s16 from '../../assets/imageFiles/s16.png';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const AiCasestudy = () => {

    const caseData = {
        title: "Transforming in Finance Industry",
        sections: [
            {
                label: "Challenge :",
                description: "A financial services firm faced challenges in identifying high-risk customers and reducing fraudulent activities."
            },
            {
                label: "Solution :",
                description: "Chisel deployed an AI-driven fraud detection system that analyzed transaction patterns and customer behavior to identify and mitigate potential risks."
            },
            {
                label: "Outcome :",
                description: "The firm achieved a 35% reduction in fraudulent transactions and a 20% improvement in risk management efficiency."
            }
        ],
        stats: [
            {
                percentage: "15%",
                label: "Risk management processes",
                img: s14
            },
            {
                percentage: "25%",
                label: "Fraudulent transactions",
                img: s15

            },
            {
                percentage: "40%",
                label: "Other outcomes",
                img: s14
            }
        ]
    };


    return (
        <Container maxWidth={false}
            className='caseStudy'>

            <Typography className='case-studies-title' variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
                Case Studies: AI Success Stories
            </Typography>
            <Typography className='impact-description' variant="body1" align="center" sx={{ fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
                To illustrate the impact of AI-powered business transformation, we've compiled real-world examples of how our clients have successfully <br /> leveraged AI to overcome challenges and achieve remarkable results.
            </Typography>


            <Box className='box2' sx={{ height: { xs: 'fit-content', sm: '600px', md: '643px' } }}
            >

                <Box className='icon-container ' sx={{ marginX: { xl: '5px' } }}>
                    <Box component={'img'} src={leftarrow} sx={{ height: { xs: '22px', xl: '30px' } }} />
                </Box>

                <Box className='inneritems' sx={{ gap: { xs: '10px' }, flexDirection: { xs: 'column', md: 'row' } }}>

                    <Box className='first-inner-item' sx={{ width: { xs: '100%', sm: '100%', md: '716px' }, paddingLeft: { xs: 2, sm: 4 }, paddingRight: { xs: 2, sm: 4 } }}>

                        <Box className='item' sx={{ gap: 1 }}>

                            <Box sx={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box component={'img'} src={casestudy} sx={{ width: 24, height: 24 }} />
                            </Box>
                            <Box className='case-study-box '>
                                <Typography className='case-study-text ' sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, lineHeight: '27px' }}>Case Study #1</Typography>
                            </Box>
                        </Box>

                        <Box className='case-container'>
                            <Typography className='case-title' sx={{ fontSize: { xs: '20px', md: 22, lg: 24 }, fontWeight: 700, lineHeight: '36px' }}>{caseData.title}</Typography>

                            {caseData.sections.map((section, index) => (
                                <Box className='section-container ' key={index}>
                                    <IconButton className='check-icon' sx={{ width: { xs: '20px', md: '24px' }, height: { xs: '20px', md: '24px' } }}>
                                        <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                                    </IconButton>
                                    <Typography className="section-text">
                                        <Typography component="span" sx={{ color: 'rgba(255, 255, 255, 0.90)', fontSize: { xs: '14px', md: 16, lg: 18 }, fontWeight: 500 }}>{section.label}</Typography>
                                        <Typography component="span" sx={{ color: '#ADADAD', fontSize: { xs: '14px', md: 16, lg: 18 } }}>{section.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Box className='responsive-box1' sx={{ height: { xs: 'fit-content', md: '104px' }, marginY: { xs: '10px', sm: 0 } }}>
                            {caseData.stats.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Box className='res-content'>
                                        <Box className='inline-flex-box'>
                                            <Typography sx={{ color: '#479A55', fontSize: { xs: '16px', md: '18px', lg: '24px' }, fontFamily: 'Inter', fontWeight: 700, lineHeight: '36px' }}>{item.percentage}</Typography>
                                            <Box sx={{ width: { xs: 20, lg: '32px' }, height: { xs: 20, lg: '32px' } }}>
                                                <Box component={'img'} src={item.img} sx={{ width: '100%', height: '100%' }} />
                                            </Box>
                                        </Box>
                                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '12px', md: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>{item.label}</Typography>
                                    </Box>
                                    {index !== caseData.stats.length - 1 && (<Box sx={{ width: '1px', alignSelf: 'stretch', background: 'rgba(217, 217, 217, 0.40)' }} />)}
                                </React.Fragment>
                            ))}
                        </Box>

                        <Button className='custom-button-icon' sx={{ width: { xs: '180px', md: '216px' }, height: { xs: '50px', md: 64 }, marginLeft: { xs: 10, sm: 30, md: '300px', lg: '470px' }, backgroundColor: 'rgba(255, 255, 255, 0.082)' }}>
                            
                            <Box className='button-content' sx={{ gap: { xs: '6px', md: '8px' } }}>
                                <Typography sx={{ fontSize: { xs: 14, md: '20px' }, fontFamily: 'Poppins', fontWeight: 700, lineHeight: '30px', wordWrap: 'break-word', textTransform: 'capitalize' }}>Read more</Typography>
                                <ArrowForwardIcon />
                            </Box>
                        </Button>
                    </Box>

                    <Box className='customimg' sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box component={'img'} src={s16} sx={{ width: '100%', height: '101%' }} />
                    </Box>

                </Box>

                <Box className='arrow-container' sx={{ marginX: { xl: '5px' } }}>
                    <Box className='arrow-image' component={'img'} src={rightarrow} sx={{ height: { xs: '22px', xl: '30px' } }} />

                </Box>

            </Box>

            <Box className='progress-bar'>
                <Box className='progress-item item1' />
                <Box className='progress-item item2' />
                <Box className='progress-item item3' />
            </Box>

        </Container>
    )
}

export default AiCasestudy
