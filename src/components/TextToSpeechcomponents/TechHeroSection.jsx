import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextareaAutosize, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import t14 from '../../assets/imageFiles/t14.png'
import t12 from '../../assets/imageFiles/t12.png'
import t13 from '../../assets/imageFiles/t13.png'
import t16 from '../../assets/imageFiles/t16.png'
import vector from '../../assets/imageFiles/Vector1.png';



const TechHeroSection = () => {

    const [str, setStr] = useState('')
    let maxLength = 100;

    function handleChange(e) {
        let { value } = e.target;
        console.log(value);
        if (value.length <= maxLength) {
            setStr(value)
        } else {
            alert('the typing is reached to max even if you type you cant generate the speech')
        }
    }


    return (
        <>
            <Container className='texttospeech' maxWidth={false} sx={{  marginTop: { xs: '150px', sm: '230px', lg: '230px' } }}>

                <Box className='boxone'>

                    <Box className='box-inner' >

                        <Typography className='text-typo' sx={{ width: { xs: '100%', lg: '1048px' }, fontSize: { xs: '24px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '70px' },position:'relative'}}>

                            Bring Your Words to Life with Text to Speech
                            <Box src={vector} component={'img'}  sx={{ position: 'absolute', right: { lg: '95px' } , bottom:{xs:'25px',lg:"34px"}, width:{xs:'16px'}}}  />
                        </Typography>
                    </Box>
                    <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize: { xs: '16px', lg: '18px' }, fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
                        Chisel’s Text to Speech technology enables you to convert written content into lifelike speech, enhancing accessibility and engagement. From improving user experiences to supporting inclusivity, our Text to Speech solutions are designed to meet the diverse needs of modern businesses
                    </Typography>
                </Box>
            </Container>



            <Box className='speechGenrerate' >
                <Box className='box-inner' sx={{
                    border: {xs:'0' , md:'0.20px #70707070 solid'},height: { xs: 'fit-content', lg: '696px' },gap: { xs: '20px', md: 0 }
                }}>
                    <Box  className='inner-details'
                        sx={{
                             px: { xs: 2, sm: 4, md: 8 }, '@media (max-width:600px)': { flexDirection: 'column', alignItems: 'center' }
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '90%', md: 1086 }, textAlign: 'center', display: 'flex', justifyContent: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.90)', fontSize: { xs: '18px', sm: '20px', md: '24px' }, fontFamily: 'Poppins', fontWeight: 700, lineHeight: '38.40px', wordWrap: 'break-word'
                                }}
                            >
                                ✨ Experience the power of our Text to Speech technology. Convert your text into natural-sounding speech with just a click
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '90%', md: 1112 }, textAlign: 'center', color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '16px' }, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word'
                            }}
                        >
                            Enhance Accessibility, Engagement, and Efficiency with Chisel’s Advanced Text to Speech Solutions
                        </Box>
                    </Box>


                    <Box className='box-main' sx={{ height: { xs: 'fit-content', md: '396px' },  flexDirection: { xs: 'column', md: 'row' }, justifyContent: { md: 'space-between' } }}>



                        <Box className='textcontainer' sx={{width: { xs: '100%', md: '716px'} }}>

                            <Box className='box-bottom'>
                                <Box component={'img'} src={t13} />
                                <Typography sx={{
                                    color: 'white', fontSize: '18px', fontFamily: 'Inter',
                                    fontWeight: '400', lineHeight: '27px'
                                }}>
                                    Text
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', height: { xs: 'fit-content', alignItems: 'center', md: '24px' } }}>
                                <Typography sx={{
                                    color: '#ADADAD', fontSize: '18px', fontFamily: 'Inter',
                                    fontWeight: '400', lineHeight: '27px'
                                }}>
                                    Write Text
                                </Typography>
                                <Button sx={{ textTransform: 'capitalize', fontSize: '16px', gap: '5px' }} >
                                    <Box component={'img'} src={t14} />
                                    Generate Sample Text
                                </Button>

                            </Box>

                            <Box sx={{ width: '100%', height: '100%', backgroundColor: '#1C1C1C' }}>

                                <TextareaAutosize
                                
                                    minRows={4}
                                    placeholder="Enter text here..."
                                    onChange={handleChange}
                                    maxLength={maxLength} 
                                    style={{ width: '100%', borderRadius: 4, color: 'white', fontSize: 16, fontWeight: '400', lineHeight: '27.20px', wordWrap: 'break-word', backgroundColor: 'transparent', padding: '8px', border: 'none',resize:'none' }}
                                />

                                <Typography sx={{ color: '#ADADAD', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: '27.20px', width: '100%', textAlign: 'end', marginY: '20px', paddingX: '20px' }}>
                                    {str.length}/ {maxLength}
                                </Typography>


                            </Box>







                        </Box>



                        <Box className='box-gradient2'
                            sx={{
                                width: { xs: '100%', md: '428px' }     }}
                        >
                            <Box className='box-large'>
                                <Box className='innerContent2'
                                >
                                    <Box
                                        sx={{
                                            width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}
                                    >
                                        <Box
                                       component={'img'} src={t16}sx={{ 
                                                width: '19.5px', height: '18px'
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'white', fontSize: '18px', fontWeight: '400', lineHeight: '27px', textAlign: 'center'
                                        }}
                                    >
                                        Configuration
                                    </Typography>
                                </Box>
                                <Box className='configurebox'
                                    sx={{
                                        width: '100%', height: '170px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px'
                                    }}
                                >
                                    <Box className='selectLang'
                                        sx={{
                                            width: '100%', height: '69px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#ADADAD', fontSize: '14px', fontWeight: '500', lineHeight: '21px'
                                            }}
                                        >
                                            Select Language
                                        </Typography>
                                        <FormControl fullWidth variant="outlined" color='primary'>
                                          
                                            <Select
                                                defaultValue="en"
                                                sx={{ height: '40px', border: '0.20px #ADADAD solid',color:'white' }}
                                            >
                                                <MenuItem value="en">🇺🇸 English (US)</MenuItem>
                                                <MenuItem value="es">🇪🇸 Spanish</MenuItem>
                                                {/* Add more language options as needed */}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box className='speaker'
                                        
                                    >
                                        <Typography
                                            sx={{
                                                color: '#ADADAD', fontSize: '14px', fontWeight: '500', lineHeight: '21px'
                                            }}
                                        >
                                            Select Speaker
                                        </Typography>
                                        <FormControl fullWidth variant="outlined">
                                            {/* <InputLabel>Select Speaker</InputLabel> */}
                                            <Select
                                                label="Select Speaker"
                                                defaultValue="harry"
                                                sx={{ height: '40px', border: '0.20px #ADADAD solid' }}
                                            >
                                                <MenuItem value="harry">
                                                    <Box
                                                        sx={{
                                                            display: 'flex', alignItems: 'center', gap: '8px',
                                                        }}
                                                    >
                                                        <img
                                                            src="https://via.placeholder.com/24x24"
                                                            alt="Speaker"
                                                            style={{ width: '24px', height: '24px', borderRadius: '24px' }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                color: 'white', fontSize: '16px', fontWeight: '400'
                                                            }}
                                                        >
                                                            Harry
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                color: 'white', fontSize: '16px', fontWeight: '400'
                                                            }}
                                                        >
                                                            -
                                                        </Typography>
                                                        {['Polite', 'Soft', 'Confident'].map((label,id) => (
                                                            <Box className='elements'
                                                                key={id}
                                                                
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        color: 'white', fontSize: '14px', fontWeight: '400'
                                                                    }}
                                                                >
                                                                    {label}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </MenuItem>
                                                {/* Add more speaker options as needed */}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                           
                                <Button
                                className ='generate-speech'
                                    variant="contained"
                                    sx={{
                                         fontSize: '18px', fontFamily: 'Poppins', fontWeight: '700', textTransform: 'none'
                                    }}
                                >
                                    Generate Speech
                                </Button>
                            
                        </Box>

                    </Box>

                    <Box className='box-gradient-inline'>


                        <Box className='innergradient'>

                            <Button variant="contained" sx={{ width: 56, height: 56, p: 1.1, background: '#117DCC', boxShadow: '16.8px 9.8px 16.8px rgba(255, 255, 255, 0.05) inset', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', display: 'flex', minWidth: 0,marginRight:'20px' }}>
                                <Box src={t12} component={'img'} />
                            </Button>


                            <Box className='inputcontainer' >

                                <input type="range" min="0" max="100" defaultValue="50" style={{ width: '100%', marginTop: 2, accentColor: '#117DCC' }} />


                                <Box className='values' >

                                    <Typography sx={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, letterSpacing: 0.07, wordWrap: 'break-word' }}>1:46</Typography>
                                    <Typography sx={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, letterSpacing: 0.07, wordWrap: 'break-word' }}>3:40</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>

        </>
    );
}

export default TechHeroSection;
