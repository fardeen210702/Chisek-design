import React from 'react'
import { Container, Typography, Button, Box, TextareaAutosize, FormControl, InputLabel, Select, MenuItem   } from '@mui/material';
import t14 from '../../assets/imageFiles/t14.png'
import t12 from '../../assets/imageFiles/t12.png'
import t13 from '../../assets/imageFiles/t13.png'
import t16 from '../../assets/imageFiles/t16.png'
import vector from '../../assets/imageFiles/Vector1.png';
import RefreshIcon from '@mui/icons-material/Refresh';
import { height } from '@mui/system';


const HeroSection = () => {
  return (
    <>
            <Container className='texttospeech' maxWidth={false} sx={{  marginTop: { xs: '150px', sm: '230px', lg: '250px' } }}>

                <Box className='boxone'>

                    <Box className='box-inner' >

                        <Typography className='text-typo' sx={{ width: { xs: '100%', lg: '1048px' }, fontSize: { xs: '24px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '70px' },position:'relative'}}>

                        Convert Your Voice to Text Instantly
                            <Box src={vector} component={'img'}  sx={{ position: 'absolute', right: { lg: '170px' } , bottom:{xs:'25px',lg:"34px"}, width:{xs:'16px',md:'30px'}}}  />
                        </Typography>
                    </Box>

                    <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
                    Chisel’s Speech to Text technology allows you to convert spoken language into text with high accuracy, enhancing productivity, accessibility, and user experience. From streamlining workflows to improving documentation, our Speech to Text solutions are designed to meet the needs of modern businesses
                    </Typography>
                </Box>
            </Container>



            <Box className='speechGenrerate' >
                <Box className='box-inner' sx={{
                    border: {xs:'0' , md:'0.20px #70707070 solid'},height: { xs: 'fit-content', lg: '696px' },gap: { xs: '20px', md: 0 }
                }}>
                    <Box className='speech-info'>
                        <Typography className='typograph' sx={{fontFamily:'poppins',fontWeight:600,fontSize:{xs:'18px',md:'24px'},fontStyle:'normal',lineHeight:'160%'}}>
                        ✨ Experience our Speech to Text technology in action. <br />
                        See how easily your spoken words can be transformed into precise text.

                        </Typography>

                        <Typography className='typoText' sx={{fontFamily:'inter',fontWeight:400,fontStyle:'normal',fontSize:{xs:'14px',md:'16px'},lineHeight:'24px'}}>
                        Convert Spoken Words into Accurate Text with Chisel’s Advanced Speech to Text Solutions

                        </Typography>
                    </Box>
                    {/* second box */}

                    <Box className='speech-to-text' sx={{flexDirection:{xs:'column',md:'row'}}}>
                        <Box className='left-speech-box' sx={{width:{xs:'100%',sm:'484px'}}}>

                            <Typography className='img-typo' sx={{color:'#FFF',fontFamily:'inter',fontSize:'18px',lineHeight:'150%',fontWeight:'400%',textAlign:'center'}}>
                                
                                <Box component={'img'} src={t16}/>
                                Configuration
                            </Typography>
                            <Box className='select-speaker1'>
                                <Typography sx={{color:'#ADADAD',fontFamily:'inter',fontSize:'14px',fontStyle:'normal',fontWeight:500,lineHeight:'150%'}}>
                                    Select Language
                                </Typography>
                                <select name="" id="" className='select-tag' >
                                    <option value="">{'English (US)'}</option>
                                    
                                </select>
                                <Typography sx={{color:'#ADADAD',fontFamily:'inter',fontSize:'14px',fontStyle:'normal',fontWeight:500,lineHeight:'150%',width:'90%'}}>
                                *Ensure your microphone settings is enabled in your browser
                                </Typography>
                            
                            </Box>

                            <Box className='btnBox11'>
                                <Box sx={{display:'flex' , justifyContent:'space-around',gap:'14px'}}>
                                    <Button className='buttons' variant='contained' sx={{fontSize:'18px',lineHeight:'150%',fontWeight:700,fontFamily:'poppins',textTransform:'capitalize',borderRadius:'8px'}}>Start</Button>
                                    <Button className='buttons' variant='outlined' sx={{fontSize:'18px',lineHeight:'150%',fontWeight:700,fontFamily:'poppins',textTransform:'capitalize',color:'white',border:'1px solid #117DCC',borderRadius:'8px'}}>stop</Button>
                                </Box>

                                <Button startIcon={<RefreshIcon/>} className='reset' sx={{fontFamily:'poppins',fontWeight:400,textTransform:'capitalize',marginY:'24px',color:'#ADADAD',fontSize:'18px'}}>
                                 Reset
                                </Button>


                            </Box>

                            


                        </Box>

                        {/* ----------- */}

                        <Box className='typing-box' sx={{width:{xs:'100%',md:'716px'}}}>

                            <Typography className='imgtypography10' sx={{fontFamily:'inter',fontSize:'18px',fontWeight:400}}>
                                <Box component={'img'}  src={t13}/>
                                Speech Transcription
                            </Typography>
                            <Box className='startspeech' >
                                <textarea name="" id="" className='textarea' ></textarea>
                            </Box>

                        </Box>
                        
                    </Box>


                   

                </Box>

            </Box>

        </>
  )
}

export default HeroSection
