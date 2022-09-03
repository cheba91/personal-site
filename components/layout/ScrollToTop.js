import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import Fade from '@mui/material/Fade';
import { Link } from '@mui/material';

export default function ScrollToTop() {
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
   });
   return (
      <Fade in={trigger}>
         <Link href="#top" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
            <Fab
               sx={{
                  background: 'rgb(75, 75, 75)',
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
         </Link>
      </Fade>
   );
}
