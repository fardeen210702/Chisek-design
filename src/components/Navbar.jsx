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
import MenuIcon from "@mui/icons-material/Menu";
import frame from "../assets/imageFiles/Frame.png";
import DrawerComponent from "./DrawerComponent";
import Landingpage from "../pages/Landingpage";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

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
      <Toolbar sx={{ display: "flex", alignItems: "center", height: "56px" }}>
        {isMatch ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingBottom: "40px",
            }}
          >
            <Box
              sx={{
                width: { xs: "250px", md: "242px" },
                height: "72px",
                display: "inline-flex",
                justifyContent: "flex-start",
                alignItems: "center",
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
          <>
            <Box
              sx={{
                width: "242px",
                height: "72px",
                display: "inline-flex",
                justifyContent: "flex-start",
                alignItems: "center",
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
                marginLeft: "auto",
                marginRight: "auto",
                width: { md: "800px", xl: "840px" },
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
                  mr: { md: 1, xl: 2 },
                  paddingBottom: "10px",
                },
                ".Mui-selected": {
                  color: "#117DCC",
                },
              }}
            >
              <Tab label="Home" component={Link} to="/" />
              <Tab
                label="Services"
                component={Link}
                to="/services"
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
              />
              <Tab
                label="Industries"
                component={Link}
                to="/industries"
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
              />
              <Tab
                label="Technologies"
                icon={<KeyboardArrowDownIcon />}
                iconPosition="end"
              />
              <Tab label="Blogs" component={Link} to="/blogs" />
              <Tab label="About Us" />
            </Tabs>

            <Button
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
