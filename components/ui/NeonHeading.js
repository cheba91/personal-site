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
            border: 'none',
            // color: mainClr,
            // background: mainClr,
            borderRadius: '50%',
            animation: 'pulseDot 1s infinite alternate ease-in',
            boxShadow: `1px 1px 0px 0px ${mainClr}`,
            // animationDelay: '1.4s',
            // '@keyframes pulseDot': {
            //    '0%': {
            //       boxShadow: `1px 2px 0px 0px ${mainClr}`,
            //    },
            //    '100%': {
            //       boxShadow: `1px 2px 2px 1px ${mainClr}`,
            //    },
            // },
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
