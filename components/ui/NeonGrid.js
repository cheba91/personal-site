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
               margin: '0 auto',
               position: 'absolute',
               top: '15vh',
               left: '-50%',
               width: '200vw',
               height: '100%',
               backgroundColor: 'rgba(20 30 40 0.4)',
               backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%), linear-gradient(0deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%)`,
               backgroundSize: '30px 30px',
               transform:
                  'translate3D(0, 0, 0) perspective(150px) rotateX(55deg)',
               // perspectiveOrigin: 'top',
               // animation: 'movement 25s infinite linear',
               // '@keyframes movement': {
               //    '0%': {
               //       backgroundPosition: '0% 0%',
               //    },
               //    '100%': {
               //       backgroundPosition: '0% 100%',
               //    },
               // },
               '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, transparent, black)',
               },
            }}
         />
      </>
   );
}
