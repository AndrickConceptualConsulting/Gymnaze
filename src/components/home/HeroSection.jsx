// React & external libs
import React from 'react';

// MUI
import { Box, Typography, Grid } from '@mui/material';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import { SectionWrapper, SectionHeading, PrimaryButton, SecondaryButton } from '../ui';

// Constants
import { HERO_SPACING, HERO_GRID_SPACING } from '../../constants/ui';

const HeroSection = () => {
  return (
    <SectionWrapper spacing={{ pt: HERO_SPACING, pb: { xs: 6, md: 10 } }}>
      <Grid container spacing={4} alignItems="center" sx={HERO_GRID_SPACING}>
        <Grid item xs={12} md={7}>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'text.primary',
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.2,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              You're More Than Your Stats.{' '}
              <Box component="span" sx={{ color: 'accent.main' }}>
                Let's Prove It.
              </Box>
            </Typography>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
                fontWeight: 400,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Train Yourself
            </Typography>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <PrimaryButton to="/early-access">
                Join Beta Testing
              </PrimaryButton>
              <SecondaryButton to="/early-access">
                Get Early Access
              </SecondaryButton>
            </Box>
          </ScrollReveal>
        </Grid>
        <Grid item xs={12} md={5}>
          <FadeIn delay={0.4}>
            <Box
              sx={{
                height: { xs: '300px', md: '400px' },
                backgroundColor: 'background.paper',
                borderRadius: 2,
                border: '1px solid rgba(44, 60, 136, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ textAlign: 'center', p: 4 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Your Mental Edge
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                  }}
                >
                  Comprehensive assessment of leadership, coachability, and sports IQ—the traits that separate good from great.
                </Typography>
              </Box>
            </Box>
          </FadeIn>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
