import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", slug: "electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200", headline: "Future in your hands", glow: "rgba(63, 81, 181, 0.15)" },
  { name: "Shoes", slug: "shoes", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200", headline: "Walk your own path", glow: "rgba(233, 41, 50, 0.15)" },
  { name: "Kitchen", slug: "kitchen", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200", headline: "Art of Cooking", glow: "rgba(76, 175, 80, 0.15)" },
  { name: "Books", slug: "books", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200", headline: "Stories worth living", glow: "rgba(255, 193, 7, 0.15)" },
];

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveStep((prev) => (prev + 1) % categories.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth={false} sx={{ pt: 4, pb: 10, px: { xs: 2, md: 8 } }}>
        <Box sx={{ 
          position: "relative", mb: 8, height: { xs: 400, md: 600 }, borderRadius: 8, overflow: "hidden",
          "&::before": { content: '""', position: "absolute", inset: 0, zIndex: 1, 
          background: (theme) => theme.palette.mode === 'dark' ? `radial-gradient(circle at 20% 50%, ${categories[activeStep].glow} 0%, transparent 70%)` : 'transparent' }
        }}>
          <Box component="img" src={categories[activeStep].img} sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "all 1s ease" }} />
          <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)", display: "flex", alignItems: "center", p: { xs: 4, md: 10 }, zIndex: 2 }}>
            <Box sx={{ color: "white", maxWidth: 600 }}>
              <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: "2.5rem", md: "5.0rem" }, mb: 3 }}>{categories[activeStep].headline}</Typography>
              <Button component={Link} to={`/category/${categories[activeStep].slug}`} variant="contained" sx={{ bgcolor: "#FF1E1E", px: 6, py: 2, fontWeight: 800 }}>SHOP NOW</Button>
            </Box>
          </Box>
        </Box>

        <Typography variant="h3" sx={{ fontWeight: 900, mb: 6, color: "text.primary", textAlign: "center" }}>Browse Collections</Typography>
        <Grid container spacing={4}>
          {categories.map((cat, index) => (
            <Grid item xs={12} md={index % 3 === 0 ? 12 : 6} key={cat.name}>
              <Box component={Link} to={`/category/${cat.slug}`} sx={{ textDecoration: "none", position: "relative", display: "block", height: index % 3 === 0 ? 500 : 400, borderRadius: 6, overflow: "hidden", transition: "0.5s", "&:hover": { transform: "translateY(-10px)" } }}>
                <Box component="img" src={cat.img} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 4, background: "linear-gradient(transparent, rgba(0,0,0,0.8))", color: "white" }}>
                  <Typography variant="h4" sx={{ fontWeight: 900 }}>{cat.name}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;