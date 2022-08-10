import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

export default function NeonShadow({ children, radius }) {
   const mainClr = useTheme().palette.primary.main;

   return (
      <Box
         sx={{
            borderRadius: radius,
            boxShadow: `
            1px 3px 5px 0px ${mainClr}`,
         }}
      >
         {children}
      </Box>
   );
}
