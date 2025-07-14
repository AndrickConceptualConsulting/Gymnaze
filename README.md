# GYMNAZE

A modern sports psychology assessment platform built with React and Firebase, designed to help athletes, coaches, and parents optimize mental performance in sports.

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern UI framework with hooks and functional components
- **Vite** - Fast build tool and development server
- **Material-UI (MUI)** - Component library for consistent design
- **React Router** - Client-side routing
- **React Hook Form** - Efficient form handling

### Backend & Services
- **Firebase v10** (Latest v9+ modular SDK)
  - **Authentication** - User management with social login support
  - **Firestore** - NoSQL database for real-time data
  - **Storage** - File uploads and media management
  - **Hosting** - Static site hosting
  - **Analytics** - User behavior tracking

### Authentication Features
- Email/password authentication
- Google OAuth integration
- Facebook OAuth integration
- Password reset functionality
- User profile management
- Role-based access control (athlete, coach, parent, admin)

## 🏗️ Project Structure

```
gymnaze/
├── src/
│   ├── components/         # Reusable UI components
│   ├── contexts/          # React contexts (AuthContext)
│   ├── pages/             # Page components
│   ├── services/          # Firebase service modules
│   │   ├── firebase.js    # Firebase configuration & initialization
│   │   ├── auth.js        # Authentication service
│   │   └── database.js    # Firestore database service
│   ├── theme/             # Material-UI theme configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx           # React app entry point
├── public/                # Static assets
├── firebase.json          # Firebase hosting configuration
├── .env.example           # Environment variables template
└── package.json           # Dependencies and scripts
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI
- A Firebase project

### 1. Clone and Install
```bash
git clone <repository-url>
cd gymnaze
npm install
```

### 2. Firebase Configuration
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication, Firestore, and Storage
3. Copy your Firebase config from Project Settings
4. Create a `.env` file based on `.env.example`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Enable Authentication Providers
In Firebase Console → Authentication → Sign-in method:
- Enable Email/Password
- Enable Google (configure OAuth consent)
- Enable Facebook (configure app ID and secret)

### 4. Configure Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public collections (inquiries, demo requests, etc.)
    match /{collection}/{document} {
      allow create: if request.auth != null;
      allow read, update, delete: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.userType == 'admin');
    }
  }
}
```

### 5. Development
```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### 6. Deployment
```bash
# Login to Firebase (first time only)
firebase login

# Initialize Firebase in project (first time only)
firebase init

# Deploy to Firebase Hosting
npm run deploy
```

## 🔥 Firebase Best Practices Implemented

### Modern v9+ SDK
- **Modular imports** - Tree-shaking for smaller bundle size
- **Functional API** - Modern JavaScript patterns
- **TypeScript ready** - Better development experience

### Security
- **Environment variables** - API keys and sensitive data protection
- **Security rules** - Database access control
- **Authentication state management** - Secure user sessions

### Performance
- **Code splitting** - Lazy loading of authentication functions
- **Emulator support** - Local development without hitting production
- **Optimized imports** - Only import what you need

### Development Experience
- **React Context** - Global authentication state management
- **Custom hooks** - Reusable authentication logic
- **Higher-order components** - Protected route patterns
- **Error handling** - User-friendly error messages

## 📱 Features

### Current Features
- Modern, responsive design
- User authentication system
- Form submissions to Firestore
- Real-time data synchronization
- Role-based access control

### Planned Features
- Sports psychology assessments
- Performance analytics dashboard
- Coach-athlete communication tools
- Progress tracking and reporting
- Mobile app (React Native)

## 🧪 Development Environment

### Emulator Setup
The project is configured to use Firebase Emulators for local development:

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Start emulators
firebase emulators:start
```

Available emulators:
- Authentication: `http://localhost:9099`
- Firestore: `http://localhost:8080`
- Storage: `http://localhost:9199`

### Environment Detection
The app automatically detects localhost and connects to emulators in development mode.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the documentation in `/docs`

---

**Built with ❤️ for the sports psychology community**
