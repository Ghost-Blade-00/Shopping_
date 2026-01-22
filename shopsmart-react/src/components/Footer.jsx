import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#fdfdfd', borderTop: '1px solid #f4f0f0', pt: 8, pb: 4, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: '#e92932', mb: 2 }}>
              ShopSmart
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 250 }}>
              Your one-stop shop for kitchen essentials, electronics, and the latest fashion.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Shop</Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/category/electronics" color="inherit" underline="hover">Electronics</Link>
              <Link component={RouterLink} to="/category/shoes" color="inherit" underline="hover">Shoes</Link>
              <Link component={RouterLink} to="/category/kitchenware" color="inherit" underline="hover">Kitchen</Link>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Support</Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">Help Center</Link>
              <Link href="#" color="inherit" underline="hover">Shipping</Link>
              <Link href="#" color="inherit" underline="hover">Returns</Link>
            </Stack>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Follow Us</Typography>
            <Stack direction="row" spacing={2}>
              <FacebookIcon sx={{ cursor: 'pointer', color: '#886364' }} />
              <TwitterIcon sx={{ cursor: 'pointer', color: '#886364' }} />
              <InstagramIcon sx={{ cursor: 'pointer', color: '#886364' }} />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 4 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © 2026 ShopSmart. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;