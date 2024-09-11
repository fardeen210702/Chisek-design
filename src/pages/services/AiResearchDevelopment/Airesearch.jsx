import React from 'react';
import AiCasestudy from '../../../components/AiTransformationComps/AiCasestudy';
import AIHeroSection from '../../../components/AiresearchComponents/AIHeroSection';
import AIdevAndResearch from '../../../components/AiresearchComponents/AIdevAndResearch';
import AICustomDev from '../../../components/AiresearchComponents/AICustomDev';
import AIHeading from '../../../components/AiresearchComponents/AIHeading';
import AIKeyBenefits from '../../../components/AiresearchComponents/AIKeyBenefits';
import AIInnovate from '../../../components/AiresearchComponents/AIInnovate';
import '../../../components/Common/commonCSS/style.css'
import './airesearch.css'; // Import the CSS file
import { useGLobalContext } from '../../../context/ContextApi';

const Airesearch = () => {
  const {handleHide} = useGLobalContext()
  return (
    <div className="container-box" onClick={handleHide} sx={{backgroundSize:{xs:'250% 120vh' , md:'100% 110vh',lg:'100% 150vh'}}}>
      <div className="content-box">
        <AIHeroSection />
        <AIdevAndResearch />
        <AICustomDev />
        <AIHeading />
        <AIKeyBenefits />
        <AiCasestudy />
        <AIInnovate />
      </div>
    </div>
  );
};

export default Airesearch;
