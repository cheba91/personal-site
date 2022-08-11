import { Grid, Typography, Box, Container, useTheme } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import NeonGrid3D from './ui/NeonGrid3D';
import NeonGridFlat from './ui/NeonGridFlat.js';
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
   const mainTransClr = editClrTransparency(mainClr, 0.1);
   const blurPlanets = '3px';
   // const darkTransClr1 = editClrTransparency(darkMainClr1, 0.7);
   // const darkTransClr2 = editClrTransparency(darkMainClr2, 0.8);
   return (
      <>
         <Box
            className="outer"
            pt={11}
            sx={{
               height: {
                  xs: '95vh',
                  sm: '100vh',
                  zIndex: '1',
                  position: 'relative',
                  overflow: 'hidden',
               }, //phones have browser tab on top
               backgroundImage: `
                  linear-gradient(to bottom, ${mainDarkClr} 20%, ${mainTransClr}, ${mainDarkClr})
                  `,
            }}
         >
            {/* BACKGROUND */}
            <Box
               className="BG"
               sx={{
                  width: '200%',
                  zIndex: '-2',
                  height: '200%',
                  position: 'absolute',
                  top: '10%',
                  left: '-30%',
                  // transform: 'rotate(20deg)',
                  transform: 'skewY(20deg)',
                  // filter: `drop-shadow(1px 1px 1px red)`,
                  // filter: `drop-shadow(0 0 1px #FFF)`,
                  // backgroundImage: `repeating-conic-gradient(#FFF 0%, transparent .0002%, transparent .45%, transparent .045%)`,
                  background: `transparent url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center`,

                  // backgroundImage: `repeating-conic-gradient(#fff, #000, #fff 0.1deg)`,
               }}
               // repeating-conic-gradient(${mainClr} 0%, transparent .0002%, transparent .75%, transparent .075%)
            />
            {/* BALL 1 - primary clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  position: 'absolute',
                  borderRadius: '50%',
                  background: `linear-gradient(to right, ${darkMainClr1} , ${darkMainClr2})`,
                  filter: `blur(${blurPlanets})`,
                  animation: 'movePlanet1 10s infinite linear',

                  '@keyframes movePlanet1': {
                     '0%': {
                        width: '10vh',
                        height: '10vh',
                        top: '-10vh',
                        right: '-10vw',
                     },
                     '100%': {
                        width: '70vh',
                        height: '70vh',
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
                  bottom: '65vh',
                  right: '-60vw',
                  background: `radial-gradient(#6e540a , ${mainDarkClr})`,
                  filter: `blur(${blurPlanets})`,
                  animation: 'movePlanet2 12s infinite',
                  transitionTimingFunction:
                     'cubic-bezier(0.04, 1.07, 0.62, 1.07)',
                  '@keyframes movePlanet2': {
                     '100%': {
                        bottom: '-55vh',
                        right: '60vw',
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
                  filter: `blur(${blurPlanets})`,
                  animation: 'movePlanet3 4s infinite alternate ease-in-out',
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
                     filter: `blur(${blurPlanets})`,
                     animation: 'movePlanet3moon 5s infinite linear',
                     '@keyframes movePlanet3moon': {
                        '0%': {
                           width: '10px',
                           height: '10px',
                           top: '70%',
                           left: '-30%',
                        },
                        '50%': {
                           width: '25px',
                           height: '25px',
                           top: '30%',
                           left: '45%',
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
               // sx={{
               //    height: { xs: '95vh', sm: '100vh' }, //phones have browser tab on top
               //    paddingTop: { xs: 16, sm: 18, md: 23 },
               //    // gap: { xs: '2rem', sm: '2rem', lg: '3rem' },
               // }}
            >
               {/* TOP hero part */}
               <Grid>
                  <Container>
                     <Typography
                        textAlign="center"
                        component="h1"
                        sx={{
                           fontWeight: 800,
                           fontSize: {
                              xs: '2.3rem',
                              sm: '3.7rem',
                              md: '4.2rem',
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
