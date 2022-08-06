import { Box, Container } from '@mui/material';
import Hero from '../components/Hero';
export default function HomePage({ changeTheme, mainClr }) {
   return (
      <Container className="contentBox" zIndex="2">
         <Hero changeTheme={changeTheme} mainClr={mainClr} />
      </Container>
   );
}
