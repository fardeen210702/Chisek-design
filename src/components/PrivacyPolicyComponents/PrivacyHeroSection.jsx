import React from 'react';
import { Container, Typography, Button, Box, Grid2, Paper } from '@mui/material';
import vector from '../../assets/imageFiles/Vector1.png';



const BlogHeroSection = () => {

    const policies = [
        {
            title: 'Information Provided by You',
            desc: 'When you interact with us through our website or other channels, we may collect personal data such as your name, email address, and phone number. This information is collected to facilitate communication and provide you with the requested services.'
        },
        {
            title: 'Information Automatically Collected',
            desc: 'We may automatically collect information about your usage of our website, such as your IP address, browser type, and device information. This information helps us analyze and improve our services.'
        },
        {
            title: 'Information from Third-Party Analytics Services',
            desc: 'We use third-party analytics services, such as Google Analytics, to collect information about website usage. These services use cookies to track user interactions and provide us with insights to enhance user experience.'
        },
        {
            title: 'Purpose of Data Collection',
            desc: 'We collect personal data for various purposes, including improving our services, processing inquiries, marketing our products, and performing recruitment activities. Additionally, we may process call recordings to generate insights and reports for our AI platform users.'
        },
        {
            title: 'Retention of Personal Information',
            desc: 'We retain personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy and comply with legal obligations.'
        },
        {
            title: 'Protection of Personally-Identifying Information',
            desc: 'We employ physical, technical, and administrative security measures to protect personal data from unauthorized access, disclosure, alteration, or destruction. Our service providers are bound by contractual obligations to maintain the confidentiality of personal information.'
        },
        {
            title: 'Sharing of Data',
            desc: 'We may share personal data with third-party service providers, such as analytics services and marketing agencies, to facilitate the provision of our services and improve user experience.'
        },
        {
            title: 'Cookies',
            desc: 'Our website uses cookies to enhance user experience and track website usage. By using our website, you consent to the use of cookies in accordance with our Cookie Policy.'
        },
        {
            title: 'Children"s Privacy',
            desc: 'Our services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from children. Parents or guardians who believe their child has provided personal information to us can contact us for assistance.'
        },
        {
            title: 'Business Transfers',
            desc: 'In the event of a business transfer or acquisition, user information may be transferred to the acquiring entity. Users will be notified of any such changes to our Privacy Policy.'
        },
        {
            title: 'Privacy Policy Changes',
            desc: 'We may update this Privacy Policy periodically, and users are encouraged to review this page regularly for updates. By continuing to use our services, you agree to the updated Privacy Policy.'
        },
        {
            title: 'Contact Us',
            desc: 'If you have any questions, concerns, or complaints regarding our Privacy Policy, please contact us at',
            link:'contact@chiselsolutions.ai'
            
        },
    ]


    return (
        <>
            <Container className='privacy-policy-container' maxWidth={false} sx={{ paddingTop: { xs: '150px', sm: '230px', lg: '190px' } }}>
                <Box className='privacy-policy-innercontainer' >

                    <Box className='typography-container'>

                        <Typography className='typography-privacy' sx={{ width: { xs: '100%', lg: '1048px' }, fontSize: { xs: '20px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '70px' } }}>
                            Our Commitment to Privacy
                            <Box src={vector} component={'img'} sx={{ width: { xs: '24px', md: '27.5px' }, height: { xs: '20px', md: '28.5px' }, position: 'absolute', right: 'auto' }} />
                        </Typography>
                    </Box>
                    <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize:'16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
                        Explore our commitment to safeguarding your personal data and learn about our privacy practices to ensure transparency and trust in our services
                    </Typography>
                </Box>


            </Container>


            <Box className='mapped-privacy-container'>
                <Box className='privacy1' sx={{ padding:{xs:'10px'}}}>
                    <Box className='privacy2'
                        sx={{ width: { xs: '100%', maxWidth: '1200px' } }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '42px', wordWrap: 'break-word', fontSize: { xs: '20px', sm: '20px' } }}
                        >
                            Privacy Policy
                        </Typography>
                        <Typography
                            sx={{ alignSelf: 'stretch', color: '#ADADAD', fontFamily: 'Inter', fontWeight: 400, lineHeight: '32px', wordWrap: 'break-word', fontSize: '16px'}}
                        >
                            Service Pack is committed to protecting the privacy of individuals and safeguarding their personal data. This Privacy Policy outlines our practices concerning the collection, use, security, and disclosure of personal data.
                        </Typography>

                    </Box>
                    <Typography sx={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '42px', wordWrap: 'break-word', fontSize: '20px', marginY: '20px',}}>
                        Collection of Personal Data
                    </Typography>


                    {
                        policies.map((el, id) => {
                            return <Box className='policies' key={id}
                                sx={{ width: { xs: '100%', maxWidth: '1200px' } }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '42px', wordWrap: 'break-word', fontSize: '20px'}}
                                >
                                    {el.title}
                                </Typography>
                                <Typography
                                    sx={{ alignSelf: 'stretch', color: '#ADADAD', fontFamily: 'Inter', fontWeight: 400, lineHeight: '32px', wordWrap: 'break-word', fontSize:'16px'}}
                                >
                                    {el.desc} <span style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}>{el.link}</span>
                                </Typography>

                            </Box>
                        })

                    }






                </Box>

            </Box>

        </>
    );
}

export default BlogHeroSection;
