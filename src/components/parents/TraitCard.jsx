import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const TraitCard = ({ icon, title, description }) => {
  return (
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
          {icon}
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
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TraitCard;
