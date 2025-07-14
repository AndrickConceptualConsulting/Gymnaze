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
import { motion } from 'framer-motion';
import { PageTransition } from '../components/animations/SmartAnimations';
import {
  RHFTextField,
  RHFSelectField,
  RHFCheckbox,
  FormSectionWrapper
} from '../components/form';
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
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const inquiryId = await submitInquiry(data);
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your interest in GYMNAZE! We\'ve received your information and will be in touch soon to discuss next steps.'
      });
      
      reset(); // Clear form

    } catch (error) {
      console.error('❌ Error submitting inquiry:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your inquiry. Please try again.'
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
                Let's Bring GYMNAZE to Your Team
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
                Ready to bring Gymnaze to your athletes or team? Submit an inquiry to begin your onboarding process and learn how to unlock athlete mindset insights.
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
                    A Smarter Way to Support Your Athletes Starts Here
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ mb: theme.spacing(3) }}>
                    Whether you're a coach, director, or program leader, GYMNAZE gives you a way to evaluate the leadership, mindset, and sports IQ of your athletes—before they ever hit the field.
                  </Typography>

                  <Typography variant="h6" sx={{ fontFamily: 'Montserrat', fontWeight: 600, mb: theme.spacing(2) }}>
                    This is your first step to:
                  </Typography>
                  
                  <Box component="ul" sx={{ pl: theme.spacing(2), mb: theme.spacing(4) }}>
                    <Typography component="li" variant="body1" sx={{ mb: theme.spacing(1) }}>
                      Equip athletes with personalized mindset insights
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: theme.spacing(1) }}>
                      Build a culture of coachability, focus, and resilience
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: theme.spacing(1) }}>
                      Make smarter recruiting, development, and leadership decisions
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontFamily: 'Montserrat', fontWeight: 600, mb: theme.spacing(2) }}
                  >
                    Who Typically Uses This Form
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {[
                      'High school coaches',
                      'Club coaches', 
                      'Athletic directors',
                      'Program leaders',
                      'College coaches',
                      'Recruiting coordinators'
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
                    Ready to Learn More or Onboard Your Team?
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: theme.spacing(4) }}>
                    Tell us a little about your team or organization—and we'll take it from there.
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
                          label="What's Your Biggest Athlete Evaluation Challenge?"
                          rules={validationRules.notes}
                          control={control}
                          disabled={isSubmitting}
                          multiline
                          rows={4}
                          placeholder="Tell us what your biggest athlete evaluation challenge is—or drop any questions about GYMNAZE."
                          helperText={`${watchedValues.notes?.length || 0}/1000 characters`}
                        />
                      </Grid>

                      {/* Optional Checkboxes */}
                      <Grid item xs={12}>
                        <Box sx={{ mt: theme.spacing(2) }}>
                          <Typography variant="h6" sx={{ mb: theme.spacing(2), fontFamily: 'Montserrat', fontWeight: 600 }}>
                            Help us understand your timeline
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <RHFCheckbox
                              name="wantWalkthrough"
                              label="I'd like to schedule a demo call to learn more about GYMNAZE"
                              control={control}
                              disabled={isSubmitting}
                            />
                            
                            <RHFCheckbox
                              name="readyToPilot"
                              label="I'm interested in being part of an early pilot program"
                              control={control}
                              disabled={isSubmitting}
                            />
                          </Box>
                        </Box>
                      </Grid>

                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
                          fullWidth={isMobile}
                          sx={{
                            px: theme.spacing(6),
                            py: theme.spacing(2),
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
                          startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                        >
                          {isSubmitting ? 'Processing...' : 'Submit Information'}
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
                    We're currently working with select teams to refine our platform and ensure the best possible experience for coaches and athletes.
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
