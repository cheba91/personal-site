import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import { useTheme } from '@mui/material';
import AnchorId from './ui/AnchorId';
import SocialIcons from './SocialIcons';
import NeonShadow from './ui/NeonShadow';
import OutsetShadow from './ui/OutsetShadow';

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
      // boxShadow: `inset -4px -4px 6px 0px rgb(45 45 45), inset 7px 7px 6px 0px rgb(10 10 10)`,
      borderRadius: `${borderRadius}px`,
      borderWidth: '0',
      boxShadow: `inset -4px -6px 6px 1px rgb(42 42 42), inset 6px 6px 6px 0px rgb(10 10 10)`,

      outline: 'none',
      border: 'none',
   };
   return (
      <NeonShadow radius={`${borderRadius}px`}>
         <AnchorId id={'contact'} />
         <Box
            sx={{
               borderRadius: `${borderRadius}px`,
               background: cardBg,
               padding: { xs: '0.5rem 1rem', sm: '1rem 2rem' },
               position: 'relative',
               width: '100%',
               height: '100%',
               overflow: 'hidden',
            }}
         >
            <NeonHeading text={'Get In Touch'}></NeonHeading>
            <OutsetShadow
               customStyles={{ padding: '2rem 2rem', marginBottom: '48px' }}
            >
               <Typography align="center" component="h4">
                  {`Have a great idea for a project and want to make it happen?
               You can reach me at email@email.com or using the form below.`}
               </Typography>
            </OutsetShadow>
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
                                 fontWeight: '600',
                                 boxShadow: `-4px -4px 12px ${darkClr}, 2px 2px 5px 0px ${mainClr}`,
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
