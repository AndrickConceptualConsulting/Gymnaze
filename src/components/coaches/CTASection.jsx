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
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent="center"
                alignItems="center"
              >
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "contained" : "outlined"}
                    component={Link}
                    to={button.to}
                    size="large"
                    className={index === 0 ? "backlit-button" : "backlit-subtle"}
                    sx={{
                      backgroundColor: index === 0 ? 'transparent' : 'transparent',
                      color: index === 0 ? 'background.default' : 'secondary.main',
                      borderColor: index === 0 ? 'transparent' : 'transparent',
                      px: 6,
                      py: 2,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      border: 'none',
                      position: 'relative',
                      zIndex: 1,
                      minWidth: { xs: '200px', sm: 'auto' },
                    }}
                  >
                    {button.label}
                  </Button>
                ))}
              </Stack>
            </ScrollReveal>
          </Box>
        </Box>
      </FadeIn>
    </SectionWrapper>
  );
};

export default CTASection;
