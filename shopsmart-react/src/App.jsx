import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';

const theme = createTheme({
  palette: {
    primary: { main: '#e92932' },
    background: { default: '#FBFBFD' },
    text: { primary: '#181111' },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  },
});

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Master Product Database with unique descriptions and Rupee prices
  const allProducts = [
    // SHOES
    { 
      id: 's1', 
      name: 'SwiftStride Pro', 
      price: 8999, 
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', 
      category: 'shoes',
      description: 'Engineered for speed, the SwiftStride Pro features a carbon-fiber plate and ultra-responsive foam for long-distance racing.'
    },
    { 
      id: 's2', 
      name: 'AirMax Velocity', 
      price: 12500, 
      img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772', 
      category: 'shoes',
      description: 'Iconic air-cushioned comfort meets a sleek aerodynamic design, perfect for both the track and the street.'
    },
    { 
      id: 's3', 
      name: 'Urban Nomad High', 
      price: 6499, 
      img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77', 
      category: 'shoes',
      description: 'A modern take on the high-top sneaker, featuring premium suede and an all-day comfort sole.'
    },
    
    // ELECTRONICS
    { 
      id: 'e1', 
      name: 'TechPro Laptop', 
      price: 95000, 
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853', 
      category: 'electronics',
      description: 'A powerhouse for creators. Features a 16-inch Retina display, 32GB RAM, and the latest dedicated graphics processing.'
    },
    { 
      id: 'e2', 
      name: 'Wireless ANC Headphones', 
      price: 24999, 
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', 
      category: 'electronics',
      description: 'Industry-leading noise cancellation technology with high-fidelity audio and 30 hours of battery life.'
    },
    { 
      id: 'e3', 
      name: 'SmartWatch Series X', 
      price: 32000, 
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', 
      category: 'electronics',
      description: 'Advanced health tracking, cellular connectivity, and a robust waterproof design for every adventure.'
    },
    
    // KITCHEN
    { 
      id: 'k1', 
      name: 'Premium Dutch Oven', 
      price: 14500, 
      img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d', 
      category: 'kitchenware',
      description: 'Enamel-coated cast iron that provides superior heat distribution and retention for slow-cooked perfection.'
    },
    { 
      id: 'k2', 
      name: 'Professional Chef Knife', 
      price: 4200, 
      img: 'https://images.unsplash.com/photo-1593618998160-e34014e67546', 
      category: 'kitchenware',
      description: 'Hand-forged stainless steel with an ergonomic handle, balanced perfectly for precision cutting.'
    },
    
    // BOOKS
    { 
      id: 'b1', 
      name: 'The Art of Design', 
      price: 2499, 
      img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f', 
      category: 'books',
      description: 'An in-depth look into the world of industrial design, featuring interviews with global visionaries.'
    },
    { 
      id: 'b2', 
      name: 'Modern Architecture', 
      price: 3100, 
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', 
      category: 'books',
      description: 'A coffee-table masterpiece showcasing the most innovative sustainable buildings of the 21st century.'
    }
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, cartId: Math.random() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar cartCount={cart.length} onSearchChange={setSearchQuery} />
        
        <Box sx={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Category listing with product filtering */}
            <Route 
              path="/category/:categoryName" 
              element={<SearchResults products={allProducts} onAddToCart={addToCart} searchQuery={searchQuery} />} 
            />
            
            {/* Dynamic Product Details */}
            <Route 
              path="/product/:productId" 
              element={<ProductDetail products={allProducts} onAddToCart={addToCart} />} 
            />
            
            <Route path="/cart" element={<CartPage cartItems={cart} onRemove={removeFromCart} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </Box>
        
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;