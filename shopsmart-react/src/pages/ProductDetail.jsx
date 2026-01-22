import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, Grid, Typography, Box, Button, Rating, 
  Divider, Stack, Paper 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetail = ({ products, onAddToCart }) => {
  const { productId } = useParams();

  // Find the specific product based on the URL ID
  const product = products.find((p) => p.id === productId);

  // Fallback if product is not found
  if (!product) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5">Product not found.</Typography>
        <Button component={Link} to="/" sx={{ mt: 2 }}>Back to Shop</Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Button 
        component={Link} 
        to={`/category/${product.category}`} 
        startIcon={<ArrowBackIcon />} 
        sx={{ mb: 4, fontWeight: 700, color: 'text.secondary' }}
      >
        Back to {product.category}
      </Button>

      <Grid container spacing={8}>
        {/* Left: Product Image */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={0} 
            sx={{ 
              borderRadius: 8, 
              overflow: 'hidden', 
              bgcolor: '#f5f5f5',
              border: '1px solid #eee'
            }}
          >
            <Box 
              component="img" 
              src={product.img} 
              alt={product.name} 
              sx={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </Paper>
        </Grid>

        {/* Right: Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: 'primary.main', fontWeight: 800 }}>
            {product.category}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, letterSpacing: '-1.5px' }}>
            {product.name}
          </Typography>
          
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary">(120 Reviews)</Typography>
          </Stack>

          <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: '#181111' }}>
            ₹{product.price.toLocaleString('en-IN')}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Description</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.8 }}>
            {product.description}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button 
              variant="contained" 
              size="large" 
              fullWidth 
              startIcon={<ShoppingCartIcon />}
              onClick={() => onAddToCart(product)}
              sx={{ 
                py: 2, 
                borderRadius: 4, 
                fontWeight: 900, 
                fontSize: '1.1rem',
                boxShadow: '0 10px 20px rgba(233, 41, 50, 0.2)' 
              }}
            >
              ADD TO CART
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;