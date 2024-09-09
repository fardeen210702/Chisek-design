import React from 'react';
import { Container, Typography, Button, Box, Grid2, Paper } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import customer from '../../assets/imageFiles/customer support.png';
import AI from '../../assets/imageFiles/AI.png';
import cyber from '../../assets/imageFiles/cyber security.png';
import bg2 from '../../assets/imageFiles/bg2.png'
import vector from '../../assets/imageFiles/Vector1.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const BlogHeroSection = () => {
    const trends = [
        {
            button: {
                color: '#624200',
                title: 'Customer Support',
                border: '0.2px solid #564519',
            },
            text: '5 Ways AI is Revolutionizing Customer Support',
            desc: 'Explore how AI-driven technologies are transforming customer support, from chatbots to predictive analytics, and learn how businesses are leveraging these tools',
            btn2: 'Read More',
            img: customer,
        },
        {
            button: {
                color: '#8f7120',
                title: 'AI Future',
                border: '0.2px solid #564519',
            },
            text: 'The Future of Business: AI-Powered Process Automation',
            desc: 'Discover how AI-powered automation is reshaping industries by streamlining operations, reducing costs, and enabling businesses to focus on innovation and growth.',
            btn2: 'Read More',
            img: AI,
        },
        {
            button: {
                color: '#7b1d92',
                title: 'Cyber Security',
                border: '0.2px solid #4B035D',
            },
            text: 'The Role of AI in Cybersecurity: Safeguarding Your Business',
            desc: 'Explore how AI is being used to detect threats, prevent cyberattacks, and protect sensitive data leakage, making businesses more secure in the digital age.',
            btn2: 'Read More',
            img: cyber,
        },
        {
            button: {
                color: '#624200',
                title: 'Customer Support',
                border: '0.2px solid #564519',
            },
            text: '5 Ways AI is Revolutionizing Customer Support',
            desc: 'Explore how AI-driven technologies are transforming customer support, from chatbots to predictive analytics, and learn how businesses are leveraging these tools',
            btn2: 'Read More',
            img: customer,
        },
        {
            button: {
                color: '#8f7120',
                title: 'AI Future',
                border: '0.2px solid #564519',
            },
            text: 'The Future of Business: AI-Powered Process Automation',
            desc: 'Discover how AI-powered automation is reshaping industries by streamlining operations, reducing costs, and enabling businesses to focus on innovation and growth.',
            btn2: 'Read More',
            img: AI,
        },
        {
            button: {
                color: '#7b1d92',
                title: 'Cyber Security',
                border: '0.2px solid #4B035D',
            },
            text: 'The Role of AI in Cybersecurity: Safeguarding Your Business',
            desc: 'Explore how AI is being used to detect threats, prevent cyberattacks, and protect sensitive data leakage, making businesses more secure in the digital age.',
            btn2: 'Read More',
            img: cyber,
        },
    ];


    return (
        <>
            <Container maxWidth={false} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '197px', paddingTop: { xs: '150px' , sm:'230px', lg: '190px' } }}>
                <Box sx={{ width: '100%', height: '116px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
                    <Box sx={{ alignSelf: 'stretch', height: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px' }}>
                        <Typography sx={{ width: { xs: '100%', lg: '1048px' },position:'relative', textAlign: 'center', color: '#F9F9F9', fontSize: { xs: '24px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '70px' }, wordWrap: 'break-word' }}>
                            Get Updated with our Blogs
                             <Box src={vector} component={'img'} sx={{ width: '27.5px', height: '28.5px',position:'absolute' ,right:'auto'}} />
                        </Typography>
                    </Box>
                    <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
                        Check out some of our latest news, press releases and updates
                    </Typography>
                </Box>
            </Container>


            <Box sx={{ width: '100%', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#00000027' }}>
                <Box sx={{
                    paddingBottom: '20px', width: '100%', maxWidth: '1200px',
                }}>

                    <Box sx={{ width: '100%', maxWidth: '1200px', height: { xs: 'fit-content', md: '44px' }, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginY: '40px', px: { xs: '16px', md: '0px' }, gap: { xs: '10px', md: 0 } }}>
                        <Box sx={{ width: '100%', justifyContent: 'start', alignItems: 'center', gap: '16px', display: 'flex' }}>
                            <Typography sx={{ textAlign: 'center', color: 'white', fontSize: { xs: '18px', md: '24px' }, fontFamily: 'Inter', fontWeight: '700', textTransform: 'capitalize', lineHeight: '36px', wordWrap: 'break-word' }}>
                                All Blogs
                            </Typography>
                            <Box sx={{ padding: '8px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff01 0%, #ffffff01 100%)', boxShadow: '0px 0px 4px #ffffff24 inset', borderRadius: '4px', border: '0.1px solid #707070b2', justifyContent: 'center', alignItems: 'center', gap: '16px', display: 'flex' }}>
                                <Typography sx={{ color: '#117DCC', fontSize: { xs: '16px', md: '18px' }, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>06</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width: '100%', justifyContent: {xs:'flex-start',md:'end'}, alignItems: 'center', gap: '6px', display: 'flex' }}>
                            <Box sx={{ justifyContent: 'flex-start', alignItems: 'center', gap: '8px', display: 'flex' }}>
                                <Typography sx={{ color: '#ADADAD', fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Inter', fontWeight: '500', lineHeight: '24px', wordWrap: 'break-word' }}>Blog Category :</Typography>
                            </Box>
                            <Box sx={{ color: '#ADADAD', width: { xs: '180px', md: '240px' }, height: '44px', padding: '16px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #ffffff01 0%, #ffffff01 100%)', boxShadow: '0px 0px 4px #ffffff24 inset', borderRadius: '8px', overflow: 'hidden', border: '0.1px solid #707070b2', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                                <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Inter', fontWeight: '500', lineHeight: '24px', wordWrap: 'break-word' }}>Show All</Typography>
                                <KeyboardArrowDownIcon />
                            </Box>
                        </Box>
                    </Box>

                    <Grid2 container spacing={2} sx={{ justifyContent: { xs: 'center', sm: 'start', lg: 'space-between' }, width: { xs: '100%', xl: '1200px' } }}>
                        {trends.map((trend, index) => (
                            <Grid2 item xs={12} sm={6} md={4} key={index}>
                                <Paper sx={{ textAlign: 'start', width: '100%', maxWidth: { xs: '330px', sm: '350px', lg: '370px', xl: '378.67px' }, height: { xs: 'auto', md: '553px', lg: '553px' }, borderRadius: '16px', border: '0.2px solid #707070', p: '24px 16px', display: 'flex', flexDirection: 'column', backgroundColor: '#101010', color: 'white', gap: '6px' }} elevation={3}>
                                    <img src={trend.img} alt={trend.text} style={{ width: '100%', height: 'auto', maxHeight: '211.49px', borderRadius: '8px', objectFit: 'cover' }} />
                                    <Box sx={{ height: '26px', width: 'fit-content', borderRadius: '4px', marginY: '8px', display: 'flex', alignItems: 'center', border: trend.button.border }}>
                                        <Button sx={{ color: trend.button.color, fontSize: '12px', lineHeight: '18px', fontWeight: 400, fontFamily: 'inter' }}>
                                            {trend.button.title}
                                        </Button>
                                    </Box>
                                    <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: { xs: '16px', sm: '18px', md: '20px', xl: '22px' }, lineHeight: '1.5' }}>
                                        {trend.text}
                                    </Typography>
                                    <Typography sx={{ fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: '1.5', color: '#ADADAD', fontFamily: 'inter' }}>
                                        {trend.desc}
                                    </Typography>
                                    <Button endIcon={<EastIcon />} sx={{ color: '#117DCC', width: 'fit-content', height: '32px', mt: '8px', marginX: '-7px', fontWeight: 'bold', fontFamily: 'poppins', fontSize: { xs: '12px', sm: '14px', md: '16px', xl: '18px' } }}>
                                        {trend.btn2}
                                    </Button>
                                </Paper>
                            </Grid2>
                        ))}
                    </Grid2>



                </Box>

            </Box>

        </>
    );
}

export default BlogHeroSection;
