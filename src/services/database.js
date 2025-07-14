// Enhanced Firestore database service with v9+ best practices
import { 
  collection, 
  addDoc, 
  doc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  writeBatch,
  runTransaction
} from 'firebase/firestore';
import { db } from './firebase';

// Collection names - centralized for consistency
export const COLLECTIONS = {
  USERS: 'users',
  INQUIRIES: 'inquiries',
  DEMO_REQUESTS: 'demoRequests',
  CONSULTATIONS: 'consultations',
  NEWSLETTER_SIGNUPS: 'newsletterSignups',
  CONTACT_FORMS: 'contactForms',
  ASSESSMENTS: 'assessments',
  ASSESSMENT_RESULTS: 'assessmentResults',
  NOTIFICATIONS: 'notifications'
};

/**
 * Generic function to add a document to any collection
 * @param {string} collectionName - Name of the collection
 * @param {Object} data - Data to add
 * @param {Object} options - Additional options
 * @returns {Promise<string>} Document ID
 */
export const addDocument = async (collectionName, data, options = {}) => {
  try {
    const docData = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      ...options.additionalFields
    };

    const docRef = await addDoc(collection(db, collectionName), docData);
    console.log(`Document added to ${collectionName} with ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error(`Error adding document to ${collectionName}:`, error);
    throw new Error(`Failed to add ${collectionName.slice(0, -1)}. Please try again.`);
  }
};

/**
 * Generic function to get a document by ID
 * @param {string} collectionName - Name of the collection
 * @param {string} docId - Document ID
 * @returns {Promise<Object|null>} Document data or null
 */
export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error getting document from ${collectionName}:`, error);
    return null;
  }
};

/**
 * Generic function to update a document
 * @param {string} collectionName - Name of the collection
 * @param {string} docId - Document ID
 * @param {Object} data - Data to update
 * @returns {Promise<void>}
 */
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
    console.log(`Document updated in ${collectionName} with ID: ${docId}`);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
    throw new Error(`Failed to update ${collectionName.slice(0, -1)}. Please try again.`);
  }
};

/**
 * Generic function to delete a document
 * @param {string} collectionName - Name of the collection
 * @param {string} docId - Document ID
 * @returns {Promise<void>}
 */
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log(`Document deleted from ${collectionName} with ID: ${docId}`);
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
    throw new Error(`Failed to delete ${collectionName.slice(0, -1)}. Please try again.`);
  }
};

/**
 * Generic function to query documents with filters
 * @param {string} collectionName - Name of the collection
 * @param {Array} filters - Array of filter conditions
 * @param {Object} options - Query options (orderBy, limit, etc.)
 * @returns {Promise<Array>} Array of documents
 */
export const queryDocuments = async (collectionName, filters = [], options = {}) => {
  try {
    let q = collection(db, collectionName);
    
    // Apply filters
    filters.forEach(filter => {
      q = query(q, where(filter.field, filter.operator, filter.value));
    });
    
    // Apply ordering
    if (options.orderBy) {
      q = query(q, orderBy(options.orderBy.field, options.orderBy.direction || 'asc'));
    }
    
    // Apply limit
    if (options.limit) {
      q = query(q, limit(options.limit));
    }
    
    // Apply pagination
    if (options.startAfter) {
      q = query(q, startAfter(options.startAfter));
    }

    const querySnapshot = await getDocs(q);
    const documents = [];
    
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    
    return documents;
  } catch (error) {
    console.error(`Error querying ${collectionName}:`, error);
    throw new Error(`Failed to fetch ${collectionName}. Please try again.`);
  }
};

/**
 * Real-time listener for documents
 * @param {string} collectionName - Name of the collection
 * @param {Array} filters - Array of filter conditions
 * @param {Function} callback - Callback function for updates
 * @param {Object} options - Query options
 * @returns {Function} Unsubscribe function
 */
export const subscribeToDocuments = (collectionName, filters = [], callback, options = {}) => {
  try {
    let q = collection(db, collectionName);
    
    // Apply filters
    filters.forEach(filter => {
      q = query(q, where(filter.field, filter.operator, filter.value));
    });
    
    // Apply ordering
    if (options.orderBy) {
      q = query(q, orderBy(options.orderBy.field, options.orderBy.direction || 'asc'));
    }
    
    // Apply limit
    if (options.limit) {
      q = query(q, limit(options.limit));
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      callback(documents);
    }, (error) => {
      console.error(`Error in real-time listener for ${collectionName}:`, error);
      callback(null, error);
    });

    return unsubscribe;
  } catch (error) {
    console.error(`Error setting up listener for ${collectionName}:`, error);
    return () => {}; // Return empty function
  }
};

/**
 * Batch write operations
 * @param {Array} operations - Array of operations {type, collection, id?, data}
 * @returns {Promise<void>}
 */
