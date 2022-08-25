import AllProjects from './AllProjects';
import { Box, Typography, useTheme } from '@mui/material';
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
                        textAlign: 'center',
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                     }}
                  >{`I've been in web development for the past 4+ years. I began with WordPress, 
                  but lately, the MERN stack and Next.js have gotten most of my attention. I have 
                  primarily worked as a freelancer for a couple of web development studios, 
                  either by starting from scratch or optimizing, fixing, or upgrading already 
                  existing projects.`}</Typography>
               </OutsetShadow>
               <AllTech />
               {/* Projects */}
               <AllProjects />
            </Box>
         </NeonShadow>
      </>
   );
}
