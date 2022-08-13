import StackInfoCard from './StackInfoCard';
import { stackData } from '../data/stack';
import { Box, Grid } from '@mui/material';
import NeonHeading from './ui/NeonHeading';
import AnchorId from './ui/AnchorId';
import SocialIcons from './SocialIcons';
import StackIcons from './StackIcons';

export default function StackInfoList() {
   return (
      <>
         <AnchorId id={'whatIDo'} />
         <NeonHeading text={'What I do'} />
         {/* <Box sx={{ background: '#fff' }}>
            <StackIcons
               icons={[
                  'js',
                  'node',
                  'express',
                  'mongoDB',
                  'next',
                  'react',
                  'materialUI',
                  'git',
                  'php',
                  'mySql',
                  'wp',
                  'jQuery',
                  'css',
                  'html',
               ]}
            />
         </Box> */}
         <Grid pb={10} rowSpacing={5} columns={1} direction="column" container>
            {stackData &&
               stackData.map((stack) => (
                  <StackInfoCard key={stack.key} stack={stack} />
               ))}
         </Grid>
      </>
   );
}
