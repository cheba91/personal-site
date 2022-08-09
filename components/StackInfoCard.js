import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Grid } from '@mui/material';

export default function StackInfoCard({ stack }) {
   const [longDescVisible, setLongDescVisible] = useState(false);
   const toggleLongDesc = () => setLongDescVisible((current) => !current);
   // console.log(stack);
   return (
      <Grid item>
         <Card sx={{ padding: '0.2rem 0.4rem' }}>
            <CardContent>
               <Typography
                  sx={{ paddingBottom: '0.8rem' }}
                  variant="h5"
                  component="h2"
               >
                  {stack.title}
               </Typography>

               <Typography
                  sx={{ fontSize: 14, paddingBottom: '0.8rem' }}
                  color="text.secondary"
               >
                  Used:{' '}
                  {stack.usedTechnologies &&
                     stack.usedTechnologies.map((tech) => (
                        <Box component="span" key={tech}>
                           {`${tech} `}
                        </Box>
                     ))}
               </Typography>

               <Typography>{stack.desc}</Typography>
            </CardContent>
            <CardActions>
               <Button
                  onClick={toggleLongDesc}
                  sx={{ '&:hover': { color: 'primary.lighter' } }}
               >
                  {longDescVisible ? 'Hide' : 'Show'}
               </Button>
            </CardActions>
            {longDescVisible ? (
               <CardContent>
                  <Typography>{stack.longDesc}</Typography>
               </CardContent>
            ) : (
               ''
            )}
         </Card>
      </Grid>
   );
}
