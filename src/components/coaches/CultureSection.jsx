import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import ToolList from './ToolList';
import SectionWrapper from './SectionWrapper';
import HighSchoolTeamCulture from '../../assets/HighSchoolTeamCulture.webp';
import CollegeCoachCulture from '../../assets/CollegeCoachCulture.webp';

const CultureSection = ({ config, imagePosition = 'left' }) => {
  const { title, subtitle, placeholder } = config.sections.culture;
  const cultureBenefits = config.cultureBenefits;

  // Determine if this is high school or college based on config
  const isHighSchool = config.sections?.tools?.placeholder?.includes('Coach dashboard');

  // Image component for the culture section (different images for high school vs college)
  const CultureImage = () => (
    <Box
      component="img"
      src={isHighSchool ? HighSchoolTeamCulture : CollegeCoachCulture}
      alt={isHighSchool ? "High school team culture analytics dashboard" : "College coach culture analytics dashboard"}
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

  // Choose which component to render - now always shows image for both types
  const ImageOrPlaceholder = () => <CultureImage />;

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
                <ImageOrPlaceholder />
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
                <ToolList tools={cultureBenefits} />
              </ScrollReveal>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              <ScrollReveal direction="left">
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
              
              <ScrollReveal direction="left" delay={0.2}>
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
              
              <ScrollReveal direction="left" delay={0.4}>
                <ToolList tools={cultureBenefits} />
              </ScrollReveal>
            </Grid>
            <Grid item xs={12} md={6}>
              <FadeIn delay={0.6}>
                <ImageOrPlaceholder />
              </FadeIn>
            </Grid>
          </>
        )}
      </Grid>
    </SectionWrapper>
  );
};

export default CultureSection;
