import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Background from '../components/layout/Background';
import Header from '../components/layout/Header';
import HomePage from './index';

const primaryColor = '#ef5350';
// Default theme
const theme = {
   palette: {
      mode: 'dark',
      primary: {
         main: primaryColor,
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
export default function App() {
   //Setting default theme & generating theme
   const [mainClr, setMainClr] = useState(primaryColor);

   const changeTheme = (selectedClr) => {
      if (selectedClr) setMainClr(selectedClr);
      theme.palette.primary.main = mainClr;
      return createTheme(theme);
   };

   return (
      <ThemeProvider theme={changeTheme()}>
         <CssBaseline />
         <Header mainClr={mainClr} />
         <Background color={mainClr}>
            <HomePage changeTheme={changeTheme} />
         </Background>
      </ThemeProvider>
   );
}
