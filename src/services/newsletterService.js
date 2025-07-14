import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { sendNewsletterEmails, validateEmailJSConfig } from './emailService';

/**
 * Submit a newsletter signup to Firestore and send welcome emails
 * @param {Object} data - The newsletter signup data
 * @returns {Promise<Object>} - Returns the signup ID and email status
 */
export const submitNewsletterSignup = async (data) => {
  try {
    // Validate data before submission
    validateNewsletterData(data);

    // Generate unique ID for the newsletter signup
    const signupId = `newsletter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Prepare data for Firestore
    const signupData = {
      ...data,
      timestamp: serverTimestamp(),
      status: 'active',
      source: 'website_newsletter_form',
      id: signupId,
      // Newsletter subscription settings
      subscribed: true,
      emailVerified: false,
      unsubscribeToken: generateUnsubscribeToken(), // Generate secure token
      preferences: {
        frequency: 'weekly', // Default frequency
        format: 'html'
      },
      // Optional: Add browser/device info for segmentation
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
      // Optional: Add UTM tracking if available
      utmSource: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') : null,
      utmCampaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') : null
    };

    console.log('📧 Submitting newsletter signup to Firestore:', signupData);

    // Save to Firestore in 'newsletter_signups' collection first
    await setDoc(doc(db, 'newsletter_signups', signupId), signupData);
    
    console.log('✅ Successfully saved newsletter signup to Firestore:', signupId);

    // Send emails if EmailJS is configured
    let emailResult = { success: false, message: 'EmailJS not configured' };
    
    if (validateEmailJSConfig()) {
      try {
        console.log('📧 Sending newsletter welcome emails...');
        
        // Prepare subscriber data for emails
        const subscriberData = {
          ...signupData,
          name: data.firstName, // EmailJS expects 'name' field
          email: data.email
        };
        
        emailResult = await sendNewsletterEmails(subscriberData);
        
        if (emailResult.success) {
          console.log('✅ Newsletter emails sent successfully');
          
          // Update Firestore with email status
          await setDoc(doc(db, 'newsletter_signups', signupId), {
            ...signupData,
            emailsSent: true,
            emailsSentAt: serverTimestamp(),
            emailDetails: emailResult.details
          });
        } else {
          console.warn('⚠️ Some newsletter emails failed to send:', emailResult.errors);
          
          // Update Firestore with email failure
          await setDoc(doc(db, 'newsletter_signups', signupId), {
            ...signupData,
            emailsSent: false,
            emailError: emailResult.errors,
            emailErrorAt: serverTimestamp()
          });
        }
      } catch (emailError) {
        console.error('❌ Error sending newsletter emails:', emailError);
        
        // Update Firestore with email error
        await setDoc(doc(db, 'newsletter_signups', signupId), {
          ...signupData,
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
      signupId,
      emailStatus: emailResult
    };
  } catch (error) {
    console.error('❌ Error submitting newsletter signup:', error);
    
    // Re-throw with more specific error message for UI
    if (error.message.includes('permission-denied')) {
      throw new Error('Unable to save your subscription. Please try again later.');
    } else if (error.message.includes('network')) {
      throw new Error('Network error. Please check your connection and try again.');
    } else {
      throw error;
    }
  }
};

/**
 * Validate newsletter signup data
 * @param {Object} data - The form data to validate
 * @returns {boolean} - Returns true if data is valid
 */
export const validateNewsletterData = (data) => {
  // Check required fields
  if (!data.email || !data.firstName) {
    throw new Error('Email and first name are required');
  }

  // Validate email format
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(data.email)) {
    throw new Error('Invalid email format');
  }

  // Validate first name length
  if (data.firstName.trim().length < 2 || data.firstName.trim().length > 30) {
    throw new Error('First name must be between 2 and 30 characters');
  }

  return true;
};

/**
 * Check if email already exists in newsletter signups
 * @param {string} email - Email to check
 * @returns {Promise<boolean>} - Returns true if email exists
 */
export const checkEmailExists = async (email) => {
  try {
    // This would require querying Firestore by email field
    // For now, we'll handle duplicates at the collection level
    // You could implement this later if needed for duplicate prevention
    return false;
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false;
  }
};

/**
 * Generate a secure unsubscribe token
 * @returns {string} - A unique token for unsubscribe links
 */
const generateUnsubscribeToken = () => {
  return 'unsub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 12);
};

/**
 * Unsubscribe a user from the newsletter using token
 * @param {string} token - The unsubscribe token
 * @returns {Promise<Object>} - Returns success status and user info
 */
export const unsubscribeByToken = async (token) => {
  try {
    const { collection, query, where, getDocs, updateDoc } = await import('firebase/firestore');
    
    // Query for the user with this unsubscribe token
    const newsletterRef = collection(db, 'newsletter_signups');
    const q = query(newsletterRef, where('unsubscribeToken', '==', token));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      throw new Error('Invalid unsubscribe token');
    }
    
    let userInfo = null;
    const updatePromises = [];
    
    snapshot.forEach((docSnapshot) => {
      const userData = docSnapshot.data();
      userInfo = {
        email: userData.email,
        firstName: userData.firstName || 'Subscriber'
      };
      
      // Update the document to unsubscribe
      const updatePromise = updateDoc(docSnapshot.ref, {
        subscribed: false,
        unsubscribedAt: serverTimestamp(),
        status: 'unsubscribed'
      });
      
      updatePromises.push(updatePromise);
    });
    
    await Promise.all(updatePromises);
    
    console.log('✅ Successfully unsubscribed user with token:', token);
    
    return {
      success: true,
      userInfo
    };
  } catch (error) {
    console.error('❌ Error unsubscribing by token:', error);
    throw error;
  }
};

/**
 * Check if a user is subscribed by email
 * @param {string} email - Email to check
 * @returns {Promise<boolean>} - Returns true if user is subscribed
 */
export const isUserSubscribed = async (email) => {
  try {
    const { collection, query, where, getDocs } = await import('firebase/firestore');
    
    const newsletterRef = collection(db, 'newsletter_signups');
    const q = query(newsletterRef, where('email', '==', email), where('subscribed', '==', true));
    const snapshot = await getDocs(q);
    
    return !snapshot.empty;
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
};

/**
 * Unsubscribe a user from the newsletter by signup ID
 * @param {string} signupId - The signup ID to unsubscribe
 * @returns {Promise<void>}
 */
export const unsubscribeNewsletter = async (signupId) => {
  try {
    const unsubscribeData = {
      subscribed: false,
      unsubscribedAt: serverTimestamp(),
      status: 'unsubscribed'
    };

    await setDoc(doc(db, 'newsletter_signups', signupId), unsubscribeData, { merge: true });
    console.log('✅ Successfully unsubscribed:', signupId);
  } catch (error) {
    console.error('❌ Error unsubscribing:', error);
    throw error;
  }
};
