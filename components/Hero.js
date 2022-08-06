import { Grid, Typography } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import NeonGrid from './ui/NeonGrid';

export default function Hero({ changeTheme, mainClr }) {
   return (
      <>
         <NeonGrid mainClr={mainClr} />
         <Grid
            container
            gap="5rem"
            flexWrap="nowrap"
            height="86vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            pt={8}
         >
            <Grid>
               <Typography
                  variant="h2"
                  textAlign="center"
                  component="h1"
                  sx={{ fontWeight: 800 }}
               >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, ad.
               </Typography>
            </Grid>
            <Grid textAlign="center">
               <ThemeToggler changeTheme={changeTheme} />
            </Grid>
         </Grid>
      </>
   );
}
