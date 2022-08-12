import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NeonShadow from './ui/NeonShadow';
import { useTheme } from '@mui/material';

export default function StackInfoCard({ stack }) {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { cardBg, main: darkClr, lighter: darkClrLighter },
         text: { primary: textClr },
      },
      shape: { borderRadius },
   } = useTheme();
   const [longDescVisible, setLongDescVisible] = useState(false);
   const toggleLongDesc = () => setLongDescVisible((current) => !current);
   // console.log(stack);
   return (
      <Grid item>
         <NeonShadow radius={'15px'}>
            <Card
               sx={{
                  padding: '0.2rem 0.4rem',
                  background: cardBg,
               }}
            >
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
               <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button
                     onClick={toggleLongDesc}
                     // startIcon={<ExpandMoreIcon />}
                     endIcon={
                        longDescVisible ? (
                           <ExpandLessIcon />
                        ) : (
                           <ExpandMoreIcon />
                        )
                     }
                     sx={{
                        color: textClr,
                        border: `none`,
                        background: cardBg,
                        borderRadius: `11px`,
                        boxShadow: `-4px -4px 12px ${darkClr}, 2px 2px 6px ${mainClr}`,
                        marginBottom: '5px',
                        padding: '0.4rem 1.2rem',
                        '&:hover': {
                           border: `none`,
                           background: darkClrLighter,
                           background: cardBg,
                           boxShadow: `-6px -6px 16px ${darkClr}, 3px 3px 7px ${mainClr}`,
                        },
                     }}
                  >
                     {longDescVisible ? 'Hide ' : 'View '} longer description
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
         </NeonShadow>
      </Grid>
   );
}
