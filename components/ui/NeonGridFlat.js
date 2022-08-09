import { Box } from '@mui/material';
import { lightenDarkenColor } from '../../utils/lightenDarkenColor';

export default function NeonGrid({ mainClr }) {
   const darkerMainClr = lightenDarkenColor(mainClr, -80);

   return (
      <>
         <Box
            className="NeonGrid"
            sx={{
               zIndex: '-1',
               //    margin: '0 auto',
               position: 'relative',
               width: '200%',
               height: '80%',
               //    top: '15vh',
               left: '-50%',
               transform:
                  'translate3D(0,50px,0) perspective(150px) rotateX(60deg)',
               //    backgroundColor: 'rgba(20 30 40 0.4)',
               backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%),
                linear-gradient(0deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%), 
                linear-gradient( 90deg, transparent, transparent, rgba(0,0,0,1)), 
                linear-gradient( 90deg, rgba(0,0,0,1), transparent, transparent)`,
               backgroundSize: '30px 17px',
               animation: 'moveGrid 15s linear infinite',
               '@keyframes moveGrid': {
                  '0%': {
                     backgroundPosition: '0% 0%',
                     //  transform: ' rotateX(60deg)',
                  },
                  '100%': {
                     backgroundPosition: '0% 200%',
                     //  transform: 'skewX(1deg)',
                  },
               },
               '&::before': {
                  background: 'linear-gradient(to top, transparent, #121212)',
               },
               '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, transparent, #121212)',
               },
            }}
         />
      </>
   );
}
