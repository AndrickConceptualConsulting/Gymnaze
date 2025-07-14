# Firebase Setup Guide for GYMNAZE

This comprehensive guide will help you set up Firebase v10 with modern best practices for the GYMNAZE website.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Firebase CLI installed: `npm install -g firebase-tools`
- A Google account

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Enter project name: `gymnaze-production` (or your preferred name)
4. Enable Google Analytics (recommended for user insights)
5. Choose your Analytics account or create a new one
6. Click "Create project"

## Step 2: Set up Authentication

1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Enable the following providers:

### Email/Password
- Click "Email/Password"
- Enable "Email/Password"
- Optionally enable "Email link (passwordless sign-in)"
- Click "Save"

### Google OAuth
- Click "Google"
- Enable Google sign-in
- Set support email
- Click "Save"

### Facebook OAuth (Optional)
- Click "Facebook"
- Enter App ID and App secret from [Facebook Developers](https://developers.facebook.com)
- Click "Save"

## Step 3: Set up Firestore Database

1. Go to **Firestore Database** → **Create database**
2. **Start in production mode** (recommended)
3. Select location: `us-central1` (or closest to your users)
4. Click "Done"

### Configure Security Rules
Replace default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public collections for inquiries and forms
    match /inquiries/{document} {
      allow create: if request.auth != null;
      allow read, update: if request.auth != null && 
        (resource.data.userId == request.auth.uid || isAdmin());
    }
    
    match /demoRequests/{document} {
      allow create: if request.auth != null;
      allow read, update: if request.auth != null && 
        (resource.data.userId == request.auth.uid || isAdmin());
    }
    
    match /consultations/{document} {
      allow create: if request.auth != null;
      allow read, update: if request.auth != null && 
        (resource.data.userId == request.auth.uid || isAdmin());
    }
    
    match /newsletterSignups/{document} {
      allow create: if request.auth != null;
      allow read: if request.auth != null && isAdmin();
    }
    
    match /contactForms/{document} {
      allow create: if request.auth != null;
      allow read, update: if request.auth != null && 
        (resource.data.userId == request.auth.uid || isAdmin());
    }
    
    match /assessments/{document} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    match /assessmentResults/{document} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    // Helper function to check admin role
    function isAdmin() {
      return request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.userType == 'admin';
    }
  }
}
```

## Step 4: Set up Cloud Storage

1. Go to **Storage** → **Get started**
2. Start in production mode
3. Select location (same as Firestore)
4. Update storage rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can upload to their own folder
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public uploads (profile pictures, etc.)
    match /public/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 5: Get Firebase Configuration

1. Click the gear icon ⚙️ → **Project settings**
2. Scroll to "Your apps" section
3. Click web icon `</>` to add a web app
4. App nickname: `gymnaze-web-app`
5. Check "Also set up Firebase Hosting"
6. Click "Register app"
7. Copy the configuration object

## Step 6: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Add your Firebase configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyC...
VITE_FIREBASE_AUTH_DOMAIN=gymnaze-production.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=gymnaze-production
VITE_FIREBASE_STORAGE_BUCKET=gymnaze-production.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123...
VITE_FIREBASE_MEASUREMENT_ID=G-ABC123DEF

# Application Settings
VITE_APP_NAME=GYMNAZE
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=production
```

## Step 7: Set up Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Select:
   - **Hosting**: Configure files for Firebase Hosting
   - **Firestore**: Configure security rules and indexes
   - **Storage**: Configure security rules
5. Use existing project: Select your Firebase project
6. Public directory: `dist`
7. Single-page app: **Yes**
8. Automatic builds with GitHub: **No** (for now)

## Step 8: Development Environment Setup

### Install Firebase Emulators
```bash
firebase init emulators
```

Select:
- Authentication Emulator
- Firestore Emulator
- Storage Emulator

### Start Emulators for Development
```bash
firebase emulators:start
```

The app will automatically detect localhost and connect to emulators.

## Step 9: Testing the Setup

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Authentication
- Visit `http://localhost:5173`
- Try creating an account
- Test Google sign-in
- Check Firebase Console → Authentication → Users

