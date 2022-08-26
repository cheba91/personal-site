import { Typography, useTheme } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HeadingLine from './HeadingLine';

const Dot = ({ side }) => {
   const mainClr = useTheme().palette.primary.main;
   return (
      <FiberManualRecordIcon
         sx={{
            fontSize: 'small',
            verticalAlign: 'middle',
            marginLeft: side === 'right' ? '0.8rem' : '',
            marginRight: side === 'left' ? '0.8rem' : '',
            border: 'none',
            borderRadius: '50%',
            boxShadow: `${
               side === 'right' ? 'inset' : ''
            } 2px 0px 1px 0px ${mainClr}`,
         }}
      />
   );
};

export default function NeonHeading({ text }) {
   return (
      <Typography
         variant="h4"
         component="h2"
         sx={{
            whiteSpace: 'nowrap',
            textAlign: 'center',
            textShadow: '3px 3px 4px #000',
            fontSize: { xs: '1.7rem', sm: '2rem' },
            marginBottom: '2.2rem',
            marginTop: '0.9rem',
         }}
      >
         <HeadingLine direction={'right'} />
         <Dot side={'left'} />
         {text}
         <Dot side={'right'} />
         <HeadingLine direction={'left'} />
      </Typography>
   );
}
