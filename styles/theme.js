export const primaryColor = 'rgb(157,181,255)';

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
   },
};
