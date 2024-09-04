import React from 'react';
import { Box, Typography } from '@mui/material';

const TopContainer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f4f4f4',
        padding: { xs: 2, sm: 4 },
        borderBottom: '1px solid #dcdcdc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#117DCC',
          fontFamily: 'Neue Haas Grotesk, Arial, sans-serif',
          fontSize: { xs: '1.5rem', sm: '2rem' },
          fontWeight: 'bold',
          marginBottom: 1,
        }}
      >
        AI TECHNOLOGIES WE MASTER
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          lineHeight: '1.5',
          maxWidth: '800px',
        }}
      >
        Discover our expertise in AI technologies, including predictive modeling, image recognition, speech to text, and conversational AI, tailored to boost efficiency and innovation.
      </Typography>
    </Box>
  );
};

export default TopContainer;
