import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage"
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




const App = () => {
  return (
    < >
      <Container maxWidth={false} style={{ backgroundColor: '#000', padding: 0, margin: 0, display: 'flex', flexDirection:'column' , alignItems:'center' }}>
        {/* <Box sx={{ maxWidth:'1600px', display: 'flex', flexDirection: "column", alignItems: 'center', }}> */}


          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path='/services' element={<Services/>} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/technologies" element={<Technologies />} />
              
              {/* 
                <Route path="/about" element={<About />} />
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
