import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      blue: '#3298dc',

      alternate: {
        main: '#1a2138',
        dark: '#152951',
      },
      cardShadow: 'rgba(0, 0, 0, .11)',
      common: {
        black: '#000',
        white: '#fff',
        yellow: '#FFBB54',
        green: '#00ADA3',
        purple: '#374C98',
        blue: '#3298dc',
        success: '#d1fae5',
      },
      mode: 'dark',
      success: {
        main: '#d1fae5',
      },
      yellow: {
        main: '#fdfaea',
      },
      primary: {
        main: '#e63f40',
        light: '#fdeaf1',
        dark: '#e63f40',
        contrastText: '#fff',
      },
      secondary: {
        light: '#225f8c',
        main: '#96c5e7',
        dark: '#1b4c70',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: '#FFFF',
        secondary: '#000',
      },
      // divider: '#152951',
      background: {
        paper: '#171717',
        // paper: 'linear-gradient(rgb(16, 137, 255), rgb(0, 21, 36))',
        default: '#264469',
        level2: '#333',
        level1: '#2D3748',
      },
    },
    layout: {
      contentWidth: 1236,
    },
    typography: {
      h1: {
        fontSize:
          'linear-gradient(to right, rgb(16, 137, 255), rgb(255, 74, 28))',
        // fontFamily: '"Fascinate", sans-serif',
      },
      // h2: {
      //   fontFamily: '"Fascinate", sans-serif',
      // },
      // h3: {
      //   fontFamily: '"Fascinate", sans-serif',
      // },
      // h4: {
      //   fontFamily: '"Fascinate", sans-serif',
      // },
      // h5: {
      //   fontFamily: '"Fascinate", sans-serif',
      // },
      // fontFamily: '"Poppins-Medium", sans-serif',
      allVariants: {
        color: '#FFFF',
      },
      // caption: {
      //   fontSize: 12,
      // },
      body1: {
        fontSize: '0.8rem',
      },
      h6: {
        fontSize: '0.85rem',
      },
      fontSize: 12,
      button: {
        textTransform: 'none',
        fontWeight: 'medium',
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    components: {
      MuiTouchRipple: false,
      MuiTextField: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiListItemButton: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple!
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 33,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontSize: '14px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          label: {
            fontWeight: 600,
          },

          containedSecondary: {},
        },
      },
    },
    // shape: {
    //   borderRadius: 15,
    // },
  }),
);

export default theme;
