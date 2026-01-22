import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Box, Card, CardMedia, CardContent, Button, Grid, Stack } from '@mui/material';

const SearchResults = ({ products, onAddToCart, searchQuery }) => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter((p) => {
    const matchesCategory = p.category === categoryName;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 900, mb: 5, textTransform: 'capitalize', letterSpacing: '-1px' }}>
        {categoryName} Collection
      </Typography>

      {/* md={3} makes 4 cards per row, sm={4} makes 3 cards per row */}
      <Grid container spacing={3}>
        {filteredProducts.map((p) => (
          <Grid item xs={6} sm={4} md={3} key={p.id}>
            <Card elevation={0} sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              borderRadius: 3,
              border: '1px solid #f0f0f0',
              transition: '0.2s ease-in-out',
              '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }
            }}>
              <CardMedia 
                component="img" 
                sx={{ 
                  aspectRatio: '1 / 1', 
                  objectFit: 'cover',
                  bgcolor: '#fdfdfd' 
                }} 
                image={p.img} 
                alt={p.name}
              />
              <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.2, height: '2.4em', overflow: 'hidden' }}>
                  {p.name}
                </Typography>
                
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, color: 'primary.main' }}>
                  ₹{p.price.toLocaleString('en-IN')}
                </Typography>
                
                <Stack spacing={1} sx={{ mt: 'auto' }}>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    size="small"
                    onClick={() => onAddToCart(p)} 
                    sx={{ 
                      py: 1, // Strategic padding for a "good look"
                      fontWeight: 800, 
                      borderRadius: 1.5, 
                      textTransform: 'none',
                      fontSize: '0.85rem'
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    size="small"
                    component={Link} 
                    to={`/product/${p.id}`}
                    sx={{ 
                      py: 0.8, 
                      fontWeight: 700, 
                      borderRadius: 1.5, 
                      textTransform: 'none',
                      fontSize: '0.8rem',
                      color: 'text.secondary',
                      borderColor: '#e0e0e0'
                    }}
                  >
                    Details
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredProducts.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h6" color="text.secondary">No items found.</Typography>
        </Box>
      )}
    </Container>
  );
};

export default SearchResults;