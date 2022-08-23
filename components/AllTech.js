import { Box, Typography, useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import InsetShadow from './ui/InsetShadow';
import OutsetShadow from './ui/OutsetShadow';

export default function AllTech() {
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
      'Git & Github',
   ];
   return (
      <InsetShadow>
         <Box
            sx={{
               padding: { xs: '0.8rem', sm: '1rem' },
            }}
         >
            <Typography
               component="h3"
               variant="h5"
               sx={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  paddingTop: '1rem',
                  textShadow: '3px 3px 4px #000',
               }}
            >
               {`Tools & Technologies`}
            </Typography>
            <Grid
               container
               sx={{
                  justifyContent: 'space-evenly',
               }}
            >
               {techs.map((tech) => (
                  <OutsetShadow
                     key={tech}
                     customStyles={{
                        margin: {
                           xs: '0 0.6rem 1rem 0',
                           sm: '0 0.8rem 1rem 0',
                           textShadow: `3px 3px 4px #000`,
                        },
                     }}
                  >
                     <Grid
                        item
                        key={tech}
                        sx={{
                           fontSize: { xs: '0.9rem', sm: '1rem' },
                           padding: '1rem 2rem',
                           padding: {
                              xs: '0.7rem 0.8rem',
                              sm: '0.8rem 1.6rem',
                           },
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
