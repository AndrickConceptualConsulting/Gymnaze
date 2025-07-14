// Firebase v9+ SDK configuration for production
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Firebase configuration object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase app
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase initialization failed:', error);
  throw error;
}

// Initialize Firebase services with error handling
let db, auth, storage;

try {
  db = getFirestore(app);
  console.log('✅ Firestore initialized');
} catch (error) {
  console.error('❌ Firestore initialization failed:', error);
}

try {
  auth = getAuth(app);
  console.log('✅ Firebase Auth initialized');
  
  // Handle auth configuration errors
  auth.onAuthStateChanged((user) => {
    // This will trigger the configuration check
  }, (error) => {
    if (error.code === 'auth/internal-error' && error.message.includes('CONFIGURATION_NOT_FOUND')) {
      console.warn('⚠️ Firebase Auth not configured. Please enable Authentication in Firebase Console.');
      console.warn('📋 Steps: Console → Authentication → Get Started → Enable Sign-in Method');
    }
  });
  
} catch (error) {
  console.error('❌ Firebase Auth initialization failed:', error);
  if (error.message && error.message.includes('CONFIGURATION_NOT_FOUND')) {
    console.warn('📋 Please enable Authentication in your Firebase Console:');
    console.warn('   1. Go to https://console.firebase.google.com/');
    console.warn('   2. Select your project');
    console.warn('   3. Click Authentication → Get Started');
    console.warn('   4. Enable at least one sign-in method');
  }
}

try {
  storage = getStorage(app);
  console.log('✅ Firebase Storage initialized');
} catch (error) {
  console.error('❌ Firebase Storage initialization failed:', error);
}

export { db, auth, storage };

// Initialize Analytics conditionally (only in browser environment)
let analytics = null;

if (typeof window !== 'undefined') {
  // Add a timeout to prevent hanging
  const analyticsTimeout = setTimeout(() => {
    console.warn('⚠️ Analytics initialization timeout - continuing without analytics');
  }, 5000);

  isSupported().then((supported) => {
    clearTimeout(analyticsTimeout);
    if (supported && firebaseConfig.measurementId) {
      try {
        analytics = getAnalytics(app);
        console.log('🔥 Firebase Analytics initialized');
      } catch (error) {
        console.warn('⚠️ Analytics initialization failed (non-critical):', error.message);
      }
    } else {
      console.log('📊 Analytics not supported or measurement ID missing');
    }
  }).catch((error) => {
    clearTimeout(analyticsTimeout);
    console.warn('⚠️ Analytics support check failed (non-critical):', error.message);
  });
}

export { analytics };

// Export the app instance
export default app;
