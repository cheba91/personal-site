import { Box, Container } from '@mui/material';
import Hero from '../components/Hero';
export default function HomePage({ changeTheme, mainClr }) {
   return (
      <Container sx={{ overflow: 'hidden' }}>
         <Hero changeTheme={changeTheme} mainClr={mainClr} />
      </Container>
   );
}
