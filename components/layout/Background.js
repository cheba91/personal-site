import { Box } from '@mui/material';

export default function Background({ color, children, heroSectionHeight }) {
   return (
      <>
         <Box
            className="backgroundBox"
            sx={{
               background: '#121212',
               top: heroSectionHeight,
               zIndex: 3,
            }}
         >
            {children}
         </Box>
      </>
   );
}
