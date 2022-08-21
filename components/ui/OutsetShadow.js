import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

export default function OutsetShadow({
   children,
   radius = '15px',
   customStyles,
}) {
   const cardBg = useTheme().palette.dark.cardBg;
   return (
      <Box
         sx={{
            ...customStyles,
            background: cardBg,
            borderRadius: radius,
            boxShadow: `-1px -1px 6px 1px rgb(42 42 42),  6px 6px 6px 0px rgb(10 10 10)`,
         }}
      >
         {children}
      </Box>
   );
}
