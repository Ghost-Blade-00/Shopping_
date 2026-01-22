import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';

function App() {
  const [mode, setMode] = useState('dark');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#e92932' },
      background: {
        default: mode === 'light' ? '#FBFBFD' : '#0D0D0E',
        paper: mode === 'light' ? '#FFFFFF' : '#1A1A1C',
      },
      text: {
        primary: mode === 'light' ? '#181111' : '#F5F5F7',
      },
      divider: mode === 'light' ? '#f0f0f0' : '#2A2A2C',
    },
    typography: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
  }), [mode]);

  // Master Product Database
  const allProducts = [
    { id: 's1', name: 'SwiftStride Pro', price: 8999, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', category: 'shoes', description: 'Engineered for speed with a carbon-fiber plate.' },
    { id: 's2', name: 'AirMax Velocity', price: 12500, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772', category: 'shoes', description: 'Iconic air-cushioned comfort.' },
    { id: 's3', name: 'Urban Nomad High', price: 6499, img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77', category: 'shoes', description: 'Modern high-top sneaker.' },
    { id: 'e1', name: 'TechPro Laptop', price: 95000, img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853', category: 'electronics', description: 'A powerhouse for creators.' },
    { id: 'e2', name: 'Wireless ANC Headphones', price: 24999, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', category: 'electronics', description: 'High-fidelity audio.' },
    { id: 'e3', name: 'SmartWatch Series X', price: 32000, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', category: 'electronics', description: 'Advanced health tracking.' },
    { id: 'k1', name: 'Premium Dutch Oven', price: 14500, img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d', category: 'kitchenware', description: 'Enamel-coated cast iron.' },
    { id: 'k2', name: 'Professional Chef Knife', price: 4200, img: 'https://images.unsplash.com/photo-1593618998160-e34014e67546', category: 'kitchenware', description: 'Hand-forged stainless steel.' },
    { id: 'b1', name: 'The Art of Design', price: 2499, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f', category: 'books', description: 'Industrial design insights.' },
    { id: 'b2', name: 'Modern Architecture', price: 3100, img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', category: 'books', description: 'Innovative sustainable buildings.' }
  ];

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const addToCart = (p) => setCart((prev) => [...prev, { ...p, cartId: Math.random() }]);
  const removeFromCart = (id) => setCart((prev) => prev.filter(item => item.cartId !== id));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar cartCount={cart.length} onSearchChange={setSearchQuery} toggleTheme={toggleTheme} currentMode={mode} />
        <Box sx={{ minHeight: '80vh', bgcolor: 'background.default' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResults products={allProducts} onAddToCart={addToCart} searchQuery={searchQuery} />} />
            <Route path="/category/:categoryName" element={<SearchResults products={allProducts} onAddToCart={addToCart} searchQuery={searchQuery} />} />
            <Route path="/product/:productId" element={<ProductDetail products={allProducts} onAddToCart={addToCart} />} />
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