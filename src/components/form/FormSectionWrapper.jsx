import React from 'react';
import { Grid } from '@mui/material';

const FormSectionWrapper = ({ 
  children, 
  spacing = 3,
  ...props 
}) => (
  <Grid 
    container 
    spacing={spacing} 
    sx={{ 
      '& .MuiGrid-item': { 
        paddingLeft: { xs: '0px !important', md: '24px !important' },
        paddingTop: { xs: '8px !important', md: '24px !important' }
      }
    }}
    {...props}
  >
    {children}
  </Grid>
);

export default FormSectionWrapper;
