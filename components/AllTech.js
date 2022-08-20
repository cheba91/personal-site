import { Box, Grid } from '@mui/material';

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
   ];
   return (
      <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
         {techs.map((tech) => (
            <Grid item key={tech} sx={{ padding: '0.5rem 2rem' }}>
               {tech}
            </Grid>
         ))}
      </Grid>
   );
}
