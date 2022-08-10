import StackInfoCard from './StackInfoCard';
import { stackData } from '../data/stack';
import { Grid } from '@mui/material';
import NeonHeading from './ui/NeonHeading';

export default function StackInfoList() {
   return (
      <>
         <NeonHeading text={'What I do'} />
         <Grid pb={10} rowSpacing={5} columns={1} direction="column" container>
            {stackData &&
               stackData.map((stack) => (
                  <StackInfoCard key={stack.key} stack={stack} />
               ))}
         </Grid>
      </>
   );
}
