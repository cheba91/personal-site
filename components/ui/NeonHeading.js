import { Box, Typography, useTheme } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Dot = () => {
   const { main: mainClr } = useTheme().palette.primary;
   return (
      <FiberManualRecordIcon
         sx={{
            fontSize: 'medium',
            verticalAlign: 'middle',
            marginRight: '0.8rem',
            marginLeft: '0.8rem',
            color: mainClr,
            background: mainClr,
            borderRadius: '50%',
            animation: 'pulseDot 1s infinite alternate ease-in',
            animationDelay: '1.4s',
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
   );
};

export default function NeonHeading({ text }) {
   return (
      <Typography
         mb={4}
         variant="h4"
         component="h2"
         sx={{
            // width: 'fit-content',
            whiteSpace: 'nowrap',
            textAlign: 'center',
         }}
      >
         <Dot />
         {text}
         <Dot />
      </Typography>
   );
}
