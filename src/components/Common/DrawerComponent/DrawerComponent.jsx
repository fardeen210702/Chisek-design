import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import './DrawerComponent.css'; // Import the CSS file

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);
  const [openTechnologies, setOpenTechnologies] = useState(false);

  const pages = [
    { path: 'Home', link: '/' },
    { path: 'Blogs', link: '/blogs' },
  ];

  const services = [
    { path: 'AI-Powered Transformation', link: '/ai-transformation' },
    { path: 'Intelligent Automation', link: '/intelligent-automation' },
    { path: 'Technology Consulting', link: '/technology-consulting' },
    { path: 'AI Research & Development', link: '/ai-research-development' },
    { path: 'End-to-End Product Development', link: '/product-development' },
    { path: 'Customer Experience Solutions', link: '/customer-experience' },
  ];

  const industries = [
    { path: 'Marketing', link: '/marketing' },
    { path: 'Banking and Finance', link: '/banking-finance' },
    { path: 'Healthcare', link: '/healthcare' },
    { path: 'Ecommerce & Retail', link: '/ecommerce-retail' },
    { path: 'Contact Center', link: '/contact-center' },
  ];

  const technologies = [
    { path: 'Text-to-Speech', link: '/text-to-speech' },
    { path: 'Speech-to-Text', link: '/speech-to-text' },
    { path: 'Chatbot', link: '/chatbot' },
    { path: 'NLP Sentiment Analysis', link: '/nlp-sentiment-analysis' },
    { path: 'NLP Computer Vision', link: '/nlp-computer-vision' },
  ];

  function scrollTop(){
    window.scrollTo(0,0)
  
  }

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ '& .MuiDrawer-paper': 'inherit' }} // Use CSS class for styling
      >
        <List className="drawerPaper"  >
          {pages.map((el, id) => (
            <ListItemButton 
              key={id}
              LinkComponent={Link}
              to={el.link}
              onClick={() => {setOpenDrawer(false),scrollTop()}}
              className="listItemButton"
            >
              <ListItemIcon className="iconColor">
                <ListItemText sx={{color:'white'}}>{el.path}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}

          {/* Services Dropdown */}
          <ListItemButton
            onClick={() => setOpenServices(!openServices)}
            className="listItemButton"
          >
            <ListItemText primary="Services" />
            {openServices ? <KeyboardArrowUpIcon className="dropdownIcon dropdownIconUp" /> : <KeyboardArrowDownIcon className="dropdownIcon" />}
          </ListItemButton>
          <Collapse in={openServices}>
            <List>
              {services.map((el, id) => (
                <ListItemButton
                  LinkComponent={Link}
                  to={el.link}
                  key={id}
                  onClick={() => {setOpenDrawer(false),scrollTop()}}
                  className="listItemButton"
                >
                  <ListItemIcon className="iconColor">
                    <ListItemText sx={{color:'white' }}>{el.path}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Industries Dropdown */}
          <ListItemButton
            onClick={() => setOpenIndustries(!openIndustries)}
            className="listItemButton"
          >
            <ListItemText primary="Industries" />
            {openIndustries ? <KeyboardArrowUpIcon className="dropdownIcon dropdownIconUp" /> : <KeyboardArrowDownIcon className="dropdownIcon" />}
          </ListItemButton>
          <Collapse in={openIndustries}>
            <List>
              {industries.map((el, id) => (
                <ListItemButton
                  LinkComponent={Link}
                  to={el.link}
                  key={id}
                  onClick={() =>{setOpenDrawer(false),scrollTop()}}
                  className="listItemButton"
                >
                  <ListItemIcon className="iconColor">
                    <ListItemText sx={{color:'white'}}>{el.path}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Technologies Dropdown */}
          <ListItemButton
            onClick={() => setOpenTechnologies(!openTechnologies)}
            className="listItemButton"
          >
            <ListItemText primary="Technologies" />
            {openTechnologies ? <KeyboardArrowUpIcon className="dropdownIcon dropdownIconUp" /> : <KeyboardArrowDownIcon className="dropdownIcon" />}
          </ListItemButton>
          <Collapse in={openTechnologies}>
            <List>
              {technologies.map((el, id) => (
                <ListItemButton
                  LinkComponent={Link}
                  to={el.link}
                  key={id}
                  onClick={() => {setOpenDrawer(false),scrollTop()}}
                  className="listItemButton"
                >
                  <ListItemIcon className="iconColor">
                    <ListItemText sx={{color:'white'}}>{el.path}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{color:'white'}} className="iconBtn">
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
