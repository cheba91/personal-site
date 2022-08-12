import { Container } from '@mui/material';
import About from '../components/About';
import Contact from '../components/Contact';
import HeroSection from '../components/HeroSection';
import Background from '../components/layout/Background';
import StackInfoList from '../components/StackInfoList';
export default function HomePage({ changeTheme }) {
   return (
      <>
         <HeroSection changeTheme={changeTheme} />
         <Container sx={{ py: 10 }} className="wrapContainer">
            <StackInfoList />
            <About />
            <Contact />
         </Container>
      </>
   );
}
