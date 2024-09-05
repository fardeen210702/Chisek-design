import Navbar from "./components/Navbar"
import Landingpage from "./pages/Landingpage"
import '@fontsource/inter';
import '@fontsource/bebas-neue';
import '@fontsource/poppins';
import { Container } from "@mui/material";




const App = () => {
  return (
    < >
    <Container maxWidth={false} style={{ backgroundColor: '#000',padding:0,margin:0 }}>

    <Landingpage/>
    </Container>
      
    </>
  )
}

export default App
