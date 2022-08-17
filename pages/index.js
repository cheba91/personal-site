import { Container } from '@mui/material';
import About from '../components/About';
import Contact from '../components/Contact';
import HeroSection from '../components/HeroSection';
import Experience from '../components/Experience';
export default function HomePage({ changeTheme }) {
   return (
      <>
         <HeroSection changeTheme={changeTheme} />
         <Container sx={{ py: 7 }} className="wrapContainer">
            <Experience />
            <About />
            <Contact />
         </Container>
      </>
   );
}
