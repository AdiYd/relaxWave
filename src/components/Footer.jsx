import React from 'react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer className="bg-gray-800 text-white p-4 mt-8" style={{ backgroundColor: theme.palette.primary.dark }}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold">RelaxWave</h2>
          <ul>
            <li><a href="/terms-and-conditions" className="text-gray-400">Terms and Conditions</a></li>
            <li><a href="/cookies-policy" className="text-gray-400">Cookies Policy</a></li>
            <li><a href="/privacy-policy" className="text-gray-400">Privacy Policy</a></li>
            <li><a href="/disclaimer" className="text-gray-400">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Connect</h2>
          <ul className="flex space-x-4">
            <li><a href="https://instagram.com" className="text-gray-400">Instagram</a></li>
            <li><a href="https://facebook.com" className="text-gray-400">Facebook</a></li>
            <li><a href="https://tiktok.com" className="text-gray-400">TikTok</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
