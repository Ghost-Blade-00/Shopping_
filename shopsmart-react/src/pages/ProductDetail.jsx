import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, Grid, Typography, Box, Button, Rating, 
  Divider, Stack, Paper, Zoom 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetail = ({ products, onAddToCart }) => {
  const { productId } = useParams();

  // Find the specific product based on the URL ID
  // We use .toString() to ensure the comparison works even if IDs are numbers
  const product = products.find((p) => p.id.toString() === productId);

  // Fallback if product is not found
  if (!product) {
    return (
      <Container sx={{ py: 20, textAlign: 'center' }}>
        <Zoom in>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: 'text.primary' }}>
              Product not found
            </Typography>
            <Button 
              component={Link} 
              to="/" 
              variant="contained" 
              sx={{ mt: 2, borderRadius: '12px', px: 4 }}
            >
              Back to Shop
            </Button>
          </Box>
        </Zoom>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Back Button - color: 'text.secondary' ensures visibility in both modes */}
      <Button 
        component={Link} 
        to={`/category/${product.category}`} 
        startIcon={<ArrowBackIcon />} 
        sx={{ mb: 4, fontWeight: 700, color: 'text.secondary', textTransform: 'capitalize' }}
      >
        Back to {product.category}
      </Button>

      <Grid container spacing={{ xs: 4, md: 8 }}>
        {/* Left: Product Image */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={0} 
            sx={{ 
              borderRadius: 8, 
              overflow: 'hidden', 
              bgcolor: 'background.paper', // Adapted for Dark Mode
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Box 
              component="img" 
              src={product.img} 
              alt={product.name} 
              sx={{ 
                width: '100%', 
                aspectRatio: '1/1', 
                objectFit: 'cover', 
                display: 'block' 
              }} 
            />
          </Paper>
        </Grid>

        {/* Right: Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: 'primary.main', fontWeight: 800 }}>
            {product.category}
          </Typography>
          
          {/* color: 'text.primary' ensures it turns white in Dark Mode */}
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, letterSpacing: '-2px', color: 'text.primary' }}>
            {product.name}
          </Typography>
          
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>(120 Reviews)</Typography>
          </Stack>

          <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: 'text.primary' }}>
            ₹{product.price.toLocaleString('en-IN')}
          </Typography>

          <Divider sx={{ mb: 4, borderColor: 'divider' }} />

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>Description</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.8 }}>
            {product.description || "Experience the perfect blend of style and performance with this premium selection."}
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
                bgcolor: '#FF1E1E', // Matching your shop theme
                boxShadow: '0 10px 20px rgba(255, 30, 30, 0.2)',
                '&:hover': { bgcolor: '#e01b1b' }
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