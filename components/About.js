import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import myImage from '../public/myImage.png';
import AnchorId from './ui/AnchorId';
import NeonHeading from './ui/NeonHeading';

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

   const scroll = useRef(false);
   useEffect(() => {
      window.addEventListener('scroll', handleLaser);
      return () => window.removeEventListener('scroll', handleLaser);
   }, [scroll]);

   const handleLaser = (e, setLaser) => {
      if (!setLaser) return setLaserVisible(setLaser);
      if (e.relatedTarget.id === 'laser') return; //Prevent blinking on laser hover
      const rect = e.target.getBoundingClientRect();
      setLaserX(rect.left + imgSize / 2 - 10);
      setLaserY(rect.top + imgSize / 2 - 25);
      setLaserVisible(setLaser);
   };

   return (
      <>
         <AnchorId id={'about'} />
         <Grid
            mb={7}
            container
            rows={2}
            sx={{
               position: 'relative',
               zIndex: '0',
               borderRadius: `${borderRadius}px`,
               overflow: 'hidden',
               padding: '2rem',
               '&::before': {
                  content: "''",
                  position: 'absolute',
                  zIndex: '-2',
                  left: '-150%',
                  top: '-150%',
                  width: '400%',
                  height: '400%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '50% 50%, 50% 50%',
                  backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
                  backgroundImage: `linear-gradient(to  left, ${mainClr} 1%, rgba(0,0,0, 0) 5%),
                  linear-gradient(transparent, transparent),
                     linear-gradient(to right, ${mainClr} 1%, rgba(0,0,0,0) 5% ),
                     linear-gradient(transparent, transparent)`,
                  animation: 'rotate 8s linear infinite',
               },
               '&::after': {
                  content: "''",
                  position: 'absolute',
                  zIndex: '-1',
                  left: '3px',
                  top: '3px',
                  width: 'calc(100% - 6px)',
                  height: 'calc(100% - 6px)',
                  background: cardBg,
                  borderRadius: `${borderRadius}px`,
               },
               '@keyframes rotate': {
                  '100%': { transform: 'rotate(1turn)' },
               },
               borderRadius: `${borderRadius}px`,
               padding: '1rem 1rem 1.5rem 1rem',
            }}
         >
            <Grid width="100%">
               <NeonHeading text={'About me'} />
            </Grid>
            {/* Text */}
            <Grid item xs={12} sm={7}>
               <Typography mb={3}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  ducimus architecto quos fugiat quas? Libero, est? Culpa ut
                  vitae quos?
               </Typography>
               <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam ipsam, expedita labore sit officiis ex nesciunt numquam
                  sapiente rem suscipit modi sed rerum ad! Enim velit nesciunt
                  sit? Eum dolor libero amet. Eos, modi accusantium ipsa quo ad
                  nesciunt reiciendis?
               </Typography>
            </Grid>
            {/* Image Section */}
            <Grid item xs={12} sm={5} textAlign="center">
               <Box
                  sx={{
                     width: '100%',
                     height: '100%',
                     position: 'relative',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     paddingTop: { xs: '2rem', sm: '0' },
                     paddingLeft: { xs: '0', sm: '1rem' },
                  }}
               >
                  {/* Pic wrap */}
                  <Box
                     sx={{
                        height: imgSize,
                        width: imgSize,
                        // margin: '0 auto',
                     }}
                  >
                     {/* Profile Pic */}
                     <Box
                        onMouseEnter={(e) => handleLaser(e, true)}
                        onMouseLeave={(e) => handleLaser(e, false)}
                        onScroll={(e) => handleLaser(e, false)}
                        id="profilePic"
                        component="img"
                        alt="My image"
                        src={myImage.src}
                        sx={{
                           borderRadius: '50%',
                           boxShadow: `2px 2px 0px 1px ${mainClr}`,
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
                              zIndex: 10000,
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
                                 width: '5px',
                                 height: '5px',
                                 background: '#fff',
                                 boxShadow: `0 0 20px 10px #fff, 0px 5px 10px 10px ${mainClr}`,
                                 borderRadius: '50%',
                                 left: '-5px',
                                 top: '1px',
                              },
                              '&::after': {
                                 content: '""',
                                 position: 'absolute',
                                 width: '5px',
                                 height: '5px',
                                 background: '#fff',
                                 boxShadow: `0 0 20px 10px #fff, 0px 5px 10px 10px ${mainClr}`,
                                 borderRadius: '50%',
                                 left: '18px',
                                 top: '1px',
                              },
                           }}
                        />
                     )}
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </>
   );
}
