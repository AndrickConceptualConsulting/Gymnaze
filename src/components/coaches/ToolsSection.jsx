import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import ToolList from './ToolList';
import SectionWrapper from './SectionWrapper';
import HighSchoolCoachTools from '../../assets/HighSchoolCoachTools.webp';
import CollegeCoachTools from '../../assets/CollegeCoachTools.webp';

const ToolsSection = ({ config, imagePosition = 'right' }) => {
  const { title, subtitle, placeholder } = config.sections.tools;
  const tools = config.tools;

  // Determine if this is high school or college based on config
  const isHighSchool = config.sections?.tools?.placeholder?.includes('Coach dashboard');

  // Image component for the tools section
  const ToolsImage = () => (
    <Box
      component="img"
      src={isHighSchool ? HighSchoolCoachTools : CollegeCoachTools}
      alt={isHighSchool ? "High school coach tools dashboard preview" : "College coach tools dashboard preview"}
      sx={{
        width: '100%',
        height: { xs: '250px', md: '350px' },
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: 2,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    />
  );

  const ContentGrid = () => (
    <>
      <Grid item xs={12} md={6}>
        <ScrollReveal direction={imagePosition === 'right' ? 'left' : 'right'}>
          <Typography
            variant="h2"
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
        
        <ScrollReveal direction={imagePosition === 'right' ? 'left' : 'right'} delay={0.2}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            {subtitle}
          </Typography>
        </ScrollReveal>
        
        <ScrollReveal direction={imagePosition === 'right' ? 'left' : 'right'} delay={0.4}>
          <ToolList tools={tools} />
        </ScrollReveal>
      </Grid>
      <Grid item xs={12} md={6}>
        <FadeIn delay={imagePosition === 'right' ? 0.6 : 0.3}>
          <ToolsImage />
        </FadeIn>
      </Grid>
    </>
  );

  return (
    <SectionWrapper>
      <Grid container spacing={4} alignItems="center" sx={{ 
        '& .MuiGrid-item': { 
          paddingLeft: { xs: '0px !important', md: '32px !important' },
          paddingTop: { xs: '8px !important', md: '32px !important' }
        }
      }}>
        {imagePosition === 'left' ? (
          <>
            <Grid item xs={12} md={6}>
              <FadeIn delay={0.3}>
                <ToolsImage />
              </FadeIn>
            </Grid>
            <Grid item xs={12} md={6}>
              <ScrollReveal direction="right">
                <Typography
                  variant="h2"
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
              
              <ScrollReveal direction="right" delay={0.2}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  {subtitle}
                </Typography>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.4}>
                <ToolList tools={tools} />
              </ScrollReveal>
            </Grid>
          </>
        ) : (
          <ContentGrid />
        )}
      </Grid>
    </SectionWrapper>
  );
};

export default ToolsSection;
