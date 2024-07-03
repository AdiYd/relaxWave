import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  
  return (
    <header className="bg-primary p-7 pb-0 flex justify-between items-center" style={{ backgroundColor: theme.palette.primary.main }}>
      <div className="text-white font-bold text-lg">
        <Link to="/">RelaxWave</Link>
      </div>
      <nav>
        <ul className="flex gap-7 space-x-10 align-end">
          <li><Link to="/" className="text-white hover:opacity-80">Home</Link></li>
          <li><Link to="/about" className="text-white hover:opacity-80">About</Link></li>
          <li><Link to="/products" className="text-white hover:opacity-80">Products</Link></li>
          <li><Link to="/contact" className="text-white hover:opacity-80">Contact</Link></li>
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
