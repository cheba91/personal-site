import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import { useTheme } from '@mui/material';
import AnchorId from './ui/AnchorId';
import SocialIcons from './SocialIcons';
import NeonShadow from './ui/NeonShadow';

export default function Contact() {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr, lighter: darkClrLighter },
         text: { primary: textClr },
      },
      shape: { borderRadius },
   } = useTheme();

   const inputStyles = {
      boxShadow: `inset -9px -9px 9px ${darkClr}, inset 3px 3px 10px ${darkClr}`,
      borderRadius: `${borderRadius}px`,
   };
   return (
      <NeonShadow radius={`${borderRadius}px`}>
         <AnchorId id={'contact'} />
         <Box
            sx={{
               borderRadius: `${borderRadius}px`,
               background: cardBg,
               padding: '1rem 1rem 0 1rem',
               position: 'relative',
               width: '100%',
               height: '100%',
               overflow: 'hidden',
            }}
         >
            <NeonHeading text={'Contact Me'}></NeonHeading>
            <Typography variant="h6" align="center" component="h4">
               {`Got an interesting project in mind? Let's make it happen together!`}
            </Typography>
            <Typography
               variant="p"
               align="center"
               component="p"
               padding="1rem 0 1.5rem 0"
            >
               {`You can contact me at email@email.com or through the form below.`}
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
                           sx={{ ...inputStyles }}
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
                           sx={{ ...inputStyles }}
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
                           sx={{ ...inputStyles }}
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
                              variant="outlined"
                              size="large"
                              type="submit"
                              sx={{
                                 background: cardBg,
                                 color: textClr,
                                 border: `none`,
                                 fontWeight: 'bold',
                                 boxShadow: `-4px -4px 12px ${darkClr}, 2px 2px 6px ${mainClr}`,
                                 padding: '0.7rem 1.9rem',
                                 '&:hover': {
                                    border: `none`,
                                    background: cardBg,
                                    boxShadow: `-6px -6px 16px ${darkClr}, 3px 3px 7px ${mainClr}`,
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
            <SocialIcons
               addStyles={{
                  mt: '5rem',
                  mb: '2rem',
               }}
            />
         </Box>
      </NeonShadow>
   );
}
