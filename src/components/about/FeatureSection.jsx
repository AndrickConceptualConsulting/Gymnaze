import React from 'react';
import { Box, Typography } from '@mui/material';
import { AnimatedSection } from '../animations/SmartAnimations';
import FeatureGrid from './FeatureGrid';

const FeatureSection = ({ 
  title, 
  items, 
  color, 
  baseDelay,
  showTitle = true 
}) => {
  return (
    <Box sx={{ mb: 6 }}>
      {title && showTitle && (
        <AnimatedSection delay={baseDelay}>
          <Typography 
            variant="h4" 
            sx={{
              color,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 600,
              textAlign: 'center',
              mb: 4,
            }}
          >
            {title}
          </Typography>
        </AnimatedSection>
      )}
      
      <FeatureGrid 
        items={items} 
        color={color} 
        delay={baseDelay + 0.1}
      />
    </Box>
  );
};

export default FeatureSection;
