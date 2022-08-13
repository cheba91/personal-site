import { Box } from '@mui/material';

const StackIcon = ({ icon }) => {
   console.log(`/stackIcons/${icon}.png`);
   return (
      <Box
         component="img"
         src={`/stackIcons/${icon}.png`}
         alt={`${icon} logo`}
         sx={{
            width: '100px',
            objectFit: 'contain',
            marginLeft: '1rem',
            height: '80px',
            filter: 'grayscale(100%)',
            '&:hover': { filter: 'grayscale(0%)' },
         }}
      />
   );
};

export default function StackIcons({ icons }) {
   return (
      <>
         {icons.map((icon) => (
            <StackIcon key={icon} icon={icon} />
         ))}
      </>
   );
}
