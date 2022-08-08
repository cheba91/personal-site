import { Grid, Typography, Box, Container } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import NeonGrid from './ui/NeonGrid';

export default function Hero({ changeTheme, mainClr, heroSectionHeight }) {
   return (
      <Box
         className="heroWrap"
         sx={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: { xs: 16, sm: 23 },
         }}
      >
         <NeonGrid mainClr={mainClr} changeTheme={changeTheme} />
         <Grid
            container
            gap="5rem"
            flexWrap="nowrap"
            height={heroSectionHeight}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            paddingBottom="2rem"
         >
            <Grid>
               <Container>
                  <Typography
                     textAlign="center"
                     component="h1"
                     sx={{
                        fontWeight: 800,
                        fontSize: {
                           md: '4.2rem',
                           sm: '3.7rem',
                           xs: '2.6rem',
                        },
                     }}
                  >
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Typography>
               </Container>
            </Grid>
            <Grid textAlign="center"></Grid>
         </Grid>
      </Box>
   );
}
