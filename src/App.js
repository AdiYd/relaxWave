
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import CartProvider from './context/CartContext';
import LegalPage from './pages/LegalPage';
import product1 from './img/product1.png';
import product2 from './img/product2.png';

export const productDict = {
  product1,
  product2
}

// JavaScript to handle scroll event
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 800){
    navbar.classList.add('hidden');
    navbar.classList.remove('scrolled');
  }
  else if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.remove('scrolled','hidden');
    navbar.classList.add('menu-transparent');
  }
});

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main className="flex-grow mt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<LegalPage section="termsAndConditions" />} />
            <Route path="/cookies-policy" element={<LegalPage section="cookiesPolicy" />} />
            <Route path="/privacy-policy" element={<LegalPage section="privacyPolicy" />} />
            <Route path="/disclaimer" element={<LegalPage section="disclaimer" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
