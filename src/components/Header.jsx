import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Header = () => {
  
  return (
    <header id="navbar" className="menu  border-b border-b-gray-400 p-7 pb-0 flex justify-between items-center">
      <div className="font-bold text-lg">
        <Link to="/">RelaxWave</Link>
      </div>
      <nav>
        <ul className="flex gap-16 space-x-5">
          <li><Link to="/" className="headerLink">Home</Link></li>
          <li><Link to="/about" className="headerLink">About</Link></li>
          <li><Link to="/products" className="headerLink">Products</Link></li>
          <li><Link to="/contact" className="headerLink">Contact</Link></li>
        </ul>
      </nav>
      <div>
        <Link to="/cart">
          <ShoppingCart className="headerLink" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
