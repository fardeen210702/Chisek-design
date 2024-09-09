import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import frame from "../assets/imageFiles/Frame.png";
import Polygon from "../assets/imageFiles/Polygon.png";
import DrawerComponent from "./DrawerComponent";
import { Link } from "react-router-dom";

const Navbar = ({ display, setDisplay }) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const obj = {
    Services: [{ path: 'AI-Powered Transformation', link: '/ai-transformation', brColor: '3px solid #0BFFF0' },
    { path: 'Intelligent Automation', link: '/intelligent-automation', brColor: '3px solid #C73F2F' },
    { path: 'Technology Consulting', link: '/technology-consulting', brColor: '3px solid #C88C0F' },
    { path: 'AI Research & Development', link: '/ai-research-development', brColor: '3px solid pink' },
    { path: 'End-to-End Product Development', link: '/product-development', brColor: '3px solid yellow' },
    { path: 'Customer Experience Solutions', link: '/customer-experience', brColor: '3px solid #00DA23' }],

    Industries: [
      { path: 'Marketing', link: '/marketing', brColor: '3px solid #0BFFF0' },
      { path: 'Banking and Finance', link: '/banking-finance', brColor: '3px solid #C73F2F' },
      { path: 'Healthcare', link: '/healthcare', brColor: '3px solid yellow' },
      { path: 'Ecommerce & Retail', link: '/ecommerce-retail', brColor: '3px solid #00DA23' },
      { path: 'Contact Center', link: '/contact-center', brColor: '3px solid #C88C0F' }
    ],

    Technologies: [
      { path: 'Text-to-Speech', link: '/text-to-speech', brColor: '3px solid #C73F2F' },
      { path: 'Speech-to-Text', link: '/speech-to-text', brColor: '3px solid pink' },
      { path: 'Chatbot', link: '/chatbot', brColor: '3px solid #00DA23' },
      { path: 'NLP Sentiment Analysis', link: '/nlp-sentiment-analysis', brColor: '3px solid #0BFFF0' },
      { path: 'NLP Computer Vision', link: '/nlp-computer-vision', brColor: '3px solid #C88C0F' }
    ]
  };



  const [route, setRoute] = useState([])
  const [left, setLeft] = useState(null)


  function handleShow(e) {
    setDisplay(true)
    // console.log(e.target.offsetHeight, e.target.offsetLeft);
    const value = e.target.textContent;
    const key = Object.keys(obj).find(el => el === value)
    setLeft(e.target.offsetLeft - 50)

    if (key) {
      setRoute(obj[key]);
    } else {
      console.log('No matching key found');
      setRoute([]);
    }
  }




  return (
    <AppBar
      position="static"
      sx={{
        maxWidth: "1440px",
        paddingTop: "50px",
        boxShadow: "0",
        backgroundColor: "transparent",
      }}
    >

      <Toolbar sx={{ display: "flex", alignItems: "center", height: "56px" ,justifyContent:'center'}}>
        {isMatch ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingBottom: "40px",
            }}
          >
            <Box component={Link} to='/'
              sx={{
                width: { xs: "250px", md: "242px" },
                height: "72px",
                display: "inline-flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textDecoration: 'none'
              }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={frame}
                  alt="Decorative"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.90)",
                  fontSize: { xs: "18px", md: 20 },
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  lineHeight: "30px",
                  wordWrap: "break-word",
                }}
              >
                Chisel Solutions
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DrawerComponent />
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>


            {
              display && <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius:'16px', position: 'absolute', top: '100%', left: left, width: '578px', height: 'fit-content', padding: '24px', backgroundColor: '#101010', zIndex: '999' }} >
                <Box component={'img'} src={Polygon} sx={{ width: '16px', height: '16px', marginLeft: '100px', position: 'absolute', top: '-15px' }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap',gap:'24px' }}>

                  {
                    route.map((el, id) => {
                      return <Typography key={id} onClick={() => setDisplay(false)} sx={{ flexShrink: '0', width: '250px', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word',paddingX:'10px',borderTopLeftRadius:'1px',borderBottomLeftRadius:'1px', borderLeft:el.brColor , cursor:'pointer' ,textDecoration:'none'}} component={Link} to={el.link} >
                        {el.path}
                      </Typography>
                    })
                  }
                </Box>

              </Box>


            }

            <Box component={Link} to='/' onClick={() => setDisplay(false)}
              sx={{
                width: "242px",
                height: "72px",
                display: "inline-flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textDecoration: 'none',

              }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={frame}
                  alt="Decorative"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.90)",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  lineHeight: "30px",
                  wordWrap: "break-word",
                }}
              >
                Chisel Solutions
              </Box>
            </Box>
            <Tabs 
              value={value}
              onChange={(e, value) => setValue(value)}
              textColor="inherit"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#117DCC",
                  height: "3px",
                },
              }}
              sx={{               
                width: { lg: "800px", xl: "900px" },
                ".MuiTab-root": {
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  fontSize: {
                    xs: "12px", // Extra small screens
                    sm: "14px", // Small screens
                    md: "15px", // Medium screens
                    lg: "16px", // Large screens
                    xl: "18px", // Extra large screens
                  },
                  mr: { md: 4, xl: 6 },
                  paddingBottom: "10px",

                },
                ".Mui-selected": {
                  color: "#117DCC",
                },
              }}
            >



              <Tab label="Home" component={Link} to="/" onClick={() => setDisplay(false)} />
              <Tab
                label="Services"
                // component={Link}
                onClick={handleShow}
                // to="/services"
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
              />
              <Tab
                label="Industries"
                onClick={handleShow}
                // component={Link}
                // to="/industries"
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
              />
              <Tab
                label="Technologies"
                onClick={handleShow}
                // component={Link}
                // to="/technologies"
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
              />
              <Tab label="Blogs" component={Link} to="/blogs" onClick={() => setDisplay(false)} />

            </Tabs>

            <Button onClick={() => setDisplay(false)}
              variant="contained"
              size="large"
              sx={{
                fontWeight: "bold",
                borderRadius: "8px",
                width: "178px",
                height: "56px",
                fontSize: {
                  xs: "14px", // Extra small screens
                  sm: "15px", // Small screens
                  md: "16px", // Medium screens
                  lg: "17px", // Large screens
                  xl: "18px", // Extra large screens
                  "2xl": "20px", // 2xl screens
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
