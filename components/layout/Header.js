import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../Logo';
import { Link, useTheme } from '@mui/material';
import SocialIcons from '../SocialIcons';

const drawerWidth = 240;
const navItems = [
   ['Skills', 'skills'],
   ['About', 'about'],
   ['Contact', 'contact'],
];

export default function Header({ window }) {
   const mainClr = useTheme().palette.primary.main;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

   // Drawer
   const drawer = (
      <Box
         onClick={handleDrawerToggle}
         sx={{
            textAlign: 'center',
            paddingTop: '5rem',
         }}
      >
         <List sx={{ marginBottom: '8px' }}>
            {navItems.map((item) => (
               <Link underline="none" key={item[1]} href={`#${item[1]}`}>
                  <ListItem key={item[1]} disablePadding>
                     <ListItemButton
                        sx={{
                           textAlign: 'center',
                           color: 'light.main',
                           '&:hover': {
                              background: 'transparent',
                           },
                        }}
                     >
                        <ListItemText primary={item[0]} />
                     </ListItemButton>
                  </ListItem>
               </Link>
            ))}
         </List>
         <SocialIcons />
      </Box>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;
   return (
      <>
         <AppBar
            component="nav"
            sx={{
               paddingTop: '0.5rem',
               paddingBottom: '0.5rem',
               background: 'rgba(40,40,40,0.2)',
               backdropFilter: 'saturate(180%) blur(5px)',
               boxShadow: `0px 4px 10px ${mainClr}`,
               borderRadius: '0 0 1rem 1rem',
            }}
         >
            <Toolbar
               id="back-to-top-anchor"
               sx={{
                  justifyContent: 'space-between',
                  maxWidth: '1200px',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
               }}
            >
               <Logo width={120} />
               {/* Hamburger icon */}
               <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               {/* Desktop menu items */}
               <Box
                  sx={{
                     display: { xs: 'none', sm: 'block' },
                     color: 'light.main',
                  }}
               >
                  {navItems.map((item) => (
                     <Link underline="none" key={item[1]} href={`#${item[1]}`}>
                        <Button
                           sx={{
                              fontSize: '16px',
                              color: 'light.main',
                              '&:hover': {
                                 color: 'light.light',
                              },
                           }}
                        >
                           {item[0]}
                        </Button>
                     </Link>
                  ))}
               </Box>
            </Toolbar>
         </AppBar>
         {/* Drawer */}
         <Box component="nav">
            <Drawer
               container={container}
               variant="temporary"
               anchor="right"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true,
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                     backgroundImage: 'none',
                     background: 'rgba(0,0,0,.9)',
                  },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
      </>
   );
}
