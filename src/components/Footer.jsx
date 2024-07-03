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
            <li><a href="/terms" className="text-gray-400">Services and terms</a></li>
            <li><a href="/cookies" className="text-gray-400">Cookies policy</a></li>
            <li><a href="/legal" className="text-gray-400">Legal and privacy</a></li>
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
