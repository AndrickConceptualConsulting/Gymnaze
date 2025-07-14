import React from 'react';
import { Box, Chip, useTheme } from '@mui/material';

const BenefitChips = ({ items }) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: 1, 
        mb: 4 
      }}
    >
      {items.map((label, idx) => (
        <Chip
          key={idx}
          label={label}
          size="small"
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            fontWeight: 500
          }}
        />
      ))}
    </Box>
  );
};

export default BenefitChips;
