import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material';

const handleClick = () => {
   const anchor = document.querySelector('#top');
   if (anchor) {
      if (window.location.hash) window.location.hash = '';
      anchor.scrollIntoView({
         block: 'center',
      });
   }
};
export default function BackToTop() {
   const { main: darkClr, cardBg } = useTheme().palette.dark;

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
                  color: darkClr,
                  background: cardBg,
                  border: 'none',
                  color: 'text.disabled',
                  '&:hover': {
                     color: 'text.disabled',
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
