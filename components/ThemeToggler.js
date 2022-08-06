import Box from '@mui/material/Box';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { useState } from 'react';
// import { invertColor } from '../utils/invertColor';
// import { darkenMarker, lightenDarkenColor } from '../utils/lightenDarkenColor';

export default function ThemeToggler({ changeTheme }) {
   const pinWidth = 35;

   const [pinPosX, setPinPosX] = useState('0');
   const [pinPosY, setPinPosY] = useState('0');
   // const [pinColor, setPinColor] = useState('#fff');

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
      const finalColor = rgbToHex(color.r, color.g, color.b);
      // Edit Pin
      setPinPosY(e.pageY - pinWidth);
      setPinPosX(e.pageX - pinWidth / 2);
      // setPinColor(`rgb(${color.r},${color.g},${color.b})`);
      // setPinColor(darkenMarker(color.r, color.g, color.b));
      // setPinColor(lightenDarkenColor(finalColor));
      // Change theme
      changeTheme(finalColor);
   };
   return (
      <Box
         sx={{
            width: '300px',
            height: '300px',
            display: 'inline-block',
            WebkitTapHighlightColor: 'transparent',
         }}
      >
         <Box
            onClick={handleChangeTheme}
            sx={{
               display: 'inline-block',
               cursor: 'pointer',
               width: '100%',
               height: '100%',
               margin: '0',
               borderRadius: '50%',
               position: 'relative',
               background:
                  'radial-gradient(white, transparent 80%), conic-gradient(#e43f00, #fae410, #55cc3b, #09adff, #6b0efd, #e70d86, #e43f00)',
               '&::before': {
                  content: "''",
                  position: 'absolute',
                  background:
                     'radial-gradient(circle at 50% 120%,  rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%)',
                  borderRadius: '50%',
                  bottom: '2.5%',
                  left: '5%',
                  opacity: '0.6',
                  height: '100%',
                  width: '90%',
                  filter: 'blur(5px)',
                  zIndex: '2',
               },
               '&::after': {
                  width: '100%',
                  height: '100%',
                  content: "''",
                  position: 'absolute',
                  top: '5%',
                  left: '10%',
                  borderRadius: '50%',
                  background:
                     'radial-gradient(circle at 50% 50%,  rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%)',
                  filter: 'blur(10px)',
                  transform:
                     'translateX(-80px) translateY(-90px) skewX(-20deg)',
               },
            }}
         ></Box>

         <EditLocationIcon
            sx={{
               position: 'absolute',
               color: '#707070',
               top: pinPosY + 'px',
               left: pinPosX + 'px',
               fontSize: `${pinWidth}px`,
               animation: 'bounce 1.5s infinite linear',
               '@keyframes bounce': {
                  '0%': { top: pinPosY },
                  '25%': { top: pinPosY - 7 + 'px' },
                  '50%': { top: pinPosY - 14 + 'px' },
                  '75%': { top: pinPosY - 7 + 'px' },
                  '100%': { top: pinPosY },
               },
            }}
         />
      </Box>
   );
}
