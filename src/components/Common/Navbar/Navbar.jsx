import React, { useState , useEffect } from "react";
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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import frame from "../../../assets/imageFiles/Frame.png";
import Polygon from "../../../assets/imageFiles/Polygon.png";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { Link } from "react-router-dom";
import { useGLobalContext } from "../../../context/ContextApi";
import './Navbar.css'; // Import the updated CSS file

const Navbar = () => {
  const {show, setShow} = useGLobalContext();
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

  const [route, setRoute] = useState([]);
  const [left, setLeft] = useState(null);

  function handleShow(e) {
    setShow(true);
    const value = e.target.textContent;
    const key = Object.keys(obj).find(el => el === value);
    setLeft(e.target.offsetLeft  );

    if (key) {
      setRoute(obj[key]);
    } else {
      console.log('No matching key found');
      setRoute([]);
    }
  }


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY  > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <AppBar position="sticky" className="appbar" style={{ backgroundColor: isScrolled ? '#000' : 'transparent', }} sx={{backgroundColor:'transparent', boxShadow:'none'}}>
      <Toolbar className="toolbar">
        {isMatch ? (
          <Box className="drawerContainer">
            <Box component={Link} to='/' className="logoContainer">
              <Box className="logoImage">
                <img src={frame} alt="Decorative" />
              </Box>
              <Box className="logoText">
                Chisel Solutions
              </Box>
            </Box>
            <Box>
              <DrawerComponent />
            </Box>
          </Box>
        ) : (
          <Box className="tabsContainer">
            {show && (
              <Box className="dropdownMenu" style={{ opacity: show ? 1 : 0, transition: 'opacity 0.5s' }}>
                <Box component='img' src={Polygon} className="dropdownArrow" sx={{position:'absolute' , left:left,top:'-10px'}} />
                <Box className="dropdownContent">
                  {route.map((el, id) => (
                    <Typography
                      key={id}
                      onClick={() => setShow(false)}
                      className="dropdownItem"
                      component={Link}
                      to={el.link}
                      sx={{ borderLeft:el.brColor ,fontWeight: 600}}
                    >
                      {el.path}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}
            <Box component={Link} to='/' onClick={() => setShow(false)} className="logoContainer">
              <Box className="logoImage">
                <img src={frame} alt="Decorative" />
              </Box>
              <Box className="logoText">
                Chisel Solutions
              </Box>
            </Box>
            <Tabs  
              value={value}
              onChange={(e, value) => setValue(value)}
              textColor="inherit"
              
              TabIndicatorProps={{
                style: {
                  backgroundColor: "transparent",
                  height: "3px",
                  
                },
              }}
              className="tabStyles"
            >
              <Tab label="Home" component={Link} to="/" onClick={() => setShow(false)}
                sx={{fontWeight:600,fontFamily:'poppins',textTransform:'capitalize',fontSize:'14px',lineHeight:1.5,marginRight:'20px' }}
                className='tab'
              />
              <Tab
                label="Services"
                onClick={handleShow}
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
                sx={{fontWeight:600,fontFamily:'poppins',textTransform:'capitalize',fontSize:'14px',lineHeight:1.5,marginRight:'20px' }}
                className='tab'
              />
              <Tab
                label="Industries"
                onClick={handleShow}
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
                sx={{fontWeight:600,fontFamily:'poppins',textTransform:'capitalize',fontSize:'14px',lineHeight:1.5,marginRight:'20px' }}
                className='tab'
              />
              <Tab
                label="Technologies"
                onClick={handleShow}
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
                sx={{fontWeight:600,fontFamily:'poppins',textTransform:'capitalize',fontSize:'14px',lineHeight:1.5,marginRight:'20px' }}
                className='tab'
              />
              <Tab label="Blogs" component={Link} to="/blogs" onClick={() => setShow(false)} 
                sx={{fontWeight:600,fontFamily:'poppins',textTransform:'capitalize',fontSize:'14px',lineHeight:1.5,marginRight:'20px' }}
                className='tab'
              />
            </Tabs>
            <Button
              variant="contained"
              className="contactButton"
              component={Link}
              to="/contact"
              onClick={() => setShow(false)}
              sx={{fontWeight:600,fontFamily:'poppins',textTransform:'capitalize',fontSize:'14px',lineHeight:1.5}}
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
