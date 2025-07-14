# Known External Script Issues

This document outlines known console errors that may appear during development and how they're being handled.

## Browser Extension Errors

### MutationObserver Error
```
web-client-content-script.js:2 Uncaught TypeError: Failed to execute 'observe' on 'MutationObserver': parameter 1 is not of type 'Node'.
```

**Cause**: Browser extensions (ad blockers, privacy tools, etc.) inject content scripts that try to observe DOM nodes before they're ready.

**Impact**: Visual only in console, doesn't affect app functionality.

**Solution**: Error suppression utility filters these out in development.

## YouTube Embed Issues

### Google Play Authentication Errors
```
POST https://play.google.com/log?hasfast=true 401 (Unauthorized)
```

**Cause**: YouTube's embedded player attempts to authenticate with Google Play services for analytics/logging.

**Impact**: Video playback works normally, only logging fails.

**Solutions Implemented**:
- Using `youtube-nocookie.com` domain
- Disabled unnecessary YouTube features
- Added proper referrer policy
- Implemented SafeYouTubeEmbed component with error handling

## Firebase Configuration

### Identity Toolkit Error
```
GET https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig 400 (Bad Request)
CONFIGURATION_NOT_FOUND
```

**Cause**: Firebase project configuration issues or API version mismatches.

**Solutions Implemented**:
- Added error boundaries around Firebase initialization
- Graceful degradation when Firebase services fail
- Better error logging for debugging

## Development vs Production

These errors are typically more visible in development due to:
- Unminified code
- More verbose console logging
- Browser extensions being more active
- CORS restrictions in local development

In production builds, many of these issues are automatically resolved or hidden.

## Error Suppression Strategy

The app includes an error suppression utility (`src/utils/errorSuppression.js`) that:
- Filters known external script errors from console
- Prevents error noise from browser extensions
- Maintains visibility of legitimate application errors
- Can be disabled by calling `restoreConsole()`

## Monitoring

In development mode, a warning notification shows when external script errors are detected, helping developers distinguish between app issues and external interference.
