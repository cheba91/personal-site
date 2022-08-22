import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Monster from './ui/Monster';

export default function ThemeToggler({ changeTheme }) {
   const mainClr = useTheme().palette.primary.main;
   const pinWidth = 30;
   const ballSize = 170;
   const [bubbleVisible, setBubbleVisible] = useState(true);
   const [pinPosX, setPinPosX] = useState(61.7);
   const [pinPosY, setPinPosY] = useState(-9);

   const componentToHex = (c) => {
      let hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
   };
   const rgbToHex = (r, g, b) =>
      '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);

   const colors = [
      { r: 0xe4, g: 0x3f, b: 0x00 },
      { r: 0xfa, g: 0xe4, b: 0x10 },
      { r: 0x55, g: 0xcc, b: 0x3b },
      { r: 0x09, g: 0xad, b: 0xff },
      { r: 0x6b, g: 0x0e, b: 0xfd },
      { r: 0xe7, g: 0x0d, b: 0x86 },
      { r: 0xe4, g: 0x3f, b: 0x00 },
   ];
   const handleChangeTheme = (e) => {
      let rect = e.target.getBoundingClientRect();
      //Compute cartesian coordinates as if the circle radius was 1
      let x = (2 * (e.clientX - rect.left)) / (rect.right - rect.left) - 1;
      let y = 1 - (2 * (e.clientY - rect.top)) / (rect.bottom - rect.top);
      //Compute the angle in degrees with 0 at the top and turning clockwise as expected by css conic gradient
      let a = ((Math.PI / 2 - Math.atan2(y, x)) / Math.PI) * 180;
      if (a < 0) a += 360;
      //Map the angle between 0 and number of colors in the gradient minus one
      a = (a / 360) * (colors.length - 1); //minus one because the last item is at 360° which is the same as 0°
      //Compute the colors to interpolate
      let a0 = Math.floor(a) % colors.length;
      let a1 = (a0 + 1) % colors.length;
      let c0 = colors[a0];
      let c1 = colors[a1];
      //Compute the weights and interpolate colors
      let a1w = a - Math.floor(a);
      let a0w = 1 - a1w;
      let color = {
         r: c0.r * a0w + c1.r * a1w,
         g: c0.g * a0w + c1.g * a1w,
         b: c0.b * a0w + c1.b * a1w,
      };
      //Compute the radius
      let r = Math.sqrt(x * x + y * y);
      if (r > 1) r = 1;
      //Compute the white weight, interpolate, and round to integer
      let cw = r < 0.8 ? r / 0.8 : 1;
      let ww = 1 - cw;
      color.r = Math.round(color.r * cw + 255 * ww);
      color.g = Math.round(color.g * cw + 255 * ww);
      color.b = Math.round(color.b * cw + 255 * ww);
      // const finalColor = rgbToHex(color.r, color.g, color.b);
      // Edit Pin
      setPinPosY(e.clientY - rect.top - pinWidth - 2);
      setPinPosX(e.clientX - rect.left - 2);
      console.log('pinPosX: ', pinPosX, 'pinPosY:', pinPosY);
      console.log('clr: ', `rgb(${color.r},${color.g},${color.b})`);
      changeTheme(`rgb(${color.r},${color.g},${color.b})`);
      setBubbleVisible(false);
   };
   return (
      // Outer Ball

      <Box
         sx={{
            // zIndex: 20,
            width: `${ballSize}px`,
            height: `${ballSize}px`,
            display: 'inline-block',
            WebkitTapHighlightColor: 'transparent',
            position: 'absolute',
            left: `50%`,
            bottom: '19%',
            transform: 'translate(-50%, 0)',
            animation: 'moveBall 12s infinite alternate',
            '@keyframes moveBall': {
               '100%': {
                  transform: 'translate(-50%, 0) scale(1.05)',
                  // transform: 'scale(1.01)',
               },
            },
         }}
      >
         {/* Inner ball, coloring etc. */}
         <Box
            onClick={handleChangeTheme}
            sx={{
               display: 'inline-block',
               cursor: 'crosshair',
               width: '100%',
               height: '100%',
               margin: '0',
               borderRadius: '50%',
               position: 'relative',
               boxShadow: `0px 0px 35px -4px #6e7072`,
               background: `radial-gradient(white, transparent 80%), conic-gradient(#e43f00, #fae410, #55cc3b, #09adff, #6b0efd, #e70d86, #e43f00)`,
               '&::before': {
                  content: "''",
                  position: 'absolute',
                  background: `radial-gradient(circle at 19% 30%, rgba(255, 255, 255, 0.6) 1%, rgba(240, 240, 240, 0.1) 10%, rgba(0, 0, 0, 0.7) 65%)`,
                  borderRadius: '50%',
                  bottom: '0',
                  left: '0',
                  height: '100%',
                  width: '100%',
               },
               // White Reflection
               // '&::after': {
               //    width: '100%',
               //    height: '100%',
               //    content: "''",
               //    position: 'absolute',
               //    top: '27%',
               //    left: '23%',
               //    borderRadius: '50%',
               //    filter: 'blur(1px)',
               //    transform:
               //       'translateX(-80px) translateY(-90px) skewX(-20deg)',
               //  animation: 'moveShadow 4s infinite alternate',
               // '@keyframes moveShadow': {
               //    '0%': { top: '27%', left: '23%' },
               //    // '50%': { left: '26%', top: '28%' },
               //    '100%': { top: '27%', left: '23%' },
               // },
               // },
            }}
         ></Box>
         <Box
            // pole
            sx={{
               position: 'absolute',
               height: `${pinWidth + 5}px`,
               width: `4px`,
               top: `${pinPosY - 5}px`,
               left: `${pinPosX - 1}px`,
               background: 'linear-gradient( to left, #fff, rgb(60, 60, 60))',

               // '&::after': {
               //    content: "''",
               //    position: 'absolute',
               //    bottom: 0,
               //    left: '-2px',
               //    height: '2px',
               //    width: '8px',
               //    background: '#424242',
               // },
               // flag
               '&::before': {
                  content: '""',
                  borderTopRightRadius: '5px',
                  borderBottomRightRadius: '5px',
                  paddingLeft: '3px',
                  fontWeight: 600,
                  fontSize: 'smaller',
                  fontFamily: 'Inter',
                  textAlign: 'center',
                  color: 'rgb(30, 30, 30)',
                  position: 'absolute',
                  height: `${pinWidth / 2}px`,
                  width: `${pinWidth}px`,
                  left: '3px',
                  top: '1px',
                  background:
                     'linear-gradient( to left, #fff, rgb(60, 60, 60))',
                  boxShadow: `1px 1px 0px 1px rgb(120, 120, 120)`,
                  transformOrigin: 'top',
                  animation: 'moveFlag 0.7s infinite alternate',
                  '@keyframes moveFlag': {
                     '100%': {
                        transform: 'skewX(9deg)',
                     },
                  },
               },
            }}
         >
            {/* Monster */}
            <Monster
               clr={mainClr}
               customStyles={{
                  position: 'absolute',
                  left: `-${pinWidth + 16}px`,
                  top: '-6px',
                  width: '57px',
                  height: '57px',
               }}
            />
            {/* Text bubble */}
            {bubbleVisible && (
               <Box
                  sx={{
                     width: '85px',
                     height: '40px',
                     background: '#1e1e1e',
                     padding: '0.3rem',
                     color: '#f1f1f1',
                     fontSize: '13px',
                     position: 'absolute',
                     borderRadius: '15px',
                     left: '-135px',
                     top: '-30px',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  Move me
                  <Box
                     sx={{
                        width: '0',
                        height: '0',
                        borderLeft: '7px solid transparent',
                        borderRight: '7px solid transparent',
                        borderTop: '25px solid #1e1e1e',
                        position: 'absolute',
                        top: '50%',
                        right: '-10%',
                        transform: 'rotate(-60deg)',
                     }}
                  ></Box>
               </Box>
            )}
         </Box>
      </Box>
   );
}
