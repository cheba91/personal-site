import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import myImage from '../public/myImage.png';
import AnchorId from './ui/AnchorId';
import InsetShadow from './ui/InsetShadow';
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
                  padding: { xs: '1.5rem', md: '2rem' },

                  background: cardBg,
               }}
            >
               <Grid item width="100%">
                  <NeonHeading text={'About me'} />
               </Grid>
               {/* Text */}
               <Grid item xs={12} md={7}>
                  <OutsetShadow customStyles={{ padding: '1.5rem' }}>
                     <Typography mb={2}>
                        {`Hey, I'm good at reading docs ;)`}
                     </Typography>
                     <Typography>
                        {`I'm a self-taught web developer from Slovenia and I've been in web development for 4+ years. 
                  My journey began with WordPress, but I soon shifted to the Javascript ecosystem and my current favorite framework Next.js.`}
                     </Typography>
                     <Typography mt={2}>
                        {`I enjoy working on creative projects and learning about new things. My code is clean and elegant, and I always prioritize security and performance.`}
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
                           // margin: '0 auto',
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
                              border: `5px solid rgb(78 78 78)`,
                              // boxShadow: `1px 1px 15px 0px ${mainClr}`,
                              boxShadow: `10px 7px 20px 5px rgb(10 10 10)`,
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
