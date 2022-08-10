import { Container } from '@mui/material';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Background from '../components/layout/Background';
import StackInfoList from '../components/StackInfoList';
export default function HomePage({ changeTheme, mainClr }) {
   return (
      <>
         <Hero changeTheme={changeTheme} mainClr={mainClr} />
         <Container sx={{ py: 10 }} className="wrapContainer">
            <StackInfoList mainClr={mainClr} />
            <About />
            <Contact />
         </Container>
      </>
   );
}
