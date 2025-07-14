import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

const RHFSelectField = ({ 
  name, 
  label, 
  rules, 
  control, 
  options = [],
  disabled = false,
  required = false,
  placeholder = 'Select an option',
  ...props 
}) => (
  <FormControl fullWidth error={!!props.error} required={required}>
    <InputLabel>{label}</InputLabel>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <Select
            {...field}
            label={label}
            disabled={disabled}
            {...props}
          >
            <MenuItem value="">
              <em>{placeholder}</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 2 }}>
              {fieldState.error.message}
            </Typography>
          )}
        </>
      )}
    />
  </FormControl>
);

export default RHFSelectField;
