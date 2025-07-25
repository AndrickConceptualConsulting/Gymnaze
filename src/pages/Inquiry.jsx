import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  Alert,
  Chip,
  CircularProgress,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/animations/SmartAnimations';
import {
  RHFTextField,
  RHFSelectField,
  RHFCheckbox,
  FormSectionWrapper
} from '../components/form';
import { SimpleCaptcha } from '../components/captcha';
import { submitInquiry } from '../services/inquiryService';
import {
  validationRules,
  interestOptions,
  roleOptions,
  referralOptions,
  defaultValues
} from '../config/inquiryFormOptions';

// Animate variants for form sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Inquiry = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    defaultValues,
    mode: 'onBlur'
  });

  // Watch form values for dynamic UI updates
  const watchedValues = watch();

  // Handle form submission
  const onSubmit = async (data) => {
    if (!isCaptchaVerified) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the human verification to proceed.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const inquiryId = await submitInquiry(data);
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for joining our beta testing program! We\'ve received your information and will be in touch soon with next steps and early access details.'
      });
      
      reset(); // Clear form
      setIsCaptchaVerified(false); // Reset captcha

    } catch (error) {
      console.error('❌ Error submitting inquiry:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEOHead
        title="Join GYMNAZE Beta Testing Program | Early Access to Mental Performance Platform"
        description="Join the exclusive GYMNAZE beta testing program. Get early access to the athlete intelligence platform that measures mental toughness, leadership, and character traits coaches value most."
        keywords="GYMNAZE beta testing, mental performance platform early access, athlete intelligence beta, sports psychology tools beta, mindset training app beta"
        ogTitle="Join GYMNAZE Beta Testing - Early Access Program"
        ogDescription="Be among the first to experience the athlete intelligence revolution. Join our exclusive beta testing program for early access to GYMNAZE's mental performance platform."
      />
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
          py: { xs: 4, md: 8 },
          scrollMarginTop: theme.spacing(8)
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Box textAlign="center" mb={6}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  fontFamily: 'Montserrat',
                  color: theme.palette.primary.main,
                  mb: theme.spacing(2)
                }}
              >
                Join the GYMNAZE Beta Testing Program
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Be among the first to experience the athlete intelligence revolution. Get exclusive early access to GYMNAZE and help shape the future of athlete assessment.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} sx={{ 
            '& .MuiGrid-item': { 
              paddingLeft: { xs: '0px !important', md: '32px !important' },
              paddingTop: { xs: '8px !important', md: '32px !important' }
            }
          }}>
            {/* Information Section */}
            <Grid item xs={12} lg={5}>
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: theme.spacing(4),
                    height: 'fit-content',
                    position: 'sticky',
                    top: theme.spacing(3)
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: theme.spacing(3)
                    }}
                  >
                    Exclusive Beta Access Program
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ mb: theme.spacing(3) }}>
                    Join a select group of forward-thinking coaches, athletic directors, and program leaders who are pioneering the future of athlete development with GYMNAZE.
                  </Typography>

                  <Typography variant="h6" sx={{ fontFamily: 'Montserrat', fontWeight: 600, mb: theme.spacing(2) }}>
                    What you'll get as a beta tester:
                  </Typography>
                  
                  <Box component="ul" sx={{ pl: theme.spacing(2), mb: theme.spacing(4) }}>
                    <Typography component="li" variant="body1" sx={{ mb: theme.spacing(1) }}>
                      Early access to the complete GYMNAZE platform
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: theme.spacing(1) }}>
                      Direct input on features and development priorities
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: theme.spacing(1) }}>
                      Exclusive beta tester pricing and perks
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: theme.spacing(1) }}>
                      Personal onboarding and support from our team
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontFamily: 'Montserrat', fontWeight: 600, mb: theme.spacing(2) }}
                  >
                    Perfect for Beta Testing
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {[
                      'High school coaches',
                      'College coaches',
                      'Club directors', 
                      'Athletic directors',
                      'Recruiting coordinators',
                      'Program innovators'
                    ].map((role, index) => (
                      <Chip
                        key={index}
                        label={role}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.light,
                          color: theme.palette.primary.contrastText
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Form Section */}
            <Grid item xs={12} lg={7}>
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <Paper elevation={3} sx={{ p: theme.spacing(4) }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: theme.spacing(2)
                    }}
                  >
                    Apply for Beta Access
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: theme.spacing(4) }}>
                    Join our exclusive beta testing program and get early access to GYMNAZE before anyone else.
                  </Typography>

                  {submitStatus && (
                    <Alert 
                      severity={submitStatus.type} 
                      sx={{ mb: theme.spacing(3) }}
                      onClose={() => setSubmitStatus(null)}
                    >
                      {submitStatus.message}
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <FormSectionWrapper spacing={3}>
                      {/* Name Field */}
                      <Grid item xs={12} sm={6}>
                        <RHFTextField
                          name="name"
                          label="Full Name *"
                          rules={validationRules.name}
                          control={control}
                          disabled={isSubmitting}
                          required
                        />
                      </Grid>

                      {/* Organization Field */}
                      <Grid item xs={12} sm={6}>
                        <RHFTextField
                          name="organization"
                          label="School / Team / Program Name *"
                          rules={validationRules.organization}
                          control={control}
                          disabled={isSubmitting}
                          required
                        />
                      </Grid>

                      {/* Role Field */}
                      <Grid item xs={12} sm={6}>
                        <RHFSelectField
                          name="role"
                          label="Your Role *"
                          rules={validationRules.role}
                          control={control}
                          options={roleOptions}
                          disabled={isSubmitting}
                          required
                        />
                      </Grid>

                      {/* Email Field */}
                      <Grid item xs={12} sm={6}>
                        <RHFTextField
                          name="email"
                          label="Email Address *"
                          type="email"
                          rules={validationRules.email}
                          control={control}
                          disabled={isSubmitting}
                          required
                        />
                      </Grid>

                      {/* Number of Athletes */}
                      <Grid item xs={12} sm={6}>
                        <RHFTextField
                          name="numberOfAthletes"
                          label="Number of Athletes *"
                          type="number"
                          rules={validationRules.numberOfAthletes}
                          control={control}
                          disabled={isSubmitting}
                          helperText="Estimate if unsure"
                          inputProps={{ min: 1, max: 10000 }}
                          required
                        />
                      </Grid>

                      {/* Interest Dropdown */}
                      <Grid item xs={12} sm={6}>
                        <RHFSelectField
                          name="interest"
                          label="What are you most interested in?"
                          control={control}
                          options={interestOptions}
                          disabled={isSubmitting}
                        />
                      </Grid>

                      {/* Phone Number */}
                      <Grid item xs={12} sm={6}>
                        <RHFTextField
                          name="phone"
                          label="Phone Number (Optional)"
                          type="tel"
                          control={control}
                          disabled={isSubmitting}
                          placeholder="For urgent follow-ups"
                        />
                      </Grid>

                      {/* How did you hear about us */}
                      <Grid item xs={12} sm={6}>
                        <RHFSelectField
                          name="referralSource"
                          label="How did you hear about GYMNAZE?"
                          control={control}
                          options={referralOptions}
                          disabled={isSubmitting}
                        />
                      </Grid>

                      {/* Notes/Questions Field */}
                      <Grid item xs={12}>
                        <RHFTextField
                          name="notes"
                          label="What interests you most about beta testing GYMNAZE?"
                          rules={validationRules.notes}
                          control={control}
                          disabled={isSubmitting}
                          multiline
                          rows={4}
                          placeholder="Tell us what you're most excited to test, any specific challenges you're facing, or questions about the beta program."
                          helperText={`${watchedValues.notes?.length || 0}/1000 characters`}
                        />
                      </Grid>

                      {/* Optional Checkboxes */}
                      <Grid item xs={12}>
                        <Box sx={{ mt: theme.spacing(2) }}>
                          <Typography variant="h6" sx={{ mb: theme.spacing(2), fontFamily: 'Montserrat', fontWeight: 600 }}>
                            Beta testing preferences
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <RHFCheckbox
                              name="wantWalkthrough"
                              label="I'd like a demo call to understand the beta program better"
                              control={control}
                              disabled={isSubmitting}
                            />
                            
                            <RHFCheckbox
                              name="readyToPilot"
                              label="My team is ready to start testing immediately"
                              control={control}
                              disabled={isSubmitting}
                            />
                          </Box>
                        </Box>
                      </Grid>

                      {/* Human Verification */}
                      <Grid item xs={12}>
                        <SimpleCaptcha 
                          onVerify={setIsCaptchaVerified}
                          disabled={isSubmitting}
                        />
                      </Grid>

                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={isSubmitting || !isCaptchaVerified}
                          fullWidth={isMobile}
                          sx={{
                            px: theme.spacing(6),
                            py: theme.spacing(2),
                            fontSize: '1.1rem',
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: 'none',
                            color: 'white !important',
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            border: 'none',
                            '&:hover': {
                              color: 'white !important',
                              background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                              transform: 'translateY(-2px)',
                              boxShadow: theme.shadows[8]
                            },
                            '&:disabled': {
                              color: 'rgba(255, 255, 255, 0.7) !important',
                              background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                            },
                            transition: 'all 0.3s ease'
                          }}
                          startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                        >
                          {isSubmitting ? 'Processing...' : 'Submit Beta Application'}
                        </Button>
                      </Grid>
                    </FormSectionWrapper>
                  </Box>

                  {/* Updated post-form note */}
                  <Typography
                    variant="body2"
                    sx={{
                      mt: theme.spacing(3),
                      textAlign: 'center',
                      color: theme.palette.text.secondary,
                      fontStyle: 'italic'
                    }}
                  >
                    We're accepting a limited number of beta testers to ensure the highest quality experience. Applications are reviewed within 2-3 business days.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default Inquiry;
