import { Box } from '@mui/material';
import { lightenDarkenColor } from '../../utils/lightenDarkenColor';

export default function NeonGrid({ mainClr }) {
   const darkerMainClr = lightenDarkenColor(mainClr, -80);
   return (
      <Box sx={{}}>
         <Box
            className="NeonGrid"
            sx={{
               zIndex: '-1',
               margin: '0 auto',
               position: 'fixed',
               bottom: '0',
               left: '-50%',
               backgroundColor: 'rgba(20 30 40 0.4)',
               backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%), linear-gradient(0deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%)`,
               backgroundSize: '12px 12px',
               width: '200vw',
               height: '80vh',
               transform:
                  'translate3D(0, 0, 0) perspective(150px) rotateX(45deg)',
               perspectiveOrigin: 'top',
               animation: 'movement 25s infinite linear',
               '@keyframes movement': {
                  '0%': {
                     backgroundPosition: '0% 0%',
                  },
                  '100%': {
                     backgroundPosition: '0% 100%',
                  },
               },
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
      </Box>
   );
}
