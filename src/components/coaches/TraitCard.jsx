import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { FadeIn } from '../animations/SmartAnimations';

const TraitCard = ({ trait, index, iconComponent }) => {
  return (
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
            {iconComponent}
          </Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: 'text.primary',
              mb: 1,
              fontWeight: 600,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            {trait.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
              fontSize: { xs: '0.85rem', md: '0.9rem' },
            }}
          >
            {trait.description}
          </Typography>
        </CardContent>
      </Card>
    </FadeIn>
  );
};

export default TraitCard;
