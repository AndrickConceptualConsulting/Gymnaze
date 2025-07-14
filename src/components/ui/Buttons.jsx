// React & external libs
import React from 'react';

// MUI
import { Button } from '@mui/material';

// Router
import { Link } from 'react-router-dom';

// Constants
import { 
  primaryButtonStyle, 
  secondaryButtonStyle, 
  ctaPrimaryButtonStyle, 
  ctaSecondaryButtonStyle 
} from '../../constants/ui';

// ===== BUTTON COMPONENTS =====

export const PrimaryButton = ({ 
  children, 
  to, 
  onClick, 
  size = "large", 
  variant = "contained",
  sx = {},
  ...props 
}) => (
  <Button
    variant={variant}
    component={to ? Link : 'button'}
    to={to}
    onClick={onClick}
    size={size}
    sx={{ ...primaryButtonStyle, ...sx }}
    {...props}
  >
    {children}
  </Button>
);

export const SecondaryButton = ({ 
  children, 
  to, 
  onClick, 
  size = "large", 
  variant = "outlined",
  sx = {},
  ...props 
}) => (
  <Button
    variant={variant}
    component={to ? Link : 'button'}
    to={to}
    onClick={onClick}
    size={size}
    sx={{ ...secondaryButtonStyle, ...sx }}
    {...props}
  >
    {children}
  </Button>
);

export const CTAPrimaryButton = ({ 
  children, 
  to, 
  onClick, 
  size = "large", 
  variant = "contained",
  className = "backlit-button",
  sx = {},
  ...props 
}) => (
  <Button
    variant={variant}
    component={to ? Link : 'button'}
    to={to}
    onClick={onClick}
    size={size}
    className={className}
    sx={{ ...ctaPrimaryButtonStyle, ...sx }}
    {...props}
  >
    {children}
  </Button>
);

export const CTASecondaryButton = ({ 
  children, 
  to, 
  onClick, 
  size = "large", 
  variant = "outlined",
  className = "backlit-subtle",
  sx = {},
  ...props 
}) => (
  <Button
    variant={variant}
    component={to ? Link : 'button'}
    to={to}
    onClick={onClick}
    size={size}
    className={className}
    sx={{ ...ctaSecondaryButtonStyle, ...sx }}
    {...props}
  >
    {children}
  </Button>
);

// Set display names for debugging
PrimaryButton.displayName = 'PrimaryButton';
SecondaryButton.displayName = 'SecondaryButton';
CTAPrimaryButton.displayName = 'CTAPrimaryButton';
CTASecondaryButton.displayName = 'CTASecondaryButton';
