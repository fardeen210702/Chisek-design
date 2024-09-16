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
import { useGLobalContext } from "../../../context/ContextApi";
import './Navbar.css'; // Import the updated CSS file


const Navbar = () => {
  const { show, setShow } = useGLobalContext();
  const [isDropdownVal, setIsDropdownVal] = useState('')
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


  window.onload = toTop() // scroll to top of the window when page refreshes
function toTop(){
  
    if(isDropdownVal==''){
        window.scrollTo(0,0)
      }   
 
}

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY == 0 ? setIsScrolled(false) : setIsScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




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

            <Box component={Link} to='/' onClick={() => setShow(false)} className="logoContainer">
              <Box className="logoImage">
                <img src={frame} alt="Decorative" />
              </Box>
              <Box className="logoText">
                Chisel Solutions
              </Box>
            </Box>

            <ul className="nav" >

              <li className="nav-item1"  ><Link to={'/'}>Home</Link></li>
              <li onMouseEnter={handleShow} onMouseLeave={handleHide}
                className="nav-item">Services
                {
                  isDropdownVal == 'Services' && <ul className="menuitem">
                    {
                      route.map((el, id) => (<li key={id} >
                        <Link to={el.link} onClick={handleHide}>{el.path}</Link>
                      </li>))
                    }
                  </ul>
                }
              </li>
              <li onMouseEnter={handleShow} onMouseLeave={handleHide}
                className="nav-item">Industries
                {
                  isDropdownVal == 'Industries' && <ul className="menuitem">
                    {
                      route.map((el, id) => (<li key={id} >
                        <Link to={el.link} onClick={handleHide}>{el.path}</Link>
                      </li>))
                    }
                  </ul>
                }
              </li>
              <li onMouseEnter={handleShow} onMouseLeave={handleHide}
                className="nav-item">Technologies
                {
                  isDropdownVal == 'Technologies' && <ul className="menuitem">
                    {
                      route.map((el, id) => (<li key={id} >
                        <Link to={el.link} onClick={handleHide}>{el.path}</Link>
                      </li>))
                    }
                  </ul>
                }
              </li>

              <li className="nav-item1" > <Link to='/blogs'>Blogs</Link></li>
            </ul>



            <Button
              variant="contained"
              className="contactButton"
              component={Link}
              to="/contact"
              onClick={() => setShow(false)}
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
