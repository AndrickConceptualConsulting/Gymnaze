import React from 'react';
import { Grid } from '@mui/material';
import { FadeIn } from '../animations/SmartAnimations';
import TeamMemberCard from './TeamMemberCard';

const TeamAttributes = ({ items }) => (
  <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
    {items.map((member, index) => (
      <Grid item xs={12} sm={6} md={3} key={member.role} sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '0px !important',
        paddingTop: '0px !important',
        px: 2,
        mb: 2
      }}>
        <TeamMemberCard member={member} delay={0.2 + (index * 0.1)} />
      </Grid>
    ))}
  </Grid>
);

export default TeamAttributes;
