import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { FadeIn } from '../animations/SmartAnimations';
import {
  Speed as SpeedIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  Psychology as PsychologyIcon,
  Visibility as VisibilityIcon,
  Assessment as AssessmentIcon,
  EmojiEvents as EmojiEventsIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';

const iconComponents = {
  Speed: SpeedIcon,
  TrendingUp: TrendingUpIcon,
  CheckCircle: CheckCircleIcon,
  Psychology: PsychologyIcon,
  Visibility: VisibilityIcon,
  Assessment: AssessmentIcon,
  EmojiEvents: EmojiEventsIcon,
  Dashboard: DashboardIcon,
};

const FeatureGrid = ({ items, color, delay = 0.3 }) => {
  // Better responsive grid logic to handle different item counts
  const getGridProps = (itemCount) => {
    if (itemCount === 2) {
      return { xs: 12, sm: 6 };
    } else if (itemCount === 3) {
      return { xs: 12, sm: 6, md: 4 };
    } else {
      return { xs: 12, sm: 6, md: 4, lg: 3 };
    }
  };

  return (
    <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
      {items.map((item, index) => {
        const IconComponent = iconComponents[item.icon] || CheckCircleIcon;
        const gridProps = getGridProps(items.length);
        
        return (
          <Grid item {...gridProps} key={index} sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            paddingLeft: '0px !important',
            paddingTop: '0px !important',
            px: 2,
            mb: 2
          }}>
            <FadeIn delay={delay + (index * 0.1)}>
              <Card
                className="backlit-card"
                sx={{
                  height: '200px',
                  width: '280px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'center',
                }}
              >
                <CardContent sx={{ 
                  p: items.length === 2 ? 4 : 3, 
                  position: 'relative', 
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <Box sx={{ mb: 2 }}>
                    <IconComponent
                      sx={{
                        fontSize: items.length === 2 ? '3rem' : '2.5rem',
                        color: color,
                      }}
                    />
                  </Box>
                  <Typography
                    variant={items.length === 2 ? "h5" : "h6"}
                    sx={{
                      color: items.length === 2 ? color : 'text.primary',
                      mb: items.length === 2 ? 2 : 1,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </FadeIn>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FeatureGrid;
