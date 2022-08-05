import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ThemeToggler from './ThemeToggler';

export default function Hero({ changeTheme }) {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container columns={10} py={8}>
            {/* <Grid item xs={6}>
               <Typography variant="h2" component="h1" sx={{ fontWeight: 800 }}>
                  Hey, I work with MERN stack, JAM stack and Wordpress
               </Typography>
            </Grid> */}
            <Grid item xs={4} textAlign="center">
               <ThemeToggler changeTheme={changeTheme} />
            </Grid>
         </Grid>
      </Box>
   );
}
