# Email Integration Setup Guide

This guide explains how to set up the complete email flow for the GYMNAZE inquiry form.

## Overview

The email system uses a two-pronged approach:
1. **Client-side**: Simple confirmation email using EmailJS (optional)
2. **Server-side**: Professional email notifications using Firebase Cloud Functions + SendGrid

## Setup Steps

### 1. Firebase Cloud Functions Setup

```bash
# Install Firebase CLI globally (if not already installed)
npm install -g firebase-tools

# Initialize Firebase Functions in your project
cd functions
npm install

# Set SendGrid API key for Cloud Functions
firebase functions:config:set sendgrid.api_key="YOUR_SENDGRID_API_KEY"
```

### 2. SendGrid Configuration

1. **Create SendGrid Account**: Go to [SendGrid](https://sendgrid.com/)
2. **Get API Key**: 
   - Navigate to Settings > API Keys
   - Create a new API key with "Mail Send" permissions
   - Copy the API key
3. **Verify Sender Email**: 
   - Go to Settings > Sender Authentication
   - Verify `noreply@gymnaze.com` (or your domain)
4. **Set up DNS records** for your domain (if using custom domain)

### 3. Environment Variables

Update your `.env` file:

```env
# Existing Firebase config...
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
VITE_FIREBASE_MEASUREMENT_ID=G-ABCDEF1234

# Email Configuration
VITE_SENDGRID_API_KEY=your-sendgrid-api-key
VITE_CEO_EMAIL=zjohnson@gymnaze.com

# EmailJS (optional - for client-side emails)
VITE_EMAILJS_SERVICE_ID=your-emailjs-service-id
VITE_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
VITE_EMAILJS_PUBLIC_KEY=your-emailjs-public-key
```

### 4. Firestore Security Rules

Deploy the security rules:

```bash
firebase deploy --only firestore:rules
```

### 5. Deploy Cloud Functions

```bash
# Deploy functions
firebase deploy --only functions

# Or deploy specific function
firebase deploy --only functions:sendInquiryEmails
```

### 6. Testing the System

#### Local Testing (with Emulators):

```bash
# Start Firebase emulators
firebase emulators:start

# Test with your local app
npm run dev
```

#### Production Testing:

1. Fill out the form on your live site
2. Check Firestore for the inquiry document
3. Check your email for user confirmation
4. Check CEO email for admin notification
5. Review Cloud Functions logs: `firebase functions:log`

## Email Templates

### User Confirmation Email
- **Purpose**: Thank the user and set expectations
- **Sent to**: User's email address
- **Template**: Professional welcome with next steps

### Admin Notification Email
- **Purpose**: Alert CEO of new inquiry with full details
- **Sent to**: CEO email (zjohnson@gymnaze.com)
- **Template**: Detailed inquiry information with action buttons

## Troubleshooting

### Common Issues:

1. **Emails not sending**:
   - Check SendGrid API key configuration
   - Verify sender email is authenticated
   - Check Cloud Functions logs for errors

2. **Firestore permission errors**:
   - Verify security rules are deployed
   - Check that required fields are being sent

3. **Cloud Functions errors**:
   - Check Node.js version (should be 18)
   - Verify all dependencies are installed
   - Check function configuration

### Monitoring:

- **Cloud Functions Logs**: `firebase functions:log`
- **Firestore Console**: Check for new inquiry documents
- **SendGrid Dashboard**: Monitor email delivery stats

## Advanced Features

### Email Templates with SendGrid
For more advanced email templates, you can:
1. Create templates in SendGrid dashboard
2. Use `templateId` instead of HTML in the Cloud Function
3. Pass dynamic data using `dynamicTemplateData`

### Rate Limiting
Consider adding rate limiting to prevent spam:
- Implement IP-based rate limiting in Cloud Functions
- Add CAPTCHA to the form for extra protection

### Analytics
Track form submissions and email delivery:
- Add Google Analytics events
- Monitor SendGrid delivery statistics
- Set up alerts for failed emails

## Cost Estimates

- **Firebase Firestore**: Free tier covers ~20k writes/day
- **Cloud Functions**: Free tier covers ~125k invocations/month
- **SendGrid**: Free tier covers 100 emails/day
- **Total Monthly Cost**: $0 for small volume, scales with usage

## Security Best Practices

1. Never expose API keys in client-side code
2. Use Firebase security rules to validate data
3. Implement rate limiting for form submissions
4. Validate and sanitize all user input
5. Use HTTPS for all communications
6. Monitor for suspicious activity

## Next Steps

1. Set up SendGrid account and get API key
2. Configure Firebase functions with the API key
3. Deploy security rules and functions
4. Test the complete flow
5. Monitor initial submissions and adjust as needed

For any issues, check the Firebase console logs and SendGrid dashboard for detailed error information.
