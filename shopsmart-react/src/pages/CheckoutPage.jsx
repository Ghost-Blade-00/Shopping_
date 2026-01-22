import React, { useState } from 'react';
import { Container, Typography, Box, Stepper, Step, StepLabel, Button, Paper, TextField, Grid, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

const steps = [
  { label: 'Shipping', icon: <LocalShippingOutlinedIcon /> },
  { label: 'Payment', icon: <PaymentIcon /> },
  { label: 'Review', icon: <RateReviewOutlinedIcon /> }
];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Common styles for text fields to ensure they look good in both modes
  const textFieldProps = {
    fullWidth: true,
    variant: "filled",
    sx: {
      bgcolor: 'action.hover',
      borderRadius: 1,
      '& .MuiFilledInput-root': {
        bgcolor: 'transparent',
        '&:hover': { bgcolor: 'transparent' },
        '&.Mui-focused': { bgcolor: 'transparent' },
      },
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Paper 
        elevation={0} 
        variant="outlined" 
        sx={{ 
          p: { xs: 4, md: 8 }, 
          borderRadius: 8,
          bgcolor: 'background.paper', // Uses #1A1A1C in Dark Mode
          borderColor: 'divider'
        }}
      >
        <Typography variant="h3" align="center" sx={{ fontWeight: 900, mb: 6, letterSpacing: '-1.5px', color: 'text.primary' }}>
          Checkout
        </Typography>
        
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 8 }}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={() => (
                <Box sx={{ 
                  color: activeStep >= index ? '#e92932' : 'text.disabled',
                  display: 'flex', justifyContent: 'center' 
                }}>
                  {step.icon}
                </Box>
              )}>
                <Typography sx={{ color: activeStep >= index ? 'text.primary' : 'text.disabled', fontWeight: 700 }}>
                  {step.label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ minHeight: 300 }}>
          {activeStep === steps.length ? (
            <Stack alignItems="center" spacing={3} sx={{ py: 4 }}>
              <CheckCircleIcon sx={{ fontSize: 100, color: '#4CAF50' }} />
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary' }}>Success!</Typography>
              <Typography color="text.secondary" align="center">
                Your order #88219 has been placed. We'll send you an update as soon as it ships.
              </Typography>
              <Button variant="outlined" href="/" sx={{ borderRadius: 100, px: 4, mt: 2 }}>
                Return to Shop
              </Button>
            </Stack>
          ) : (
            <Box>
              {activeStep === 0 && (
                <Grid container spacing={3}>
                  <Grid item xs={6}><TextField {...textFieldProps} label="First Name" /></Grid>
                  <Grid item xs={6}><TextField {...textFieldProps} label="Last Name" /></Grid>
                  <Grid item xs={12}><TextField {...textFieldProps} label="Shipping Address" /></Grid>
                  <Grid item xs={6}><TextField {...textFieldProps} label="City" /></Grid>
                  <Grid item xs={6}><TextField {...textFieldProps} label="Postal Code" /></Grid>
                </Grid>
              )}

              {activeStep === 1 && (
                <Stack spacing={3}>
                  <TextField {...textFieldProps} label="Card Number" placeholder="XXXX XXXX XXXX XXXX" />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField {...textFieldProps} label="Expiry Date" placeholder="MM/YY" />
                    <TextField {...textFieldProps} label="CVC" />
                  </Box>
                </Stack>
              )}

              {activeStep === 2 && (
                <Box sx={{ p: 3, bgcolor: 'action.hover', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>Confirm your Order</Typography>
                  <Typography variant="body2" color="text.secondary">
                    By clicking "Complete Purchase", you agree to our terms and conditions.
                  </Typography>
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ fontWeight: 800, color: 'text.secondary' }}>
                  Back
                </Button>
                <Button 
                  variant="contained" 
                  onClick={handleNext} 
                  sx={{ borderRadius: 100, px: 6, py: 1.5, fontWeight: 900 }}
                >
                  {activeStep === steps.length - 1 ? 'Complete Purchase' : 'Continue'}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;