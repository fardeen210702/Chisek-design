import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);
  const [openTechnologies, setOpenTechnologies] = useState(false);

  const pages = [
    { path: 'Home', link: '/' },
    { path: 'Blogs', link: '/blogs' },
  ];

  const others = [
    { path: 'Privacy', link: '/privacypolicy' },
    { path: 'Terms', link: '/terms&conditions' },
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

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px', // Width of the drawer
            backgroundColor: 'black', // Black background
            color: 'white',
            paddingTop: '50px', // White text color
            fontFamily: 'Poppins',
          },
        }}
      >
        <List>
          {pages.map((el, id) => (
            <ListItemButton
              key={id}
              LinkComponent={Link}
              to={el.link}
              onClick={() => setOpenDrawer(false)}
              sx={{
                '&:hover': {
                  backgroundColor: '#117DCC', // Blue background on hover
                  color: 'white',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <ListItemText >{el.path}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}

          {/* Services Dropdown */}
          <ListItemButton
            onClick={() => setOpenServices(!openServices)}
            sx={{
              '&:hover': {
                backgroundColor: '#117DCC', // Blue background on hover
                color: 'white',
              },
            }}
          >
            <ListItemText primary="Services" />
            {openServices ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </ListItemButton>
          <Collapse in={openServices}>
            <List>
              {services.map((el, id) => (
                <ListItemButton
                  LinkComponent={Link}
                  to={el.link}
                  key={id}
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#117DCC', // Blue background on hover
                      color: 'white',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    <ListItemText>{el.path}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Industries Dropdown */}
          <ListItemButton
            onClick={() => setOpenIndustries(!openIndustries)}
            sx={{
              '&:hover': {
                backgroundColor: '#117DCC', // Blue background on hover
                color: 'white',
              },
            }}
          >
            <ListItemText primary="Industries" />
            {openIndustries ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </ListItemButton>
          <Collapse in={openIndustries}>
            <List>
              {industries.map((el, id) => (
                <ListItemButton
                  LinkComponent={Link}
                  to={el.link}
                  key={id}
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#117DCC', // Blue background on hover
                      color: 'white',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    <ListItemText>{el.path}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Technologies Dropdown */}
          <ListItemButton
            onClick={() => setOpenTechnologies(!openTechnologies)}
            sx={{
              '&:hover': {
                backgroundColor: '#117DCC', // Blue background on hover
                color: 'white',
              },
            }}
          >
            <ListItemText primary="Technologies" />
            {openTechnologies ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </ListItemButton>
          <Collapse in={openTechnologies}>
            <List>
              {technologies.map((el, id) => (
                <ListItemButton
                  LinkComponent={Link}
                  to={el.link}
                  key={id}
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#117DCC', // Blue background on hover
                      color: 'white',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    <ListItemText>{el.path}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Others Dropdown */}
          <ListItemButton
            onClick={() => setOpenOthers(!openOthers)}
            sx={{
              '&:hover': {
                backgroundColor: '#117DCC', // Blue background on hover
                color: 'white',
              },
            }}
          >
            <ListItemText primary="Others" />
            {openOthers ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </ListItemButton>
          <Collapse in={openOthers}>
            <List>
              {others.map((el, id) => (
                <ListItemButton
                  key={id}
                  LinkComponent={Link}
                  to={el.link}
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#117DCC', // Blue background on hover
                      color: 'white',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    <ListItemText>{el.path}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: 'white', marginLeft: 'auto' }}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
