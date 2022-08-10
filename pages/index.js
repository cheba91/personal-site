import { Container } from '@mui/material';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Background from '../components/layout/Background';
import StackInfoList from '../components/StackInfoList';
export default function HomePage({ changeTheme }) {
   return (
      <>
         <Hero changeTheme={changeTheme} />
         <Container sx={{ py: 10 }} className="wrapContainer">
            <StackInfoList />
            <About />
            <Contact />
         </Container>
      </>
   );
}
