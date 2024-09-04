import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Tabs, Tab, Button, useTheme, useMediaQuery, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/imageFiles/Logo.png';
import DrawerComponent from './DrawerComponent';

const Navbar = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
    const isExtraLarge = useMediaQuery(theme.breakpoints.up('2xl'));

    return (
        
        <AppBar position="static" sx={{ paddingTop: '50px', backgroundColor: 'transparent' }}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', height: '56px' }}>
                {isMatch ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingBottom: '40px' }}>
                        <Box component="img" alt="Logo" src={Logo} sx={{ height: '56px' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <DrawerComponent />
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Box component="img" alt="Logo" src={Logo} sx={{ height: '56px' }} />
                        <Tabs
                            value={value}
                            onChange={(e, value) => setValue(value)}
                            textColor="inherit"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: '#117DCC',
                                    height: '3px',
                                },
                            }}
                            sx={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '840px',
                                '.MuiTab-root': {
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                    fontSize: {
                                        xs: '12px', // Extra small screens
                                        sm: '14px', // Small screens
                                        md: '15px', // Medium screens
                                        lg: '16px', // Large screens
                                        xl: '18px', // Extra large screens
                                        '2xl': '20px' // 2xl screens
                                    },
                                    mr: 2,
                                    paddingBottom: '10px',
                                },
                                '.Mui-selected': {
                                    color: '#117DCC',
                                },
                            }}
                        >
                            <Tab label="Home" />
                            <Tab label="Services" />
                            <Tab label="Industries" icon={<KeyboardArrowDownIcon />} iconPosition="end" />
                            <Tab label="Technologies" icon={<KeyboardArrowDownIcon />} iconPosition="end" />
                            <Tab label="Blogs" />
                            <Tab label="About Us" />
                        </Tabs>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                width: '178px',
                                height: '56px',
                                fontSize: {
                                    xs: '14px', // Extra small screens
                                    sm: '15px', // Small screens
                                    md: '16px', // Medium screens
                                    lg: '17px', // Large screens
                                    xl: '18px', // Extra large screens
                                    '2xl': '20px' // 2xl screens
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
