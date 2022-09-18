import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import Fade from '@mui/material/Fade';
import { Link, useTheme } from '@mui/material';

export default function ScrollToTop() {
   const {
      primary: { main: primaryColor },
      dark: { cardBg: darkColor },
   } = useTheme().palette;
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
   });
   return (
      <Fade in={trigger}>
         <Link href="#top" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
            <Fab
               sx={{
                  background: darkColor,
                  color: primaryColor,
                  boxShadow: `1px 1px 1px 2px rgb(10 10 10)`,
                  '&:hover': {
                     background: darkColor,
                     color: primaryColor,
                     boxShadow: `1px 1px 1px 2px rgb(10 10 10)`,
                  },
               }}
               size="medium"
               aria-label="scroll back to top"
            >
               <ArrowDropUpRoundedIcon sx={{ fontSize: '2rem' }} id="icon" />
            </Fab>
         </Link>
      </Fade>
   );
}
