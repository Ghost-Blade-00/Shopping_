import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Container, Typography, Box, Button, Avatar, 
  IconButton, Badge, TextField, InputAdornment, Menu, MenuItem, Divider, ListItemIcon 
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const Navbar = ({ cartCount, onSearchChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/100?img=12");
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
    handleClose();
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #f4f0f0', bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2, height: 80 }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
            <StorefrontIcon sx={{ fontSize: 32, color: '#FF1E1E' }} />
            <Typography variant="h5" sx={{ fontWeight: 900, color: '#181111', letterSpacing: '-1px' }}>ShopSmart</Typography>
          </Box>

          {/* Search */}
          <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search products..."
              onChange={(e) => onSearchChange(e.target.value)}
              InputProps={{
                startAdornment: (<InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>),
                sx: { borderRadius: 50, bgcolor: '#f5f5f5', "& fieldset": { border: "none" } }
              }}
            />
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton component={Link} to="/cart">
              <Badge badgeContent={cartCount} color="error">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>

            {/* Profile Avatar Trigger */}
            <IconButton onClick={handleProfileClick} sx={{ p: 0, ml: 1 }}>
              <Avatar src={profilePic} sx={{ width: 40, height: 40, border: '2px solid #f0f0f0' }} />
            </IconButton>

            {/* Profile Menu */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                  mt: 1.5,
                  borderRadius: 3,
                  minWidth: 200,
                  '&:before': {
                    content: '""', display: 'block', position: 'absolute',
                    top: 0, right: 14, width: 10, height: 10,
                    bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,
                  },
                },
              }}
            > 
              <MenuItem component="label" sx={{ py: 1.5 }}>
                <ListItemIcon><PhotoCameraIcon fontSize="small" /></ListItemIcon>
                Upload Photo
                <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
              </MenuItem>
              
              <Divider sx={{ my: 1 }} />
              
              <MenuItem component={Link} to="/about" onClick={handleClose}>
                <ListItemIcon><InfoOutlinedIcon fontSize="small" /></ListItemIcon>
                About Us
              </MenuItem>
              
              <MenuItem component={Link} to="/support" onClick={handleClose}>
                <ListItemIcon><SupportAgentIcon fontSize="small" /></ListItemIcon>
                Customer Care
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;