import React from 'react';
import { Container, Typography, Box, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SupportPage = () => (
  <Container maxWidth="sm" sx={{ py: 10 }}>
    <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>Customer Care</Typography>
    <Typography sx={{ color: 'text.secondary', mb: 6 }}>
      Send us a message or browse common questions.
    </Typography>

    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 8 }}>
      <TextField fullWidth label="Full Name" />
      <TextField fullWidth label="Email Address" />
      <TextField fullWidth label="Message" multiline rows={4} />
      <Button variant="contained" size="large" sx={{ py: 2, fontWeight: 800 }}>
        SEND MESSAGE
      </Button>
    </Box>

    <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>FAQs</Typography>
    <Accordion variant="outlined" sx={{ borderRadius: '12px !important', mb: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontWeight: 600 }}>Shipping Times</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="text.secondary">Orders typically arrive within 3-5 business days.</Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion variant="outlined" sx={{ borderRadius: '12px !important' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontWeight: 600 }}>Return Policy</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="text.secondary">30-day money-back guarantee on all unused items.</Typography>
      </AccordionDetails>
    </Accordion>
  </Container>
);

export default SupportPage;