import { Box } from '@mui/material';

export default function AnchorId({ id }) {
   return (
      <Box
         id={id}
         sx={{
            display: 'block',
            position: 'relative',
            visibility: 'hidden',
            top: '-20vh',
         }}
      />
   );
}
