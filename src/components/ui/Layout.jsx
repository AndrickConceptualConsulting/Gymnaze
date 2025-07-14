// React & external libs
import React from 'react';

// MUI
import { Box, Typography, Grid, Container } from '@mui/material';

// Local components
import { ScrollReveal } from '../animations/SmartAnimations';

// Constants
import { 
  SECTION_SPACING, 
  GRID_SPACING, 
  sectionHeadingStyle, 
  paragraphStyle,
  BACKGROUNDS 
} from '../../constants/ui';

// ===== WRAPPER COMPONENTS =====

export const SectionWrapper = ({ 
  children, 
  backgroundColor = BACKGROUNDS.default, 
  spacing = SECTION_SPACING 
}) => (
  <Box sx={{ backgroundColor }}>
    <Container maxWidth="lg" sx={{ py: spacing, px: { xs: 2, md: 3 } }}>
      {children}
    </Container>
  </Box>
);

// ===== LAYOUT COMPONENTS =====

export const SplitSection = ({ 
  image, 
  title, 
  text, 
  imageLeft = false, 
  backgroundColor = BACKGROUNDS.default,
  titleDelay = 0,
  textDelay = 0.3,
  imageDelay = 0.5
}) => (
  <SectionWrapper backgroundColor={backgroundColor}>
    <Grid container spacing={4} sx={GRID_SPACING}>
      <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: imageLeft ? 2 : 1 } }}>
        <ScrollReveal direction={imageLeft ? "right" : "left"}>
          <Typography
            variant="h2"
            component="h2"
            sx={sectionHeadingStyle}
          >
            {title}
          </Typography>
        </ScrollReveal>
        
        <ScrollReveal direction={imageLeft ? "right" : "left"} delay={textDelay}>
          <Typography
            variant="body1"
            sx={paragraphStyle}
          >
            {text}
          </Typography>
        </ScrollReveal>
      </Grid>
      <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: imageLeft ? 1 : 2 } }}>
        <ScrollReveal direction={imageLeft ? "left" : "right"} delay={imageDelay}>
          {image}
        </ScrollReveal>
      </Grid>
    </Grid>
  </SectionWrapper>
);

// ===== CONTENT COMPONENTS =====

export const SectionHeading = ({ 
  children, 
  delay = 0, 
  variant = "h2", 
  component = "h2",
  center = false,
  sx = {}
}) => (
  <ScrollReveal direction="up" delay={delay}>
    <Typography
      variant={variant}
      component={component}
      sx={{
        ...sectionHeadingStyle,
        ...(center && { textAlign: 'center' }),
        ...sx
      }}
    >
      {children}
    </Typography>
  </ScrollReveal>
);

export const ImagePlaceholder = ({ 
  src, 
  alt, 
  height = { xs: '250px', md: '300px' } 
}) => (
  <Box
    sx={{
      height,
      backgroundColor: 'background.paper',
      borderRadius: 2,
      border: '1px solid rgba(44, 60, 136, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {src ? (
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    ) : (
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {alt || '[Image placeholder]'}
      </Typography>
    )}
  </Box>
);

// Set display names for debugging
SectionWrapper.displayName = 'SectionWrapper';
SplitSection.displayName = 'SplitSection';
SectionHeading.displayName = 'SectionHeading';
ImagePlaceholder.displayName = 'ImagePlaceholder';
