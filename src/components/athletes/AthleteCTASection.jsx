// React
import React from 'react';

// MUI
import { Box, Typography, Button, Container } from '@mui/material';

// Router
import { Link } from 'react-router-dom';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';

// Constants
import { COMPONENT_STYLES } from '../../constants/athletesData';

// ===== ATHLETE CTA SECTION =====
const AthleteCTASection = ({ 
  title, 
  subtitle, 
  onTestClick, 
  onDemoClick 
}) => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <FadeIn delay={0.1}>
        <Box
          className="backlit-card"
          sx={COMPONENT_STYLES.ctaContainer}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <ScrollReveal direction="up" delay={0.2}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: 'text.primary',
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                {title}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: '1.1rem',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                {subtitle}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  component="a"
                  href="https://app.gymnaze.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  className="backlit-button"
                  aria-label="Take the Gymnaze mindset test"
                  title="Start your mental assessment now"
                  onClick={onTestClick}
                  sx={{
                    ...COMPONENT_STYLES.ctaButtonBase,
                    ...COMPONENT_STYLES.ctaPrimaryButton,
                  }}
                >
                  Take the Test
                </Button>
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      </FadeIn>
    </Container>
  );
};

AthleteCTASection.displayName = 'AthleteCTASection';

export default AthleteCTASection;
