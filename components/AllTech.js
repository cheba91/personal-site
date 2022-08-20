import { Box, Typography, useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import InsetShadow from './ui/InsetShadow';

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
               //    background: cardBg,
               //    borderRadius: `${borderRadius}px`,
               padding: '1.5rem',
            }}
         >
            <Typography
               component="h5"
               variant="h5"
               sx={{
                  textAlign: 'center',
                  marginBottom: '1.5rem',
               }}
            >
               {`Tools & Tech`}
            </Typography>
            <Grid
               container
               sx={{
                  rowSpacing: '1rem',
                  justifyContent: 'space-evenly',
               }}
            >
               {techs.map((tech) => (
                  <Grid
                     item
                     key={tech}
                     sx={{
                        padding: '1rem 2rem',
                        borderRadius: `${borderRadius}px`,
                        background: cardBg,
                        margin: '0 1rem 1rem 0',
                        boxShadow: ` -1px -1px 6px 1px rgb(42 42 42),  6px 6px 6px 0px rgb(10 10 10)`,
                     }}
                  >
                     {tech}
                  </Grid>
               ))}
            </Grid>
         </Box>
      </InsetShadow>
   );
}
