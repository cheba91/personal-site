export const primaryColor = 'rgb(247,197,121)';
// export const primaryColor = 'rgb(183,156,254)';

export const theme = {
   typography: {
      fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
   },
   palette: {
      mode: 'dark',
      primary: {
         main: primaryColor,
      },
      text: {
         primary: '#f1f1f1',
      },
      dark: {
         main: 'rgb(18, 18, 18)',
         light: 'rgb(30, 30, 30)',
         cardBg: `linear-gradient(to right, rgb(29, 29, 29), rgb(37, 37, 37))`,
      },
      light: {
         main: '#efefef',
         light: '#fff',
      },
      transparent: {
         main: 'rgba(0,0,0,.5)',
      },
   },
   shape: {
      borderRadius: 15,
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               textTransform: 'none',
               '&:hover': {
                  background: 'none',
               },
            },
         },
      },
      MuiCssBaseline: {
         styleOverrides: {
            'input,input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus':
               {
                  WebkitTextFillColor: '#f1f1f1 !important',
                  WebkitBoxShadow: `inset -4px -6px 6px 1px rgb(42 42 42), inset 6px 6px 6px 0px rgb(10 10 10) !important`,
                  boxShadow: `inset -4px -6px 6px 1px rgb(42 42 42), inset 6px 6px 6px 0px rgb(10 10 10) !important`,
                  transition:
                     'background-color 5000s ease-in-out 0s !important',
                  backgroundColor: 'transparent !important',
                  backgroundClip: 'text !important',
                  borderRadius: '15px',
                  WebkitBackgroundClip: 'text !important',
               },

            fieldset: {
               border: 'none !important',
            },
            '*:focus': { outline: 'none' },
            body: {
               // Scroll bar
               scrollbarColor: '#6b6b6b #2b2b2b',
               '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                  backgroundColor: '#2b2b2b',
               },
               '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                  borderRadius: 8,
                  backgroundColor: 'rgb(30, 30, 30)',
                  minHeight: 24,
                  border: '2px solid #2b2b2b',
               },
               '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
                  {
                     backgroundColor: '#959595',
                  },
               '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
                  {
                     backgroundColor: '#959595',
                  },
               '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                  {
                     backgroundColor: '#959595',
                  },
               '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                  backgroundColor: '#2b2b2b',
               },
            },
         },
      },
   },
};
