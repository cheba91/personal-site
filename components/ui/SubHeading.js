import { Typography } from '@mui/material';
import HeadingLine from './HeadingLine';

export default function SubHeading({ text, customStyles }) {
   return (
      <Typography
         component="h3"
         variant="h5"
         sx={{
            textAlign: 'center',
            marginBottom: '1.8rem',
            marginTop: '1rem',
            textShadow: `3px 3px 4px #000`,
            ...customStyles,
         }}
      >
         <HeadingLine
            customStyles={{ marginRight: '0.8rem', height: '1px' }}
            direction={'right'}
         />
         {text}
         <HeadingLine
            customStyles={{ marginLeft: '0.8rem', height: '1px' }}
            direction={'left'}
         />
      </Typography>
   );
}
