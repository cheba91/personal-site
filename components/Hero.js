import { Grid, Typography, Box, Container } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import NeonGrid3D from './ui/NeonGrid3D';
import NeonGridFlat from './ui/NeonGridFlat.js';

export default function Hero({ changeTheme, mainClr }) {
   return (
      <>
         <Grid
            container
            zIndex="5"
            gap="5rem"
            flexWrap="nowrap"
            flexDirection="column"
            height="100vh"
            alignItems="center"
            justifyContent="space-between"
            sx={{
               // position: 'relative',
               paddingTop: { xs: 16, sm: 18, md: 23 },
            }}
         >
            {/* TOP hero part */}
            <Grid>
               <Container>
                  <Typography
                     textAlign="center"
                     component="h1"
                     sx={{
                        fontWeight: 800,
                        fontSize: {
                           xs: '2.6rem',
                           sm: '3.7rem',
                           md: '4.2rem',
                        },
                     }}
                  >
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Typography>
               </Container>
            </Grid>

            {/* BOTTOM hero part */}
            <Grid
               position="relative"
               width="100%"
               height="100%"
               overflow="hidden"
            >
               <NeonGridFlat mainClr={mainClr} />
               <ThemeToggler changeTheme={changeTheme} />
            </Grid>
         </Grid>
      </>
   );
}
