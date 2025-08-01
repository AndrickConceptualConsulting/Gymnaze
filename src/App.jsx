import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import PlaceholderPage from './components/PlaceholderPage';
import ErrorBoundary from './components/ErrorBoundary';
import DevelopmentWarning from './components/DevelopmentWarning';
import FirebaseSetupGuide from './components/FirebaseSetupGuide';
import Home from './pages/Home';
import Athletes from './pages/Athletes';
import Coaches from './pages/Coaches';
import Parents from './pages/Parents';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Inquiry from './pages/Inquiry';
import Newsletter from './pages/Newsletter';
import Unsubscribe from './pages/Unsubscribe';
import { PageTransition } from './components/animations/SmartAnimations';
import ScrollToTop from './utils/ScrollToTop';

// Import font sources
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';

// Import animation styles
import './styles/animations.css';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <CssBaseline />
        <AuthProvider>
          <Router future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
          }}>
          <ScrollToTop />
          <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
            minHeight: '100vh' 
            }}>
              <NavigationBar />
              <Box component="main" sx={{ flexGrow: 1 }}>
                <ErrorBoundary>
              <Routes>
                <Route path="/" element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } />
                
                {/* Main content pages */}
                <Route path="/athletes" element={
                  <PageTransition>
                    <Athletes />
                  </PageTransition>
                } />
                <Route path="/coaches" element={
                  <PageTransition>
                    <Coaches />
                  </PageTransition>
                } />
                <Route path="/parents" element={
                  <PageTransition>
                    <Parents />
                  </PageTransition>
                } />
                <Route path="/about" element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                } />
                
                {/* Early access / inquiry page */}
                <Route path="/early-access" element={
                  <PageTransition>
                    <Inquiry />
                  </PageTransition>
                } />
                
                {/* Newsletter system */}
                <Route path="/newsletter" element={
                  <PageTransition>
                    <Newsletter />
                  </PageTransition>
                } />
                <Route path="/unsubscribe" element={
                  <PageTransition>
                    <Unsubscribe />
                  </PageTransition>
                } />
                
                {/* Legal pages */}
                <Route path="/privacy" element={
                  <PageTransition>
                    <Privacy />
                  </PageTransition>
                } />
                <Route path="/terms" element={
                  <PageTransition>
                    <PlaceholderPage title="Terms of Service" />
                  </PageTransition>
                } />
                
                {/* Legacy redirects - keeping for backwards compatibility */}
                <Route path="/inquiry" element={
                  <PageTransition>
                    <Inquiry />
                  </PageTransition>
                } />
              </Routes>
            </ErrorBoundary>
            </Box>
            <Footer />
            <DevelopmentWarning />
            <FirebaseSetupGuide />
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
