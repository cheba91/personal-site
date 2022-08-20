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
         <Grid container spacing={4} mt={1}>
            {projectsData &&
               projectsData.map((project) => (
                  <Grid item sm={12} md={6} key={project.key}>
                     <Card
                        sx={{
                           padding: '1rem 2rem',
                           borderRadius: `${borderRadius}px`,
                           background: cardBg,
                           margin: '0 1rem 1rem 0',
                           boxShadow: ` -1px -1px 6px 1px rgb(42 42 42),  6px 6px 6px 0px rgb(10 10 10)`,
                        }}
                     >
                        {/* Title */}
                        <CardContent sx={{ padding: '1.5rem' }}>
                           <Typography variant="h5" component="h2">
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
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
         </Grid>
      </InsetShadow>
   );
}
