import { Grid, Typography, Box, Container, useTheme } from '@mui/material';
import ThemeToggler from './ThemeToggler';
import imgBg from '../public/starsBg.png';
import { lightenDarkenColor } from '../utils/lightenDarkenColor';
import { changeClr } from '../utils/changeClr';

export default function HeroSection({ changeTheme }) {
   const {
      primary: { main: mainClr },
      dark: { main: mainDarkClr },
   } = useTheme().palette;
   const darkMainClr1 = lightenDarkenColor(-0.8, mainClr);
   const oppositeClr =
      lightenDarkenColor(-0.6, changeClr(mainClr, 70)) ?? darkMainClr1;
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
                  background: `transparent url(${imgBg.src}) center center`,
                  animation: {
                     xs: 'moveImgSmallScreen 10s infinite alternate',
                     sm: 'moveImgBigScreen 10s infinite alternate',
                  },
                  '@keyframes moveImgBigScreen': {
                     '100%': {
                        transform: 'scale(1.1)',
                     },
                  },
                  '@keyframes moveImgSmallScreen': {
                     '100%': {
                        transform: 'scale(1.4)',
                     },
                  },
               }}
            />
            {/* BALL 1 - opposite clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  position: 'absolute',
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  top: '-100px',
                  left: '40%',
                  background: `linear-gradient(to right, ${oppositeClr} , #000)`,
                  filter: `blur(10px)`,
                  // animation: 'movePlanet1 2s infinite linear',
                  animation: 'movePlanet1 12s infinite linear',
                  WebkitPerspective: 1000,
                  '@keyframes movePlanet1': {
                     '100%': {
                        top: '125vh',
                        left: '-400px',
                        transform: 'scale(4)',
                     },
                  },
               }}
            />
            {/* BALL 2 - big, main clr */}
            <Box
               sx={{
                  zIndex: '-1',
                  width: '100px',
                  height: '100px',
                  position: 'absolute',
                  top: '-100px',
                  left: '100%',
                  borderRadius: '50%',
                  background: `linear-gradient( to left, #000, ${darkMainClr1})`,
                  filter: `blur(5px)`,
                  // animation: 'movePlanet2 2s infinite linear',
                  animation: 'movePlanet2 8s infinite linear',
                  '@keyframes movePlanet2': {
                     '40%': {
                        left: '110vw',
                        top: '-100px',
                     },
                     '100%': {
                        top: '125vh',
                        left: '60%',
                        transform: 'scale(4)',
                     },
                  },
                  // '&::before': {
                  //    content: "''",
                  //    position: 'absolute',
                  //    width: '180%',
                  //    height: '2.5rem',
                  //    top: '45%',
                  //    left: '-40%',
                  //    // background: `linear-gradient(#0c0c0c 60%, ${darkMainClr1})`,
                  //    background: '#0c0c0c',
                  //    borderRadius: '45%',
                  //    transform: 'skewY(12deg)',
                  // },
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
                  top: '48vh',
                  left: '55vw',
                  background: `radial-gradient(#663741, ${mainDarkClr}  70%)`,
                  filter: `blur(3px)`,
                  animation: 'movePlanet3 7s infinite alternate ease-in-out',

                  '@keyframes movePlanet3': {
                     '100%': {
                        top: '47vh',
                        left: '55vw',
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
               <Grid sx={{ textAlign: 'left' }}>
                  <Typography
                     component="h3"
                     sx={{
                        fontWeight: 800,
                        fontSize: { xs: '4.3vw', sm: '1.8rem' },
                        paddingTop: { xs: '7rem', sm: '8rem', md: '10rem' },
                        paddingBottom: '0rem',
                     }}
                  >{`Hey.`}</Typography>
                  <Typography
                     component="h3"
                     sx={{
                        fontWeight: 800,
                        fontSize: { xs: '5.5vw', sm: '2.2rem' },
                        // paddingTop: { xs: '7rem', sm: '8rem', md: '10rem' },
                        paddingBottom: '0rem',
                     }}
                  >{`I'm Cheba.`}</Typography>
                  <Typography
                     // textAlign="center"
                     component="h1"
                     variant="h2"
                     sx={{
                        fontWeight: 800,
                        fontSize: { xs: '8vw', sm: '3.75rem' },
                     }}
                  >
                     {`Full-stack web dev.`}
                  </Typography>
                  <Typography
                     component="h3"
                     sx={{
                        fontWeight: 800,
                        fontSize: { xs: '5.5vw', sm: '2.2rem' },
                        textAlign: 'right',
                        // paddingTop: { xs: '7rem', sm: '8rem', md: '10rem' },
                        paddingBottom: '0rem',
                     }}
                  >{`Changing the www.`}</Typography>
                  <Typography
                     component="h3"
                     sx={{
                        fontWeight: 800,
                        fontSize: { xs: '4.3vw', sm: '1.8rem' },
                        textAlign: 'right',

                        // paddingTop: { xs: '7rem', sm: '8rem', md: '10rem' },
                        paddingBottom: '0rem',
                     }}
                  >{`One </> at a time.`}</Typography>
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
