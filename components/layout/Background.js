import { Box, Container } from '@mui/material';

export default function Background({ color, children, heroSectionHeight }) {
   return (
      <>
         <Container
            className="backgroundBox"
            py={10}
            sx={{
               background: '#121212',
               top: heroSectionHeight,
               zIndex: 3,
               paddingTop: '2rem',
               paddingBottom: '2rem',
            }}
         >
            {children}
         </Container>
      </>
   );
}
