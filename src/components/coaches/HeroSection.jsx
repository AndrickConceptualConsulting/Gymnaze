import React from 'react';
import { Typography, Box } from '@mui/material';
import { ScrollReveal } from '../animations/SmartAnimations';
import SectionWrapper from './SectionWrapper';

const HeroSection = ({ config }) => {
  const { heading, subheading } = config.hero;

  return (
    <SectionWrapper>
      <ScrollReveal direction="up" delay={0.3}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'text.primary',
            mb: 3,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {heading}
        </Typography>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.4}>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 6,
            textAlign: 'center',
            fontSize: '1.1rem',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.7,
          }}
        >
          {subheading}
        </Typography>
      </ScrollReveal>
    </SectionWrapper>
  );
};

export default HeroSection;
