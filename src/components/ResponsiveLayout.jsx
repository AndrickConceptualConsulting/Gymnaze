import React from 'react';
import { Box, Container, useTheme, useMediaQuery } from '@mui/material';

/**
 * ResponsiveLayout - A utility component for consistent responsive layouts
 * 
 * Props:
 * - maxWidth: Container max width (default: 'lg')
 * - spacing: Padding/spacing multiplier (default: 1)
 * - section: Whether this is a main section (adds vertical padding)
 * - fullWidth: Whether to use full width (no container)
 * - children: React children
 */
const ResponsiveLayout = ({ 
  children, 
  maxWidth = 'lg', 
  spacing = 1, 
  section = false,
  fullWidth = false,
  ...props 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const baseSpacing = {
    xs: 2 * spacing,
    sm: 3 * spacing,
    md: 4 * spacing,
    lg: 5 * spacing,
  };

  const sectionSpacing = section ? {
    py: {
      xs: 4 * spacing,
      sm: 6 * spacing,
      md: 8 * spacing,
      lg: 10 * spacing,
    }
  } : {};

  if (fullWidth) {
    return (
      <Box
        sx={{
          width: '100%',
          px: baseSpacing,
          ...sectionSpacing,
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }

  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        px: baseSpacing,
        ...sectionSpacing,
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default ResponsiveLayout;