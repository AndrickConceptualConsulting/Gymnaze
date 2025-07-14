import React from 'react';
import { Container } from '@mui/material';

const SectionWrapper = ({ maxWidth = "lg", padding = { xs: 4, md: 6 }, children, ...props }) => {
  return (
    <Container maxWidth={maxWidth} sx={{ py: padding }} {...props}>
      {children}
    </Container>
  );
};

export default SectionWrapper;
