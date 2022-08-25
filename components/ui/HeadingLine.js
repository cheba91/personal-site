import { Box, useTheme } from '@mui/material';

export default function HeadingLine({ direction, customStyles }) {
   const mainClr = useTheme().palette.primary.main;
   return (
      <Box
         sx={{
            width: { xs: '6vw', md: '3vw' },
            height: '2px',
            background: `linear-gradient(to ${direction}, transparent , ${mainClr})`,
            verticalAlign: 'middle',
            display: 'inline-block',
            ...customStyles,
         }}
      />
   );
}
