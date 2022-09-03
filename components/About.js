import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import myImage from '../public/myImage.jpg';
import AnchorId from './ui/AnchorId';
import NeonHeading from './ui/NeonHeading';
import NeonShadow from './ui/NeonShadow';
import OutsetShadow from './ui/OutsetShadow';

export default function About() {
   const imgSize = 190;
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg },
      },
      shape: { borderRadius },
   } = useTheme();

   // Laser
   const [laserVisible, setLaserVisible] = useState(false);
   const [laserX, setLaserX] = useState(false);
   const [laserY, setLaserY] = useState(false);

   useEffect(() => {
      const delegate = (e) => handleLaser(e, false);
      window.addEventListener('scroll', delegate);
      return () => window.removeEventListener('scroll', delegate);
   }, []);

   const handleLaser = (e, setLaser) => {
      if (e.type === 'scroll') return setLaserVisible(setLaser);
      if (e?.relatedTarget?.id === 'laser') return; //Prevent blinking on laser hover
      if (!setLaser) return setLaserVisible(setLaser);
      const rect = e.target.getBoundingClientRect();
      setLaserX(rect.left + imgSize / 2 - 10);
      setLaserY(rect.top + imgSize / 2 - 25);
      setLaserVisible(setLaser);
   };
   return (
      <>
         <AnchorId id={'about'} />
         <NeonShadow radius={`${borderRadius}px`}>
            <Grid
               mb={10}
               container
               rows={2}
               sx={{
                  position: 'relative',

                  justifyContent: 'space-between',
                  zIndex: '0',
                  borderRadius: `${borderRadius}px`,
                  overflow: 'hidden',
                  padding: { xs: '1rem', md: '2rem' },

                  background: cardBg,
               }}
            >
               <Grid item width="100%">
                  <NeonHeading text={'About me'} />
               </Grid>
               {/* Text */}
               <Grid item xs={12} md={7.5}>
                  <OutsetShadow
                     customStyles={{
                        padding: '1.5rem',
                     }}
                  >
                     <Typography
                        mb={2}
                        sx={{
                           fontSize: {
                              xs: '0.95rem',
                              sm: '1rem',
                              lineHeight: '1.6rem',
                           },
                        }}
                     >
                        {`Hey, I'm good at reading docs ;)`}
                     </Typography>
                     <Typography
                        sx={{
                           textAlign: 'left',
                           fontSize: { xs: '0.95rem', sm: '1rem' },
                           marginBottom: '1rem',
                           lineHeight: '1.6rem',
                        }}
                     >
                        {`I'm a self-taught web developer from Slovenia. I've been in the military for 10 years 
                        and I started in web development 4+ years ago. I freelance,  sometimes work out, and 
                        always drink coffee.`}
                     </Typography>
                     <Typography
                        sx={{
                           textAlign: 'left',
                           fontSize: { xs: '0.95rem', sm: '1rem' },
                           marginBottom: '1rem',
                           lineHeight: '1.6rem',
                        }}
                     >
                        {`Most of the time, my role is being the “outsource guy” who fixes or creates 
                        stuff on the web. I love being in this role because it exposes me to a wide range of 
                        issues and technologies, which allows me to continuously learn new things.`}
                     </Typography>
                     <Typography
                        sx={{
                           textAlign: 'left',
                           fontSize: {
                              xs: '0.95rem',
                              sm: '1rem',
                              lineHeight: '1.6rem',
                           },
                        }}
                     >
                        {`I enjoy working on innovative projects that aim for the highest quality rather than just fast delivery.
`}
                     </Typography>
                  </OutsetShadow>
               </Grid>
               {/* Image Section */}
               <Grid
                  item
                  xs={12}
                  md={4}
                  textAlign="center"
                  sx={{
                     marginTop: { xs: '4rem', md: '0' },
                     background: cardBg,
                     borderRadius: `${borderRadius}px`,
                     boxShadow: `inset -4px -6px 6px 1px rgb(42 42 42), inset 6px 6px 6px 0px rgb(10 10 10)`,
                  }}
               >
                  <Box
                     sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: { xs: '1.5rem 0', md: '0' },
                     }}
                  >
                     {/* Pic wrap */}
                     <Box
                        sx={{
                           height: imgSize,
                           width: imgSize,
                        }}
                     >
                        {/* Profile Pic */}
                        <Box
                           onMouseEnter={(e) => handleLaser(e, true)}
                           onMouseLeave={(e) => handleLaser(e, false)}
                           onClick={(e) => handleLaser(e, !laserVisible)}
                           id="profilePic"
                           component="img"
                           alt="My image"
                           src={myImage.src}
                           sx={{
                              borderRadius: '50%',
                              boxShadow: `6px 5px 15px 5px rgb(20 20 20)`,
                              height: imgSize,
                              width: imgSize,
                              maxWidth: '100%',
                              maxHeight: '100%',
                           }}
                        />
                        {laserVisible && laserX && laserY && (
                           <Box
                              id="laser"
                              sx={{
                                 position: 'fixed',
                                 top: laserY,
                                 left: laserX,
                                 width: '28px',
                                 height: '100vh',
                                 background: 'none',

                                 borderLeft: `4px solid ${mainClr}`,
                                 borderRight: `4px solid ${mainClr}`,
                                 boxShadow: `inset 0px -20px 20px 1px ${mainClr}, 0px 10px 30px 1px ${mainClr}`,

                                 transformOrigin: 'top right',
                                 transform: 'rotate(40deg) skewY(-40deg)',
                                 '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 0,
                                    height: 0,
                                    boxShadow: `0px 2px 14px 6px #fff, 2px 3px 15px 15px ${mainClr}`,
                                    borderRadius: '50%',
                                    left: '-2px',
                                    top: '2px',
                                 },
                                 '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 0,
                                    height: 0,
                                    boxShadow: `0px 2px 14px 6px #fff, 2px 3px 15px 15px ${mainClr}`,
                                    borderRadius: '50%',
                                    left: '20px',
                                    top: '2px',
                                 },
                              }}
                           />
                        )}
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </NeonShadow>
      </>
   );
}
