import AllProjects from './AllProjects';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import AnchorId from './ui/AnchorId';
import NeonShadow from './ui/NeonShadow';
import AllTech from './AllTech';
import OutsetShadow from './ui/OutsetShadow';
export default function Experience() {
   const {
      palette: {
         dark: { cardBg },
      },
      shape: { borderRadius },
   } = useTheme();

   return (
      <>
         <AnchorId id={'experience'} />
         <NeonShadow radius={`${borderRadius}px`}>
            {/* Experience */}
            <Box
               mb={5}
               sx={{
                  borderRadius: `${borderRadius}px`,
                  background: cardBg,
                  padding: { xs: '1.5rem', sm: '2rem' },
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
               }}
            >
               <NeonHeading text={'Experience'} />
               {/* Short desc */}
               <OutsetShadow
                  customStyles={{
                     marginBottom: '4rem',
                  }}
               >
                  <Typography
                     sx={{
                        padding: '2rem 1.5rem',
                        textAlign: 'left',
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                     }}
                  >{`Short desc...Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi minus aspernatur, neque odit, rem similique accusantium
                  delectus veritatis quisquam quibusdam perferendis ratione est?
                  Nihil ad quia iure deleniti distinctio tenetur?`}</Typography>
               </OutsetShadow>
               <AllTech />
               {/* Projects */}
               <AllProjects />
            </Box>
         </NeonShadow>
      </>
   );
}
