import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggler({ changeTheme, isDarkTheme }) {
   return (
      <Box>
         <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
            {isDarkTheme ? <LightModeIcon /> : <ModeNightIcon />}
         </IconButton>
      </Box>
   );
}
