import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/layout/Header';
import ScrollToTop from '../components/layout/ScrollToTop';
import HomePage from './index';
import { theme, primaryColor } from '../styles/theme';
import MetaHead from '../components/MetaHead';

export default function App() {
   //Setting default theme & generating theme
   const [mainClr, setMainClr] = useState(primaryColor);

   const changeTheme = (selectedClr) => {
      if (selectedClr) setMainClr(selectedClr);
      theme.palette.primary.main = mainClr;
      return createTheme(theme);
   };
   // console.log(createTheme(theme));
   return (
      <ThemeProvider theme={changeTheme()}>
         <CssBaseline />
         {/* <MetaHead /> */}
         <Header />
         <HomePage changeTheme={changeTheme} />
         <ScrollToTop />
      </ThemeProvider>
   );
}
