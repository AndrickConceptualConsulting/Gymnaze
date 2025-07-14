import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { FadeIn } from '../animations/SmartAnimations';

const ToolList = ({ tools, delay = 0.5 }) => {
  return (
    <List>
      {tools.map((tool, index) => (
        <FadeIn key={index} delay={delay + (index * 0.1)}>
          <ListItem sx={{ pl: 0 }}>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: 'accent.main' }} />
            </ListItemIcon>
            <ListItemText
              primary={tool}
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
};

export default ToolList;
