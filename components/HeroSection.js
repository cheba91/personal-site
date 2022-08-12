import { Grid, Typography, Box, Container, useTheme } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import imgBg from '../public/starsBg.png';
import {
   editClrTransparency,
   lightenDarkenColor,
} from '../utils/lightenDarkenColor';

export default function HeroSection({ changeTheme }) {
   const {
      primary: { main: mainClr },
      dark: { main: mainDarkClr },
   } = useTheme().palette;
   const darkMainClr1 = lightenDarkenColor(-0.8, mainClr);
   const darkMainClr2 = lightenDarkenColor(-0.95, mainClr);
   const mainTransClr = editClrTransparency(darkMainClr1, 0.3);
   // const darkTransClr1 = editClrTransparency(darkMainClr1, 0.7);
   // const darkTransClr2 = editClrTransparency(darkMainClr2, 0.8);
   return (
      <>
         <Box
            className="outer"
            pt={11}
            sx={{
               height: {
                  xs: '95vh', //phones have browser tab on top
                  sm: '100vh',
                  zIndex: '1',
                  position: 'relative',
                  overflow: 'hidden',
               },
               backgroundImage: `linear-gradient(to bottom, ${mainDarkClr} 20%, ${mainTransClr}, ${mainDarkClr})`,
            }}
         >
            {/* BACKGROUND */}
            <Box
               className="BG"
               sx={{
                  zIndex: '-2',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  background: `transparent url(${imgBg.src})`,
               }}
            />
            {/* BALL 1 - primary clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  position: 'absolute',
                  borderRadius: '50%',
                  width: '10vh',
                  height: '10vh',
                  top: '-10vh',
                  right: '-10vw',
                  background: `linear-gradient(to right, ${darkMainClr1} , ${darkMainClr2})`,
                  filter: `blur(10px)`,
                  animation: 'movePlanet1 10s infinite linear',
                  '@keyframes movePlanet1': {
                     '100%': {
                        width: '80vh',
                        height: '80vh',
                        top: '100vh',
                        right: '150vw',
                     },
                  },
               }}
            />
            {/* BALL 2 - big, fixed clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  width: { xs: '40vw', sm: '30vw', md: '20vw' },
                  height: { xs: '40vw', sm: '30vw', md: '20vw' },
                  position: 'absolute',
                  borderRadius: '50%',
                  bottom: '95vh',
                  right: '-60vw',
                  background: `radial-gradient(#2c2206 , ${mainDarkClr})`,
                  filter: `blur(6px)`,
                  animation: 'movePlanet2 12s infinite alternate',
                  transitionTimingFunction: 'cubic-bezier(0.46, 0.6, 0, 1.31)',
                  '@keyframes movePlanet2': {
                     '100%': {
                        bottom: '-15vh',
                        right: '40vw',
                        transform: 'scale(1.8)',
                     },
                  },
                  '&::before': {
                     content: "''",
                     position: 'absolute',
                     width: '180%',
                     height: '2.5rem',
                     top: '45%',
                     left: '-40%',
                     background: `linear-gradient(#0c0c0c 60%, ${darkMainClr1})`,
                     borderRadius: '45%',
                     transform: 'skewY(12deg)',
                  },
               }}
            />
            {/* BALL 3 - small fixed clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  width: { xs: '17vw', sm: '11vw', md: '7vw' },
                  height: { xs: '17vw', sm: '11vw', md: '7vw' },
                  position: 'absolute',
                  borderRadius: '50%',
                  top: '40%',
                  right: '35%',
                  background: `radial-gradient(#663741, ${mainDarkClr}  70%)`,
                  filter: `blur(3px)`,
                  animation: 'movePlanet3 5s infinite alternate linear',

                  '@keyframes movePlanet3': {
                     '100%': {
                        top: '42%',
                        right: '40%',
                        transform: 'scale(1.4)',
                     },
                  },

                  '&::before': {
                     content: "''",
                     position: 'absolute',
                     background: `radial-gradient( ${darkMainClr1}, #000 )`,
                     borderRadius: '50%',
                     filter: `blur(2px)`,
                     animation: 'movePlanet3moon 7s infinite linear',
                     '@keyframes movePlanet3moon': {
                        '0%': {
                           width: '10px',
                           height: '10px',
                           top: '75%',
                           left: '-30%',
                        },
                        '50%': {
                           width: '25px',
                           height: '25px',
                           top: '30%',
                           left: '35%',
                        },
                        '100%': {
                           width: '10px',
                           height: '10px',
                           top: '20%',
                           left: '100%',
                        },
                     },
                  },
               }}
            />

            <Grid
               container
               spacing={2}
               margin="0"
               zIndex="5"
               flexWrap="nowrap"
               flexDirection="column"
               width="100%"
               height="100%"
               alignItems="center"
               justifyContent="space-between"
            >
               {/* TOP hero part */}
               <Grid>
                  <Container>
                     <Typography
                        textAlign="center"
                        component="h1"
                        sx={{
                           fontWeight: 800,
                           paddingTop: '5rem',
                           fontSize: {
                              xs: '2.3rem',
                              sm: '3.7rem',
                              md: '4.2rem',
                              textShadow:
                                 '0px 0px 50px #000, 0px 0px 50px #000, 0px 0px 50px #000',
                           },
                        }}
                     >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                     </Typography>
                  </Container>
               </Grid>

               {/* BOTTOM hero part */}
               <Grid
                  position="relative"
                  width="100%"
                  height="100%"
                  overflow="hidden"
               >
                  {/* <NeonGridFlat /> */}
                  <ThemeToggler changeTheme={changeTheme} />
               </Grid>
            </Grid>
         </Box>
      </>
   );
}
