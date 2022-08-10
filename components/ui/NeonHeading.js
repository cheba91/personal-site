import { Box, Typography, useTheme } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function NeonHeading({ text }) {
   const { main: mainClr } = useTheme().palette.primary;
   return (
      <Typography
         mb={4}
         variant="h4"
         component="h2"
         sx={{
            width: 'fit-content',
         }}
      >
         <FiberManualRecordIcon
            sx={{
               fontSize: 'medium',
               verticalAlign: 'middle',
               marginRight: '0.7rem',
               color: mainClr,
               background: mainClr,
               borderRadius: '50%',
               animation: 'pulseDot 1s infinite alternate',
               animationDelay: '0.5s',
               '@keyframes pulseDot': {
                  '0%': {
                     boxShadow: `0 0 0px 0px ${mainClr}`,
                  },
                  '100%': {
                     boxShadow: `0 0 0.5rem 0.1rem ${mainClr}`,
                  },
               },
            }}
         />
         {text}
      </Typography>
   );
}
