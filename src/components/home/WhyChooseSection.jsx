// React & external libs
import React from 'react';

// MUI
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import { SectionWrapper, SectionHeading } from '../ui';

// Constants
import { GRID_SPACING } from '../../constants/ui';

// ===== WHY CHOOSE SECTION =====
const WhyChooseSection = ({ features }) => {
  return (
    <SectionWrapper>
      <SectionHeading center variant="h3">
        Why Athletes Choose Gymnaze
      </SectionHeading>
      
      <Grid container spacing={4} sx={GRID_SPACING}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FadeIn delay={0.1 + (index * 0.1)}>
              <Card
                className="backlit-card"
                sx={{
                  height: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'center',
                }}
              >
                <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      color: 'text.primary',
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </FadeIn>
          </Grid>
        ))}
      </Grid>
      
      <ScrollReveal direction="up" delay={0.4}>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: 'accent.main',
              fontWeight: 600,
              fontSize: '1.2rem',
              mb: 2,
            }}
          >
            Ready to discover what makes you unique?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Join the next generation of athletes who understand that talent alone isn't enough. Show coaches the complete picture of who you are as a competitor.
          </Typography>
        </Box>
      </ScrollReveal>
    </SectionWrapper>
  );
};

WhyChooseSection.displayName = 'WhyChooseSection';

export default WhyChooseSection;
