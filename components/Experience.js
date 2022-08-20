import AllProjects from './AllProjects';
import { Box, Button, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { useTheme } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import AnchorId from './ui/AnchorId';
import NeonShadow from './ui/NeonShadow';
import AllTech from './AllTech';
export default function Experience() {
   const [longDescVisible, setLongDescVisible] = useState(false);
   const toggleLongDesc = () => setLongDescVisible((current) => !current);

   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr, light: darkClrLighter },
         text: { primary: textClr },
      },
      shape: { borderRadius },
   } = useTheme();

   // Button
   const ToggleDescBtn = () => {
      return (
         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
               onClick={toggleLongDesc}
               endIcon={
                  longDescVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />
               }
               sx={{
                  color: textClr,

                  border: `none`,
                  background: cardBg,
                  borderRadius: `11px`,
                  boxShadow: `-4px -4px 12px ${darkClr}, 1px 2px 6px ${mainClr}`,
                  marginBottom: '5px',
                  padding: '0.4rem 1.2rem',
                  '&:hover': {
                     border: `none`,
                     background: darkClrLighter,
                     background: cardBg,
                     boxShadow: `-6px -6px 16px ${darkClr}, 2px 3px 7px ${mainClr}`,
                  },
               }}
            >
               {longDescVisible ? 'Show less' : 'View more'}
            </Button>
         </Box>
      );
   };
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
                  //   background: cardBg,
                  padding: '2rem',
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
               }}
            >
               <NeonHeading text={'Experience'} />
               <AllTech />
               <Box sx={{ padding: '1rem 2rem' }}>
                  {/* Short desc */}
                  <Typography
                     pb={4}
                  >{`Short desc...Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi minus aspernatur, neque odit, rem similique accusantium
                  delectus veritatis quisquam quibusdam perferendis ratione est?
                  Nihil ad quia iure deleniti distinctio tenetur?`}</Typography>
               </Box>

               {/* Long desc */}
               {/* {!longDescVisible && <ToggleDescBtn />}
               {longDescVisible ? (
                  <>
                     
                     <Typography pb={4}>{`Long desc`}</Typography>
                     {longDescVisible && <ToggleDescBtn />}
                  </>
               ) : (
                  ''
               )} */}

               {/* Projects */}
               <AllProjects />
            </Box>
         </NeonShadow>
      </>
   );
}
