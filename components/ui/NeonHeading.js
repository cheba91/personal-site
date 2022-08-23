import { Typography, useTheme } from '@mui/material';
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
            border: 'none',
            borderRadius: '50%',
            animation: 'pulseDot 1s infinite alternate ease-in',
            boxShadow: `1px 1px 0px 0px ${mainClr}`,
         }}
      />
   );
};

export default function NeonHeading({ text }) {
   return (
      <Typography
         mb={6}
         mt={2}
         variant="h4"
         component="h2"
         sx={{
            whiteSpace: 'nowrap',
            textAlign: 'center',
            textShadow: '3px 3px 4px #000',
            fontSize: { xs: '1.7rem', sm: '2rem' },
         }}
      >
         <Dot />
         {text}
         <Dot />
      </Typography>
   );
}
