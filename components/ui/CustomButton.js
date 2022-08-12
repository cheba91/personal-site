import { Button } from '@mui/material';
import { useTheme } from '@mui/material';

export default function CustomButton({ text, btnType }) {
   const {
      palette: {
         primary: { main: mainClr },
         dark: { main: darkClr, lighter: darkClrLighter },
         text: { primary: textClr },
      },
   } = useTheme();
   return (
      <Button
         variant="outlined"
         size="large"
         type={btnType}
         sx={{
            color: textClr,
            border: `none`,
            fontWeight: 'bold',
            boxShadow: `-4px -4px 12px ${darkClr}, 2px 2px 6px ${mainClr}`,
            padding: '0.7rem 1.9rem',
            '&:hover': {
               border: `none`,
               background: darkClrLighter,
               boxShadow: `-6px -6px 16px ${darkClr}, 3px 3px 7px ${mainClr}`,
            },
         }}
      >
         {text}
      </Button>
   );
}
