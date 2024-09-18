import Navbar from "../src/components/Common/Navbar/Navbar";
import { Container, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import '@fontsource/inter';
import '@fontsource/bebas-neue';
import '@fontsource/poppins';
import Landingpage from "../src/pages/landingPage/Landingpage"
import AiTransformation from "./pages/services/AiTransformation/AiTransformation";
import Blogs from '../src/pages/Blogs/Blogs'
import Footer from "../src/components/Common/Footer/Footer";
import Marketing from '../src/pages/industries/marketing/Marketing';
import TextToSpeech from "./pages/Technologies/TextToSpeech/TextToSpeech";
import PrivacyPolicy from "../src/pages/Other/PrivacyPolicy/PrivacyPolicy";
import Terms from "../src/pages/Other/Terms/Terms";
import IntelligentAutomation from "../src/pages/services/intelligentAutomation/IntelligentAutomation";
import TechConsulting from "../src/pages/services/TechConsulting/TechConsulting";
import EndtoEndProductdev from "../src/pages/services/End-To-EndProductDevelopment/EndtoEndProductdev";
import CustomerSolution from "../src/pages/services/CustomerExperience/CustomerSolution";
import AiResearch from '../src/pages/services/AiResearchDevelopment/Airesearch';
import BankingAndFinance from "../src/pages/industries/bankingAndFinance/BankingAndFinance";
import HealthCare from "../src/pages/industries/HealthCare/HealthCare";
import EcommerceRetail from "../src/pages/industries/EcommerceAndRetail/EcommerceRetail";
import ContactCenter from "../src/pages/industries/ContactCenter/ContactCenter";
import SpeechToText from "./pages/Technologies/SpeechToText/SpeechToText";
import NLPAnalysis from "./pages/Technologies/NLPAnalysis/NLPAnalysis";
import Chatbot from "./pages/Technologies/Chatbot/Chatbot";
import NLPComputerVision from "./pages/Technologies/NLPComputerVision/NLPComputerVision";
import Contact from "./pages/Contact/Contact";


const App = () => {
  return (
    < >
      <Container  maxWidth={false} style={{ backgroundColor: '#000', padding: 0, margin: 0, display: 'flex', flexDirection:'column' , alignItems:'center' }}>
              
          <Router>
            <Navbar/>
            <Routes >
              <Route path="/" element={<Landingpage />} />
              <Route path='/ai-transformation' element={<AiTransformation />}  />
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/marketing" element={<Marketing  />} />
              <Route path="/healthcare" element={<HealthCare  />} />
              <Route path="/ecommerce-retail" element={<EcommerceRetail  />} />
              <Route path="/contact-center" element={<ContactCenter />} />
              <Route path="/text-to-speech" element={<TextToSpeech />} />
              <Route path="/speech-to-text" element={<SpeechToText />} />
              <Route path="/nlp-sentiment-analysis" element={<NLPAnalysis />} />
              <Route path="/nlp-computer-vision" element={<NLPComputerVision />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/terms&conditions" element={<Terms  />} />
              <Route path="/intelligent-automation" element={<IntelligentAutomation  />} />
              <Route path="/technology-consulting" element={<TechConsulting />} />
              <Route path="/ai-research-development" element={<AiResearch  />} />
              <Route path="/product-development" element={<EndtoEndProductdev />} />
              <Route path="/customer-experience" element={<CustomerSolution  />} />
              <Route path="/banking-finance" element={<BankingAndFinance />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
            <Footer/>
          </Router>


    
      </Container>

    </>
  )
}

export default App
