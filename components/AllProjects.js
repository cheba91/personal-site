import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import InsetShadow from './ui/InsetShadow';
import { projectsData } from '../data/projects';
import OutsetShadow from './ui/OutsetShadow';

export default function AllProjects() {
   return (
      <InsetShadow customStyles={{ marginTop: '4rem' }}>
         <Typography
            component="h3"
            variant="h5"
            sx={{
               textAlign: 'center',
               paddingTop: '2rem',
               textShadow: '3px 3px 4px #000',
            }}
         >
            {`Projects`}
         </Typography>
         <Grid container sx={{ padding: '1.5rem' }}>
            {projectsData &&
               projectsData.map((project) => (
                  <Grid item sm={12} md={6} key={project.key}>
                     <OutsetShadow
                        customStyles={{
                           padding: { xs: '0.5rem 1rem', sm: '1rem 2rem' },
                           margin: { xs: '0.5rem 0rem', sm: '0.8rem' },
                        }}
                     >
                        {/* Title */}
                        <Typography
                           variant="h6"
                           component="h4"
                           sx={{ textShadow: '3px 3px 4px #000' }}
                        >
                           {project.title}
                        </Typography>
                        {/* Used tech */}
                        <Typography
                           my={1}
                           sx={{ fontSize: 14 }}
                           color="text.secondary"
                        >
                           {'Stack: '}
                           {project.usedTechnologies &&
                              project.usedTechnologies.map((tech) => (
                                 <Box component="span" key={tech}>
                                    {`${tech} `}
                                 </Box>
                              ))}
                        </Typography>
                        {/* Project desc */}
                        <Typography pb={4}>{project.desc}</Typography>
                     </OutsetShadow>
                  </Grid>
               ))}
         </Grid>
      </InsetShadow>
   );
}
