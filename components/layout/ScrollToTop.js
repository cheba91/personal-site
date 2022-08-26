import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
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
                  background: 'rgb(75, 75, 75)',
                  // border: 'none',
                  color: 'primary.main',
                  boxShadow: 'inset 0px 0px 20px 8px rgb(20, 20, 20)',
                  '&:hover': {
                     background: 'rgb(75, 75, 75)',
                     color: 'primary.main',
                     boxShadow: 'inset 0px 0px 20px 4px rgb(30, 30, 30)',
                  },
               }}
               size="medium"
               aria-label="scroll back to top"
            >
               <ArrowDropUpRoundedIcon sx={{ fontSize: '2rem' }} id="icon" />
            </Fab>
         </Box>
      </Fade>
   );
}
