import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    primary: {
      main: '#2C3C88', // Main Letter Color
      dark: '#1a2652',
      light: '#4b5ba0',
    },
    secondary: {
      main: '#00ACCD', // Accent Color
      dark: '#007891',
      light: '#33bdd3',
    },
    accent: {
      main: '#A6CD3A', // Accent Color
      dark: '#7a9b29',
      light: '#b8d55b',
    },
    warning: {
      main: '#F9A618', // Button Color
      dark: '#d18a0e',
      light: '#fab146',
    },
    background: {
      default: '#0A0F1B', // Background Color
      paper: '#1a2332',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8BCC8',
    },
    divider: '#2C3C88',
  },
  typography: {
    fontFamily: '"Montserrat", "Open Sans", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
        lineHeight: 1.1,
      },
      '@media (max-width:400px)': {
        fontSize: '1.6rem',
      },
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.4rem',
      },
      '@media (max-width:400px)': {
        fontSize: '1.3rem',
      },
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width:400px)': {
        fontSize: '1.2rem',
      },
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
        lineHeight: 1.5,
      },
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '0.85rem',
      },
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    caption: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '0.7rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '@media (max-width:600px)': {
            padding: '10px 20px',
            fontSize: '0.95rem',
          },
        },
        contained: {
          backgroundColor: '#F9A618',
          color: '#0A0F1B',
          '&:hover': {
            backgroundColor: '#d18a0e',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(249, 166, 24, 0.3)',
          },
        },
        outlined: {
          borderColor: '#2C3C88',
          color: '#2C3C88',
          '&:hover': {
            borderColor: '#1a2652',
            backgroundColor: 'rgba(44, 60, 136, 0.08)',
            transform: 'translateY(-2px)',
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
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A0F1B',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(44, 60, 136, 0.2)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0A0F1B',
          color: '#FFFFFF',
          fontFamily: '"Open Sans", sans-serif',
          overflowX: 'hidden',
        },
        '*': {
          boxSizing: 'border-box',
        },
        img: {
          maxWidth: '100%',
          height: 'auto',
        },
      },
    },
  },
});

export default theme;