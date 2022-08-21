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
            fieldset: {
               border: 'none !important',
            },
            body: {
               scrollbarColor: '#6b6b6b #2b2b2b',
               '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                  backgroundColor: '#2b2b2b',
               },
               '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                  borderRadius: 8,
                  backgroundColor: '#6b6b6b',
                  minHeight: 24,
                  border: '3px solid #2b2b2b',
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
