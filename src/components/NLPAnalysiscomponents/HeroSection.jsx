import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextareaAutosize, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import t14 from '../../assets/imageFiles/t14.png'
import t12 from '../../assets/imageFiles/t12.png'
import t13 from '../../assets/imageFiles/t13.png'
import t16 from '../../assets/imageFiles/t16.png'
import chaticon from '../../assets/imageFiles/chaticon.png'
import vector from '../../assets/imageFiles/Vector1.png';
import RefreshIcon from '@mui/icons-material/Refresh';
import gallery from '../../assets/imageFiles/gallery.png';



const HeroSection = () => {




    return (
        <>
            <Container className='texttospeech' maxWidth={false} sx={{ marginTop: { xs: '150px', sm: '230px', lg: '230px' } }}>

                <Box className='boxone'>

                    <Box className='box-inner' >

                        <Typography className='text-typo' sx={{ width: { xs: '100%', lg: '1048px' }, fontSize: { xs: '24px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '70px' }, position: 'relative' }}>

                            Turn Text into Insights with NLP
                            <Box src={vector} component={'img'} sx={{ position: 'absolute', right: { lg: '208px' }, bottom: { xs: '25px', lg: "40px" }, width: { xs: '16px', md: '30px' } }} />
                        </Typography>
                    </Box>
                    <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize: { xs: '16px', lg: '16px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
                        Chisel’s Natural Language Processing technology empowers businesses to understand, analyze, and generate human language data. From extracting insights to automating communication, our Natural Language Processing solutions are designed to enhance productivity, drive innovation, and unlock the full potential of your data
                    </Typography>
                </Box>
            </Container>



            <Box className='speechGenrerate' >
                <Box className='box-inner' sx={{
                    border: { xs: '0', md: '0.20px #1e1e1e solid' }, height: { xs: 'fit-content', lg: '696px' }, gap: { xs: '20px', md: 0 }
                }}>


                    <Box className='speech-info'>
                        <Typography className='typograph' sx={{ fontFamily: 'poppins', fontWeight: 600, fontSize: { xs: '18px', md: '24px' }, fontStyle: 'normal', lineHeight: '160%' }}>
                            ✨ Experience the capabilities of NLP in action. <br /> See how NLP can analyze, interpret, and generate language-based data with ease
                        </Typography>

                        <Typography className='typoText' sx={{ fontFamily: 'inter', fontWeight: 400, fontStyle: 'normal', fontSize: { xs: '14px', md: '16px' }, lineHeight: '24px' }}>
                            Transform Data, Enhance Communication, and Drive Innovation with Chisel’s Advanced NLP Solutions

                        </Typography>
                    </Box>

                    <Box className='nlp-container' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>


                        <Box className='nlp-item11' sx={{ width: { xs: '100%', md: '572px' }, height: { xs: 'fit-content', md: '618px' } }}>

                            <Typography className='img-typo' sx={{ color: '#FFF', fontFamily: 'inter', fontSize: '16px', lineHeight: '150%', fontWeight: 500, textAlign: 'center',marginBottom:'32px' }}>

                                <Box component={'img'} src={t16} />
                                NLP Capabilities
                            </Typography>

                            <Box className='select-speaker1' sx={{marginBottom:'32px'}}>
                                <Typography sx={{color:'#ADADAD',fontFamily:'inter',fontSize:'14px',fontStyle:'normal',fontWeight:500,lineHeight:'150%'}}>
                                Choose NLP Demo
                                </Typography>
                                <select name="" id="" className='select-tag' >
                                    <option value="">Sentiment Analysis</option>
                                    
                                </select>
                            
                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', height: { xs: 'fit-content', alignItems: 'center', md: '24px',marginBottom:'5px' } }}>
                                <Typography sx={{
                                    color: '#ADADAD', fontSize: '16px', fontFamily: 'Inter',
                                    fontWeight: 500, lineHeight: '27px'
                                }}>
                                    Enter Image prompt
                                </Typography>
                                <Button sx={{ textTransform: 'capitalize', fontSize: '16px', gap: '5px' }} >
                                    <Box component={'img'} src={t14} />
                                    Generate Sample Text
                                </Button>

                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box className='type-for-result1' >
                                    <TextareaAutosize
                                        minRows={5}
                                        placeholder="Enter text here..."
                                        style={{ width: '100%', borderRadius: 4, color: 'white', fontSize: 16, fontWeight: '400', lineHeight: '27.20px', wordWrap: 'break-word', backgroundColor: 'transparent', padding: '8px', border: 'none', resize: 'none' }}
                                    />
                                    <Button startIcon={<RefreshIcon />} className='reset' sx={{ fontFamily: 'poppins', fontWeight: 400, textTransform: 'capitalize', color: '#ADADAD', fontSize: '14px', textAlign: 'end', width: 'fit-content' }}>
                                        Reset
                                    </Button>

                                </Box>


                                <Button variant='contained' sx={{ marginTop: '40px', padding: '16px 14px', fontFamily: 'poppins', fontWeight: 500, textTransform: 'capitalize', color: '#FFF', fontSize: '16px',borderRadius:'8px' }}>
                                    Analyse

                                </Button>



                            </Box>

                        </Box>


                        <Box className='nlp-item22' sx={{ width: { xs: '100%', md: '572px' }, height: { xs: 'fit-content', md: '618px' } }}>
                            <Typography className='nlp-typo' sx={{ fontFamily: 'inter', fontWeight: 400, fontStyle: 'normal', fontSize: { xs: '14px', md: '16px' }, lineHeight: '24px', color: '#FFF',marginBottom:'32px' }}>
                                <Box component={'img'} src={gallery} />
                                Output
                            </Typography>
                            <Typography  sx={{ fontFamily: 'poppins', fontWeight: 500, fontSize: '16px', fontStyle: 'normal', lineHeight: '150%', marginY: '3px', color: '#ADADAD' }}>
                                    Text
                                </Typography>

                            <Box className='Box-with-img1'>
                                
                                <Box component={'img'} src={chaticon} sx={{ width: '64px', height: '64px' }} />
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: 500, fontSize: '16px', fontStyle: 'normal', lineHeight: '160%', marginY: '3px', color: '#ADADAD' ,textAlign:'center' }}>
                                Enter your prompts to generate <br /> the output and hit Enter
                                </Typography>
                            </Box>

                        </Box>

                    </Box>





                </Box>

            </Box>

        </>
    );
}

export default HeroSection;
