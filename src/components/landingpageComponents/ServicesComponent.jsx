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
    <Box className='serviceComponent' >
      {/* Background Image */}
      <Box component="img" className='bg-img' src={bg2}  />

      {/* Title */}
      <Typography className='serviceTitle' variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold', fontFamily: 'Bebas Neue, Arial, sans-serif', letterSpacing: '1.6px', fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' } }}>
        Services We Offer
      </Typography>

      {/* Description */}
      <Typography className='serviceDesc' variant="body1" align="center" sx={{ mb: 4, fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '18px' }, fontFamily: 'Inter' }}>
        Empower your business with our transformative AI services. From automating routine tasks to unlocking deep insights from data, our solutions are designed to drive growth and innovation.
      </Typography>

      {/* Service Cards */}
      <Box className='serviceCard'>
        {serviceData.map((el, id) => {
          return <Box className='box' key={id} sx={{ width: { xs: '350px', xl: '384px' }, height: { xs: '440px', xl: '480px' }}}>

            {/* Image */}
            <Box className='img-box1' >
              <CardMedia className='card-media' component="img" image={el.img} alt={el.title}  />
            </Box>

            {/* Text Section */}
            <Box className='text-section' >
              <Typography className='typography1' variant="h5" sx={{ fontWeight: 700, lineHeight: '36px', fontFamily: 'Poppins', wordWrap: 'break-word', fontSize: { xs: '18px', lg: '20px', xl: '22px' } }}>
                {el.title}
              </Typography>
              <Typography className='typodesc' variant="body1" sx={{ fontWeight: 400, lineHeight: '25.60px', fontFamily: 'Inter', fontSize: { xs: '14px', lg: '14px', xl: '16px' }, wordWrap: 'break-word' }}>
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
