import { Grid, Typography, Box } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import NeonGrid from './ui/NeonGrid';

export default function Hero({ changeTheme, mainClr, heroSectionHeight }) {
   return (
      <Box
         pt={25}
         className="heroWrap"
         sx={{ position: 'relative', overflow: 'hidden' }}
      >
         <NeonGrid mainClr={mainClr} />
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
               <Typography
                  textAlign="center"
                  component="h1"
                  sx={{
                     fontWeight: 800,
                     fontSize: { md: '4.2rem', sm: '3.7rem', xs: '2.6rem' },
                  }}
               >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </Typography>
            </Grid>
            <Grid textAlign="center">
               <ThemeToggler changeTheme={changeTheme} />
            </Grid>
         </Grid>
      </Box>
   );
}
