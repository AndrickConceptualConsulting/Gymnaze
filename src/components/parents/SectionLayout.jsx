import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import { PARENTS_STYLES } from '../../constants/parentsContent';

const SectionLayout = ({ 
  children,
  title,
  subtitle,
  footer,
  maxWidth = "lg",
  padding = PARENTS_STYLES.sectionPadding,
  titleAlign = "center",
  component = "section",
  ariaLabel,
  ...props 
}) => {
  return (
    <Box component={component} aria-label={ariaLabel} {...props}>
      <Container maxWidth={maxWidth} sx={padding}>
        {title && (
          <ScrollReveal direction="up">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                ...PARENTS_STYLES.sectionTitle,
                textAlign: titleAlign,
                mb: subtitle ? 2 : 3,
              }}
            >
              {title}
            </Typography>
          </ScrollReveal>
        )}
        
        {subtitle && (
          <ScrollReveal direction="up" delay={0.1}>
            <Typography
              variant="body1"
              sx={{
                ...PARENTS_STYLES.centeredBodyText,
                mb: 6,
              }}
            >
              {subtitle}
            </Typography>
          </ScrollReveal>
        )}
        
        {children}
        
        {footer && (
          <ScrollReveal direction="up" delay={0.8}>
            <Typography
              variant="body1"
              sx={{
                color: 'accent.main',
                mt: 4,
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              {footer}
            </Typography>
          </ScrollReveal>
        )}
      </Container>
    </Box>
  );
};

export default SectionLayout;
