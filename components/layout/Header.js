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

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header({ window, mainClr }) {
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
         <List>
            {navItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton
                     sx={{
                        textAlign: 'center',
                        '&:hover': { background: 'transparent' },
                     }}
                  >
                     <ListItemText primary={item} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;
   return (
      <Box className="headerBox">
         <AppBar
            component="nav"
            sx={{
               paddingTop: '0.5rem',
               paddingBottom: '0.5rem',
               background: 'rgba(40,40,40,0.1)',
               backdropFilter: 'saturate(180%) blur(5px)',
               boxShadow: `0px 1px 1px ${mainClr}, 0px 1px 2px ${mainClr}, 0px 1px 5px ${mainClr}, 0px 1px 10px ${mainClr}`,
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
               <Logo color={mainClr} width={100} />
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
                     <Button
                        sx={{
                           textTransform: 'none',
                           color: 'light.main',
                           '&:hover': {
                              color: 'light.light',
                              background: 'none',
                           },
                        }}
                        key={item}
                     >
                        {item}
                     </Button>
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
      </Box>
   );
}
