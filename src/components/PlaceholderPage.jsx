import React from 'react';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';

const PlaceholderPage = ({ title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        minHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
      }}
    >
      <Paper
        elevation={isMobile ? 2 : 4}
        sx={{
          padding: { 
            xs: '2rem 1.5rem', 
            sm: '2.5rem 2rem', 
            md: '3rem 2.5rem',
            lg: '3.5rem 3rem'
          },
          backgroundColor: 'background.paper',
          backdropFilter: 'blur(10px)',
          borderRadius: { xs: 2, md: 3 },
          textAlign: 'center',
          border: '1px solid',
          borderColor: 'divider',
          maxWidth: { xs: '90%', sm: '80%', md: '600px' },
          width: '100%',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: { xs: 'scale(1.02)', md: 'translateY(-4px)' },
            borderColor: 'secondary.main',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            color: 'text.primary',
            mb: { xs: 2, sm: 3 },
            fontSize: {
              xs: '1.5rem',
              sm: '1.75rem',
              md: '2rem',
              lg: '2.25rem'
            },
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {title} Coming Soon
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary', 
            fontSize: {
              xs: '1rem',
              sm: '1.05rem',
              md: '1.1rem'
            },
            lineHeight: { xs: 1.6, md: 1.7 },
            maxWidth: '400px',
            mx: 'auto',
          }}
        >
          We're working hard to bring you this feature. Stay tuned for updates!
        </Typography>
      </Paper>
    </Box>
  );
};

export default PlaceholderPage;