import React from 'react';
import { Box, Typography } from '@mui/material';
import { PARENTS_STYLES } from '../../constants/parentsContent';

const PlaceholderBox = ({ children, ...props }) => {
  return (
    <Box sx={PARENTS_STYLES.placeholder} {...props}>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {children}
      </Typography>
    </Box>
  );
};

export default PlaceholderBox;