export const batchWrite = async (operations) => {
  try {
    const batch = writeBatch(db);
    
    operations.forEach(operation => {
      const { type, collection: collectionName, id, data } = operation;
      
      switch (type) {
        case 'add':
          const newDocRef = doc(collection(db, collectionName));
          batch.set(newDocRef, {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
          break;
          
        case 'update':
          const updateDocRef = doc(db, collectionName, id);
          batch.update(updateDocRef, {
            ...data,
            updatedAt: serverTimestamp()
          });
          break;
          
        case 'delete':
          const deleteDocRef = doc(db, collectionName, id);
          batch.delete(deleteDocRef);
          break;
          
        default:
          console.warn(`Unknown batch operation type: ${type}`);
      }
    });
    
    await batch.commit();
    console.log('Batch write completed successfully');
  } catch (error) {
    console.error('Error in batch write:', error);
    throw new Error('Failed to complete batch operation. Please try again.');
  }
};

/**
 * Transaction operation
 * @param {Function} transactionFunction - Function to execute in transaction
 * @returns {Promise<any>} Transaction result
 */
export const executeTransaction = async (transactionFunction) => {
  try {
    const result = await runTransaction(db, transactionFunction);
    console.log('Transaction completed successfully');
    return result;
  } catch (error) {
    console.error('Error in transaction:', error);
    throw new Error('Failed to complete transaction. Please try again.');
  }
};

// Specific business logic functions using the generic functions above

/**
 * Submit a general inquiry to Firebase
 * @param {Object} inquiryData - The inquiry data
 * @returns {Promise<string>} Document ID of the created inquiry
 */
export const submitInquiry = async (inquiryData) => {
  return addDocument(COLLECTIONS.INQUIRIES, {
    ...inquiryData,
    status: 'new'
  });
};

/**
 * Submit a demo request to Firebase
 * @param {Object} demoData - The demo request data
 * @returns {Promise<string>} Document ID of the created demo request
 */
export const submitDemoRequest = async (demoData) => {
  return addDocument(COLLECTIONS.DEMO_REQUESTS, {
    ...demoData,
    status: 'pending',
    contacted: false
  });
};

/**
 * Submit a consultation request to Firebase
 * @param {Object} consultationData - The consultation request data
 * @returns {Promise<string>} Document ID of the created consultation request
 */
export const submitConsultationRequest = async (consultationData) => {
  return addDocument(COLLECTIONS.CONSULTATIONS, {
    ...consultationData,
    status: 'pending',
    scheduled: false
  });
};

/**
 * Submit newsletter signup to Firebase
 * @param {Object} signupData - The newsletter signup data
 * @returns {Promise<string>} Document ID of the created signup
 */
export const submitNewsletterSignup = async (signupData) => {
  return addDocument(COLLECTIONS.NEWSLETTER_SIGNUPS, {
    ...signupData,
    status: 'active'
  });
};

/**
 * Submit a contact form to Firebase
 * @param {Object} contactData - The contact form data
 * @returns {Promise<string>} Document ID of the created contact form
 */
export const submitContactForm = async (contactData) => {
  return addDocument(COLLECTIONS.CONTACT_FORMS, {
    ...contactData,
    status: 'new',
    responded: false
  });
};

/**
 * Get user's assessments
 * @param {string} userId - User ID
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of user assessments
 */
export const getUserAssessments = async (userId, options = {}) => {
  const filters = [{ field: 'userId', operator: '==', value: userId }];
  const queryOptions = {
    orderBy: { field: 'createdAt', direction: 'desc' },
    ...options
  };
  
  return queryDocuments(COLLECTIONS.ASSESSMENT_RESULTS, filters, queryOptions);
};

/**
 * Get recent inquiries (admin function)
 * @param {number} limitCount - Number of inquiries to fetch
 * @returns {Promise<Array>} Array of recent inquiries
 */
export const getRecentInquiries = async (limitCount = 10) => {
  const options = {
    orderBy: { field: 'createdAt', direction: 'desc' },
    limit: limitCount
  };
  
  return queryDocuments(COLLECTIONS.INQUIRIES, [], options);
};

/**
 * Update inquiry status
 * @param {string} inquiryId - Inquiry ID
 * @param {string} status - New status
 * @param {Object} additionalData - Additional data to update
 * @returns {Promise<void>}
 */
export const updateInquiryStatus = async (inquiryId, status, additionalData = {}) => {
  return updateDocument(COLLECTIONS.INQUIRIES, inquiryId, {
    status,
    ...additionalData
  });
};

/**
 * Subscribe to user's notifications
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function
 * @returns {Function} Unsubscribe function
 */
export const subscribeToUserNotifications = (userId, callback) => {
  const filters = [
    { field: 'userId', operator: '==', value: userId },
    { field: 'read', operator: '==', value: false }
  ];
  const options = {
    orderBy: { field: 'createdAt', direction: 'desc' },
    limit: 20
  };
  
  return subscribeToDocuments(COLLECTIONS.NOTIFICATIONS, filters, callback, options);
};

// Utility functions

/**
 * Convert Firestore timestamp to JavaScript Date
 * @param {Timestamp} timestamp - Firestore timestamp
 * @returns {Date|null} JavaScript Date object or null
 */
export const timestampToDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return null;
  return timestamp.toDate();
};

/**
 * Create a Firestore timestamp from a Date
 * @param {Date} date - JavaScript Date object
 * @returns {Timestamp} Firestore timestamp
 */
export const dateToTimestamp = (date) => {
  return Timestamp.fromDate(date);
};

// Legacy compatibility functions (keeping existing API)
export const submitInquiry_legacy = submitInquiry;
export const submitDemoRequest_legacy = submitDemoRequest;
export const submitConsultationRequest_legacy = submitConsultationRequest;
export const submitNewsletterSignup_legacy = submitNewsletterSignup;
export const submitContactForm_legacy = submitContactForm;

export default {
  COLLECTIONS,
  addDocument,
  getDocument,
  updateDocument,
  deleteDocument,
  queryDocuments,
  subscribeToDocuments,
  batchWrite,
  executeTransaction,
  submitInquiry,
  submitDemoRequest,
  submitConsultationRequest,
  submitNewsletterSignup,
  submitContactForm,
  getUserAssessments,
  getRecentInquiries,
  updateInquiryStatus,
  subscribeToUserNotifications,
  timestampToDate,
  dateToTimestamp
};
