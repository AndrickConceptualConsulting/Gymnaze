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
                {/* Placeholder routes - will be implemented later */}
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
                <Route path="/pricing" element={
                  <PageTransition>
                    <PlaceholderPage title="Pricing Page" />
                  </PageTransition>
                } />
                <Route path="/about" element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                } />
                <Route path="/blog" element={
                  <PageTransition>
                    <PlaceholderPage title="Blog" />
                  </PageTransition>
                } />
                <Route path="/tools" element={
                  <PageTransition>
                    <PlaceholderPage title="Free Tools" />
                  </PageTransition>
                } />
                <Route path="/events" element={
                  <PageTransition>
                    <PlaceholderPage title="Events" />
                  </PageTransition>
                } />
                <Route path="/demo" element={
                  <PageTransition>
                    <PlaceholderPage title="Demo" />
                  </PageTransition>
                } />
                <Route path="/support" element={
                  <PageTransition>
                    <PlaceholderPage title="Support Center" />
                  </PageTransition>
                } />
                <Route path="/consultation" element={
                  <PageTransition>
                    <Inquiry />
                  </PageTransition>
                } />
                <Route path="/inquiry" element={
                  <PageTransition>
                    <Inquiry />
                  </PageTransition>
                } />
                <Route path="/get-started" element={
                  <PageTransition>
                    <Inquiry />
                  </PageTransition>
                } />
                <Route path="/test" element={
                  <PageTransition>
                    <PlaceholderPage title="Assessment" />
                  </PageTransition>
                } />
                {/* Additional footer routes */}
                <Route path="/privacy" element={
                  <PageTransition>
                    <PlaceholderPage title="Privacy Policy" />
                  </PageTransition>
                } />
                <Route path="/terms" element={
                  <PageTransition>
                    <PlaceholderPage title="Terms of Service" />
                  </PageTransition>
                } />
                <Route path="/cookies" element={
                  <PageTransition>
                    <PlaceholderPage title="Cookie Policy" />
                  </PageTransition>
                } />
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
                <Route path="/contact" element={
                  <PageTransition>
                    <PlaceholderPage title="Contact Us" />
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
