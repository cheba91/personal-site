import { Box } from '@mui/material';

export default function NeonBox({ children, color }) {
   return (
      <Box
         sx={{
            boxShadow: `
            2px 2px 3px 1px ${color},
            0px 2px 4px ${color},
            0px 4px 8px ${color},
            0px 8px 16px ${color}`,
            borderRadius: '50%',
         }}
      >
         {children}
      </Box>
   );
}
