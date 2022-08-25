import { Box, useTheme } from '@mui/material';

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
            boxShadow: `inset -4px -6px 6px 1px rgb(42 42 42), inset 6px 6px 6px 0px rgb(10 10 10)`,
         }}
      >
         {children}
      </Box>
   );
}
