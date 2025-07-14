import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Alert, 
  AlertTitle, 
  Typography, 
  Button, 
  Collapse,
  Link,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import { 
  Close as CloseIcon, 
  OpenInNew as OpenInNewIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const FirebaseSetupGuide = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    // Listen for Firebase Auth configuration errors
    const checkForConfigError = () => {
      const originalError = console.error;
      
      console.error = (...args) => {
        const message = args.join(' ');
        
        if (message.includes('CONFIGURATION_NOT_FOUND') || 
            message.includes('identitytoolkit/v3/relyingparty/getProjectConfig')) {
          setShowGuide(true);
        }
        
        originalError.apply(console, args);
      };

      // Check if auth is properly configured after a delay
      setTimeout(() => {
        // If no errors occurred, assume setup is complete
        if (!showGuide) {
          setSetupComplete(true);
        }
      }, 3000);

      return () => {
        console.error = originalError;
      };
    };

    checkForConfigError();
  }, [showGuide]);

  const handleDismiss = () => {
    setShowGuide(false);
  };

  const setupSteps = [
    {
      text: "Go to Firebase Console",
      link: "https://console.firebase.google.com/project/gymnaze-aa0d6/authentication/users"
    },
    {
      text: "Click on 'Authentication' in the left sidebar"
    },
    {
      text: "Click 'Get Started' if you haven't enabled it yet"
    },
    {
      text: "Go to the 'Sign-in method' tab"
    },
    {
      text: "Enable 'Email/Password' authentication"
    },
    {
      text: "Refresh this page to test the connection"
    }
  ];

  if (setupComplete && !showGuide) {
    return null;
  }

  return (
    <Box sx={{ position: 'fixed', top: 16, left: 16, zIndex: 9999, maxWidth: 500 }}>
      <Collapse in={showGuide}>
        <Alert 
          severity="warning" 
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleDismiss}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Firebase Authentication Setup Required</AlertTitle>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Firebase Authentication is not enabled for this project. Please follow these steps:
          </Typography>
          
          <List dense sx={{ pl: 0 }}>
            {setupSteps.map((step, index) => (
              <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
                <ListItemText 
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ color: 'inherit' }}>
                        {index + 1}. {step.text}
                      </Typography>
                      {step.link && (
                        <Link 
                          href={step.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          sx={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                        >
                          <OpenInNewIcon fontSize="small" />
                        </Link>
                      )}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Button 
              size="small" 
              variant="contained" 
              color="secondary"
              href="https://console.firebase.google.com/project/gymnaze-aa0d6/authentication/users"
              target="_blank"
              startIcon={<OpenInNewIcon />}
            >
              Open Firebase Console
            </Button>
            <Button 
              size="small" 
              variant="outlined" 
              color="inherit"
              onClick={() => window.location.reload()}
              startIcon={<CheckIcon />}
            >
              I've Set It Up
            </Button>
          </Box>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default FirebaseSetupGuide;
