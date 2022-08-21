import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

export default function InsetShadow({
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
            // border: 'none',
            boxShadow: `inset -4px -6px 6px 1px rgb(42 42 42), inset 6px 6px 6px 0px rgb(10 10 10)`,
            // boxShadow: `-1px -1px 10px rgb(18 18 18), 1px 1px 10px rgb(18 18 18)`,
         }}
      >
         {children}
      </Box>
   );
}
