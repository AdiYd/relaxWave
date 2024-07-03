import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';


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

 const HeaderLogo = ({showText=true, ...props}) => (
  <svg id='svgLogo' width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
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


const PAGES = {
  Home: '/',
  Products: '/products',
  About:'/about',
  Contact: '/contact'
}

const Header = () => {
  const [page, setPage] = useState('Home');
  const onMenuPageClick = (e)=>{
      setPage(e.target.innerText);
  }

  return (
    <header id="navbar" className="menu border-b border-b-gray-400 p-7 pb-0 flex justify-between items-center">
      <div className="font-bold text-lg">
        <Link to="/">
        <HeaderLogo />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-16 space-x-5">
          {Object.keys(PAGES).map((item,index)=>(
          <li key={index}>
              <Link onClick={onMenuPageClick} to={PAGES[item]} 
              className={`headerLink ${item === page ? ' text-primary':''}`}>
              {item}
              </Link>
          </li>
          ))}
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
