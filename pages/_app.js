import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/themes';
import Header from '../components/layout/Header';
import HomePage from './index';
import Footer from '../components/layout/Footer';

export default function App() {
   const [isDarkTheme, setIsDarkTheme] = useState(true);
   const changeTheme = () => setIsDarkTheme(!isDarkTheme);

   return (
      <ThemeProvider
         theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}
      >
         <CssBaseline />
         <Header changeTheme={changeTheme} isDarkTheme={isDarkTheme} />
         <HomePage />
         <Footer />
      </ThemeProvider>
   );
}
