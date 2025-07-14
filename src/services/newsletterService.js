import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Submit a newsletter signup to Firestore
 * @param {Object} data - The newsletter signup data
 * @returns {Promise<string>} - Returns the signup ID
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
      // Additional tracking fields for newsletter management
      subscribed: true,
      emailVerified: false,
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

    // Save to Firestore in 'newsletter_signups' collection
    await setDoc(doc(db, 'newsletter_signups', signupId), signupData);
    
    console.log('✅ Successfully saved newsletter signup to Firestore:', signupId);

    return signupId;
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
 * Unsubscribe a user from the newsletter
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
