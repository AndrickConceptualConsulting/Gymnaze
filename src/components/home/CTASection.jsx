// React & external libs
import React from 'react';

// MUI
import { Box, Typography } from '@mui/material';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import { SectionWrapper, CTAPrimaryButton, CTASecondaryButton } from '../ui';

// Constants
import { CTA_SPACING, BACKGROUNDS } from '../../constants/ui';

// ===== CTA SECTION =====
const CTASection = () => {
  return (
    <SectionWrapper backgroundColor={BACKGROUNDS.lightGrey} spacing={CTA_SPACING}>
      <FadeIn delay={0.1}>
        <Box
          className="backlit-card"
          sx={{
            textAlign: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            p: { xs: 4, md: 6 },
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <ScrollReveal direction="up" delay={0.2}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: 'text.primary',
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                See How You Stack Up
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
                Understand how Gymnaze helps athletes unlock hidden potential and coaches build winning teams.
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <CTAPrimaryButton to="/test">
                  Take the Test
                </CTAPrimaryButton>
                <CTASecondaryButton to="/inquiry">
                  Early Access
                </CTASecondaryButton>
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      </FadeIn>
    </SectionWrapper>
  );
};

CTASection.displayName = 'CTASection';

export default CTASection;
