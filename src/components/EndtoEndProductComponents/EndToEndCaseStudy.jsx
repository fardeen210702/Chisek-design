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




const EndToEndCaseStudy = () => {

    const caseData = {
        title: "Technology Startup",
        sections: [
            {
                label: "Challenge :",
                description: " A tech startup needed to develop and launch an innovative mobile app within a tight timeline"
            },
            {
                label: "Solution :",
                description: "Chisel managed the entire product development process, from initial concept design to final app launch, ensuring all milestones were met on time"
            },
            {
                label: "Outcome :",
                description: "The app was successfully launched within 6 months, gaining over 100,000 users in the first quarter"
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
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden'
            }}>

            <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#117DCC', fontWeight: 'bold', fontSize: { xs: '28px', sm: '32px', md: '40px' }, fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px' }}>
            Case Studies: End-to-End Product Development Success Stories
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: '#ADADAD', mb: 4, fontFamily: 'inter', fontSize: { xs: '14px', md: '14px', lg: '18px' } }}>
            To illustrate the impact of our End-to-End Product Development services, here are a few case studies from clients who have <br /> successfully brought their ideas to life.
            </Typography>


            <Box sx={{ width: '100%', maxWidth: '1300px', height: { xs: 'fit-content',sm:'600px', md: '643px' }, display: 'flex', justifyContent: 'space-between',alignItems:'center',  boxShadow: '0px 0px 0px #FFFFFF inset', marginTop: '72px', marginBottom: '32px' }}
            >

                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%',marginX:{xl:'5px'} }}>
                    <Box component={'img'} src={leftarrow}  sx={{height:{xs:'22px' , xl:'30px'}}} />
                </Box>

                <Box sx={{border: '0.20px rgba(112.31, 112.31, 112.31, 0.70) solid',borderRadius: '16px',  width: '100%', height: '100%', padding: '16px', display: 'flex', justifyContent: 'space-between', gap: { xs: '10px' }, flexDirection: { xs: 'column', md: 'row' } }}>

                    <Box sx={{ width: { xs: '100%', sm: '100%', md: '716px' }, height: '100%', paddingTop: 3, paddingLeft: { xs: 2, sm: 4 }, paddingRight: { xs: 2, sm: 4 }, background: 'linear-gradient(0deg, 0%, 100%)', boxShadow: '0px 0px 0px rgba(255, 255, 255, 0.01) inset', borderRadius: 2, overflow: 'hidden', border: '0.20px rgba(112.31, 112.31, 112.31, 0.70) solid', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>

                        <Box sx={{  alignSelf: 'stretch', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box component={'img'} src={casestudy} sx={{ width: 24, height: 24 }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ color: '#117DCC', fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, lineHeight: '27px', textAlign: 'center' }}>Case Study #1</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ alignSelf: 'stretch', height: 409, display: 'flex', flexDirection: 'column', gap: {xs:'18px',md:'24px'} }}>
                            <Typography sx={{ fontSize: { xs: '20px', md: 22,lg:24 }, fontWeight: 700, lineHeight: '36px', color: 'rgba(255, 255, 255, 0.90)' }}>{caseData.title}</Typography>

                            {caseData.sections.map((section, index) => (
                                <Box key={index} sx={{ display: 'inline-flex', alignItems: 'flex-start', gap: 1 }}>
                                    <IconButton sx={{ background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff 0%, #ffffff 100%)', boxShadow: '4px 0px 9px 2px #bcbcbc33 inset', borderRadius: '9999px', border: '0.08px solid #000', width: { xs: '20px', md: '24px' }, height: { xs: '20px', md: '24px' } }}>
                                        <CheckIcon sx={{ color: '#117DCC', fontSize: 15 }} />
                                    </IconButton>
                                    <Typography>
                                        <Typography component="span" sx={{ color: 'rgba(255, 255, 255, 0.90)', fontSize: { xs: '14px',md:16 ,lg: 18 }, fontWeight: 600 }}>{section.label}</Typography>
                                        <Typography component="span" sx={{ color: '#ADADAD', fontSize: { xs: '14px', md:16, lg: 18 } }}>{section.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ width: '100%', height: { xs: 'fit-content', md: '104px' }, paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '14px', display: 'inline-flex',marginY:{xs:'10px',sm:0} }}>
                            {caseData.stats.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Box sx={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex' }}>
                                        <Box sx={{ justifyContent: 'flex-start', alignItems: 'center', gap: '4px', display: 'inline-flex' }}>
                                            <Typography sx={{ color: '#479A55', fontSize: { xs: '16px',md:'18px', lg: '24px' }, fontFamily: 'Inter', fontWeight: 700, lineHeight: '36px', wordWrap: 'break-word' }}>{item.percentage}</Typography>
                                            <Box sx={{ width: { xs: 20, lg: '32px' }, height: { xs: 20, lg: '32px' }, position: 'relative' }}>
                                                <Box component={'img'} src={item.img} sx={{ width: '100%', height: '100%' }} />
                                            </Box>
                                        </Box>
                                        <Typography sx={{ color: '#ADADAD', fontSize: { xs: '12px', md: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>{item.label}</Typography>
                                    </Box>
                                    {index !== caseData.stats.length - 1 && (<Box sx={{ width: '1px', alignSelf: 'stretch', background: 'rgba(217, 217, 217, 0.40)' }} />)}
                                </React.Fragment>
                            ))}
                        </Box>

                        <Button sx={{ width: { xs: '180px', md: '216px' }, height: { xs: '50px', md: 64 }, paddingTop: '15.96px', paddingX: '32px', background: 'rgba(255, 255, 255, 0.04)', borderTopLeftRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', marginLeft: { xs: 10,sm:30, md: '300px', lg:'470px' } }}>
                            <Box sx={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: { xs: '6px', md: '8px' }, display: 'inline-flex' }}>
                                <Typography sx={{ color: '#117DCC', fontSize: { xs: 14, md: '20px' }, fontFamily: 'Poppins', fontWeight: 700, lineHeight: '30px', wordWrap: 'break-word' }}>Read more</Typography>
                                <ArrowForwardIcon />
                            </Box>
                        </Button>
                    </Box>

                    <Box sx={{ width:'428px', height: '100%', border: '1px solid red', overflow: 'hidden', display: { xs: 'none', md: 'block' },borderRadius:'16px',border: '0.20px rgba(112.31, 112.31, 112.31, 0.70) solid' }}>
                        <Box component={'img'} src={s16} sx={{ width: '100%', height: '101%' }} />
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', marginX:{xl:'5px'} }}>
                    <Box component={'img'} src={rightarrow} sx={{height:{xs:'22px' ,xl:'30px'}}} />

                </Box>

            </Box>

            <Box sx={{ width: '100%', height: '6px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <Box
                    sx={{
                        width: '61.3px',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: 'rgba(255, 255, 255, 0.80)',
                        borderRadius: '99px',
                    }}
                />
                <Box
                    sx={{
                        width: '61.3px',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '99px',
                        border: '0.2px solid',
                    }}
                /> <Box
                    sx={{
                        width: '61.3px',
                        height: '100%',
                        position: 'relative',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '99px',
                        border: '0.2px solid',
                    }}
                />


            </Box>
            

        </Container>
    )
}

export default EndToEndCaseStudy
