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
   const blurPlanets = '20px';
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

               // filter: `drop-shadow(0 0 .2vmin #FFF) drop-shadow(0 0 .2vmin #FFF) drop-shadow(0 0 .2vmin #FFF)`,
               // backgroundImage: `
               // repeating-conic-gradient(#FFF2 0%, transparent .0002%, transparent .0045%, transparent .045%),
               // repeating-conic-gradient(#FFF9 0%, transparent .0002%, transparent .0090%, transparent .090%),
               // repeating-conic-gradient(#FFF6 0%, transparent .0002%, transparent .0075%, transparent .075%)`,
               backgroundImage: `
                  linear-gradient(to bottom, ${mainDarkClr} 20%, ${mainTransClr}, ${mainDarkClr})
                  `,
            }}
         >
            {/* BACKGROUND */}
            <Box
               sx={{
                  width: '200%',
                  zIndex: '-2',
                  height: '200%',
                  position: 'absolute',
                  top: '10%',
                  left: '-30%',
                  backgroundImage: `
                  repeating-conic-gradient(#FFF 0%, transparent .0002%, transparent .45%, transparent .045%),
                  repeating-conic-gradient(#FFF 0%, transparent .0002%, transparent .45%, transparent .045%)
                  `,
                  transform: 'rotate(10deg)',
               }}
               // repeating-conic-gradient(${mainClr} 0%, transparent .0002%, transparent .75%, transparent .075%)
            />
            {/* BALL 1 - primary clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  width: '10vh',
                  height: '10vh',
                  top: '-10vh',
                  right: '-10vw',
                  position: 'absolute',
                  borderRadius: '50%',
                  background: `linear-gradient(to right, ${darkMainClr1} , ${darkMainClr2})`,
                  opacity: 1,
                  animation: 'movePlanet1 10s infinite linear',
                  // filter: 'blur(blurPlanets)',
                  '@keyframes movePlanet1': {
                     '0%': {
                        width: '10vh',
                        height: '10vh',
                        top: '-10vh',
                        right: '-10vw',
                     },
                     '100%': {
                        width: '50vh',
                        height: '50vh',
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
                  width: { xs: '60vw', sm: '40vw', md: '30vw' },
                  height: { xs: '60vw', sm: '40vw', md: '30vw' },
                  position: 'absolute',
                  borderRadius: '50%',
                  bottom: '25vh',
                  right: '-10vw',
                  background: `radial-gradient(#976f00, #000000  70%)`,
                  opacity: 1,
                  animation: 'movePlanet2 7s infinite alternate',
                  '@keyframes movePlanet2': {
                     '0%': {
                        bottom: '25vh',
                        right: '-10vw',
                     },
                     '100%': {
                        bottom: '5vh',
                        right: '0vw',
                     },
                  },
                  // filter: 'blur(blurPlanets)',
                  '&::before': {
                     content: "''",
                     position: 'absolute',
                     width: '130%',
                     height: '4vw',
                     top: '50%',
                     left: '-15%',
                     background: `linear-gradient(#0c0c0c 60%, ${darkMainClr1})`,
                     borderRadius: '45%',
                     transform: 'skewY(22deg)',
                     filter: 'blur(blurPlanets)',
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
                  bottom: '50%',
                  right: '50%',
                  background: `radial-gradient(#663741, ${mainDarkClr}  70%)`,
                  opacity: 1,
                  // animation: 'movePlanet3 5s infinite linear',
                  '@keyframes movePlanet3': {
                     '0%': {},
                     '25%': {},
                     '250%': {},
                     '100%': {},
                  },
                  // filter: 'blur(blurPlanets)',
                  '&::before': {
                     content: "''",
                     position: 'absolute',
                     // transform: 'skewY(10deg)',

                     background: `radial-gradient( ${darkMainClr1}, #000 )`,
                     borderRadius: '50%',
                     // transform: 'skewY(22deg)',
                     // filter: 'blur(blurPlanets)',
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
                           top: '60%',
                           left: '45%',
                        },
                        '100%': {
                           width: '10px',
                           height: '10px',
                           top: '50%',
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
