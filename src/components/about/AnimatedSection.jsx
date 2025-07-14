import React from 'react';
import { ScrollReveal } from '../animations/SmartAnimations';
import { Box } from '@mui/material';

const AnimatedSection = ({ children, direction = "up", delay = 0.2, ...props }) => (
  <ScrollReveal direction={direction} delay={delay}>
    <Box {...props}>{children}</Box>
  </ScrollReveal>
);

export default AnimatedSection;
