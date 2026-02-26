import { createTheme } from '@mui/material/styles';

export const createAppTheme = (isDarkMode: boolean) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#6366f1',
        light: '#818cf8',
        dark: '#4f46e5',
      },
      secondary: {
        main: '#ec4899',
        light: '#f472b6',
        dark: '#db2777',
      },
      background: {
        default: isDarkMode ? '#0f172a' : '#ffffff',
        paper: isDarkMode ? '#1e293b' : '#f8fafc',
      },
      text: {
        primary: isDarkMode ? '#f1f5f9' : '#0f172a',
        secondary: isDarkMode ? '#cbd5e1' : '#475569',
      },
      divider: isDarkMode ? '#334155' : '#e2e8f0',
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-0.015em',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
            },
          },
          contained: {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: 'box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          elevation1: {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          },
          elevation2: {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          },
          elevation3: {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
              transition: 'box-shadow 0.3s',
              '&:hover': {
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              },
              '&.Mui-focused': {
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
              },
            },
          },
        },
      },
    },
  });
};
