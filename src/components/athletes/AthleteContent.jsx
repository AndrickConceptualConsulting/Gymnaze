// React
import React from 'react';

// MUI
import { Box, Container, Grid, Typography } from '@mui/material';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import { 
  AnimatedHeading, 
  AnimatedSubheading, 
  AnimatedText, 
  TraitCards, 
  BenefitList 
} from './AthleteComponents';

// Constants
import { BENEFITS, CONTENT, STYLES } from '../../constants/athletesData';

// Assets
import ExampleAssessment from '../../assets/ExampleAssessment.webp';

// ===== HIGH SCHOOL CONTENT =====
export const HighSchoolContent = ({ traits }) => {
  const content = CONTENT['high-school'];
  const benefits = BENEFITS['high-school'];

  return (
    <>
      {/* High School Content */}
      <AnimatedHeading delay={0.3}>
        {content.title}
      </AnimatedHeading>
      
      <AnimatedSubheading delay={0.4}>
        {content.subtitle}
      </AnimatedSubheading>

      {/* What Coaches Want Section - White Background */}
      <Box sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <AnimatedHeading>
            {content.sectionTitle}
          </AnimatedHeading>
          
          <AnimatedSubheading delay={0.1} sx={{ mb: 6, maxWidth: '600px' }}>
            {content.sectionSubtitle}
          </AnimatedSubheading>
          
          <TraitCards traits={traits} columns={3} />
        </Container>
      </Box>

      {/* Mental Edge Assessment Section - Light Grey Background */}
      <Box sx={{ backgroundColor: 'rgba(248, 249, 250, 0.6)' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <Grid container spacing={4} alignItems="center" sx={{ 
            '& .MuiGrid-item': { 
              paddingLeft: { xs: '0px !important', md: '32px !important' },
              paddingTop: { xs: '8px !important', md: '32px !important' }
            }
          }}>
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
                  {content.assessmentTitle}
                </Typography>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.2}>
                <Typography
                  variant="body1"
                  sx={STYLES.assessmentText}
                >
                  {content.assessmentText}
                </Typography>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.4}>
                <BenefitList benefits={benefits} />
              </ScrollReveal>
            </Grid>
            <Grid item xs={12} md={6}>
              <FadeIn delay={0.6}>
                <Box
                  sx={{
                    height: { xs: '250px', md: '350px' },
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    border: '1px solid rgba(44, 60, 136, 0.2)',
                  }}
                >
                  <img
                    src={ExampleAssessment}
                    alt="GYMNAZE Assessment Preview - Mental Edge Report showing athlete personality traits and coaching insights"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </Box>
              </FadeIn>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Move from Overlooked Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <AnimatedHeading>
          {content.finalTitle}
        </AnimatedHeading>
        
        <ScrollReveal direction="up" delay={0.3}>
          <Typography
            variant="body1"
            sx={STYLES.finalSectionText}
          >
            {content.finalText}
          </Typography>
        </ScrollReveal>
      </Container>
    </>
  );
};

// ===== COLLEGE CONTENT =====
export const CollegeContent = ({ traits }) => {
  const content = CONTENT.college;
  const benefits = BENEFITS.college;

  return (
    <>
      {/* College Content */}
      <AnimatedHeading delay={0.3}>
        {content.title}
      </AnimatedHeading>
      
      <AnimatedSubheading delay={0.4}>
        {content.subtitle}
      </AnimatedSubheading>

      {/* Build Your Edge Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <AnimatedHeading>
          {content.sectionTitle}
        </AnimatedHeading>
        
        <AnimatedSubheading delay={0.1} sx={{ mb: 6, maxWidth: '600px' }}>
          {content.sectionSubtitle}
        </AnimatedSubheading>
        
        <TraitCards traits={traits} columns={4} />
      </Container>

      {/* Unlock Your Athlete Identity Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4} alignItems="center" sx={{ 
          '& .MuiGrid-item': { 
            paddingLeft: { xs: '0px !important', md: '32px !important' },
            paddingTop: { xs: '8px !important', md: '32px !important' }
          }
        }}>
          <Grid item xs={12} md={6}>
            <FadeIn delay={0.3}>
              <Box
                sx={{
                  height: { xs: '250px', md: '350px' },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 3,
                  border: '1px solid rgba(44, 60, 136, 0.2)',
                }}
              >
                <img
                  src={ExampleAssessment}
                  alt="GYMNAZE Elite Athlete Profile - Comprehensive mental performance assessment showing athlete identity and competitive edge"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </Box>
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
                {content.assessmentTitle}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.2}>
              <Typography
                variant="body1"
                sx={STYLES.assessmentText}
              >
                {content.assessmentText}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <BenefitList benefits={benefits} />
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>

      {/* Play With Confidence Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <AnimatedHeading>
          {content.finalTitle}
        </AnimatedHeading>
        
        <ScrollReveal direction="up" delay={0.3}>
          <Typography
            variant="body1"
            sx={STYLES.finalSectionText}
          >
            {content.finalText}
          </Typography>
        </ScrollReveal>
      </Container>
    </>
  );
};

// Set display names for debugging
HighSchoolContent.displayName = 'HighSchoolContent';
CollegeContent.displayName = 'CollegeContent';
