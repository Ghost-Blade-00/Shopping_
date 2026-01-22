import React from 'react';
import { 
  Container, Typography, Box, Button, Paper, IconButton, 
  Divider, Grid, Stack, TextField, alpha 
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, onRemove }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
    <Container maxWidth={false} sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Typography variant="h2" sx={{ fontWeight: 900, mb: 6, letterSpacing: '-2px', color: 'text.primary' }}>
        Your Cart
      </Typography>
      
      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <ShoppingBagOutlinedIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>Your cart is empty</Typography>
          <Button component={Link} to="/" variant="contained" sx={{ py: 1.5, px: 4, borderRadius: '12px', fontWeight: 800 }}>
            Start Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={6}>
          {/* Item List */}
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Box key={item.cartId} sx={{ display: 'flex', alignItems: 'center', mb: 4, pb: 4, borderBottom: '1px solid', borderColor: 'divider' }}>
                <Box component="img" src={item.img} sx={{ width: 120, height: 120, borderRadius: 4, objectFit: 'cover' }} />
                <Box sx={{ flexGrow: 1, ml: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary' }}>{item.name}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main' }}>₹{item.price.toLocaleString('en-IN')}</Typography>
                </Box>
                <IconButton onClick={() => onRemove(item.cartId)} color="error">
                  <DeleteOutlineIcon sx={{ fontSize: 32 }} />
                </IconButton>
              </Box>
            ))}
          </Grid>

          {/* New Summary Section */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                bgcolor: (theme) => theme.palette.mode === 'light' ? '#FFFFFF' : '#1A1A1C', 
                borderRadius: '28px', 
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: (theme) => theme.palette.mode === 'light' ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, color: 'text.primary', fontSize: '2.2rem' }}>
                Summary
              </Typography>

              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '1.1rem' }}>Subtotal</Typography>
                  <Typography sx={{ fontWeight: 900, color: 'text.primary', fontSize: '1.1rem' }}>₹{subtotal.toLocaleString('en-IN')}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '1.1rem' }}>Shipping</Typography>
                  <Typography sx={{ fontWeight: 900, color: 'text.primary', fontSize: '1.1rem' }}>₹{shipping.toLocaleString('en-IN')}</Typography>
                </Box>

                <Divider sx={{ my: 1 }} />

                {/* Promo Code */}
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 800, mb: 1.5, color: 'text.primary' }}>
                    Have a Promo Code?
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <TextField 
                      fullWidth 
                      placeholder="Code" 
                      size="small"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', bgcolor: 'action.hover' } }}
                    />
                    <Button 
                      variant="outlined" 
                      sx={{ borderRadius: '8px', fontWeight: 700, color: '#e92932', borderColor: alpha('#e92932', 0.5) }}
                    >
                      APPLY
                    </Button>
                  </Stack>
                </Box>

                {/* Total */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary' }}>Total</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: '#e92932' }}>₹{total.toLocaleString('en-IN')}</Typography>
                </Box>

                <Button 
                  component={Link} 
                  to="/checkout" 
                  variant="contained" 
                  fullWidth 
                  sx={{ 
                    py: 2, 
                    borderRadius: '100px', 
                    fontWeight: 900, 
                    fontSize: '1.1rem', 
                    mt: 2,
                    boxShadow: '0 8px 20px rgba(233, 41, 50, 0.3)'
                  }}
                >
                  CHECKOUT NOW
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CartPage;