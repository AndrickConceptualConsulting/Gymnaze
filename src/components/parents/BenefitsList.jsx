import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const BenefitsList = ({ benefits, iconColor = 'accent.main' }) => {
  return (
    <List>
      {benefits.map((benefit, index) => (
        <ListItem key={benefit} sx={{ pl: 0 }}>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: iconColor }} />
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
      ))}
    </List>
  );
};

export default BenefitsList;
