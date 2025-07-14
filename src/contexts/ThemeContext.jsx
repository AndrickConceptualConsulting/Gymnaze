import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

// Enhanced responsive breakpoints
const createResponsiveTheme = (isDarkMode) => {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#00ACCD' : '#2C3C88',
        light: isDarkMode ? '#33BCDA' : '#4b5ba0',
        dark: isDarkMode ? '#007A94' : '#1a2652',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#00ACCD',
        light: '#33BCDA',
        dark: '#007A94',
        contrastText: '#FFFFFF',
      },
      accent: {
        main: '#A6CD3A',
        dark: '#7a9b29',
        light: '#b8d55b',
      },
      warning: {
        main: '#F9A618',
        light: '#fab146',
        dark: '#d18a0e',
        contrastText: '#FFFFFF',
      },
      background: {
        default: isDarkMode ? '#0A0F1B' : '#FFFFFF',
        paper: isDarkMode ? '#1A1F2E' : '#F8F9FA',
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#2C3C88',
        secondary: isDarkMode ? '#B0BEC5' : '#5A6C97',
      },
      divider: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(44, 60, 136, 0.12)',
    },
    typography: {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        '@media (max-width:1200px)': {
          fontSize: '3rem',
        },
        '@media (max-width:900px)': {
          fontSize: '2.5rem',
        },
        '@media (max-width:600px)': {
          fontSize: '2rem',
          lineHeight: 1.1,
        },
        '@media (max-width:400px)': {
          fontSize: '1.8rem',
        },
      },
      h2: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: 1.3,
        '@media (max-width:1200px)': {
          fontSize: '2rem',
        },
        '@media (max-width:900px)': {
          fontSize: '1.75rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
        '@media (max-width:400px)': {
          fontSize: '1.4rem',
        },
      },
      h3: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        fontSize: '1.8rem',
        lineHeight: 1.3,
        '@media (max-width:900px)': {
          fontSize: '1.6rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.4rem',
        },
        '@media (max-width:400px)': {
          fontSize: '1.3rem',
        },
      },
      h4: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1.3rem',
        },
        '@media (max-width:400px)': {
          fontSize: '1.2rem',
        },
      },
      h5: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1.15rem',
        },
      },
      h6: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '1.1rem',
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1rem',
        },
      },
      body1: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.6,
        '@media (max-width:600px)': {
          fontSize: '0.95rem',
          lineHeight: 1.5,
        },
      },
      body2: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.6,
        '@media (max-width:600px)': {
          fontSize: '0.85rem',
        },
      },
      button: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '1rem',
        '@media (max-width:600px)': {
          fontSize: '0.95rem',
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDarkMode ? '#0A0F1B' : '#FFFFFF',
            color: isDarkMode ? '#FFFFFF' : '#2C3C88',
            fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
            overflowX: 'hidden',
            scrollBehavior: 'smooth',
          },
          '*': {
            boxSizing: 'border-box',
          },
          img: {
            maxWidth: '100%',
            height: 'auto',
          },
          // Custom scrollbar
          '::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: isDarkMode ? '#1A1F2E' : '#F8F9FA',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: isDarkMode ? '#00ACCD' : '#2C3C88',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: isDarkMode ? '#33BCDA' : '#4b5ba0',
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: '16px',
            paddingRight: '16px',
            '@media (min-width:600px)': {
              paddingLeft: '24px',
              paddingRight: '24px',
            },
            '@media (min-width:900px)': {
              paddingLeft: '32px',
              paddingRight: '32px',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            fontWeight: 600,
            textTransform: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '@media (max-width:600px)': {
              fontSize: '0.95rem',
            },
          },
          sizeLarge: {
            padding: '16px 32px',
            fontSize: '1.1rem',
            '@media (max-width:600px)': {
              padding: '12px 24px',
              fontSize: '1rem',
            },
          },
          sizeMedium: {
            padding: '12px 24px',
            fontSize: '1rem',
            '@media (max-width:600px)': {
              padding: '10px 20px',
              fontSize: '0.95rem',
            },
          },
          contained: {
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
          },
          outlined: {
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            },
            '@media (max-width:600px)': {
              borderRadius: '8px',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#0A0F1B' : '#FFFFFF',
            color: isDarkMode ? '#FFFFFF' : '#2C3C88',
            boxShadow: isDarkMode 
              ? '0 2px 4px rgba(0, 0, 0, 0.3)' 
              : '0 2px 4px rgba(44, 60, 136, 0.1)',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? '#0A0F1B' : '#FFFFFF',
            backgroundImage: 'none',
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode 
              ? 'rgba(26, 31, 46, 0.95)' 
              : 'rgba(248, 249, 250, 0.95)',
            backdropFilter: 'blur(10px)',
            border: isDarkMode 
              ? '1px solid rgba(0, 172, 205, 0.2)' 
              : '1px solid rgba(44, 60, 136, 0.2)',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          container: {
            '@media (max-width:600px)': {
              margin: 0,
              width: '100%',
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            // Prevent text overflow on small screens
            wordWrap: 'break-word',
            hyphens: 'auto',
          },
        },
      },
    },
  });
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('gymnaze-theme-mode');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Use system preference as default
      setIsDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('gymnaze-theme-mode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = createResponsiveTheme(isDarkMode);

  const contextValue = {
    isDarkMode,
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;