import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Button, Stack, Zoom } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const SearchResults = ({ products, onAddToCart, searchQuery }) => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter((p) => {
    const term = searchQuery.toLowerCase().trim();
    const matchesSearch = p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term);
    
    if (categoryName) {
      // NORMALIZATION: Map the "kitchen" slug from HomePage to "kitchenware" in your data
      let targetCategory = categoryName.toLowerCase();
      if (targetCategory === 'kitchen') targetCategory = 'kitchenware';
      
      const matchesCategory = p.category.toLowerCase() === targetCategory;
      
      // Return items that match the category (and search term if one exists)
      return term ? (matchesCategory && matchesSearch) : matchesCategory;
    }
    
    return matchesSearch;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 6, color: 'text.primary', textAlign: 'center', letterSpacing: '-2px' }}>
        {categoryName ? `${categoryName.toUpperCase()} Collection` : "Search Results"}
      </Typography>

      {filteredProducts.length === 0 ? (
        <Zoom in={true}>
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <SearchOffIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>No Items Found</Typography>
            <Typography variant="body1" color="text.secondary">We couldn't find any products in the {categoryName} collection.</Typography>
            <Button component={Link} to="/" sx={{ mt: 3, fontWeight: 7000 }}>Return to Home</Button>
          </Box>
        </Zoom>
      ) : (
        <Grid container spacing={6}>
          {filteredProducts.map((p) => (
            <Grid item xs={12} key={p.id}>
              <Card elevation={0} sx={{ 
                borderRadius: '32px', border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper',
                display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden',
                transition: '0.4s', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' } 
              }}>
                <Box sx={{ width: { md: '60%' }, height: { xs: 350, md: 550 } }}>
                  <CardMedia component="img" image={p.img} sx={{ height: '100%', objectFit: 'cover' }} />
                </Box>
                <CardContent sx={{ p: { xs: 4, md: 8 }, width: { md: '40%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: 2 }}>{p.category}</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, mt: 1, mb: 2, color: 'text.primary' }}>{p.name}</Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, mb: 5, color: 'text.primary' }}>₹{p.price.toLocaleString('en-IN')}</Typography>
                  <Stack spacing={2} sx={{ maxWidth: 350 }}>
                    <Button variant="contained" fullWidth startIcon={<ShoppingCartIcon />} onClick={() => onAddToCart(p)} sx={{ py: 2.5, fontWeight: 800 }}>ADD TO CART</Button>
                    <Button component={Link} to={`/product/${p.id}`} variant="outlined" fullWidth endIcon={<ArrowForwardIcon />} sx={{ py: 2.5, fontWeight: 700, color: 'text.primary' }}>DETAILS</Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchResults;