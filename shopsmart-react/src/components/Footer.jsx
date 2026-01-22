import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ 
      // Theme-aware background and border
      bgcolor: 'background.paper', 
      borderTop: '1px solid',
      borderColor: 'divider', 
      pt: 8, pb: 4, mt: 10 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main', mb: 2 }}>
              ShopSmart
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 250 }}>
              Your one-stop shop for kitchen essentials, electronics, and the latest fashion.
            </Typography>
          </Grid>

          {/* Quick Links - Fixed "kitchenware" to "kitchen" */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>Shop</Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/category/electronics" color="text.secondary" underline="hover">Electronics</Link>
              <Link component={RouterLink} to="/category/shoes" color="text.secondary" underline="hover">Shoes</Link>
              <Link component={RouterLink} to="/category/kitchen" color="text.secondary" underline="hover">Kitchen</Link>
              <Link component={RouterLink} to="/category/books" color="text.secondary" underline="hover">Books</Link>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>Support</Typography>
            <Stack spacing={1}>
              <Link href="#" color="text.secondary" underline="hover">Help Center</Link>
              <Link href="#" color="text.secondary" underline="hover">Shipping</Link>
              <Link href="#" color="text.secondary" underline="hover">Returns</Link>
            </Stack>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>Follow Us</Typography>
            <Stack direction="row" spacing={2}>
              <FacebookIcon sx={{ cursor: 'pointer', color: 'text.secondary' }} />
              <TwitterIcon sx={{ cursor: 'pointer', color: 'text.secondary' }} />
              <InstagramIcon sx={{ cursor: 'pointer', color: 'text.secondary' }} />
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