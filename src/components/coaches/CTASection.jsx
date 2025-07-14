import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import SectionWrapper from './SectionWrapper';

const CTASection = ({ config }) => {
  const { title, body, buttons } = config.cta;

  return (
    <SectionWrapper padding={{ xs: 6, md: 8 }}>
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
                {body}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    component={button.to.startsWith('http') ? "a" : Link}
                    href={button.to.startsWith('http') ? button.to : undefined}
                    to={button.to.startsWith('http') ? undefined : button.to}
                    target={button.to.startsWith('http') ? "_blank" : undefined}
                    rel={button.to.startsWith('http') ? "noopener noreferrer" : undefined}
                    size="large"
                    className="backlit-button"
                    sx={{
                      backgroundColor: '#F8A61E',
                      color: 'background.default',
                      px: 6,
                      py: 2,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      border: 'none',
                      '&:hover': {
                        backgroundColor: '#d18a0e',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(248, 166, 30, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {button.label}
                  </Button>
                ))}
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      </FadeIn>
    </SectionWrapper>
  );
};

export default CTASection;
