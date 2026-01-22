import React, { useState } from 'react';
import { Container, Typography, Box, Stepper, Step, StepLabel, Button, Paper, TextField, Grid, Divider, Stack } from '@mui/material';
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

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Paper elevation={0} variant="outlined" sx={{ p: { xs: 4, md: 8 }, borderRadius: 8 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 900, mb: 6, letterSpacing: '-1.5px' }}>
          Checkout
        </Typography>
        
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 8 }}>
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={() => (
                <Box sx={{ 
                  color: activeStep >= steps.indexOf(step) ? '#e92932' : '#ccc',
                  display: 'flex', justifyContent: 'center' 
                }}>
                  {step.icon}
                </Box>
              )}>
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ minHeight: 300 }}>
          {activeStep === steps.length ? (
            <Stack alignItems="center" spacing={3} sx={{ py: 4 }}>
              <CheckCircleIcon sx={{ fontSize: 100, color: '#4CAF50' }} />
              <Typography variant="h4" sx={{ fontWeight: 900 }}>Success!</Typography>
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
                  <Grid item xs={6}><TextField fullWidth label="First Name" variant="filled" /></Grid>
                  <Grid item xs={6}><TextField fullWidth label="Last Name" variant="filled" /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Shipping Address" variant="filled" /></Grid>
                  <Grid item xs={6}><TextField fullWidth label="City" variant="filled" /></Grid>
                  <Grid item xs={6}><TextField fullWidth label="Postal Code" variant="filled" /></Grid>
                </Grid>
              )}

              {activeStep === 1 && (
                <Stack spacing={3}>
                  <TextField fullWidth label="Card Number" placeholder="XXXX XXXX XXXX XXXX" variant="filled" />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField fullWidth label="Expiry Date" placeholder="MM/YY" variant="filled" />
                    <TextField fullWidth label="CVC" variant="filled" />
                  </Box>
                </Stack>
              )}

              {activeStep === 2 && (
                <Box sx={{ p: 3, bgcolor: '#f8f9fa', borderRadius: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Confirm your Order</Typography>
                  <Typography variant="body2" color="text.secondary">
                    By clicking "Complete Purchase", you agree to our terms and conditions.
                  </Typography>
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ fontWeight: 800 }}>
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