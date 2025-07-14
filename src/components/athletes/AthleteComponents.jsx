// React
import React from 'react';

// MUI
import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

// Local components
import { ScrollReveal, FadeIn } from '../animations/SmartAnimations';

// Constants
import { STYLES } from '../../constants/athletesData';

// ===== ANIMATION COMPONENTS =====
export const AnimatedHeading = ({ 
  children, 
  delay = 0, 
  variant = "h2", 
  component = "h2",
  sx = {} 
}) => (
  <ScrollReveal direction="up" delay={delay}>
    <Typography
      variant={variant}
      component={component}
      sx={{
        ...STYLES.sectionHeading,
        ...sx
      }}
    >
      {children}
    </Typography>
  </ScrollReveal>
);

export const AnimatedSubheading = ({ 
  children, 
  delay = 0.1, 
  sx = {} 
}) => (
  <ScrollReveal direction="up" delay={delay}>
    <Typography
      variant="body1"
      sx={{
        ...STYLES.sectionSubheading,
        ...sx
      }}
    >
      {children}
    </Typography>
  </ScrollReveal>
);

export const AnimatedText = ({ 
  children, 
  delay = 0, 
  direction = "up",
  sx = {} 
}) => (
  <ScrollReveal direction={direction} delay={delay}>
    <Typography
      variant="body1"
      sx={sx}
    >
      {children}
    </Typography>
  </ScrollReveal>
);

// ===== CONTENT COMPONENTS =====
export const TraitCards = ({ traits, columns = 3 }) => (
  <Grid container spacing={4} sx={{ 
    '& .MuiGrid-item': { 
      paddingLeft: { xs: '0px !important', md: '32px !important' },
      paddingTop: { xs: '8px !important', md: '32px !important' }
    }
  }}>
    {traits.map((trait, index) => (
      <Grid item xs={12} sm={6} md={12 / columns} key={index}>
        <FadeIn delay={0.2 + (index * 0.1)}>
          <Card
            className="backlit-card"
            sx={{
              height: '100%',
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            <CardContent sx={{ p: 3, textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <Box sx={{ mb: 2 }}>
                {trait.icon}
              </Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  color: 'text.primary',
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                {trait.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {trait.description}
              </Typography>
            </CardContent>
          </Card>
        </FadeIn>
      </Grid>
    ))}
  </Grid>
);

export const BenefitList = ({ benefits }) => (
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
);

// Set display names for debugging
AnimatedHeading.displayName = 'AnimatedHeading';
AnimatedSubheading.displayName = 'AnimatedSubheading';
AnimatedText.displayName = 'AnimatedText';
TraitCards.displayName = 'TraitCards';
BenefitList.displayName = 'BenefitList';
