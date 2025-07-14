import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Paper
} from '@mui/material';
import { CheckCircle, ErrorOutline } from '@mui/icons-material';
import { Link, useSearchParams } from 'react-router-dom';
import { unsubscribeByToken } from '../services/newsletterService';

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  
  const token = searchParams.get('token');

  useEffect(() => {
    const handleUnsubscribe = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Invalid unsubscribe link. No token provided.');
        return;
      }

      try {
        console.log('Processing unsubscribe request with token:', token);
        const result = await unsubscribeByToken(token);
        
        if (result.success) {
          setStatus('success');
          setUserInfo(result.userInfo);
          setMessage('You have been successfully unsubscribed from our newsletter.');
        } else {
          setStatus('error');
          setMessage('Failed to unsubscribe. Please try again or contact support.');
        }
      } catch (error) {
        console.error('Unsubscribe error:', error);
        setStatus('error');
        
        if (error.message === 'Invalid unsubscribe token') {
          setMessage('This unsubscribe link is invalid or has already been used.');
        } else {
          setMessage('An error occurred while processing your request. Please try again later.');
        }
      }
    };

    handleUnsubscribe();
  }, [token]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CircularProgress size={48} sx={{ color: 'secondary.main', mb: 2 }} />
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              Processing your unsubscribe request...
            </Typography>
          </Box>
        );

      case 'success':
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircle sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" component="h1" sx={{ mb: 2, color: 'text.primary' }}>
              Unsubscribed Successfully
            </Typography>
            {userInfo && (
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                Hi {userInfo.firstName}, you have been removed from our newsletter list.
              </Typography>
            )}
            <Alert severity="success" sx={{ mb: 3, textAlign: 'left' }}>
              {message}
            </Alert>
            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
              You will no longer receive newsletter emails from GYMNAZE. 
              If you change your mind, you can always subscribe again from our website.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  backgroundColor: 'secondary.main',
                  '&:hover': { backgroundColor: 'secondary.dark' }
                }}
              >
                Return to Homepage
              </Button>
              <Button
                component={Link}
                to="/newsletter"
                variant="outlined"
                sx={{
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                  '&:hover': {
                    borderColor: 'secondary.dark',
                    backgroundColor: 'rgba(0, 172, 205, 0.1)'
                  }
                }}
              >
                Resubscribe
              </Button>
            </Box>
          </Box>
        );

      case 'error':
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <ErrorOutline sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
            <Typography variant="h4" component="h1" sx={{ mb: 2, color: 'text.primary' }}>
              Unsubscribe Failed
            </Typography>
            <Alert severity="error" sx={{ mb: 3, textAlign: 'left' }}>
              {message}
            </Alert>
            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
              If you continue to experience issues, please contact our support team at{' '}
              <a href={`mailto:${import.meta.env.VITE_CEO_EMAIL || 'support@gymnaze.com'}`} 
                 style={{ color: '#00ACCD', textDecoration: 'none' }}>
                {import.meta.env.VITE_CEO_EMAIL || 'support@gymnaze.com'}
              </a>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  backgroundColor: 'secondary.main',
                  '&:hover': { backgroundColor: 'secondary.dark' }
                }}
              >
                Return to Homepage
              </Button>
              <Button
                onClick={() => window.location.reload()}
                variant="outlined"
                sx={{
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                  '&:hover': {
                    borderColor: 'secondary.dark',
                    backgroundColor: 'rgba(0, 172, 205, 0.1)'
                  }
                }}
              >
                Try Again
              </Button>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          {renderContent()}
        </Paper>
        
        {/* Footer Info */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            GYMNAZE - Unlocking Athlete Mindset Insights<br />
            <a href="https://gymnaze.com" style={{ color: '#00ACCD', textDecoration: 'none' }}>
              gymnaze.com
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Unsubscribe;