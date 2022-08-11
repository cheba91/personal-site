import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material';

const handleClick = () => {
   const anchor = document.querySelector('#top');
   if (anchor) {
      anchor.scrollIntoView({
         block: 'center',
      });
   }
};
export default function BackToTop() {
   const {
      light: darkClrLighter,
      main: darkClr,
      cardBg,
   } = useTheme().palette.dark;

   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
   });
   return (
      <Fade in={trigger}>
         <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
         >
            <Fab
               sx={{
                  color: 'text.disabled',
                  background: cardBg,
                  boxShadow: `
                    -1px -1px 2px 1px ${darkClr},
                     1px 1px 2px 1px rgba(255,255,255,0.2)`,
                  // backdropFilter: 'saturate(180%) blur(2px)',
                  '&:hover': {
                     // backdropFilter: 'saturate(180%) blur(2px)',
                     color: 'text.disabled',
                     background: darkClrLighter,
                  },
               }}
               size="small"
               aria-label="scroll back to top"
            >
               <ArrowDropUpIcon id="icon" />
            </Fab>
         </Box>
      </Fade>
   );
}

// 2px 2px 5px 1px rgba(255,255,255,0.2),
// -2px -2px 3px 1px rgba(0,0,0,0.3),
