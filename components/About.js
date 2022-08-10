import { Box, Grid, Typography, useTheme } from '@mui/material';
import myImage from '../public/myImage.png';
import NeonHeading from './ui/NeonHeading';
export default function About() {
   const {
      palette: {
         primary: { main: mainClr },
      },
      shape: { borderRadius },
   } = useTheme();
   return (
      <>
         <Grid
            id="About"
            mb={7}
            container
            rows={2}
            sx={{
               position: 'relative',
               // background: 'red',
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
                  // opacity: 1,
                  left: '3px',
                  top: '3px',
                  width: 'calc(100% - 6px)',
                  height: 'calc(100% - 6px)',
                  background: `linear-gradient(to right, rgb(30, 30, 30), rgb(20, 20, 20))`,
                  // background: lightDark,
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
            {/* Image */}
            <Grid item xs={12} sm={5} textAlign="center">
               <Box
                  component="img"
                  alt="My image"
                  src={myImage.src}
                  sx={{
                     borderRadius: '50%',
                     borderRight: `1px ${mainClr} red`,
                     marginTop: { xs: '2rem', sm: '0' },
                     marginLeft: { xs: '0', sm: '1rem' },
                     height: 190,
                     width: 190,
                     maxWidth: '100%',
                     maxHeight: '100%',
                     transition: 'transform 1s ease 0s',
                     '&:hover': {
                        transform: 'perspective(500px) rotateY(-20deg)',
                     },
                  }}
               ></Box>
            </Grid>
         </Grid>
      </>
   );
}
