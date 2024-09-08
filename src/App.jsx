import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage"
import { useState } from "react";
import '@fontsource/inter';
import '@fontsource/bebas-neue';
import '@fontsource/poppins';
import { Container, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import Industries from "./pages/Industries";
import Technologies from "./pages/Technologies";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";




const App = () => {
  const [display, setDisplay] = useState(false)
  function handlehideDisplay(){
    setDisplay(false)
  }

  return (
    < >
      <Container  maxWidth={false} style={{ backgroundColor: '#000', padding: 0, margin: 0, display: 'flex', flexDirection:'column' , alignItems:'center' }}>
        {/* <Box sx={{ maxWidth:'1600px', display: 'flex', flexDirection: "column", alignItems: 'center', }}> */}


          <Router>
            <Navbar display = {display}   setDisplay={setDisplay}/>
            <Routes >
              <Route path="/" element={<Landingpage handlehideDisplay={handlehideDisplay} />} />
              <Route path='/ai-transformation' element={<Services/>} handlehideDisplay={handlehideDisplay}  />
              <Route path="/blogs" element={<Blogs handlehideDisplay={handlehideDisplay}/>} />
              <Route path="/marketing" element={<Industries />}handlehideDisplay={handlehideDisplay} />
              <Route path="/text-to-speech" element={<Technologies handlehideDisplay={handlehideDisplay}/>} />
              <Route path="/privacypolicy" element={<PrivacyPolicy handlehideDisplay={handlehideDisplay}/>} />
              <Route path="/terms&conditions" element={<Terms  handlehideDisplay={handlehideDisplay}/>} />
              {/* <Route path="/about" element={<Others />} /> */}
              
              {/* 
                <Route path="/contact" element={<Contact />} /> */}

            </Routes>
            <Footer/>
          </Router>


        {/* </Box> */}
      </Container>

    </>
  )
}

export default App
