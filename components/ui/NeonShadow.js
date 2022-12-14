import { Box, useTheme } from '@mui/material';

export default function NeonShadow({ children, radius, customClr = false }) {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { main: darkClr },
      },
   } = useTheme();

   return (
      <Box
         sx={{
            borderRadius: radius,
            boxShadow: `-6px -6px 30px ${darkClr}, 4px 4px 0px 1px ${
               customClr || mainClr
            }`,
         }}
      >
         {children}
      </Box>
   );
}
