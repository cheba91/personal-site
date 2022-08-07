import { Button, Grid, TextField, Typography } from '@mui/material';

export default function Contact() {
   return (
      <>
         <Typography variant="h4" align="center" component="h1" gutterBottom>
            {'Contact Form'.toUpperCase()}
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
                        rowsMax="7"
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
                        <Button type="submit" variant="contained">
                           Submit
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </Grid>
         </Grid>
      </>
   );
}
