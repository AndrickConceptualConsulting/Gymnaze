import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Submit an inquiry to Firestore
 * @param {Object} data - The form data to submit
 * @returns {Promise<string>} - Returns the inquiry ID
 */
export const submitInquiry = async (data) => {
  try {
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

    // Save to Firestore
    await setDoc(doc(db, 'inquiries', inquiryId), inquiryData);
    
    console.log('✅ Successfully saved to Firestore:', inquiryId);

    return inquiryId;
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
