import React from 'react';
import { Box, Typography } from '@mui/material';
import { FadeIn } from '../animations/SmartAnimations';

const TeamMemberCard = ({ member, delay }) => (
  <FadeIn delay={delay}>
    <Box
      sx={{
        textAlign: 'center',
        p: 3,
        borderRadius: 2,
        backgroundColor: 'rgba(44, 60, 136, 0.1)',
        transition: 'all 0.3s ease',
        height: '200px',
        width: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: 'rgba(44, 60, 136, 0.15)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '3rem',
          mb: 2,
        }}
      >
        {member.emoji}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'text.primary',
          mb: 1,
          fontWeight: 600,
        }}
      >
        {member.role}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.6,
        }}
      >
        {member.description}
      </Typography>
    </Box>
  </FadeIn>
);

export default TeamMemberCard;
