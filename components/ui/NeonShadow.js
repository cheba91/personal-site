import { Box } from '@mui/material';

export default function NeonShadow({ children, mainClr, radius }) {
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
