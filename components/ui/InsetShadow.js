import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { lightenDarkenColor } from '../../utils/lightenDarkenColor';

export default function InsetShadow({ children, radius }) {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr, lighter: darkClrLighter },
      },
   } = useTheme();
   const darkMainClr = lightenDarkenColor(-0.9, mainClr);
   return (
      <Box
         sx={{
            background: 'radial-gradient(rgb(29, 29, 29), rgb(37, 37, 37))',
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
