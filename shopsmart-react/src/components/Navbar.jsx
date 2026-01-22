import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Box, Avatar, IconButton, Badge, TextField, InputAdornment, Menu, MenuItem, Divider, Switch, alpha } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ cartCount, onSearchChange, toggleTheme, currentMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" elevation={0} sx={{ 
      borderBottom: '1px solid', borderColor: 'divider',
      bgcolor: (theme) => alpha(theme.palette.background.paper, 0.75),
      backdropFilter: 'blur(20px)', zIndex: 1100
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>
        <Toolbar sx={{ justifyContent: 'space-between', height: 85 }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}>
            <Box sx={{ width: 40, height: 40, bgcolor: 'text.primary', borderRadius: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: 'background.paper', fontWeight: 900, fontSize: '1.2rem' }}>S</Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary' }}>ShopSmart</Typography>
          </Box>

          <Box sx={{ flexGrow: 1, maxWidth: 450, mx: 4 }}>
            <TextField
              fullWidth placeholder="Search products..."
              autoComplete="off"
              onChange={(e) => { 
                onSearchChange(e.target.value); 
                if(e.target.value.trim().length > 0) navigate('/search'); 
              }}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                // REMOVES BLUE AUTOFILL AND FOCUS BOX
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: (theme) => `0 0 0 1000px ${theme.palette.action.hover} inset !important`,
                  WebkitTextFillColor: (theme) => `${theme.palette.text.primary} !important`,
                  transition: 'background-color 5000s ease-in-out 0s',
                },
                '& input:focus': { outline: 'none', boxShadow: 'none' }
              }}
              InputProps={{ 
                startAdornment: (<InputAdornment position="start"><SearchIcon sx={{ color: 'text.secondary' }} /></InputAdornment>), 
                sx: { borderRadius: 50, bgcolor: 'action.hover', height: 45, color: 'text.primary' } 
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <IconButton component={Link} to="/cart">
              <Badge badgeContent={cartCount} color="error"><ShoppingBagOutlinedIcon sx={{ color: 'text.primary' }} /></Badge>
            </IconButton>
            
            <Avatar 
              onClick={(e) => setAnchorEl(e.currentTarget)} 
              src="https://i.pravatar.cc/100?img=12" 
              sx={{ width: 40, height: 40, cursor: 'pointer', border: '1px solid', borderColor: 'divider' }} 
            />
            
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)} PaperProps={{ 
                sx: { mt: 1.5, minWidth: 220, borderRadius: 4, bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8), backdropFilter: 'blur(10px)' } 
            }}>
              <MenuItem sx={{ py: 1.5 }}>
                <PersonOutlineIcon sx={{ mr: 2, fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>My Profile</Typography>
              </MenuItem>
              
              <MenuItem component={Link} to="/support" onClick={() => setAnchorEl(null)} sx={{ py: 1.5 }}>
                <HelpOutlineIcon sx={{ mr: 2, fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Support Page</Typography>
              </MenuItem>

              <MenuItem sx={{ justifyContent: 'space-between', py: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Dark Mode</Typography>
                <Switch checked={currentMode === 'dark'} onChange={toggleTheme} size="small" />
              </MenuItem>
              
              <Divider />
              
              <MenuItem onClick={() => setAnchorEl(null)} sx={{ py: 1.5, color: 'error.main' }}>
                <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;