import { Container, Box, Typography, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import nlp7 from '../../assets/imageFiles/nlp7.png'
import nlp8 from '../../assets/imageFiles/nlp8.png'

const  SentimentAnalysis = () => {


    return (
        <Container className='top-container'
            maxWidth={false}
        >
            <Box className='endcontainer' sx={{ height: { xs: 'fit-content', md: '720px' }, flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '20px', md: '24px' }, boxShadow: '0px 0px 0px #FFFFFF inset', }} >

                <Box className='firstcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 320' }}>

                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={nlp7} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '36px' }}>
                        ✨ Sentiment Analysis and Customer Insights
                        </Typography>

                        <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                        Natural Language Processing allows businesses to analyze sentiment in customer feedback, reviews, and social media, providing insights into customer emotions and perceptions. This helps in refining products and marketing strategies</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Sentiment Detection', description: ' Analyze customer sentiment to gauge satisfaction and identify areas for improvement' },
                                { title: 'Customer Feedback', description: 'Understand customer emotions and perceptions through sentiment analysis' },
                                { title: 'Strategic Insights', description: 'Use sentiment data to refine marketing and product strategies' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                        <CheckIcon className='checkbtn' sx={{ fontSize: 15,color:'#117DCC' }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{ fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography
                                            className='item-description'
                                            component="span" sx={{ fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box className='nextcontainer' sx={{ '@media (max-width: 600px)': { padding: '16px', gap: '16px' } }}>

                    <Box className='aspect-ratio-box' sx={{ aspectRatio: '540 / 290' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={nlp8} alt="placeholder" />
                    </Box>

                    <Box className='column-box ' >

                        <Typography className='custom-typography' sx={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '36px' }}>
                        ✨ Language Translation and Localization
                        </Typography>
                        <Typography className='description-typography ' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>
                        Chisel’s NLP technology supports language translation and localization, allowing businesses to reach global audiences with contextually accurate content. NLP ensures that translations maintain the intended meaning and cultural relevance
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
                            {[
                                { title: 'Accurate Translation', description: ' Translate content into multiple languages with contextual accuracy' },
                                { title: 'Cultural Relevance', description: 'Ensure translations are culturally appropriate and resonate with local audiences' },
                                { title: 'Global Reach', description: 'Expand your business’s reach by communicating effectively in different languages' }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                                    <IconButton className='checkicon' >
                                        <CheckIcon className='checkbtn' sx={{ fontSize: 15,color:'#117DCC' }} />
                                    </IconButton>
                                    <Typography className='item-title' sx={{ fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 600, lineHeight: '27px' }}>
                                        {item.title}: <Typography
                                            className='item-description'
                                            component="span" sx={{ fontSize: { xs: '14px', lg: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '27px' }}>{item.description}</Typography>
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

export default SentimentAnalysis










