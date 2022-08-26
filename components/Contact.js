import {
   Box,
   Button,
   Grid,
   Link,
   TextField,
   Typography,
   useTheme,
} from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import AnchorId from './ui/AnchorId';
import SocialIcons from './SocialIcons';
import NeonShadow from './ui/NeonShadow';
import OutsetShadow from './ui/OutsetShadow';
import { useState } from 'react';
import { sanitizeString, validateEmail } from '../utils/sanitization';

export default function Contact() {
   //Hide email
   const EmailBox = () => {
      const name = 'hello';
      const domain = 'cheba';
      const tld = 'me';
      return (
         <Link
            onClick={handleEmailLink}
            underline="none"
            sx={{
               cursor: 'pointer',
               '&::before': {
                  content: `'${name}@'`,
               },
               '&::after': {
                  content: `'${domain}.${tld}'`,
               },
            }}
            data-name={name}
            data-domain={domain}
            data-tld={tld}
         />
      );
   };
   const handleEmailLink = (e) => {
      const { name, domain, tld } = e.target.dataset;
      return (window.location.href = `mailto:${name}@${domain}.${tld}`);
   };
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr },
         text: { primary: textClr },
      },
      shape: { borderRadius },
   } = useTheme();
   // HAndling submit & message
   const [formMsg, setFormMsg] = useState('');
   const [isErr, setIsErr] = useState(true);
   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         const formData = {};
         Array.from(e.currentTarget.elements).forEach((field) => {
            if (!field.name) return;
            if (field.name === 'email') {
               return (
                  validateEmail(field.value) &&
                  (formData[field.name] = field.value)
               );
            }
            formData[field.name] = sanitizeString(field.value);
         });
         // Check honeypots
         if (formData.emailInput || formData.yourEmail) {
            return setFormMsg('You entered a few too many fields.');
         }
         //Light validation
         if (!formData.name || !formData.message) {
            return setFormMsg('Please provide all required info.');
         }
         if (!formData.email) {
            return setFormMsg('Please provide valid email.');
         }
         const res = await fetch('/api/contact-form', {
            method: 'POST',
            body: JSON.stringify(formData),
         });
         const data = await res.json();
         if (data) {
            setFormMsg(data.msg);
            setIsErr(data.status !== 'ok' ? true : false);
         }
      } catch (err) {
         console.log(err);
         setIsErr(true);
         setFormMsg(
            `An error occured while trying to send message. Please use email address above.`
         );
      }
   };
   const inputStyles = {
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
               padding: { xs: '1rem', sm: '2rem' },
               position: 'relative',
               width: '100%',
               height: '100%',
               overflow: 'hidden',
            }}
         >
            <NeonHeading text={'Get In Touch'}></NeonHeading>
            <OutsetShadow customStyles={{ marginBottom: '48px' }}>
               <Typography
                  sx={{
                     padding: '2rem 1.5rem',
                     fontSize: { xs: '0.95rem', sm: '1rem' },
                     textAlign: 'center',
                     lineHeight: '1.6rem',
                  }}
                  component="h4"
               >
                  {`Have a great idea for a project and want to make it happen?
                   You can reach me at `}
                  <EmailBox />
                  {` or by using the form below.
                    I'm usually online for about 12 hours a day, so you can expect a fast reply :)`}
               </Typography>
            </OutsetShadow>

            <Grid
               container
               direction="column"
               justify="center"
               alignItems="center"
            >
               <Grid item>
                  <form id="contact-form" onSubmit={handleSubmit}>
                     <Grid item>
                        <TextField
                           fullWidth
                           label="Name"
                           minLength="2"
                           maxLength="100"
                           name="name"
                           margin="normal"
                           sx={{ ...inputStyles }}
                        />
                     </Grid>
                     <Grid item>
                        <TextField
                           autoComplete="new-password"
                           fullWidth
                           label="Email"
                           name="yourEmail"
                           margin="normal"
                           inputProps={{ tabIndex: '-1' }}
                           sx={{
                              position: 'absolute',
                              left: '-160vw',
                           }}
                        />
                     </Grid>
                     {/* The right email */}
                     <Grid item>
                        <TextField
                           fullWidth
                           label="Email"
                           name="email"
                           margin="normal"
                           sx={{ ...inputStyles }}
                        />
                     </Grid>
                     <Grid item>
                        <TextField
                           autoComplete="new-password"
                           fullWidth
                           label="Email"
                           name="emailInput"
                           margin="normal"
                           inputProps={{ tabIndex: '-1' }}
                           sx={{
                              position: 'fixed',
                              width: 0,
                              height: 0,
                           }}
                        />
                     </Grid>
                     <Grid item>
                        <TextField
                           fullWidth
                           label="Message"
                           name="message"
                           minLength="3"
                           maxLength="2000"
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
                                 fontSize: { xs: '0.95rem', sm: '1rem' },
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
                  {/* Show form message */}
                  {formMsg && (
                     <>
                        <Grid
                           item
                           sx={{
                              marginTop: '2rem',
                              textAlign: 'center',
                              borderRadius: '15px',
                              background: `${
                                 isErr
                                    ? 'linear-gradient( rgb(29, 29, 29), #380808)'
                                    : 'linear-gradient( rgb(29, 29, 29), #083a08)'
                              }`,
                              boxShadow: `-1px -1px 6px 1px rgb(42 42 42),  6px 6px 6px 0px rgb(10 10 10)`,

                              padding: '1rem',
                           }}
                        >
                           {formMsg}
                           <Box sx={{ display: 'none' }}>
                              {setTimeout(() => setFormMsg(''), 6000)}
                           </Box>
                        </Grid>
                     </>
                  )}
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
