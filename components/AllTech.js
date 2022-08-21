import { Box, Typography, useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import InsetShadow from './ui/InsetShadow';
import OutsetShadow from './ui/OutsetShadow';

export default function AllTech() {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr, light: darkClrLighter },
         text: { primary: textClr },
      },
      shape: { borderRadius },
   } = useTheme();
   const techs = [
      'JavaScript',
      'Node',
      'Express',
      'MongoDB',
      'React',
      'Next.js',
      'Material UI',
      'WordPress',
      'PHP',
      'MySQL',
      'jQuery',
      'HTML',
      'CSS',
   ];
   return (
      <InsetShadow radius={`${borderRadius}px`}>
         <Box
            sx={{
               padding: { xs: '0.8rem', sm: '1.5rem' },
            }}
         >
            <Typography
               component="h3"
               variant="h5"
               sx={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  textShadow: '3px 3px 4px #000',
               }}
            >
               {`Tools & Tech`}
            </Typography>
            <Grid
               container
               sx={{
                  //   rowSpacing: '1rem',
                  justifyContent: 'space-evenly',
               }}
            >
               {techs.map((tech) => (
                  <OutsetShadow
                     key={tech}
                     radius={`${borderRadius}px`}
                     customStyles={{
                        margin: {
                           xs: '0 0.6rem 1rem 0',
                           sm: '0 0.8rem 1rem 0',
                        },
                     }}
                  >
                     <Grid
                        item
                        key={tech}
                        sx={{
                           fontSize: { xs: '0.9rem', sm: '1rem' },
                           padding: '1rem 2rem',
                           padding: { xs: '0.7rem 1rem', sm: '1rem 2rem' },
                           // borderRadius: `${borderRadius}px`,
                           // background: cardBg,

                           //    boxShadow: ` -1px -1px 6px 1px rgb(42 42 42),  6px 6px 6px 0px rgb(10 10 10)`,
                        }}
                     >
                        {tech}
                     </Grid>
                  </OutsetShadow>
               ))}
            </Grid>
         </Box>
      </InsetShadow>
   );
}
