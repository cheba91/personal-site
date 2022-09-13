import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import SubHeading from './ui/SubHeading';
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
      'Git & GitHub',
      'Puppeteer',
   ];
   return (
      <InsetShadow>
         <Box
            sx={{
               padding: { xs: '0.8rem', sm: '1rem' },
            }}
         >
            <SubHeading text={'Tools & Tech'} />
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
                           fontSize: { xs: '0.95rem', sm: '1rem' },
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
