import React from 'react';
import { Container, Typography, Box, Button, Paper, IconButton, Divider, Grid, Stack, TextField } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, onRemove }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 6 }}>Your Cart</Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          {cartItems.length === 0 ? (
            <Typography variant="h6" color="text.secondary">Your cart is empty.</Typography>
          ) : (
            cartItems.map((item) => (
              <Box key={item.cartId} sx={{ display: 'flex', alignItems: 'center', mb: 3, pb: 3, borderBottom: '1px solid #eee' }}>
                <Box component="img" src={item.img} sx={{ width: 100, height: 100, borderRadius: 4, objectFit: 'cover' }} />
                <Box sx={{ flexGrow: 1, ml: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>{item.name}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>₹{item.price.toLocaleString('en-IN')}</Typography>
                </Box>
                <IconButton onClick={() => onRemove(item.cartId)} color="error"><DeleteOutlineIcon /></IconButton>
              </Box>
            ))
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ p: 5, bgcolor: '#F8F9FA', borderRadius: 8, minHeight: '550px', display: 'flex', flexDirection: 'column', border: '1px solid #eee' }}>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 4 }}>Summary</Typography>
            <Stack spacing={3} sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography sx={{ fontWeight: 600 }}>₹{subtotal.toLocaleString('en-IN')}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">Shipping</Typography>
                <Typography sx={{ fontWeight: 600 }}>₹{shipping.toLocaleString('en-IN')}</Typography>
              </Box>
              <Divider />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Have a Promo Code?</Typography>
                <Stack direction="row" spacing={1}>
                  <TextField fullWidth size="small" placeholder="Code" sx={{ bgcolor: 'white' }} />
                  <Button variant="outlined">Apply</Button>
                </Stack>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>Total</Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#e92932' }}>₹{total.toLocaleString('en-IN')}</Typography>
              </Box>
              <Button component={Link} to="/checkout" variant="contained" fullWidth size="large" sx={{ py: 2, borderRadius: 100, fontWeight: 900 }}>
                Checkout Now
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;