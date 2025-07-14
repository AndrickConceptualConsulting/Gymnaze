// React & external libs
import React from 'react';

// MUI
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import { SectionWrapper, SectionHeading } from '../ui';

// Constants
import { GRID_SPACING, BACKGROUNDS, centerParagraphStyle } from '../../constants/ui';

// ===== FEATURE CARD COMPONENT =====
const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <FadeIn delay={delay}>
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
          {icon}
        </Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: 'text.primary',
            mb: 1,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </FadeIn>
);

// ===== MENTAL ATTRIBUTES SECTION =====
const MentalAttributesSection = ({ attributes }) => {
  return (
    <SectionWrapper backgroundColor={BACKGROUNDS.lightGrey}>
      <SectionHeading center>
        The Complete Athlete Profile Coaches Crave
      </SectionHeading>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Typography
          variant="body1"
          sx={{
            ...centerParagraphStyle,
            mb: 6,
          }}
        >
          Our professional-grade psychological and sports IQ assessments measure:
        </Typography>
      </ScrollReveal>
      
      <Grid container spacing={4} sx={GRID_SPACING}>
        {attributes.map((attribute, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard 
              {...attribute}
              delay={0.2 + (index * 0.1)}
            />
          </Grid>
        ))}
      </Grid>
      
      <ScrollReveal direction="up" delay={0.5}>
        <Typography
          variant="h6"
          sx={{
            color: 'accent.main',
            mt: 6,
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '1.2rem',
          }}
        >
          This is your mental edge—show it to the world.
        </Typography>
      </ScrollReveal>
    </SectionWrapper>
  );
};

MentalAttributesSection.displayName = 'MentalAttributesSection';

export default MentalAttributesSection;
