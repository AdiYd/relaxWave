import React from 'react';
import { Layout, Space } from 'antd';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Footer: AntFooter } = Layout;

const SocialIcons = () => (
  <Space className="w-full justify-between">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <InstagramOutlined className="text-2xl text-pink-500 hover:text-pink-600" />
    </a>
    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" width="24" height="24" className="text-black hover:text-gray-600">
        <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.43l.12-.12.12-.12V17h3.44a8.2 8.2 0 00.08-1.12V7.38a8.19 8.19 0 001.97.31z"/>
      </svg>
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FacebookOutlined className="text-2xl text-blue-600 hover:text-blue-700" />
    </a>
  </Space>
);

const Footer = () => {
  return (
    <AntFooter className="bg-white border-t shadow-lg text-primary-light p-4 pt-8">
      <div className="flex justify-between items-center">
        <div className="w-3/4">
          <h2 className="font-bold my-4">RelaxWave</h2>
          <Space split="|" className="flex flex-wrap gap-4 max-sm:flex-col text-sm">
            <Link to="terms-and-conditions" className="footerLink">Terms and Conditions</Link>
            <Link to="cookies-policy" className="footerLink">Cookies Policy</Link>
            <Link to="privacy-policy" className="footerLink">Privacy Policy</Link>
            <Link to="/disclaimer" className="footerLink">Disclaimer</Link>
          </Space>
        </div>
        <div className="w-1/4 px-2 text-center max-sm:w-1/2">
          <SocialIcons />
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
