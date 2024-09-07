import React from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import bg2 from '../../assets/imageFiles/bg2.png';
import service1 from '../../assets/imageFiles/service1.jpg';
import service2 from '../../assets/imageFiles/service2.jpg';
import service3 from '../../assets/imageFiles/service3.jpg';
import service4 from '../../assets/imageFiles/service4.jpg';
import service5 from '../../assets/imageFiles/service5.jpg';
import service6 from '../../assets/imageFiles/service6.jpg';

const ServicesComponent = () => {
  const serviceData = [
    { img: service1, title: 'AI Business Transformation', description: 'Revolutionize operations, enhance experiences, and drive innovation with AI. We guide you from strategy to implementation and beyond.' },
    { img: service2, title: 'AI Automation & Efficiency', description: 'Streamline workflows and boost productivity with AI automation. Optimize processes, cut costs, and focus on strategy' },
    { img: service3, title: 'Enhanced Customer Experience', description: 'Delight customers with AI-powered interactions. From chatbots to tailored recommendations, we build loyalty and drive growth.' },
    { img: service4, title: 'Data-Driven Decision Making', description: 'Unlock value with AI analytics. Gain insights, predict trends, and drive informed decisions.' },
    { img: service5, title: 'AI Research & Development', description: 'Lead with our AI R&D. Explore new tech, develop solutions, and gain a competitive edge' },
    { img: service6, title: 'Technology Consulting for AI Integration', description: 'Navigate AI adoption with our expert guidance. We assess readiness, identify opportunities, and plan for success' }
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', position: 'relative', zIndex: 1, pt: '5%' }}>
      {/* Background Image */}
      <Box component="img" src={bg2} sx={{ position: 'absolute', width: '100%', height: '200%', top: 0, left: 0, zIndex: -1, transform: 'rotate(180deg)', objectFit: 'cover' }} />
      
      {/* Title */}
      <Typography variant="h3" align="center" sx={{ mb: 2, color: '#117DCC', fontWeight: 'bold', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' } }}>
        Services We Offer
      </Typography>
      
      {/* Description */}
      <Typography variant="body1" align="center" sx={{ mb: 4, color: '#ADADAD', fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '18px' }, maxWidth: '1200px', mb: '48px', fontFamily: 'Inter', mx: 'auto' }}>
        Empower your business with our transformative AI services. From automating routine tasks to unlocking deep insights from data, our solutions are designed to drive growth and innovation.
      </Typography>

      {/* Service Cards */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', width: '100%' }}>
        {serviceData.map((el, id) => {
         return <Box key={id} sx={{ width: { xs: '350px', xl: '384px' }, height: { xs: '440px', xl: '480px' }, pt: 2, pb: 3, px: 2, background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%)', boxShadow: '0px 0px 0px rgba(255, 255, 255, 0.01) inset', borderRadius: 2, border: '0.20px solid rgba(112, 112, 112, 0.70)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, overflow: 'hidden' }}>
            
            {/* Image */}
            <Box sx={{ alignSelf: 'stretch', height: 240, borderRadius: 3, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia component="img" image={el.img} alt={el.title} sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: 1 }} />
            </Box>

            {/* Text Section */}
            <Box sx={{ alignSelf: 'stretch', height: 184, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.90)', fontWeight: 700, lineHeight: '36px', fontFamily: 'Poppins', wordWrap: 'break-word', fontSize: { xs: '18px', lg: '20px', xl: '22px' } }}>
                {el.title}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', color: '#ADADAD', fontWeight: 400, lineHeight: '25.60px', fontFamily: 'Inter', fontSize: { xs: '14px', lg: '14px', xl: '16px' }, wordWrap: 'break-word' }}>
                {el.description}
              </Typography>
            </Box>
          </Box>
        })
      }
      </Box>
    </Box>
  );
};

export default ServicesComponent;
