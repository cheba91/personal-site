import { Box, Container } from '@mui/material';
import Hero from '../components/Hero';
export default function HomePage({ changeTheme }) {
   return (
      <Container
         className="contentBox"
         sx={{
            zIndex: '2',
            maxWidth: '1200px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
         }}
      >
         <Hero changeTheme={changeTheme} />
      </Container>
   );
}
