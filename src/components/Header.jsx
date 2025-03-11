import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Badge } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import PAGES from '../assets/json/pages.json';
import { CartContext } from '../context/CartContext';

const { Header: AntHeader } = Layout;

export const Logo = ({showText=true, ...props}) => (
  <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <g transform="rotate(-10 100 50)">
      <path d="M100 30 Q85 50 100 70 Q115 50 100 30 Z" fill="#C97B5B" />
      <path d="M100 70 Q120 50 140 70 Q120 90 100 70 Z" fill="#EEB85D" />
      <path d="M100 30 Q115 50 100 70 Q85 50 100 30 Z" fill="#17332A" />
    </g>
    {showText && (
      <text x="160" y="70" textAnchor="start" fontFamily="'Comic Sans MS', 'Arial', sans-serif" fontSize="24" fill="#17332A" fontWeight="bold" letterSpacing="0.05em">
        relaxWave
      </text>
    )}
  </svg>);

export const HeaderLogo = ({showText=true, ...props}) => (
  <svg id='svgLogo' 
    width="300" height="100" viewBox="0 0 300 100" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ display: 'block', ...props.style }}>
    <g transform="rotate(-10 100 50)">
      <path d="M100 30 Q85 50 100 70 Q115 50 100 30 Z" fill="#C97B5B" />
      <path d="M100 70 Q120 50 140 70 Q120 90 100 70 Z" fill="#EEB85D" />
      <path d="M100 30 Q115 50 100 70 Q85 50 100 30 Z" fill="#17332A" />
    </g>
    {showText && (
      <text x="160" y="70" textAnchor="start" fontFamily="'Comic Sans MS', 'Arial', sans-serif" fontSize="13" fill="#17332A" fontWeight="bold" letterSpacing="0.05em">
        relaxWave
      </text>
    )}
  </svg>);

const Header = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);
  const [current, setCurrent] = useState(() => {
    const path = location.pathname.slice(1);
    return path || 'Home';
  });

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const menuItems = Object.keys(PAGES).map(item => ({
    key: item,
    label: <Link to={PAGES[item]}>{item}</Link>,
  }));

  return (
    <AntHeader className="bg-white border-b border-gray-200 px-8 pb-0 flex justify-between items-center max-sm:px-2">
      <div className="font-bold text-lg w-1/6 max-sm:hidden">
        <Link to="/">
          <HeaderLogo showText={false} />
        </Link>
      </div>
      
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleClick}
        className="w-1/2 max-sm:w-5/6 border-none"
        items={menuItems}
      />
      
      <div className="w-1/6 text-end">
        <Link to="/cart">
          <Badge count={cart?.length || 0} className="cursor-pointer">
            <Button type="text" icon={<ShoppingCartOutlined className="text-xl" />} />
          </Badge>
        </Link>
      </div>
    </AntHeader>
  );
};

export default Header;
