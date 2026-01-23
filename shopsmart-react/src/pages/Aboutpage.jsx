import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const AboutPage = () => (
  <Container maxWidth="md" sx={{ py: 10 }}>
    <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, letterSpacing: '-2px' }}>
      Our Story
    </Typography>
    <Typography variant="h5" sx={{ color: 'text.secondary', mb: 6, lineHeight: 1.6 }}>
      ShopSmart was founded to make premium goods accessible. We believe in 
      modern technology paired with hand-picked quality.
    </Typography>
    
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 4, height: '100%', borderRadius: 4 }} variant="outlined">
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Our Mission</Typography>
          <Typography variant="body1" color="text.secondary">
            Providing a seamless shopping experience through a curated selection of global brands.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 4, height: '100%', borderRadius: 4 }} variant="outlined">
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Global Reach</Typography>
          <Typography variant="body1" color="text.secondary">
            Shipping worldwide to bring the latest in tech and style directly to your doorstep.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default AboutPage;
