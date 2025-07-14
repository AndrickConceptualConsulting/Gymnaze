import React from 'react';
import { Controller } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

const RHFCheckbox = ({ 
  name, 
  label, 
  rules, 
  control, 
  disabled = false,
  ...props 
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          {...field}
          checked={field.value}
          disabled={disabled}
          style={{ marginRight: 8 }}
          {...props}
        />
        <Typography variant="body2">
          {label}
        </Typography>
      </Box>
    )}
  />
);

export default RHFCheckbox;
