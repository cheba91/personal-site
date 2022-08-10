import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import { useTheme } from '@mui/material';
import { lightenDarkenColor } from '../utils/lightenDarkenColor';

export default function Contact() {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg },
      },
      shape: { borderRadius },
   } = useTheme();
   const lighterMainClr = lightenDarkenColor(0.2, mainClr);

   return (
      <Box
         sx={{
            borderRadius: `${borderRadius}px`,
            background: cardBg,
            padding: '1rem 1rem 1.5rem 1rem',
         }}
      >
         <NeonHeading text={'Contact Me'}></NeonHeading>
         <Typography variant="p" align="center" component="p" pb={3}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos velit
            enim eaque sit cumque voluptate tempore quia vitae perferendis esse.
         </Typography>
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
         >
            <Grid item>
               <form id="contact-form">
                  <Grid item>
                     <TextField
                        fullWidth
                        required
                        id="name"
                        label="Name"
                        name="userName"
                        margin="normal"
                     />
                  </Grid>
                  <Grid item>
                     <TextField
                        fullWidth
                        required
                        id="email"
                        label="Email"
                        name="email"
                        margin="normal"
                     />
                  </Grid>
                  <Grid item>
                     <TextField
                        fullWidth
                        required
                        id="message"
                        label="Message"
                        name="message"
                        margin="normal"
                        multiline
                        rowsmax="7"
                        rows={6}
                     />
                  </Grid>
                  <Grid
                     container
                     direction="row"
                     spacing={2}
                     justifyContent="center"
                     style={{ marginTop: 20 }}
                  >
                     <Grid item>
                        <Button
                           variant="contained"
                           type="submit"
                           sx={{
                              padding: '0.5rem 1.5rem',
                              '&:hover': {
                                 background: lighterMainClr,
                              },
                           }}
                        >
                           Send
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </Grid>
         </Grid>
      </Box>
   );
}
