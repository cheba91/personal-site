import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

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
            boxShadow: `-6px -6px 30px ${darkClr}, 3px 3px 0px 1px ${
               customClr || mainClr
            }`,
         }}
      >
         {children}
      </Box>
   );
}
