import React, { Suspense } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
} from '@mui/material';
import ParentSupportingAthlete from '../assets/ParentSupportingAthlete.webp';
import FamilyMomentsAndGrowth from '../assets/FamilyMomentsAndGrowth.webp';
import ParentsClearData from '../assets/ParentsClearData.webp';
import {
  Psychology as PsychologyIcon,
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ScrollReveal, FadeIn } from '../components/animations/SmartAnimations';
import TraitCard from '../components/parents/TraitCard';
import BenefitsList from '../components/parents/BenefitsList';
import FAQItem from '../components/parents/FAQItem';
import PlaceholderBox from '../components/parents/PlaceholderBox';
import SectionLayout from '../components/parents/SectionLayout';
import { 
  PARENTS_CONTENT, 
  PARENTS_STYLES, 
  ICON_MAPPING 
} from '../constants/parentsContent';
import { getAnimationDelay } from '../utils/parentsUtils';

const Parents = () => {
  // Icon components mapping
  const iconComponents = {
    School: <SchoolIcon sx={{ color: 'secondary.main' }} />,
    TrendingUp: <TrendingUpIcon sx={{ color: 'secondary.main' }} />,
    Psychology: <PsychologyIcon sx={{ color: 'secondary.main' }} />,
    Groups: <GroupsIcon sx={{ color: 'secondary.main' }} />,
    Speed: <SpeedIcon sx={{ color: 'secondary.main' }} />,
  };

  // Transform traits data with icons
  const traitsWithIcons = PARENTS_CONTENT.traits.map(trait => ({
    ...trait,
    icon: iconComponents[trait.icon]
  }));

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section aria-label="Page introduction">
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography
              variant="h1"
              component="h1"
              sx={PARENTS_STYLES.heroTitle}
            >
              {PARENTS_CONTENT.hero.title}
            </Typography>
          </ScrollReveal>
        </Container>
      </section>

      {/* Recruiting Process Section */}
      <SectionLayout 
        ariaLabel="Understanding the recruiting process"
        sx={{ py: { xs: 4, md: 6 } }}
      >
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          sx={{ '& .MuiGrid-item': PARENTS_STYLES.gridItemSpacing }}
        >
          <Grid item xs={12} md={6}>
            <ScrollReveal direction="left">
              <Typography variant="h2" component="h2" sx={PARENTS_STYLES.sectionTitle}>
                {PARENTS_CONTENT.sections.recruiting.title}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.3}>
              <Typography variant="body1" sx={PARENTS_STYLES.bodyText}>
                {PARENTS_CONTENT.sections.recruiting.content}
              </Typography>
            </ScrollReveal>
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeIn delay={0.5}>
              <Box
                component="img"
                src={ParentSupportingAthlete}
                alt="Parent supporting their athlete"
                sx={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 2,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              />
            </FadeIn>
          </Grid>
        </Grid>
      </SectionLayout>

      {/* Traits Section */}
      <SectionLayout
        title={PARENTS_CONTENT.sections.traits.title}
        subtitle={PARENTS_CONTENT.sections.traits.subtitle}
        footer={PARENTS_CONTENT.sections.traits.footer}
        ariaLabel="Key traits coaches look for"
      >
        <Grid 
          container 
          spacing={4} 
          sx={{ '& .MuiGrid-item': PARENTS_STYLES.gridItemSpacing }}
        >
          {traitsWithIcons.map((trait, index) => (
            <Grid item xs={12} sm={6} md={4} key={trait.title}>
              <FadeIn delay={getAnimationDelay(0.2, index)}>
                <TraitCard {...trait} />
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </SectionLayout>

      {/* Clear Data Section */}
      <SectionLayout ariaLabel="Assessment benefits and data insights">
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          sx={{ '& .MuiGrid-item': PARENTS_STYLES.gridItemSpacing }}
        >
          <Grid item xs={12} md={6}>
            <FadeIn delay={0.3}>
              <Box
                component="img"
                src={ParentsClearData}
                alt="Clear data for clearer path forward - detailed assessment report"
                sx={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 2,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              />
            </FadeIn>
          </Grid>
          <Grid item xs={12} md={6}>
            <ScrollReveal direction="right">
              <Typography variant="h2" component="h2" sx={PARENTS_STYLES.sectionTitle}>
                {PARENTS_CONTENT.sections.data.title}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.2}>
              <Typography variant="body1" sx={{ ...PARENTS_STYLES.bodyText, mb: 4 }}>
                {PARENTS_CONTENT.sections.data.subtitle}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <BenefitsList benefits={PARENTS_CONTENT.assessmentBenefits} />
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.8}>
              <Typography
                variant="body1"
                sx={{
                  color: 'accent.main',
                  mt: 2,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                }}
              >
                {PARENTS_CONTENT.sections.data.footer}
              </Typography>
            </ScrollReveal>
          </Grid>
        </Grid>
      </SectionLayout>

      {/* Confidence Beyond Game Section */}
      <SectionLayout ariaLabel="Life skills and personal development benefits">
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          sx={{ '& .MuiGrid-item': PARENTS_STYLES.gridItemSpacing }}
        >
          <Grid item xs={12} md={6}>
            <ScrollReveal direction="left">
              <Typography variant="h2" component="h2" sx={PARENTS_STYLES.sectionTitle}>
                {PARENTS_CONTENT.sections.confidence.title}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <Typography variant="body1" sx={{ ...PARENTS_STYLES.bodyText, mb: 4 }}>
                {PARENTS_CONTENT.sections.confidence.subtitle}
              </Typography>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.4}>
              <BenefitsList benefits={PARENTS_CONTENT.lifeBenefits} />
            </ScrollReveal>
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeIn delay={0.6}>
              <Box
                component="img"
                src={FamilyMomentsAndGrowth}
                alt="Family moments and growth - parent and child celebrating achievements"
                sx={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 2,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              />
            </FadeIn>
          </Grid>
        </Grid>
      </SectionLayout>

      {/* FAQ Section */}
      <SectionLayout
        title={PARENTS_CONTENT.sections.faq.title}
        ariaLabel="Frequently asked questions"
      >
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {PARENTS_CONTENT.faqs.map((faq, index) => (
            <FadeIn key={faq.id} delay={getAnimationDelay(0.1, index)}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
        </Box>
      </SectionLayout>

      {/* CTA Section */}
      <section aria-label="Call to action">
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <FadeIn delay={0.1}>
            <Box className="backlit-card" sx={PARENTS_STYLES.ctaBox}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <ScrollReveal direction="up" delay={0.2}>
                  <Typography variant="h2" component="h2" sx={PARENTS_STYLES.sectionTitle}>
                    {PARENTS_CONTENT.sections.cta.title}
                  </Typography>
                </ScrollReveal>
                
                <ScrollReveal direction="up" delay={0.3}>
                  <Typography
                    variant="body1"
                    sx={{
                      ...PARENTS_STYLES.bodyText,
                      mb: 4,
                      maxWidth: '600px',
                      mx: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    {PARENTS_CONTENT.sections.cta.subtitle}
                  </Typography>
                </ScrollReveal>
                
                <ScrollReveal direction="up" delay={0.4}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {PARENTS_CONTENT.sections.cta.buttons.map((button, index) => (
                      <Button
                        key={button.label}
                        variant={button.variant}
                        component={button.to.startsWith('http') ? "a" : Link}
                        href={button.to.startsWith('http') ? button.to : undefined}
                        to={button.to.startsWith('http') ? undefined : button.to}
                        target={button.to.startsWith('http') ? "_blank" : undefined}
                        rel={button.to.startsWith('http') ? "noopener noreferrer" : undefined}
                        size="large"
                        sx={{
                          backgroundColor: '#F8A61E',
                          color: 'background.default',
                          '&:hover': {
                            backgroundColor: '#d18a0e',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(248, 166, 30, 0.4)',
                          },
                          px: 6,
                          py: 2,
                          fontSize: '1.2rem',
                          fontWeight: 600,
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
        </Container>
      </section>
    </Box>
  );
};

export default Parents;
