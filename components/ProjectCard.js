import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import InsetShadow from './ui/InsetShadow';
import { useTheme } from '@mui/material';

export default function ProjectCard({ project }) {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr, lighter: darkClrLighter },
         text: { primary: textClr },
      },
      shape: { borderRadius },
   } = useTheme();
   return (
      <Grid item sm={12} md={6}>
         <InsetShadow radius={`${borderRadius}px`}>
            <Card
               sx={{
                  // background: cardBg,
                  background: 'none',
                  border: 'none',
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
         </InsetShadow>
      </Grid>
   );
}
