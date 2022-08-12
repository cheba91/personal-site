import Box from '@mui/material/Box';
import { useState } from 'react';

export default function ThemeToggler({ changeTheme }) {
   const pinWidth = 40;
   const ballSize = 170;
   const [pinPosX, setPinPosX] = useState(98.5);
   const [pinPosY, setPinPosY] = useState(-26);

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
      // console.log(`rgb(${color.r},${color.g},${color.b})`);
      const finalColor = rgbToHex(color.r, color.g, color.b);
      // Edit Pin
      setPinPosY(e.clientY - rect.top - pinWidth - 2);
      setPinPosX(e.clientX - rect.left - 2);
      console.log('pin x: ', pinPosX);
      console.log('pin y: ', pinPosY);
      changeTheme(`rgb(${color.r},${color.g},${color.b})`);
      return;
      // Change theme
      changeTheme(finalColor);
   };
   return (
      // Outer Ball

      <Box
         sx={{
            zIndex: 20,
            width: `${ballSize}px`,
            height: `${ballSize}px`,
            display: 'inline-block',
            WebkitTapHighlightColor: 'transparent',
            position: 'absolute',
            // top: { sm: `66%`, xs: '63%' },
            left: `50%`,
            bottom: '15%',
            transform: 'translate(-50%, 0)',
            animation: 'moveBall 6s infinite alternate',
            '@keyframes moveBall': {
               '100%': { left: `48%`, bottom: '17%' },
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
               // filter: 'blur(1px)',
               background: `radial-gradient(rgba(255,255,255,0.2),transparent 70%), conic-gradient(#cc3a00, #e1cb05, #40a22a, #0099e6, #4f02ca, #c10b6f, #cc3a00)`,
               // background: `radial-gradient(rgba(255,255,255,0.3),transparent), conic-gradient(#e43f00, #fae410, #55cc3b, #09adff, #6b0efd, #e70d86, #e43f00)`,
               // background: `radial-gradient(white, transparent 80%), conic-gradient(#e43f00, #fae410, #55cc3b, #09adff, #6b0efd, #e70d86, #e43f00)`,
               '&::before': {
                  content: "''",
                  position: 'absolute',
                  // boxShadow: `inset -50px -50px 30px rgba(0,0,0,.5)`,
                  //background: `linear-gradient(120deg, rgba(255,255,255,0.1),  rgba(0,0,0,0.3))`,
                  background: `linear-gradient(120deg, transparent 20%,
                     rgba(0,0,0,0.8)), radial-gradient(circle at 19% 30%, rgba(255, 255, 255, 0.6) 1%, rgba(240, 240, 240, 0.3) 10%, rgba(0, 0, 0, 0.7) 65%)`,
                  // background: `radial-gradient(circle at 19% 30%, rgba(255, 255, 255, 0.6) 1%, rgba(240, 240, 240, 0.1) 10%, rgba(0, 0, 0, 0.7) 65%)`,
                  // background: `radial-gradient(circle at 0% 30%, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3) 65%)`,
                  borderRadius: '50%',
                  bottom: '0',
                  left: '0',
                  // opacity: '0.6',
                  height: '100%',
                  width: '100.6%',
                  // filter: 'blur(1px)',
                  zIndex: '2',
               },
               // White Reflection
               '&::after': {
                  width: '100%',
                  height: '100%',
                  content: "''",
                  position: 'absolute',
                  top: '27%',
                  left: '23%',
                  // paddingLeft: '100%',
                  // paddingTop: '100%',
                  borderRadius: '50%',
                  // background: `radial-gradient(circle at 50% 55%, rgba(255, 255, 255, 0.4) 2px, rgba(255, 255, 255, 0.6) 3%, rgba(255, 255, 255, 0) 24%)`,
                  background: `radial-gradient(circle at 50% 50%,  rgba(255, 255, 255, 0.4),  rgba(255, 255, 255, 0) 24%)`,
                  filter: 'blur(1px)',
                  transform:
                     'translateX(-80px) translateY(-90px) skewX(-20deg)',
                  animation: 'moveReflection 4s infinite alternate',
                  '@keyframes moveReflection': {
                     '0%': { top: '27%', left: '23%' },
                     '50%': { left: '26%', top: '28%' },
                     '100%': { top: '27%', left: '23%' },
                  },
               },
            }}
         ></Box>
         <Box
            className="flag"
            sx={{
               zIndex: '3',
               position: 'absolute',
               width: `${pinWidth}px`,
               height: `${pinWidth}px`,
               top: pinPosY + 'px',
               left: pinPosX + 'px',

               // pole
               '&::after': {
                  content: "''",
                  position: 'absolute',
                  height: `${pinWidth}px`,
                  width: '4px',
                  boxShadow: '0px 2px 2px #000',
                  background:
                     'linear-gradient( to bottom, #fff, rgb(60, 60, 60))',
               },
               // flag
               '&::before': {
                  content: '"PICK"',
                  paddingRight: '2px',
                  fontWeight: 600,
                  fontSize: 'smaller',
                  fontFamily: 'Inter',
                  textAlign: 'right',
                  color: 'rgb(30, 30, 30)',
                  position: 'absolute',
                  height: `${pinWidth / 2}px`,
                  width: `${pinWidth}px`,
                  left: '1px',
                  top: '2px',
                  background:
                     'linear-gradient( to left, #fff, rgb(60, 60, 60))',

                  animation: 'moveFlag 0.5s infinite alternate',
                  '@keyframes moveFlag': {
                     '100%': {
                        // width: `${pinWidth - 5}px`,
                        transform: 'skewX(9deg)',
                     },
                  },
               },
            }}
         ></Box>
      </Box>
   );
}
