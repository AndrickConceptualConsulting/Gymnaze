// EmailJS service for client-side email sending (backup/alternative to Cloud Functions)

import emailjs from '@emailjs/browser';

// Initialize EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS if credentials are available
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send email notification using EmailJS
 * This is a client-side solution that doesn't require server setup
 */
export const sendEmailNotification = async (formData) => {
  try {
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured, skipping client-side email');
      return { success: false, error: 'EmailJS not configured' };
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      // User information
      to_email: formData.email,
      user_name: formData.name,
      user_email: formData.email,
      organization: formData.organization,
      role: formData.role,
      number_of_athletes: formData.numberOfAthletes,
      interest: getInterestLabel(formData.interest),
      notes: formData.notes || 'None provided',
      
      // Admin notification (sent to CEO)
      admin_email: 'zjohnson@gymnaze.com',
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString(),
      inquiry_id: `inquiry_${Date.now()}`,
      
      // Email content
      subject: `New GYMNAZE Inquiry from ${formData.organization}`,
      reply_to: formData.email
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS response:', response);

    if (response.status === 200) {
      return { 
        success: true, 
        message: 'Email sent successfully via EmailJS',
        response 
      };
    } else {
      throw new Error(`EmailJS returned status: ${response.status}`);
    }

  } catch (error) {
    console.error('EmailJS error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to send email via EmailJS' 
    };
  }
};

/**
 * Convert interest value to human-readable label
 */
const getInterestLabel = (interest) => {
  const interestLabels = {
    'assessment-access': 'Assessment Access',
    'team-culture-tools': 'Team Culture Tools',
    'coach-dashboards': 'Coach Dashboards',
    'general-info': 'General Information',
    'pricing': 'Pricing Information',
    'demo': 'Product Demo'
  };
  
  return interestLabels[interest] || interest || 'Not specified';
};

/**
 * Send a simple test email (for testing EmailJS configuration)
 */
export const sendTestEmail = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    organization: 'Test Organization',
    role: 'Test Coach',
    numberOfAthletes: 25,
    interest: 'general-info',
    notes: 'This is a test inquiry'
  };

  return await sendEmailNotification(testData);
};

/**
 * Check if EmailJS is properly configured
 */
export const isEmailJSConfigured = () => {
  return !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};

export default {
  sendEmailNotification,
  sendTestEmail,
  isEmailJSConfigured
};
