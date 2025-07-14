import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';
import TraitCard from './TraitCard';
import SectionWrapper from './SectionWrapper';
import {
  Psychology as PsychologyIcon,
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  Speed as SpeedIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const iconComponents = {
  Psychology: <PsychologyIcon sx={{ color: 'secondary.main' }} />,
  Groups: <GroupsIcon sx={{ color: 'secondary.main' }} />,
  TrendingUp: <TrendingUpIcon sx={{ color: 'secondary.main' }} />,
  Speed: <SpeedIcon sx={{ color: 'secondary.main' }} />,
  School: <SchoolIcon sx={{ color: 'secondary.main' }} />,
};

const TraitsSection = ({ config }) => {
  const { title, subtitle, footer } = config.sections.traits;
  const traits = config.traits;

  return (
    <SectionWrapper>
      <ScrollReveal direction="up">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'text.primary',
            mb: 2,
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 6,
            textAlign: 'center',
            fontSize: '1.1rem',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {subtitle}
        </Typography>
      </ScrollReveal>
      
      <Grid container spacing={4} sx={{ 
        '& .MuiGrid-item': { 
          paddingLeft: { xs: '0px !important', md: '32px !important' },
          paddingTop: { xs: '8px !important', md: '32px !important' }
        }
      }}>
        {traits.map((trait, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TraitCard 
              trait={trait} 
              index={index} 
              iconComponent={iconComponents[trait.icon]}
            />
          </Grid>
        ))}
      </Grid>
      
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
    </SectionWrapper>
  );
};

export default TraitsSection;
