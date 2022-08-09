import StackInfoCard from './StackInfoCard';
import { stackData } from '../data/stack';
import { Grid } from '@mui/material';

export default function StackInfoList({}) {
   return (
      <Grid rowSpacing={5} columns={1} direction="column" container>
         {stackData &&
            stackData.map((stack) => (
               <StackInfoCard key={stack.key} stack={stack} />
            ))}
      </Grid>
   );
}
