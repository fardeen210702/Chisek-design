import React, { useState } from 'react';
import {
    Container, Typography, Button, Box, TextareaAutosize, FormControl,
    InputLabel, Select, MenuItem
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import t14 from '../../assets/imageFiles/t14.png'
import t16 from '../../assets/imageFiles/t16.png'
import vector from '../../assets/imageFiles/Vector1.png';
import gallery from '../../assets/imageFiles/gallery.png';



const HeroSection = () => {


    return (
        <>
            <Container className='texttospeech' maxWidth={false} sx={{ marginTop: { xs: '150px', sm: '230px', lg: '230px' } }}>

                <Box className='boxone'>

                    <Box className='box-inner' sx={{ marginBottom: '50px' }} >

                        <Typography className='text-typo' sx={{ width: { xs: '100%', lg: '1048px' }, fontSize: { xs: '24px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '50px' }, position: 'relative' }}>

                            Transform Visual Data with Advanced Image <br /> Processing
                            <Box src={vector} component={'img'} sx={{ position: 'absolute', right: { lg: 'auto' }, bottom: { xs: '25px', lg: "25px" }, width: { xs: '16px', md: '30px' } }} />
                        </Typography>
                    </Box>
                    <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize:'16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
                        Chisel’s Image Processing technology empowers businesses to analyze, enhance, and interpret visual data with unparalleled accuracy. From automating quality control to unlocking new insights in visual content, our solutions are designed to drive efficiency and innovation across industries
                    </Typography>
                </Box>
            </Container>



            <Box className='speechGenrerate' >
                <Box className='box-inner' sx={{
                    border: { xs: '0', md: '0.20px #1e1e1e solid' }, height: { xs: 'fit-content', lg: '696px' }, gap: { xs: '20px', md: 0 }
                }}>

                    <Box className='speech-info'>
                        <Typography className='typograph' sx={{ fontFamily: 'poppins', fontWeight: 600, fontSize: { xs: '18px', md: '24px' }, fontStyle: 'normal', lineHeight: '160%' }}>
                        ✨ Experience our Image Processing technology in action. <br />See how we enhance, analyze, and transform images with precision and efficiency
                        </Typography>

                        <Typography className='typoText' sx={{ fontFamily: 'inter', fontWeight: 400, fontStyle: 'normal', fontSize: { xs: '14px', md: '16px' }, lineHeight: '24px' }}>
                        Enhance Quality, Automate Analysis, and Unlock New Insights with Chisel’s Image Processing Solutions

                        </Typography>
                    </Box>

                    <Box className='nlp-container' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>


                        <Box className='nlp-item1' sx={{ width: { xs: '100%', md: '572px' }, height: { xs: 'fit-content', md: '618px' } }}>

                            <Typography className='img-typo' sx={{ color: '#FFF', fontFamily: 'inter', fontSize: '16px', lineHeight: '150%', fontWeight: '400%', textAlign: 'center' }}>

                                <Box component={'img'} src={t16} />
                                Computer Vision
                            </Typography>

                            <Box className='selection' sx={{flexDirection:{xs:'column' , md:'row'}}}>
                                <label htmlFor="">
                                    <input type="radio" name="option" id=""  aria-selected/>
                                    Image Generation
                                </label>
                                <label htmlFor="">
                                    <input type="radio" name="option" id="" />
                                    Object Detection
                                </label>
                            </Box>


                            <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}, justifyContent: 'space-between', height: { xs: 'fit-content', alignItems: 'center', md: '24px' } }}>
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


                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                                <Box className='type-for-result'>
                                    <TextareaAutosize
                                        minRows={5}
                                        placeholder="Enter text here..."
                                        style={{ width: '100%', borderRadius: 4, color: 'white', fontSize: 16, fontWeight: '400', lineHeight: '27.20px', wordWrap: 'break-word', backgroundColor: 'transparent', padding: '8px', border: 'none', resize: 'none' }}
                                    />
                                    <Button startIcon={<RefreshIcon />} className='reset' sx={{ fontFamily: 'poppins', fontWeight: 400, textTransform: 'capitalize', color: '#ADADAD', fontSize: '14px',textAlign:'end', width: 'fit-content' }}>
                                        Reset
                                    </Button>

                                </Box>


                                <Button variant='contained' sx={{marginTop:'60px',padding:'16px 14px', fontFamily: 'poppins', fontWeight: 500, textTransform: 'capitalize', color: '#FFF', fontSize: '16px',}}>
                                    Generate Image

                                </Button>



                            </Box>

                        </Box>


                        <Box className='nlp-item2' sx={{ width: { xs: '100%', md: '572px' }, height: { xs: 'fit-content', md: '618px' } }}>
                            <Typography className='nlp-typo' sx={{ fontFamily: 'inter', fontWeight: 400, fontStyle: 'normal', fontSize: { xs: '14px', md: '16px' }, lineHeight: '24px', color: '#FFF' }}>
                                <Box component={'img'} src={gallery} />
                                Output
                            </Typography>

                        </Box>

                    </Box>

                </Box>

            </Box>

        </>
    );
}

export default HeroSection;
