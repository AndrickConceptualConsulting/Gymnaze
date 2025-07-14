// Content Security Policy configuration
// This can be used to implement CSP at the Vite build level or server level

export const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    // YouTube
    'https://www.youtube-nocookie.com',
    'https://www.youtube.com',
    // Google/Firebase services
    'https://apis.google.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://*.firebaseapp.com',
    'https://*.googleapis.com',
  ],
  'frame-src': [
    "'self'",
    'https://www.youtube-nocookie.com',
    'https://www.youtube.com',
    'https://*.firebaseapp.com',
  ],
  'img-src': [
    "'self'",
    'data:',
    'https:',
    'blob:',
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    'https://fonts.googleapis.com',
  ],
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com',
  ],
  'connect-src': [
    "'self'",
    'https://*.firebaseapp.com',
    'https://*.googleapis.com',
    'https://*.google.com',
    'https://www.google-analytics.com',
    'https://analytics.google.com',
  ],
};

// Generate CSP string
export const generateCSP = () => {
  return Object.entries(cspDirectives)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; ');
};

// For Vite plugin usage
export const viteCSPPlugin = () => {
  return {
    name: 'csp-header',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (process.env.VITE_ENABLE_CSP === 'true') {
          res.setHeader('Content-Security-Policy', generateCSP());
        }
        next();
      });
    },
  };
};

export default {
  cspDirectives,
  generateCSP,
  viteCSPPlugin,
};
