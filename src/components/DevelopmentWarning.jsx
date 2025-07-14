import React, { useState, useEffect } from 'react';
import { Box, Alert, AlertTitle, Collapse, IconButton, Typography, Chip } from '@mui/material';
import { Close as CloseIcon, Info as InfoIcon } from '@mui/icons-material';

const DevelopmentWarning = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [errorCounts, setErrorCounts] = useState({
    extension: 0,
    csp: 0,
    firebase: 0,
    youtube: 0,
    other: 0,
  });

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') return;

    const counts = { ...errorCounts };
    const originalError = console.error;
    
    console.error = (...args) => {
      const message = args.join(' ');
      
      // Categorize errors
      if (message.includes('web-client-content-script') || message.includes('chrome-extension') || message.includes('MutationObserver')) {
        counts.extension++;
      } else if (message.includes('Content Security Policy') || message.includes('Refused to load')) {
        counts.csp++;
      } else if (message.includes('firebase') || message.includes('googleapis') || message.includes('googletagmanager')) {
        counts.firebase++;
      } else if (message.includes('youtube') || message.includes('play.google.com')) {
        counts.youtube++;
      } else {
        counts.other++;
      }
      
      const totalErrors = Object.values(counts).reduce((sum, count) => sum + count, 0);
      if (totalErrors > 0) {
        setErrorCounts({ ...counts });
        setShowWarning(true);
      }
      
      // Call original console.error
      originalError.apply(console, args);
    };

    // Auto-hide after 15 seconds
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 15000);

    return () => {
      console.error = originalError;
      clearTimeout(timer);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !showWarning) {
    return null;
  }

  const totalErrors = Object.values(errorCounts).reduce((sum, count) => sum + count, 0);

  return (
    <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 9999, maxWidth: 420 }}>
      <Collapse in={showWarning}>
        <Alert 
          severity="info" 
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setShowWarning(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Development Notice</AlertTitle>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {totalErrors} external error{totalErrors !== 1 ? 's' : ''} detected (won't affect production):
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {errorCounts.extension > 0 && (
              <Chip size="small" label={`${errorCounts.extension} Extension`} color="default" />
            )}
            {errorCounts.csp > 0 && (
              <Chip size="small" label={`${errorCounts.csp} CSP`} color="default" />
            )}
            {errorCounts.firebase > 0 && (
              <Chip size="small" label={`${errorCounts.firebase} Firebase`} color="default" />
            )}
            {errorCounts.youtube > 0 && (
              <Chip size="small" label={`${errorCounts.youtube} YouTube`} color="default" />
            )}
            {errorCounts.other > 0 && (
              <Chip size="small" label={`${errorCounts.other} Other`} color="default" />
            )}
          </Box>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default DevelopmentWarning;
