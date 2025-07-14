# GYMNAZE Email Setup Instructions

## Step 1: SendGrid Setup

1. **Create SendGrid Account**
   - Go to https://sendgrid.com
   - Sign up for free account
   - Verify your email

2. **Get API Key**
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Choose "Restricted Access"
   - Enable "Mail Send" permission
   - Copy the API key (save it securely!)

3. **Verify Sender Email**
   - Go to Settings → Sender Authentication
   - Add and verify `noreply@gymnaze.com` or your domain email
   - Complete domain verification if using custom domain

## Step 2: Firebase Setup

1. **Login to Firebase** (run in terminal)
   ```bash
   firebase login
   ```

2. **Set SendGrid API Key** (replace YOUR_SENDGRID_API_KEY)
   ```bash
   cd "C:\Users\Owner\OneDrive\Desktop\projects\gymnaze"
   firebase functions:config:set sendgrid.api_key="YOUR_SENDGRID_API_KEY"
   ```

3. **Deploy Functions**
   ```bash
   firebase deploy --only functions
   ```

4. **Deploy Firestore Rules**
   ```bash
   firebase deploy --only firestore:rules
   ```

## Step 3: Update Environment Variables

Update your `.env` file with:
```env
VITE_SENDGRID_API_KEY=your-actual-sendgrid-api-key
VITE_CEO_EMAIL=zjohnson@gymnaze.com
```

## Step 4: Test the System

1. **Fill out the inquiry form** on your website
2. **Check Firestore** for the new document
3. **Check emails** - both user confirmation and admin notification
4. **Check Firebase Functions logs**:
   ```bash
   firebase functions:log
   ```

## Current Email Flow

### Inquiry Form Emails:
- **User gets**: Professional welcome email with next steps
- **CEO gets**: Detailed inquiry with all form data and action buttons

### Newsletter Form Emails:
- **User gets**: Newsletter confirmation
- **CEO gets**: New subscriber notification

## Troubleshooting

If emails don't send:
1. Check Firebase Functions logs: `firebase functions:log`
2. Verify SendGrid API key is set: `firebase functions:config:get`
3. Check Firestore documents have `emailsSent: true`
4. Verify sender email is authenticated in SendGrid

## Cost
- SendGrid: Free for 100 emails/day
- Firebase Functions: Free tier covers normal usage
- Total: $0 for small volume

## Support
If you have issues, check:
- Firebase Console → Functions → Logs
- SendGrid Dashboard → Activity
- Browser Console for any client-side errors