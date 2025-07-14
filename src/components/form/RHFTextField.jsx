import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const RHFTextField = ({ 
  name, 
  label, 
  rules, 
  control, 
  disabled = false,
  type = 'text',
  multiline = false,
  rows = 1,
  placeholder = '',
  helperText = '',
  required = false,
  inputProps = {},
  ...props 
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField
        {...field}
        label={label}
        type={type}
        fullWidth
        multiline={multiline}
        rows={multiline ? rows : undefined}
        placeholder={placeholder}
        error={!!fieldState.error}
        helperText={fieldState.error?.message || helperText}
        disabled={disabled}
        required={required}
        inputProps={inputProps}
        sx={{ fontFamily: 'Open Sans' }}
        {...props}
      />
    )}
  />
);

export default RHFTextField;
