import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  
  return (
    <header className="bg-primary p-4 flex justify-between items-center" style={{ backgroundColor: theme.palette.primary.main }}>
      <div className="text-white font-bold text-lg">
        <Link to="/">RelaxWave</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/about" className="text-white">About</Link></li>
          <li><Link to="/products" className="text-white">Products</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
        </ul>
      </nav>
      <div>
        <Link to="/cart">
          <ShoppingCart className="text-white" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
