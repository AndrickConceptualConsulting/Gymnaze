// React & external libs
import React from 'react';

// MUI
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  EmojiEvents as EmojiEventsIcon,
  Psychology as PsychologyIcon,
  Insights as InsightsIcon,
} from '@mui/icons-material';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import { SectionWrapper, SectionHeading } from '../ui';

// Constants
import { GRID_SPACING, BACKGROUNDS, paragraphStyle } from '../../constants/ui';

// ===== RESULTS SECTION =====
const ResultsSection = ({ benefits }) => {
  return (
    <SectionWrapper backgroundColor={BACKGROUNDS.lightGrey}>
      <Grid container spacing={4} alignItems="center" sx={GRID_SPACING}>
        <Grid item xs={12} md={6}>
          <SectionHeading>
            Get Noticed, Get Recruited, Get Results
          </SectionHeading>
          
          <ScrollReveal direction="left" delay={0.2}>
            <Typography
              variant="body1"
              sx={{
                ...paragraphStyle,
                mb: 4,
              }}
            >
              Athletes who showcase their Gymnaze profiles increase recruiting interest by 3x. Don't just hope coaches see your potential—prove it.
            </Typography>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.4}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                mb: 2,
                fontWeight: 600,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Benefits Snapshot:
            </Typography>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.4}>
            <List>
              {benefits.map((benefit, index) => (
                <FadeIn key={index} delay={0.5 + (index * 0.1)}>
                  <ListItem sx={{ pl: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'accent.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={benefit}
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: 'text.secondary',
                          fontSize: '1rem',
                        },
                      }}
                    />
                  </ListItem>
                </FadeIn>
              ))}
            </List>
          </ScrollReveal>
        </Grid>
        <Grid item xs={12} md={6}>
          <FadeIn delay={0.6}>
            <Box
              sx={{
                height: { xs: '280px', sm: '300px', md: '350px' },
                backgroundColor: 'background.paper',
                borderRadius: 2,
                border: '1px solid rgba(44, 60, 136, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 2, sm: 2.5, md: 3 },
              }}
            >
              <Box sx={{ textAlign: 'center', mb: { xs: 1.5, sm: 2, md: 3 } }}>
                <TrendingUpIcon
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    color: 'accent.main',
                    mb: { xs: 1, sm: 1.5, md: 2 },
                  }}
                />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'text.primary',
                    fontWeight: 600,
                    mb: 0,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Your Competitive Edge
                </Typography>
              </Box>
              
              <Grid container spacing={{ xs: 1, sm: 1.5, md: 1.5 }} sx={{ maxWidth: { xs: '250px', sm: '280px', md: '300px' }, width: '100%' }}>
                <Grid item xs={6}>
                  <Box sx={{ 
                    textAlign: 'center', 
                    p: { xs: 1, sm: 1.2, md: 1.5 }, 
                    pt: { xs: 0.5, sm: 0.8, md: 1 },
                    backgroundColor: 'rgba(166, 205, 58, 0.1)', 
                    borderRadius: 1,
                    minHeight: { xs: '65px', sm: '75px', md: '85px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <EmojiEventsIcon sx={{ 
                      color: 'warning.main', 
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, 
                      mb: { xs: 0.3, sm: 0.4, md: 0.5 } 
                    }} />
                    <Typography variant="caption" sx={{ 
                      color: 'text.secondary', 
                      display: 'block',
                      fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' },
                      lineHeight: 1.2
                    }}>
                      Leadership
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'text.primary', 
                      fontWeight: 600,
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }
                    }}>
                      Score
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ 
                    textAlign: 'center', 
                    p: { xs: 1, sm: 1.2, md: 1.5 }, 
                    pt: { xs: 0.5, sm: 0.8, md: 1 },
                    backgroundColor: 'rgba(44, 60, 136, 0.1)', 
                    borderRadius: 1,
                    minHeight: { xs: '65px', sm: '75px', md: '85px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <PsychologyIcon sx={{ 
                      color: 'secondary.main', 
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, 
                      mb: { xs: 0.3, sm: 0.4, md: 0.5 } 
                    }} />
                    <Typography variant="caption" sx={{ 
                      color: 'text.secondary', 
                      display: 'block',
                      fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' },
                      lineHeight: 1.2
                    }}>
                      Mental
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'text.primary', 
                      fontWeight: 600,
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }
                    }}>
                      Profile
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    textAlign: 'center', 
                    p: { xs: 1, sm: 1.2, md: 1.5 }, 
                    pb: { xs: '16px', sm: '20px', md: '24px' },
                    backgroundColor: 'rgba(0, 172, 205, 0.1)', 
                    borderRadius: 1,
                    minHeight: { xs: '50px', sm: '60px', md: '70px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <InsightsIcon sx={{ 
                      color: 'primary.main', 
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, 
                      mb: { xs: 0.3, sm: 0.4, md: 0.5 } 
                    }} />
                    <Typography variant="caption" sx={{ 
                      color: 'text.secondary', 
                      display: 'block',
                      fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' },
                      lineHeight: 1.2,
                      textAlign: 'center'
                    }}>
                      Actionable Insights for Coaches
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </FadeIn>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

ResultsSection.displayName = 'ResultsSection';

export default ResultsSection;