### 3. Test Database Operations
- Submit forms when implemented
- Check Firebase Console → Firestore Database

### 4. Test Storage (When Implemented)
- Upload profile pictures
- Check Firebase Console → Storage

## 📊 Data Collections Structure

The application uses these Firestore collections:

### users
```javascript
{
  uid: "user_id",
  email: "user@example.com",
  displayName: "John Doe",
  firstName: "John",
  lastName: "Doe",
  userType: "athlete", // athlete | coach | parent | admin
  profileCompleted: false,
  subscriptionTier: "free", // free | basic | premium | enterprise
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### inquiries
```javascript
{
  userId: "user_id",
  name: "John Doe",
  email: "user@example.com",
  message: "Inquiry message",
  status: "new", // new | in-progress | resolved
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### assessments
```javascript
{
  userId: "user_id",
  assessmentType: "mental-performance",
  questions: [...],
  responses: [...],
  score: 85,
  completedAt: timestamp,
  createdAt: timestamp
}
```

## 🔧 Advanced Configuration

### Custom Domain Setup
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter your domain (e.g., `app.gymnaze.com`)
4. Follow DNS configuration instructions

### Email Verification Setup
1. Go to Authentication → Templates
2. Customize email verification template
3. Set up custom email sending domain (optional)

### Analytics Setup
1. Go to Analytics → Events
2. Configure custom events for user actions
3. Set up conversion tracking

## 🚀 Deployment

### Production Deployment
```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy

# Deploy specific services
firebase deploy --only hosting
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

### Environment Management
Create separate Firebase projects for different environments:
- `gymnaze-development` - Development
- `gymnaze-staging` - Staging
- `gymnaze-production` - Production

## 🔍 Monitoring and Analytics

### Firebase Analytics
- User engagement tracking
- Custom event tracking
- Conversion funnels
- User demographics

### Performance Monitoring
1. Enable Performance Monitoring in Firebase Console
2. Add performance monitoring to your app
3. Monitor page load times and user interactions

### Crashlytics (Future)
1. Enable Crashlytics for error tracking
2. Set up custom error logging
3. Monitor application stability

## 🛠️ Troubleshooting

### Common Issues

**"Permission denied" errors**
- Check Firestore security rules
- Verify user authentication status
- Ensure proper user roles

**Authentication not working**
- Verify environment variables
- Check Firebase Console for enabled providers
- Ensure correct redirect URIs

**Emulators not connecting**
- Restart emulators: `firebase emulators:start`
- Check port conflicts
- Verify emulator configuration

**Build errors**
- Clear node_modules: `rm -rf node_modules && npm install`
- Update Firebase SDK: `npm update firebase`
- Check for version conflicts

### Getting Help

1. **Firebase Documentation**: [firebase.google.com/docs](https://firebase.google.com/docs)
2. **Firebase Support**: [firebase.google.com/support](https://firebase.google.com/support)
3. **Community Forum**: [stackoverflow.com/questions/tagged/firebase](https://stackoverflow.com/questions/tagged/firebase)

## 📈 Next Steps

1. **Implement Authentication UI**: Create login/signup forms
2. **Build Assessment System**: Sports psychology questionnaires
3. **Add File Uploads**: Profile pictures, documents
4. **Set up Email Notifications**: Welcome emails, assessment results
5. **Implement Real-time Features**: Live chat, notifications
6. **Mobile App**: React Native with shared Firebase backend

## 🔐 Security Best Practices

### Production Checklist
- [ ] Update Firestore security rules for production
- [ ] Enable App Check for additional security
- [ ] Set up proper CORS configurations
- [ ] Configure rate limiting
- [ ] Enable audit logging
- [ ] Set up backup and recovery
- [ ] Configure monitoring alerts

### Regular Maintenance
- Monthly security rule reviews
- Quarterly dependency updates
- Performance monitoring
- Cost optimization reviews
- User feedback integration

---

**Support Contact**: zjohnson@gymnaze.com

**Last Updated**: December 2024

**Firebase SDK Version**: v10.7.0
