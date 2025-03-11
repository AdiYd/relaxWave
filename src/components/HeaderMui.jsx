import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Button, Badge, Menu, Drawer } from 'antd';
import { MenuOutlined, ShoppingOutlined, CloseOutlined } from '@ant-design/icons';
import { HeaderLogo } from './Header';
import PAGES from '../assets/json/pages.json';
import { CartContext } from '../context/CartContext';

const { Header } = Layout;

const HeaderComponent = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  // Handle cart state
  useEffect(() => {
    setCartEmpty(!(cart?.length > 0));
  }, [cart]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine current page
  useEffect(() => {
    const fullPath = location.pathname.startsWith('/') 
      ? location.pathname.slice(1) 
      : location.pathname;
    
    let page;
    if (fullPath.includes('/')) {
      page = fullPath.slice(0, 1).toUpperCase() + 
             fullPath.slice(1, fullPath.indexOf('/')).toLowerCase();
    } else {
      page = fullPath.slice(0, 1).toUpperCase() + 
             fullPath.slice(1).toLowerCase();
    }
    
    setCurrentPage(Object.keys(PAGES).includes(page) ? page : 'Home');
  }, [location.pathname]);

  return (
    <Header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
      style={{ padding: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/">
              <HeaderLogo showText={false} style={{ width: '12em' }} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {Object.keys(PAGES).map((item) => (
              item !== 'Cart' && (
                <Button
                  key={item}
                  type="text"
                  className={`${
                    currentPage === item 
                      ? 'text-secondary font-bold' 
                      : 'text-primary hover:text-secondary'
                  }`}
                  onClick={() => setCurrentPage(item)}
                >
                  <Link to={PAGES[item]}>{item}</Link>
                </Button>
              )
            ))}
            
            {/* Cart Badge */}
            <Badge count={cart?.length || 0} className="cursor-pointer">
              <Link to="/cart">
                <Button 
                  type="text"
                  icon={<ShoppingOutlined />}
                  className={currentPage === 'Cart' ? 'text-secondary' : 'text-primary'}
                />
              </Link>
            </Badge>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <Badge count={cart?.length || 0} className="cursor-pointer">
              <Link to="/cart">
                <Button 
                  type="text"
                  icon={<ShoppingOutlined />}
                  className={currentPage === 'Cart' ? 'text-secondary' : 'text-primary'}
                />
              </Link>
            </Badge>
            
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setIsDrawerOpen(true)}
              className="text-primary"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        closable={false}
        width={250}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold">RelaxWave</span>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
        
        <Menu
          mode="vertical"
          selectedKeys={[currentPage]}
          className="border-none"
        >
          {Object.keys(PAGES).map((item) => (
            item !== 'Cart' && (
              <Menu.Item 
                key={item}
                onClick={() => {
                  setIsDrawerOpen(false);
                  setCurrentPage(item);
                }}
                className={
                  currentPage === item 
                    ? 'bg-secondary/10 text-secondary' 
                    : 'text-primary'
                }
              >
                <Link to={PAGES[item]}>{item}</Link>
              </Menu.Item>
            )
          ))}
        </Menu>
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;
