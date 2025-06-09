import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
      style={{ position: 'sticky', top: 0, zIndex: 1200 }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 24px 0 rgba(33, 150, 243, 0.08)',
          borderBottom: '1px solid #e3e3e3',
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://res.cloudinary.com/ddwglz4bx/image/upload/v1745163484/lw5ohbj8h7y94dheluca.jpg" alt="Profile" style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 900,
                letterSpacing: 2,
                fontFamily: 'Poppins, Inter, sans-serif',
              }}
            >
              Surjya Shekhar Paria
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                style={{ display: 'inline-block' }}
              >
                <Typography
                  component={Link}
                  to={link.path}
                  sx={{
                    ml: 3,
                    textDecoration: 'none',
                    color:
                      location.pathname === link.path
                        ? 'primary.main'
                        : 'text.primary',
                    fontWeight: location.pathname === link.path ? 700 : 500,
                    borderBottom:
                      location.pathname === link.path
                        ? '2.5px solid #1976d2'
                        : '2.5px solid transparent',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: '#1976d2',
                      background: 'rgba(25, 118, 210, 0.07)',
                      borderRadius: 2,
                    },
                    px: 1.5,
                    py: 0.5,
                  }}
                >
                  {link.name}
                </Typography>
              </motion.div>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="primary"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <AnimatePresence>
            {drawerOpen && (
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(16px)',
                  },
                }}
              >
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                  style={{ height: '100%' }}
                >
                  <List sx={{ width: 220, mt: 4 }}>
                    {navLinks.map((link) => (
                      <ListItem
                        button
                        key={link.name}
                        component={Link}
                        to={link.path}
                        onClick={toggleDrawer(false)}
                        sx={{
                          color:
                            location.pathname === link.path
                              ? 'primary.main'
                              : 'text.primary',
                          fontWeight: location.pathname === link.path ? 700 : 500,
                          borderLeft:
                            location.pathname === link.path
                              ? '4px solid #1976d2'
                              : '4px solid transparent',
                          transition: 'all 0.2s',
                          '&:hover': {
                            color: '#1976d2',
                            background: 'rgba(25, 118, 210, 0.07)',
                            borderRadius: 2,
                          },
                          px: 2,
                          py: 1.5,
                        }}
                      >
                        <ListItemText primary={link.name} />
                      </ListItem>
                    ))}
                  </List>
                </motion.div>
              </Drawer>
            )}
          </AnimatePresence>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar; 