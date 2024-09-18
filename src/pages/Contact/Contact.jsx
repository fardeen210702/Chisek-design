import React from 'react'
import { Box, Container } from '@mui/system'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bg2 from '../../assets/imageFiles/bg2.png'
import CloseIcon from '@mui/icons-material/Close';
import bgcopy from '../../assets/svgs/bgcopy.svg'
import bg1 from '../../assets/svgs/bg1.svg'
import bg3 from '../../assets/svgs/bg3.svg'
import bg4 from '../../assets/svgs/bg4.svg'
import bg5 from '../../assets/svgs/bg5.svg'
import bg6 from '../../assets/svgs/bg6.svg'
import bg7 from '../../assets/svgs/bg7.svg'
import bg8 from '../../assets/svgs/bg8.svg'
import bg9 from '../../assets/svgs/bg9.svg'
import bg10 from '../../assets/svgs/bg10.svg'
import bg11 from '../../assets/svgs/bg11.svg'
import './Contact.css'

const Contact = () => {
    return (
        <Container maxWidth={false} className='contact-container'>
            <Box component="img" className='bg-img-contact' src={bg2} />

            <Box className='contact-information'>
                <Box className='img-box-contact' sx={{display:{xs:'none',md:'flex'}}}>
                    <h4 className='h4-heading'>
                        You are just ONE STEP away from getting started with us!
                    </h4>

                    <Box className='img-box-contact-icons' sx={{marginLeft:{md:'0px',lg:'30px'}}}>
                        <Box className='svgs' component={'img'} src={bg1} sx={{top:'0',left:'0',width:'100%',height:'100%'}}/>
                        <Box className='svgs' component={'img'} src={bgcopy} sx={{top:'20px',left:'15px',width:'90%',height:'90%'}}/>
                        <Box className='svgs' component={'img'} src={bg3} sx={{top:'20px',left:'15px',width:'102px',height:'60px'}}/>
                        <Box className='svgs' component={'img'} src={bg4} sx={{top:'20px',left:'270px',width:'102px',height:'60px'}}/>
                        <Box className='svgs' component={'img'} src={bg5} sx={{top:'30px',left:'75px',width:'86px',height:'72px'}}/>
                        <Box className='svgs' component={'img'} src={bg6} sx={{top:'55px',left:'228px',width:'98.6px',height:'89.7px'}}/>
                        <Box className='svgs' component={'img'} src={bg7} sx={{top:'140px',left:'48px',width:'67.9px',height:'67.9px'}}/>
                        <Box className='svgs' component={'img'} src={bg8} sx={{top:'80px',left:'80px',width:'236.9px',height:'236.9px',zIndex:1}}/>
                        <Box className='svgs' component={'img'} src={bg9} sx={{top:'135px',left:'270px',width:'69px',height:'156px',zIndex:1}}/>
                        <Box className='svgs' component={'img'} src={bg10} sx={{top:'225px',left:'30px',width:'89px',height:'63px'}}/>
                        <Box className='svgs' component={'img'} src={bg10} sx={{top:'225px',right:'30px',width:'89px',height:'63px'}}/>
                        <Box className='svgs' component={'img'} src={bg11} sx={{top:'260px',left:'0px',width:'100%',height:'63px'}}/>
                        
                        

                    </Box>

                </Box>

                <Box className='contact-details' sx={{width:{xs:'100%',md:'50%',borderLeft:{xs:'none',md:'0.2px solid #1e1e1e'}}}}>
                    <Box className='heading-contact' sx={{alignItems:{xs:'flex-start',md:'center'}}}>
                        <h4 className='heading-contact-h4'>
                            Fill out these basic details to get started
                        </h4>
                        <CloseIcon sx={{ color: 'white' }} />



                    </Box>
                    <h5 className='h5'>
                        Our Sales team will reach out to you shortly
                    </h5>

                    <Box
                        component="form"
                        className="form-container"
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            className="input-field"
                            
                        />
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            className="input-field"
                        />
                        <TextField
                            label="Comments"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            className="input-field"
                        />
                        
                        <Button
                            type="submit"
                            variant="contained"
                            className="submit-button"
                            fullWidth
                            sx={{fontWeight:'500',textTransform:'capitalize',fontSize:'16px',borderRadius:'8px'}}
                        >
                            Submit
                        </Button>
                    </Box>

                </Box>

            </Box>




        </Container>
    )
}

export default Contact
