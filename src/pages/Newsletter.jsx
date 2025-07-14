import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Alert,
  CircularProgress,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/animations/SmartAnimations';
import { RHFTextField, RHFSelectField } from '../components/form';
import { BenefitChips } from '../components/Newsletter';
import { submitNewsletterSignup } from '../services/newsletterService';
import {
  validationRules,
  interestOptions,
  defaultValues,
  newsletterBenefits
} from '../config/newsletterForm';

const Newsletter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues,
    mode: 'onBlur'
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitNewsletterSignup(data);
      
      setSubmitStatus({
        type: 'success',
        message: 'Welcome to GYMNAZE! You\'ve been successfully added to our newsletter. Check your email for a confirmation message.'
      });
      
      reset();

    } catch (error) {
      console.error('❌ Error submitting newsletter signup:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error signing you up. Please try again or contact us if the problem persists.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
          py: { xs: 4, md: 8 },
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Paper 
              elevation={3} 
              sx={{ 
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                textAlign: 'center'
              }}
            >
              {/* Header */}
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  fontFamily: 'Montserrat',
                  color: theme.palette.primary.main,
                  mb: theme.spacing(2)
                }}
              >
                Stay Connected with GYMNAZE
              </Typography>
              
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: theme.spacing(4),
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                Get exclusive insights, athlete development tips, and be the first to know about new GYMNAZE features and updates.
              </Typography>

              {/* Benefits - Now using extracted component */}
              <BenefitChips items={newsletterBenefits} />

              {/* Status Alert */}
              {submitStatus && (
                <Alert 
                  severity={submitStatus.type} 
                  sx={{ mb: theme.spacing(3), textAlign: 'left' }}
                  onClose={() => setSubmitStatus(null)}
                >
                  {submitStatus.message}
                </Alert>
              )}

              {/* Form */}
              <Box 
                component="form" 
                onSubmit={handleSubmit(onSubmit)}
                sx={{ maxWidth: '500px', mx: 'auto' }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {/* First Name */}
                  <RHFTextField
                    name="firstName"
                    label="First Name *"
                    rules={validationRules.firstName}
                    control={control}
                    disabled={isSubmitting}
                    required
                  />

                  {/* Email */}
                  <RHFTextField
                    name="email"
                    label="Email Address *"
                    type="email"
                    rules={validationRules.email}
                    control={control}
                    disabled={isSubmitting}
                    required
                  />

                  {/* Interest */}
                  <RHFSelectField
                    name="interest"
                    label="What interests you most?"
                    control={control}
                    options={interestOptions}
                    disabled={isSubmitting}
                  />

                  {/* Submit Button - Improved UX and Accessibility */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    startIcon={!isSubmitting ? <EmailIcon /> : null}
                    sx={{
                      py: theme.spacing(1.5),
                      fontSize: '1.1rem',
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: 'none',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[8]
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      'Join Our Newsletter'
                    )}
                  </Button>
                </Box>
              </Box>

              {/* Privacy Note */}
              <Typography
                variant="body2"
                sx={{
                  mt: theme.spacing(3),
                  color: theme.palette.text.secondary,
                  fontStyle: 'italic',
                  fontSize: '0.85rem'
                }}
              >
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default Newsletter;
