import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Psychology as PsychologyIcon,
  Assessment as AssessmentIcon,
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
  Visibility as VisibilityIcon,
  Groups as GroupsIcon,
} from '@mui/icons-material';
import { FadeIn } from '../components/animations/SmartAnimations';
import AnimatedSection from '../components/about/AnimatedSection';
import TeamAttributes from '../components/about/TeamAttributes';
import FeatureSection from '../components/about/FeatureSection';
import QuestionBox from '../components/about/QuestionBox';
import { 
  ABOUT_CONTENT, 
  ABOUT_STYLES, 
  FEATURE_ICONS, 
  QUESTION_COLORS, 
  QUESTION_ICONS 
} from '../constants/aboutContent';
import { 
  getAnimationDelay, 
  getQuestionRGBA, 
  getFeatureSections 
} from '../utils/aboutUtils';

const About = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const iconComponents = {
    School: SchoolIcon,
    Visibility: VisibilityIcon,
    Groups: GroupsIcon,
    EmojiEvents: EmojiEventsIcon,
  };

  // Transform content data for FeatureGrid component
  const mindsetDiagnosticsWithIcons = ABOUT_CONTENT.features.mindsetDiagnostics.items.map(item => ({
    ...item,
    icon: FEATURE_ICONS[item.title]
  }));

  const sportsIQWithIcons = ABOUT_CONTENT.features.sportsIQ.items.map(item => ({
    ...item,
    icon: FEATURE_ICONS[item.title]
  }));

  const additionalFeaturesWithIcons = ABOUT_CONTENT.features.additional.map(item => ({
    ...item,
    icon: FEATURE_ICONS[item.title]
  }));

  // Get feature sections configuration
  const featureSections = getFeatureSections(
    mindsetDiagnosticsWithIcons,
    sportsIQWithIcons, 
    additionalFeaturesWithIcons
  );

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 4, md: 6 } }}>
          <AnimatedSection delay={0.1}>
            <Typography variant="h1" component="h1" sx={ABOUT_STYLES.heroTitle}>
              {ABOUT_CONTENT.hero.title}
            </Typography>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: 'accent.main',
                mb: 6,
                fontWeight: 600,
                fontSize: { xs: '1.5rem', md: '2rem' },
                ...ABOUT_STYLES.centerText,
              }}
            >
              {ABOUT_CONTENT.hero.subtitle}
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ backgroundColor: 'rgba(248, 249, 250, 0.6)' }}>
        <Container maxWidth="lg" sx={{ ...ABOUT_STYLES.sectionPadding, ...ABOUT_STYLES.containerSpacing }}>
          <Grid container spacing={6} alignItems="center" sx={ABOUT_STYLES.gridReset}>
            <Grid item xs={12} md={6}>
              <AnimatedSection direction="left">
                <Typography variant="h2" component="h2" sx={{
                  ...ABOUT_STYLES.sectionTitle,
                  textAlign: { xs: 'center', md: 'left' },
                }}>
                  {ABOUT_CONTENT.mission.heading}
                </Typography>
              </AnimatedSection>
              
              {ABOUT_CONTENT.mission.body.map((paragraph, index) => (
                <AnimatedSection key={index} direction="left" delay={getAnimationDelay(0.2, index, 0.2)}>
                  <Typography variant="body1" sx={{
                    ...ABOUT_STYLES.leftAlignedBodyText,
                    mb: 4,
                  }}>
                    {paragraph}
                  </Typography>
                </AnimatedSection>
              ))}
              
              <AnimatedSection direction="left" delay={0.5}>
                <Box sx={{ ml: { xs: 0, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
                  {ABOUT_CONTENT.mission.goals.map((goal, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        '&::before': {
                          content: '"•"',
                          color: 'accent.main',
                          fontWeight: 'bold',
                          mr: 2,
                          fontSize: '1.2rem',
                        },
                      }}
                    >
                      {goal}
                    </Typography>
                  ))}
                </Box>
              </AnimatedSection>
            </Grid>
            <Grid item xs={12} md={6}>
              <FadeIn delay={0.6}>
                <Box
                  sx={{
                    height: { xs: '300px', md: '400px' },
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    border: '1px solid rgba(0, 172, 205, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    p: 4,
                  }}
                >
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h5" sx={{ 
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 3,
                    }}>
                      Building the Future of Athlete Evaluation
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={3} sx={{ maxWidth: '300px' }}>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <PsychologyIcon sx={{ color: 'secondary.main', fontSize: '2.5rem', mb: 1 }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Psychology
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <AssessmentIcon sx={{ color: 'accent.main', fontSize: '2.5rem', mb: 1 }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Analytics
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <EmojiEventsIcon sx={{ color: 'warning.main', fontSize: '2.5rem', mb: 1 }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          Sports
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                      Where sports science meets practical application
                    </Typography>
                  </Box>
                </Box>
              </FadeIn>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Problem Section */}
      <Box sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="lg" sx={{ ...ABOUT_STYLES.sectionPadding, ...ABOUT_STYLES.containerSpacing }}>
          <AnimatedSection>
            <Typography variant="h2" component="h2" sx={ABOUT_STYLES.sectionTitle}>
              {ABOUT_CONTENT.problem.heading}
            </Typography>
          </AnimatedSection>
          
          <Grid container spacing={4} alignItems="center" sx={ABOUT_STYLES.gridReset}>
            <Grid item xs={12} md={6}>
              <AnimatedSection direction="right" delay={0.2}>
                <Typography variant="body1" sx={{
                  ...ABOUT_STYLES.leftAlignedBodyText,
                  mb: 4,
                }}>
                  {ABOUT_CONTENT.problem.intro}
                </Typography>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.4}>
                <Typography variant="h5" sx={{
                  color: 'text.primary',
                  mb: 3,
                  fontWeight: 600,
                  textAlign: { xs: 'center', md: 'left' },
                }}>
                  {ABOUT_CONTENT.problem.questionsTitle}
                </Typography>
              </AnimatedSection>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {ABOUT_CONTENT.coachQuestions.map((item, index) => (
                  <QuestionBox
                    key={index}
                    question={item.question}
                    index={index}
                    isSelected={selectedQuestion === index}
                    onClick={() => setSelectedQuestion(index)}
                    delay={getAnimationDelay(0.5, index)}
                  />
                ))}
              </Box>
              
              <AnimatedSection direction="right" delay={0.9}>
                <Typography variant="body1" sx={{
                  color: 'text.secondary',
                  mt: 4,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  textAlign: { xs: 'center', md: 'left' },
                }}>
                  {ABOUT_CONTENT.problem.callToAction}
                </Typography>
              </AnimatedSection>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FadeIn delay={0.3} key={selectedQuestion}>
                <Box
                  sx={{
                    height: { xs: '350px', md: '420px' },
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    border: `2px solid`,
                    borderColor: QUESTION_COLORS[selectedQuestion],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    p: 3,
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    {React.createElement(iconComponents[QUESTION_ICONS[selectedQuestion]], {
                      sx: {
                        fontSize: '3rem',
                        color: QUESTION_COLORS[selectedQuestion],
                        mb: 1,
                      }
                    })}
                    <Typography variant="h6" sx={{ 
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}>
                      {ABOUT_CONTENT.coachQuestions[selectedQuestion].visualization.title}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ width: '100%', maxWidth: '320px', flex: 1, overflow: 'auto' }}>
                    {ABOUT_CONTENT.coachQuestions[selectedQuestion].visualization.points.map((point, index) => (
                      <Box 
                        key={index}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 1.5,
                          p: 1.5,
                          backgroundColor: `rgba(${getQuestionRGBA(selectedQuestion)}, 0.1)`,
                          borderRadius: 1,
                        }}
                      >
                        <CheckCircleIcon sx={{ 
                          color: QUESTION_COLORS[selectedQuestion],
                          mr: 1.5,
                          fontSize: '1rem',
                          flexShrink: 0,
                        }} />
                        <Typography variant="body2" sx={{ 
                          color: 'text.secondary',
                          fontSize: '0.85rem',
                          lineHeight: 1.3,
                        }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </FadeIn>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ backgroundColor: 'rgba(248, 249, 250, 0.6)' }}>
        <Container maxWidth="lg" sx={ABOUT_STYLES.sectionPadding}>
          <AnimatedSection>
            <Typography variant="h2" component="h2" sx={ABOUT_STYLES.sectionTitle}>
              {ABOUT_CONTENT.differences.heading}
            </Typography>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <Typography variant="body1" sx={{
              ...ABOUT_STYLES.centeredBodyText,
              mb: 6,
            }}>
              {ABOUT_CONTENT.differences.intro}
            </Typography>
          </AnimatedSection>

          {/* Feature Sections - Refactored to eliminate redundancy */}
          {featureSections.map((section, index) => (
            <FeatureSection
              key={index}
              title={section.title}
              items={section.items}
              color={section.color}
              baseDelay={section.baseDelay}
              showTitle={!!section.title}
            />
          ))}

          <AnimatedSection delay={1.1}>
            <Typography variant="h6" sx={{
              color: 'accent.main',
              mt: 4,
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '1.2rem',
              fontStyle: 'italic',
            }}>
              {ABOUT_CONTENT.differences.conclusion}
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="lg" sx={ABOUT_STYLES.sectionPadding}>
          <AnimatedSection>
            <Typography variant="h2" component="h2" sx={ABOUT_STYLES.sectionTitle}>
              {ABOUT_CONTENT.team.heading}
            </Typography>
          </AnimatedSection>
          
          <Box sx={{ mb: 6 }}>
            <TeamAttributes items={ABOUT_CONTENT.team.members} />
          </Box>

          <AnimatedSection delay={0.6}>
            <Typography variant="body1" sx={{
              ...ABOUT_STYLES.centeredBodyText,
              mb: 4,
            }}>
              {ABOUT_CONTENT.team.belief}
            </Typography>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(166, 205, 58, 0.1), rgba(0, 172, 205, 0.1))',
                border: '2px solid rgba(166, 205, 58, 0.3)',
                mb: 4,
              }}
            >
              <EmojiEventsIcon sx={{
                fontSize: '2.5rem',
                color: 'accent.main',
                mb: 2,
              }} />
              <Typography variant="h5" sx={{
                color: 'accent.main',
                fontWeight: 600,
                fontStyle: 'italic',
                lineHeight: 1.4,
              }}>
                {ABOUT_CONTENT.team.mission}
              </Typography>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={1.0}>
            <Typography variant="body1" sx={ABOUT_STYLES.centeredBodyText}>
              {ABOUT_CONTENT.team.conclusion}
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
