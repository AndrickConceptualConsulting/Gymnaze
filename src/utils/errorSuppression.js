// Error suppression utility for known external script issues
// This helps reduce console noise from browser extensions and third-party services

// Check if error suppression is enabled
const shouldSuppressErrors = import.meta.env.VITE_SUPPRESS_EXTERNAL_ERRORS !== 'false';

const suppressedErrors = [
  'web-client-content-script.js', // Browser extension errors
  'MutationObserver', // Extension DOM observation errors
  'play.google.com/log', // YouTube/Google Play logging errors
  'chrome-extension://', // Any Chrome extension errors
  'moz-extension://', // Firefox extension errors
  'safari-extension://', // Safari extension errors
  'Content Security Policy', // CSP violations from external scripts
  'apis.google.com/js/api.js', // Google API loading issues
  'googletagmanager.com', // Google Analytics loading issues
  'Refused to load the script', // General script loading CSP violations
  'CONFIGURATION_NOT_FOUND', // Firebase Auth not enabled
  'identitytoolkit/v3/relyingparty/getProjectConfig', // Firebase Auth config requests
];

const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

// Only apply suppression if enabled
if (shouldSuppressErrors) {

// Override console.error to filter out known external errors
console.error = (...args) => {
  const message = args.join(' ');
  
  // Check if this is a known external error we want to suppress
  const shouldSuppress = suppressedErrors.some(pattern => 
    message.includes(pattern)
  );
  
  if (!shouldSuppress) {
    originalConsoleError.apply(console, args);
  }
};

// Override console.warn for similar filtering
console.warn = (...args) => {
  const message = args.join(' ');
  
  // Only suppress specific warnings from external scripts
  const shouldSuppress = suppressedErrors.some(pattern => 
    message.includes(pattern) && 
    (message.includes('401') || message.includes('400') || message.includes('Unauthorized'))
  );
  
  if (!shouldSuppress) {
    originalConsoleWarn.apply(console, args);
  }
};

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  const message = event.reason?.message || event.reason || '';
  
  // Suppress known external promise rejections
  const shouldSuppress = suppressedErrors.some(pattern => 
    message.includes && message.includes(pattern)
  );
  
  if (shouldSuppress) {
    event.preventDefault();
    return;
  }
  
  // Log legitimate errors
  console.error('Unhandled promise rejection:', event.reason);
});

// Global error handler for script errors
window.addEventListener('error', (event) => {
  const message = event.message || '';
  const source = event.filename || '';
  
  // Suppress known external script errors
  const shouldSuppress = suppressedErrors.some(pattern => 
    message.includes(pattern) || source.includes(pattern)
  );
  
  if (shouldSuppress) {
    event.preventDefault();
    return true;
  }
  
  // Allow legitimate errors to be processed normally
  return false;
});

} // End of shouldSuppressErrors check

export const restoreConsole = () => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
};

export default {
  suppressedErrors,
  restoreConsole,
  isEnabled: shouldSuppressErrors,
};
