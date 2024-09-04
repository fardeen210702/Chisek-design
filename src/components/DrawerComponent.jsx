import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const pages = ['Home', 'Services', 'Industries', 'Technologies', 'Blogs', 'About Us'];

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
            paddingTop:'50px'// White text color
          },
        }}
      >
        <List>
          {pages.map((el, id) => (
            <ListItemButton
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
                <ListItemText>{el}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: 'white', marginLeft: 'auto' }}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
