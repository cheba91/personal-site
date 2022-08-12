import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import { useTheme } from '@mui/material';
import AnchorId from './ui/AnchorId';
import SocialIcons from './SocialIcons';

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
      boxShadow: `inset -8px -2px 10px ${darkClr}, inset 8px 2px 15px ${darkClr}`,
      borderRadius: '15px',
      background: cardBg,
      // boxShadow: `inset 5px 5px 5px ${darkClrLighter}`,
   };
   return (
      <>
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
               // borderRadius: '0 0 50% 50%',

               // boxShadow: `inset -2px 0 15px ${mainClr}`,
               // '&:before': {
               //    position: 'absolute',
               //    content: "''",
               //    right: 0,
               //    bottom: '-5%',
               //    width: '30%',
               //    height: '70%',
               //    transformOrigin: '10% 90%',
               //    transform: 'rotate(40deg)',
               //    background: darkClr,
               //    // boxShadow: `inset 10px 10px 10px 1px ${mainClr}`,
               //    boxShadow: `inset -2px 0 15px ${mainClr}`,
               // },
               // '&:after': {
               //    position: 'absolute',
               //    content: "''",
               //    left: 0,
               //    bottom: '-5%',
               //    height: '70%',
               //    width: '30%',
               //    transformOrigin: '90% 90%',
               //    transform: 'rotate(-40deg)',
               //    background: darkClr,
               //    boxShadow: `inset 2px 0 15px ${mainClr}`,
               // },
            }}
         >
            <NeonHeading text={'Contact Me'}></NeonHeading>
            <Typography variant="p" align="center" component="p" pb={3}>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
               velit enim eaque sit cumque voluptate tempore quia vitae
               perferendis esse.
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
      </>
   );
}
