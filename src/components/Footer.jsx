import React from 'react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer className="bg-primary/90 text-white p-4 mt-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold my-4">RelaxWave</h2>
          <ul className='flex gap-4'>
            <li><a href="/terms-and-conditions" className="text-gray-400 text-sm">Terms and Conditions</a></li>
            <li><a href="/cookies-policy" className="text-gray-400 text-sm">Cookies Policy</a></li>
            <li><a href="/privacy-policy" className="text-gray-400 text-sm">Privacy Policy</a></li>
            <li><a href="/disclaimer" className="text-gray-400 text-sm">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold my-4">Connect</h2>
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
