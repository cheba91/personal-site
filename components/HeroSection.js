import { Grid, Typography, Box, Container, useTheme } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import imgBg from '../public/starsBg.png';
import { lightenDarkenColor } from '../utils/lightenDarkenColor';

export default function HeroSection({ changeTheme }) {
   const {
      primary: { main: mainClr },
      dark: { main: mainDarkClr },
   } = useTheme().palette;
   const darkMainClr1 = lightenDarkenColor(-0.8, mainClr);
   return (
      <>
         <Box
            className="outer"
            pt={11}
            sx={{
               backgroundImage: `linear-gradient(130deg,  ${darkMainClr1}, ${mainDarkClr} 70%)`,
               height: {
                  xs: '95vh', //phones have browser tab on top
                  sm: '100vh',
                  zIndex: '1',
                  position: 'relative',
                  overflow: 'hidden',
               },
            }}
         >
            {/* BACKGROUND IMAGE */}
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
                  width: '20vh',
                  height: '20vh',
                  top: '-20vh',
                  right: '20vh',
                  background: `linear-gradient(to right, ${darkMainClr1} , #000)`,
                  filter: `blur(10px)`,
                  animation: 'movePlanet1 12s infinite linear',
                  '@keyframes movePlanet1': {
                     '100%': {
                        top: '125vh',
                        right: '170vw',
                        transform: 'scale(4)',
                     },
                  },
               }}
            />
            {/* BALL 2 - big, fixed clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  width: '30vh',
                  height: '30vh',
                  position: 'absolute',
                  bottom: '40vh',
                  right: '-45vh',
                  borderRadius: '50%',
                  background: `radial-gradient(#2c2206 , ${mainDarkClr})`,
                  filter: `blur(11px)`,
                  animation: 'movePlanet2 9s infinite linear',
                  '@keyframes movePlanet2': {
                     '40%': {
                        bottom: '40vh',
                        right: '-45vh',
                     },
                     '100%': {
                        bottom: '-35vh',
                        right: '15vh',
                        transform: 'scale(1.3)',
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
                  width: '9vh',
                  height: '9vh',
                  position: 'absolute',
                  borderRadius: '50%',
                  top: '45vh',
                  left: '65vw',

                  // top: '45vh',
                  // left: '65vw',
                  // transform: 'scale(1.4)',

                  background: `radial-gradient(#663741, ${mainDarkClr}  70%)`,
                  filter: `blur(5px)`,
                  animation: 'movePlanet3 7s infinite alternate ease-in-out',

                  '@keyframes movePlanet3': {
                     '100%': {
                        top: '45vh',
                        left: '60vw',
                        transform: 'scale(1.2)',
                     },
                  },
                  // 3rd planet moon
                  '&::before': {
                     content: "''",
                     position: 'absolute',
                     background: `radial-gradient( ${darkMainClr1}, #000 )`,
                     borderRadius: '50%',
                     animation: 'movePlanet3moon 9s infinite linear',
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
               <Grid px={7}>
                  <Typography
                     component="h3"
                     sx={{
                        fontSize: { xs: '1.4rem', sm: '1.7rem' },
                        paddingTop: { xs: '10rem', sm: '10rem' },
                        paddingBottom: '0rem',
                     }}
                  >{`Hey, my name is Cheba and I'm a`}</Typography>
                  <Typography
                     // textAlign="center"
                     component="h1"
                     variant="h2"
                     sx={{
                        fontWeight: 800,
                        fontSize: { xs: '3rem', sm: '3.75rem' },

                        //    fontSize: {
                        //       xs: '3rem',
                        //       sm: '3.4rem',
                        //       md: '4.2rem',
                        //       textShadow: '4px 4px 1px #000',
                        //    },
                     }}
                  >
                     {`full-stack web developer.`}
                  </Typography>
               </Grid>

               {/* BOTTOM hero part */}
               <Grid
                  position="relative"
                  width="100%"
                  height="100%"
                  overflow="hidden"
               >
                  <ThemeToggler changeTheme={changeTheme} />
               </Grid>
            </Grid>
         </Box>
      </>
   );
}
