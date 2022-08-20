import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import InsetShadow from './ui/InsetShadow';
import { useTheme } from '@mui/material';
import { projectsData } from '../data/projects';

export default function AllProjects({ project }) {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr, lighter: darkClrLighter },
         text: { primary: textClr },
      },
      shape: { borderRadius },
   } = useTheme();
   return (
      <InsetShadow radius={`${borderRadius}px`}>
         <Typography
            component="h3"
            variant="h5"
            sx={{
               textAlign: 'center',
               paddingTop: '2rem',
            }}
         >
            {`Projects`}
         </Typography>
         <Grid container sx={{ padding: '1.5rem' }}>
            {projectsData &&
               projectsData.map((project) => (
                  <Grid item sm={12} md={6} key={project.key}>
                     <Box
                        sx={{
                           padding: { xs: '0.5rem 1rem', sm: '1rem 2rem' },
                           borderRadius: `${borderRadius}px`,
                           background: cardBg,
                           margin: { xs: '0.5rem 0rem', sm: '0.8rem' },
                           boxShadow: ` -1px -1px 6px 1px rgb(42 42 42),  6px 6px 6px 0px rgb(10 10 10)`,
                        }}
                     >
                        {/* Title */}

                        <Typography variant="h6" component="h4">
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

                        {/* Short desc */}
                        <Typography pb={4}>{project.desc}</Typography>
                     </Box>
                  </Grid>
               ))}
         </Grid>
      </InsetShadow>
   );
}
