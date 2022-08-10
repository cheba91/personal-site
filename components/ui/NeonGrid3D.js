import { Box } from '@mui/material';
import { lightenDarkenColor } from '../../utils/lightenDarkenColor';
import ThemeToggler from '../ThemeToggler';
import { useTheme } from '@mui/material';

export default function NeonGrid({ changeTheme }) {
   const mainClr = useTheme().palette.primary.main;

   const darkerMainClr = lightenDarkenColor(-0.8, mainClr);
   const animationSize = 1200;
   const fromTop = 80;
   const fromLeft = 50;
   const animationDuration = 2.5;
   const animationDelay = 1.2;
   const nrOfLines = [...Array(30).keys()];

   return (
      <>
         <ThemeToggler changeTheme={changeTheme} />
         <Box
            className="newNeonGrid"
            sx={{
               overflow: 'hidden',
               zIndex: '-1',
               marginTop: `-${animationSize / 1.8}px`,
               marginLeft: `-${animationSize / 2}px`,
               position: 'absolute',
               top: `${fromTop}%`,
               left: `${fromLeft}%`,
               width: `${animationSize}px`,
               height: `${animationSize}px`,
               transform:
                  'translate3D(0,120px,0) perspective(350px) rotateX(75deg)',
            }}
         >
            {nrOfLines.map((line, i) => {
               const percent = (nrOfLines.length - i + 1) / nrOfLines.length;
               const size = animationSize * percent;

               return (
                  <Box
                     key={`${line}-${i}`}
                     sx={{
                        margin: '0 auto',
                        position: 'absolute',
                        left: `${animationSize / 2 - size / 2}px`,
                        top: `${animationSize / 2 - size / 2}px`,
                        // background: '#1a1a1a',
                        textAlign: 'center',
                        height: size,
                        width: size,
                        borderRadius: `${size * 0.35}px`,
                        border: `2px solid ${darkerMainClr}`,
                        // borderImage: `linear-gradient( #c15b5b, ${darkerMainClr}) 10%`,
                        animation: `animate-lines ${animationDuration}s infinite linear`,
                        animationDelay: `${
                           animationDelay * animationDuration * percent
                        }s`,

                        '@keyframes animate-lines': {
                           '0%': {
                              transform: 'rotate(0deg)',
                           },
                           '50%': {
                              transform: 'rotate(90deg)scaleY(1.5)skewY(10deg)',
                           },
                           '100%': {
                              transform: 'rotate(180deg)',
                           },
                        },
                     }}
                  />
               );
            })}
         </Box>
      </>
      // <>
      //    <Box
      //       className="NeonGrid"
      //       sx={{
      //          zIndex: '-1',
      //          margin: '0 auto',
      //          position: 'absolute',
      //          top: '15vh',
      //          left: '-50%',
      //          width: '200vw',
      //          height: '100%',
      //          backgroundColor: 'rgba(20 30 40 0.4)',
      //          backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%), linear-gradient(0deg, transparent 0%, transparent 85%, ${darkerMainClr} 90%, transparent 95%)`,
      //          backgroundSize: '30px 30px',
      //          transform:
      //             'translate3D(0,100px,0) perspective(150px) rotateX(60deg)',
      //          perspectiveOrigin: 'top',
      //          animation: 'movement 5s forwards infinite linear alternate',
      //          '@keyframes movement': {
      //             '0%': {
      //                // backgroundPosition: '1% 0%',
      //                transform:
      //                   'translate3D(0,100px,0) perspective(150px) rotateX(60deg)',
      //             },
      //             '100%': {
      //                // backgroundPosition: '0% 200%',
      //                transform:
      //                   'translate3D(0,100px,0) perspective(150px) rotateX(40deg)',
      //             },
      //          },
      //          '&::after': {
      //             content: '""',
      //             position: 'absolute',
      //             top: '0',
      //             left: '0',
      //             width: '100%',
      //             height: '100%',
      //             background: 'linear-gradient(to top, transparent, #121212)',
      //          },
      //       }}
      //    />
      // </>
   );
}
