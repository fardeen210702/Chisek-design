import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextareaAutosize, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import chaticon from '../../assets/imageFiles/chaticon.png'
import Send from '../../assets/imageFiles/Send.png'
import vector from '../../assets/imageFiles/Vector1.png';



const HeroSection = () => {




    return (
        <>
            <Container className='texttospeech' maxWidth={false} sx={{ marginTop: { xs: '150px', sm: '230px', lg: '230px' } }}>

                <Box className='boxone' >

                    <Box className='box-inner' sx={{ marginBottom: { xs: '40px' } }} >

                        <Typography className='text-typo' sx={{ width: { xs: '100%', lg: '1048px' }, fontSize: { xs: '24px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '70px' }, position: 'relative' }}>

                            Improve Communication with Powerful Language <br /> Models
                            <Box src={vector} component={'img'} sx={{ position: 'absolute', right: { lg: '430px' }, bottom: { xs: '25px', lg: "35px" }, width: { xs: '16px', md: '30px' } }} />
                        </Typography>
                    </Box>
                    <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize:'16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
                        Chisel’s Large Language Models help businesses to leverage advanced natural language processing for content generation, customer interaction, and more. From automating tasks to providing insightful data analysis, our Large Language Model solutions are designed to drive efficiency and innovation
                    </Typography>
                </Box>
            </Container>



            <Box className='speechGenrerate' >
                <Box className='box-inner' sx={{
                    border: { xs: '0', md: '0.20px #1e1e1e solid' }, height: { xs: 'fit-content', lg: '696px' }, gap: { xs: '20px', md: 0 }
                }}>

                    <Box className='speech-info'>
                        <Typography className='typograph' sx={{ fontFamily: 'poppins', fontWeight: 600, fontSize: { xs: '18px', md: '24px' }, fontStyle: 'normal', lineHeight: '160%' }}>
                        ✨ Experience the capabilities of Large Language Models. <br /> See how Large Language Models can generate, summarize, and enhance content with just a prompt.

                        </Typography>

                        <Typography className='typoText' sx={{ fontFamily: 'inter', fontWeight: 400, fontStyle: 'normal', fontSize: { xs: '14px', md: '16px' }, lineHeight: '24px' }}>
                        Transform Communication, Content Creation, and Customer Engagement with Chisel’s Advanced Large Language Model Solutions

                        </Typography>
                    </Box>



                    <Box className='chatbotcs'>


                        <Box sx={{ width: '100%',marginY:'32px',display:'flex',flexDirection:{xs:'column',md:'row',gap:'16px'} }}>
                        <Box className='select-speaker1'>
                                <Typography sx={{color:'#ADADAD',fontFamily:'inter',fontSize:'14px',fontStyle:'normal',fontWeight:500,lineHeight:'150%'}}>
                                    Select Industry
                                </Typography>
                                <select name="" id="" className='select-tag' >
                                    <option value="">Insurance</option>
                                    
                                </select>
                            
                            </Box>
                        <Box className='select-speaker1'>
                                <Typography sx={{color:'#ADADAD',fontFamily:'inter',fontSize:'14px',fontStyle:'normal',fontWeight:500,lineHeight:'150%'}}>
                                    Select Use Case
                                </Typography>
                                <select name="" id="" className='select-tag'  >
                                    <option value="">Personalised Policy Management</option>
                                    
                                </select>
                            
                            </Box>

                        </Box>


                        <Typography className='typograph' sx={{ fontFamily: 'poppins', fontWeight: 600, fontSize: '16px', fontStyle: 'normal', lineHeight: '160%', marginY: '3px' }}>
                            Chatbot
                        </Typography>

                        <Box className='chatbot-text' sx={{ height: { xs: 'fit-content', md: '560px' }, }}>

                            <Box className='Box-with-img'>
                                <Box component={'img'} src={chaticon} sx={{ width: '64px', height: '64px' }} />
                                <Typography sx={{ fontFamily: 'poppins', fontWeight: 500, fontSize: '16px', fontStyle: 'normal', lineHeight: '160%', marginY: '3px', color: '#ADADAD' }}>
                                    Select or Enter your prompts to get started
                                </Typography>
                            </Box>

                            <Box className='policydetails' sx={{ flexDirection: { xs: 'column', md: 'row' }, display: { xs: 'none', md: 'flex' } }}>
                                <Typography sx={{ fontFamily: 'inter', fontWeight: 500, fontSize: '14px', fontStyle: 'normal', lineHeight: '20px', marginRight: '3px', color: '#ADADAD' }}>Sample Prompts : </Typography>
                                <Typography sx={{ fontFamily: 'inter', fontWeight: 500, fontSize: '14px', fontStyle: 'normal', lineHeight: '20px', marginY: '3px', color: '#ADADAD' }} className='flexit'>
                                    {
                                        ['Check my policy details', 'Renew my Policy', 'Cancel my Policy'].map((el, id) => {
                                            return <Typography className='map-typo' key={id}sx={{fontSize:'14px',fontFamily:'inter'}}>{el}</Typography>
                                        })
                                    }

                                </Typography>


                            </Box>



                        </Box>



                        <Box className='input-parent'  >
                            <Box className='input-box20'>

                                <input type="text" placeholder='Enter Pompt...' />
                                <Box component={'img'} src={Send} sx={{ padding: { xs: '0px 30px 0px 0px', md: '6px' } }} />
                            </Box>
                        </Box>


                    </Box>

                </Box>

            </Box>

        </>
    );
}

export default HeroSection;
