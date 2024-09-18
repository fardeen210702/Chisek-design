import React, { useState, useEffect } from "react";
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
  MenuItem, Menu
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import frame from "../../../assets/imageFiles/Frame.png";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the updated CSS file


const Navbar = () => {
  const [isDropdownVal, setIsDropdownVal] = useState('')
  const [color, setColor] = useState('')
  const [route, setRoute] = useState([]);
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


  function handleShow(e) {
    const value = e.target.textContent;
    setIsDropdownVal(value)
    const key = Object.keys(obj).find(el => el === value);
    if (key) {
      setRoute(obj[key]);
    } else {
      console.log('No matching key found');
      setRoute([]);
    }
  }
  function handleHide() {
    setIsDropdownVal(null)
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY == 0 ? setIsScrolled(false) : setIsScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);
  
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'; 
    }  

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function colorChange(detail){
    setColor(detail)
    window.scrollTo(0,0)

  }

  return (
    <AppBar position="sticky" className="appbar" style={{ backgroundColor: isScrolled ? '#000' : 'transparent', }} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
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

            <Box component={Link} to='/' onClick={() => window.scrollTo(0,0)} className="logoContainer">
              <Box className="logoImage">
                <img src={frame} alt="Decorative" />
              </Box>
              <Box className="logoText">
                Chisel Solutions
              </Box>
            </Box>

            <ul className="nav" >

              <Link className={`nav-item ${color=='Home' ? 'apply' : ''}`}  onClick={()=>colorChange('Home')} to={'/'}>Home</Link>

              <li onMouseEnter={handleShow} onMouseLeave={handleHide}
                className={`nav-item ${color=='Services' ? 'apply' : ''}`}  onClick={()=>colorChange('Services')}>Services 
                <li className="arrowdown-icon"><KeyboardArrowDownIcon/></li>
                {
                  isDropdownVal == 'Services' && <ul className="menuitem">
                    <li className="triangle"></li>
                    {
                      route.map((el, id) => (<MenuItem className="menulists" sx={{borderLeft:el.brColor,height:'20px',fontWeight:500,fontSize:'14px',color:'white',fontFamily:'poppins'}} key={id} component={Link} to={el.link} onClick={()=>setIsDropdownVal(false)}>{el.path}</MenuItem>))
                    }
                  </ul>
                }
              </li>
              <li onMouseEnter={handleShow} onMouseLeave={handleHide}
                className={`nav-item ${color=='Industries' ? 'apply' : ''}`}  onClick={()=>colorChange('Industries')}>Industries
                <li className="arrowdown-icon"><KeyboardArrowDownIcon/></li>
                {
                  isDropdownVal == 'Industries' && <ul className="menuitem">
                    <li className="triangle"></li>
                    {
                      route.map((el, id) => (<MenuItem className="menulists" sx={{borderLeft:el.brColor,height:'20px',fontWeight:500,fontSize:'14px',color:'white',fontFamily:'poppins'}} key={id} component={Link} to={el.link} onClick={()=>setIsDropdownVal(false)}>{el.path}</MenuItem>))
                    }
                  </ul>
                }
              </li>
              <li  onMouseEnter={handleShow} onMouseLeave={handleHide}
                className={`nav-item ${color=='Technologies' ? 'apply' : ''}`}  onClick={()=>colorChange('Technologies')}>Technologies
                <li className="arrowdown-icon"><KeyboardArrowDownIcon/></li>
                {
                  isDropdownVal == 'Technologies' && <ul className="menuitem">
                    <li className="triangle"></li>
                    {
                      route.map((el, id) => (
                      <MenuItem className="menulists" sx={{borderLeft:el.brColor,height:'20px',fontWeight:500,fontSize:'14px',color:'white',fontFamily:'poppins'}} key={id} component={Link} to={el.link} onClick={()=>setIsDropdownVal(false)}>{el.path}</MenuItem>
                    ))
                    }
                  </ul>
                }
              </li>

               <Link className={`nav-item ${color=='Blogs' ? 'apply' : ''}`}  onClick={()=>colorChange('Blogs')} to='/blogs'>Blogs</Link>
            </ul>



            <Button
              variant="contained"
              className="contactButton"
              component={Link}
              to="/contact"
              onClick={() => window.scrollTo(0,0)}
              sx={{ fontWeight: 600, fontFamily: 'poppins', textTransform: 'capitalize', fontSize: '14px', lineHeight: 1.5, borderRadius: '10px' }}
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