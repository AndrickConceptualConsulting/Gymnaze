import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { sendInquiryEmails, validateEmailJSConfig } from './emailService';

/**
 * Submit an inquiry to Firestore and send confirmation emails
 * @param {Object} data - The form data to submit
 * @returns {Promise<Object>} - Returns the inquiry ID and email status
 */
export const submitInquiry = async (data) => {
  try {
    // Validate form data first
    validateInquiryData(data);

    // Generate unique ID for the inquiry
    const inquiryId = `inquiry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Prepare data for Firestore
    const inquiryData = {
      ...data,
      numberOfAthletes: parseInt(data.numberOfAthletes, 10),
      timestamp: serverTimestamp(),
      status: 'new',
      source: 'website_inquiry_form',
      id: inquiryId
    };

    console.log('📝 Submitting to Firestore:', inquiryData);

    // Save to Firestore first
    await setDoc(doc(db, 'inquiries', inquiryId), inquiryData);
    
    console.log('✅ Successfully saved to Firestore:', inquiryId);

    // Send emails if EmailJS is configured
    let emailResult = { success: false, message: 'EmailJS not configured' };
    
    if (validateEmailJSConfig()) {
      try {
        console.log('📧 Sending inquiry emails...');
        emailResult = await sendInquiryEmails(inquiryData);
        
        if (emailResult.success) {
          console.log('✅ Inquiry emails sent successfully');
          
          // Update Firestore with email status
          await setDoc(doc(db, 'inquiries', inquiryId), {
            ...inquiryData,
            emailsSent: true,
            emailsSentAt: serverTimestamp(),
            emailDetails: emailResult.details
          });
        } else {
          console.warn('⚠️ Some inquiry emails failed to send:', emailResult.errors);
          
          // Update Firestore with email failure
          await setDoc(doc(db, 'inquiries', inquiryId), {
            ...inquiryData,
            emailsSent: false,
            emailError: emailResult.errors,
            emailErrorAt: serverTimestamp()
          });
        }
      } catch (emailError) {
        console.error('❌ Error sending inquiry emails:', emailError);
        
        // Update Firestore with email error
        await setDoc(doc(db, 'inquiries', inquiryId), {
          ...inquiryData,
          emailsSent: false,
          emailError: emailError.message,
          emailErrorAt: serverTimestamp()
        });
        
        emailResult = { success: false, error: emailError.message };
      }
    } else {
      console.warn('⚠️ EmailJS not configured - skipping email sending');
    }

    return {
      inquiryId,
      emailStatus: emailResult
    };
  } catch (error) {
    console.error('❌ Error submitting inquiry:', error);
    throw error;
  }
};

/**
 * Validate form data before submission
 * @param {Object} data - The form data to validate
 * @returns {boolean} - Returns true if data is valid
 */
export const validateInquiryData = (data) => {
  const requiredFields = ['name', 'organization', 'role', 'email', 'numberOfAthletes'];
  
  for (const field of requiredFields) {
    if (!data[field] || data[field].toString().trim() === '') {
      throw new Error(`${field} is required`);
    }
  }

  // Validate email format
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(data.email)) {
    throw new Error('Invalid email format');
  }

  // Validate number of athletes
  const numAthletes = parseInt(data.numberOfAthletes, 10);
  if (isNaN(numAthletes) || numAthletes < 1 || numAthletes > 10000) {
    throw new Error('Number of athletes must be between 1 and 10,000');
  }

  return true;
};
