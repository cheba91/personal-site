import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Background from '../components/layout/Background';
import Header from '../components/layout/Header';
import ScrollToTop from '../components/layout/ScrollToTop';
import HomePage from './index';
import { lightenDarkenColor } from '../utils/lightenDarkenColor';

const primaryColor = '#ef5350';
// Default theme
const theme = {
   typography: {
      fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
   },
   palette: {
      mode: 'dark',
      primary: {
         main: primaryColor,
         lighter: lightenDarkenColor(primaryColor, 40),
         darker: lightenDarkenColor(primaryColor, -50),
      },
      light: {
         main: '#efefef',
         light: '#fff',
      },
      transparent: {
         main: 'rgba(0,0,0,.5)',
      },
   },
};

console.log(lightenDarkenColor(primaryColor, 30));
export default function App() {
   //Setting default theme & generating theme
   const [mainClr, setMainClr] = useState(primaryColor);

   const changeTheme = (selectedClr) => {
      if (selectedClr) setMainClr(selectedClr);
      theme.palette.primary.main = mainClr;
      theme.palette.primary.lighter = lightenDarkenColor(mainClr, 40);
      theme.palette.primary.darker = lightenDarkenColor(mainClr, -50);

      return createTheme(theme);
   };

   return (
      <ThemeProvider theme={changeTheme()}>
         <CssBaseline />
         <Background color={mainClr}>
            <Header mainClr={mainClr} />
            <HomePage changeTheme={changeTheme} mainClr={mainClr} />
            <ScrollToTop mainClr={mainClr} />
         </Background>
      </ThemeProvider>
   );
}
