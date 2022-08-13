import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

export default function NeonShadow({ children, radius }) {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr },
      },
   } = useTheme();

   return (
      <Box
         sx={{
            borderRadius: radius,
            // boxShadow: `1px 3px 5px 0px ${mainClr}`,
            boxShadow: `-6px -6px 30px ${darkClr}, 3px 3px 0px 1px ${mainClr}`,
            // boxShadow: `-6px -6px 16px ${darkClr}, 2px 3px 7px ${mainClr}`,
         }}
      >
         {children}
      </Box>
   );
}
