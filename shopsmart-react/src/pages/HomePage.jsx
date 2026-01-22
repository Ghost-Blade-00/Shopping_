import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", slug: "electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200", headline: "Future in your hands" },
  { name: "Shoes", slug: "shoes", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200", headline: "Walk your own path" },
  { name: "Kitchen", slug: "kitchenware", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200", headline: "Art of Cooking" },
  { name: "Books", slug: "books", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200", headline: "Stories worth living" },
];

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ bgcolor: "#FBFBFD", minHeight: "100vh" }}>
      {/* THE APPBAR WAS REMOVED FROM HERE TO PREVENT DUPLICATION */}
      
      <Container maxWidth="lg" sx={{ pt: 4, pb: 10 }}>
        {/* --- HERO SECTION --- */}
        <Box sx={{ position: "relative", mb: 8, height: { xs: 400, md: 600 }, borderRadius: 8, overflow: "hidden" }}>
          <Box
            component="img"
            src={categories[activeStep].img}
            sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "all 1.5s ease" }}
          />
          <Box sx={{ 
            position: "absolute", inset: 0, 
            background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)",
            display: "flex", alignItems: "center", p: { xs: 4, md: 10 } 
          }}>
            <Box sx={{ color: "white", maxWidth: 600 }}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "rgba(255,255,255,0.6)" }}>Featured Collection</Typography>
              <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: "2.5rem", md: "5rem" }, lineHeight: 1, mb: 3 }}>
                {categories[activeStep].headline}
              </Typography>
              <Button 
                component={Link} to={`/category/${categories[activeStep].slug}`}
                variant="contained" 
                sx={{ 
                  bgcolor: "#FF1E1E", 
                  color: "white", px: 6, py: 2, 
                  borderRadius: "0px", fontWeight: 800, fontSize: "1rem",
                  "&:hover": { bgcolor: "white", color: "black" }
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>

        {/* --- CATEGORY GRID --- */}
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 6, letterSpacing: "-2px" }}>Browse Collections</Typography>
        
        <Box sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, 
          gap: 4 
        }}>
          {categories.map((cat, index) => (
            <Box
              key={cat.name}
              component={Link}
              to={`/category/${cat.slug}`}
              sx={{ 
                textDecoration: "none", 
                position: "relative",
                height: index % 3 === 0 ? 500 : 400,
                borderRadius: 6, 
                overflow: "hidden",
                transition: "0.5s transform ease",
                "&:hover": { transform: "translateY(-10px)" }
              }}
            >
              <Box
                component="img"
                src={cat.img}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box sx={{ 
                position: "absolute", bottom: 0, left: 0, right: 0, p: 4,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                color: "white" 
              }}>
                <Typography variant="h4" sx={{ fontWeight: 900 }}>{cat.name}</Typography>
                <Typography variant="body2">Explore Details &rarr;</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;