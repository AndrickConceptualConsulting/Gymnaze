import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  templates: {
    userInquiry: import.meta.env.VITE_EMAILJS_USER_INQUIRY_TEMPLATE_ID,
    adminInquiry: import.meta.env.VITE_EMAILJS_ADMIN_INQUIRY_TEMPLATE_ID,
    newsletterUser: import.meta.env.VITE_EMAILJS_NEWSLETTER_USER_TEMPLATE_ID,
    newsletterAdmin: import.meta.env.VITE_EMAILJS_NEWSLETTER_ADMIN_TEMPLATE_ID,
  },
  ceoEmail: import.meta.env.VITE_CEO_EMAIL || 'zjohnson@gymnaze.com'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

/**
 * Send inquiry confirmation email to user
 */
export const sendInquiryUserEmail = async (inquiryData) => {
  try {
    // Extract first name from full name for personalization
    const firstName = inquiryData.name ? inquiryData.name.split(' ')[0] : 'there';
    
    const templateParams = {
      to_email: inquiryData.email,
      user_name: firstName, // Use first name for personalization
      full_name: inquiryData.name, // Keep full name available if needed
      organization: inquiryData.organization,
      role: inquiryData.role,
      number_of_athletes: inquiryData.numberOfAthletes,
      interest: inquiryData.interest,
      notes: inquiryData.notes || '',
      submission_date: new Date().toLocaleDateString(),
      reply_to: EMAILJS_CONFIG.ceoEmail
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.userInquiry,
      templateParams
    );

    console.log('User inquiry email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending user inquiry email:', error);
    throw error;
  }
};

/**
 * Send inquiry notification email to admin
 */
export const sendInquiryAdminEmail = async (inquiryData) => {
  try {
    const templateParams = {
      to_email: EMAILJS_CONFIG.ceoEmail,
      user_name: inquiryData.name,
      user_email: inquiryData.email,
      organization: inquiryData.organization,
      role: inquiryData.role,
      number_of_athletes: inquiryData.numberOfAthletes,
      interest: inquiryData.interest,
      notes: inquiryData.notes || 'No additional notes provided',
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString(),
      inquiry_id: inquiryData.id || 'Generated on submission'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.adminInquiry,
      templateParams
    );

    console.log('Admin inquiry email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending admin inquiry email:', error);
    throw error;
  }
};

/**
 * Send newsletter welcome email to user
 */
export const sendNewsletterUserEmail = async (subscriberData) => {
  try {
    const templateParams = {
      to_email: subscriberData.email,
      user_name: subscriberData.name || 'there',
      interest: subscriberData.interest || '',
      subscription_date: new Date().toLocaleDateString(),
      reply_to: EMAILJS_CONFIG.ceoEmail,
      unsubscribe_link: `${import.meta.env.VITE_SITE_URL || 'https://gymnaze.com'}/unsubscribe?token=${subscriberData.unsubscribeToken}`,
      unsubscribe_token: subscriberData.unsubscribeToken
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.newsletterUser,
      templateParams
    );

    console.log('Newsletter user email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending newsletter user email:', error);
    throw error;
  }
};

/**
 * Send newsletter subscriber notification to admin
 */
export const sendNewsletterAdminEmail = async (subscriberData) => {
  try {
    const templateParams = {
      to_email: EMAILJS_CONFIG.ceoEmail,
      user_email: subscriberData.email,
      user_name: subscriberData.name || 'Not provided',
      interest: subscriberData.interest || 'Not specified',
      subscription_date: new Date().toLocaleDateString(),
      subscription_time: new Date().toLocaleTimeString(),
      subscriber_id: subscriberData.id || 'Generated on submission'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.newsletterAdmin,
      templateParams
    );

    console.log('Newsletter admin email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending newsletter admin email:', error);
    throw error;
  }
};

/**
 * Send both inquiry emails (user confirmation + admin notification)
 */
export const sendInquiryEmails = async (inquiryData) => {
  try {
    // Send both emails in parallel
    const emailPromises = [
      sendInquiryUserEmail(inquiryData),
      sendInquiryAdminEmail(inquiryData)
    ];

    const results = await Promise.allSettled(emailPromises);
    
    // Check results
    const userEmailResult = results[0];
    const adminEmailResult = results[1];

    const success = {
      userEmail: userEmailResult.status === 'fulfilled',
      adminEmail: adminEmailResult.status === 'fulfilled'
    };

    if (userEmailResult.status === 'rejected') {
      console.error('User email failed:', userEmailResult.reason);
    }
    
    if (adminEmailResult.status === 'rejected') {
      console.error('Admin email failed:', adminEmailResult.reason);
    }

    return {
      success: success.userEmail || success.adminEmail, // At least one succeeded
      details: success,
      errors: {
        userEmail: userEmailResult.status === 'rejected' ? userEmailResult.reason : null,
        adminEmail: adminEmailResult.status === 'rejected' ? adminEmailResult.reason : null
      }
    };
  } catch (error) {
    console.error('Error in sendInquiryEmails:', error);
    throw error;
  }
};

/**
 * Send both newsletter emails (user welcome + admin notification)
 */
export const sendNewsletterEmails = async (subscriberData) => {
  try {
    // Send both emails in parallel
    const emailPromises = [
      sendNewsletterUserEmail(subscriberData),
      sendNewsletterAdminEmail(subscriberData)
    ];

    const results = await Promise.allSettled(emailPromises);
    
    // Check results
    const userEmailResult = results[0];
    const adminEmailResult = results[1];

    const success = {
      userEmail: userEmailResult.status === 'fulfilled',
      adminEmail: adminEmailResult.status === 'fulfilled'
    };

    if (userEmailResult.status === 'rejected') {
      console.error('Newsletter user email failed:', userEmailResult.reason);
    }
    
    if (adminEmailResult.status === 'rejected') {
      console.error('Newsletter admin email failed:', adminEmailResult.reason);
    }

    return {
      success: success.userEmail || success.adminEmail, // At least one succeeded
      details: success,
      errors: {
        userEmail: userEmailResult.status === 'rejected' ? userEmailResult.reason : null,
        adminEmail: adminEmailResult.status === 'rejected' ? adminEmailResult.reason : null
      }
    };
  } catch (error) {
    console.error('Error in sendNewsletterEmails:', error);
    throw error;
  }
};

/**
 * Validate EmailJS configuration
 */
export const validateEmailJSConfig = () => {
  const missing = [];
  
  if (!EMAILJS_CONFIG.serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS_CONFIG.publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');
  if (!EMAILJS_CONFIG.templates.userInquiry) missing.push('VITE_EMAILJS_USER_INQUIRY_TEMPLATE_ID');
  if (!EMAILJS_CONFIG.templates.adminInquiry) missing.push('VITE_EMAILJS_ADMIN_INQUIRY_TEMPLATE_ID');
  if (!EMAILJS_CONFIG.templates.newsletterUser) missing.push('VITE_EMAILJS_NEWSLETTER_USER_TEMPLATE_ID');
  if (!EMAILJS_CONFIG.templates.newsletterAdmin) missing.push('VITE_EMAILJS_NEWSLETTER_ADMIN_TEMPLATE_ID');
  
  if (missing.length > 0) {
    console.warn('Missing EmailJS environment variables:', missing);
    return false;
  }
  
  return true;
};