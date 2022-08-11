import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import { useTheme } from '@mui/material';
import { lightenDarkenColor } from '../utils/lightenDarkenColor';
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
   const lighterMainClr = lightenDarkenColor(0.2, mainClr);

   return (
      <>
         <AnchorId id={'contact'} />
         <Box
            sx={{
               borderRadius: `${borderRadius}px`,
               background: cardBg,
               // background: `radial-gradient( ${darkClrLighter}, transparent)`,
               boxShadow: `inset 0px -50px 50px -50px ${mainClr}`,
               padding: '1rem 1rem 0 1rem',
               position: 'relative',
               width: '100%',
               height: '100%',
               overflow: 'hidden',

               '&:before': {
                  position: 'absolute',
                  content: "''",
                  right: 0,
                  bottom: 0,
                  width: '30%',
                  height: '150%',
                  transformOrigin: '-20% 110%',
                  transform: 'rotate(30deg)',
                  background: darkClr,
                  boxShadow: ` -2px 0 50px ${mainClr}`,
               },
               '&:after': {
                  position: 'absolute',
                  content: "''",
                  left: 0,
                  bottom: 0,
                  height: '150%',
                  width: '30%',
                  transformOrigin: '120% 110%',
                  transform: 'rotate(-30deg)',
                  background: darkClr,
                  boxShadow: ` 2px 0 50px ${mainClr}`,
               },
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
               sx={{}}
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
                              variant="outlined"
                              size="large"
                              type="submit"
                              sx={{
                                 color: textClr,
                                 border: `none`,
                                 fontWeight: 'bold',
                                 boxShadow: `-4px -4px 12px ${darkClr}, 2px 2px 6px ${mainClr}`,
                                 padding: '0.7rem 1.9rem',
                                 '&:hover': {
                                    border: `none`,
                                    background: darkClrLighter,
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
                  mt: '3rem',
                  mb: '4rem',
               }}
            />
         </Box>
      </>
   );
}
