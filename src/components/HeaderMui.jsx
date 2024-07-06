import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { styled } from '@mui/material/styles';
import { HeaderLogo, Logo } from './Header';
import PAGES from '../assets/json/pages.json';
import { debug } from '../App';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  const location = useLocation();

  const setPageName = ()=>{
    let fullPath = location.pathname, currPage;
    if (fullPath.startsWith('/')){
      fullPath = fullPath.slice(1);
    }
    if (fullPath.includes('/')){
      currPage = fullPath.slice(0,1).toUpperCase() + fullPath.slice(1,fullPath.indexOf('/')).toLowerCase();
    }
    else {
        currPage = fullPath.slice(0,1).toUpperCase() + fullPath.slice(1).toLowerCase();
    }
    if (Object.keys(PAGES).includes(currPage)){
      return  currPage
    }
    else{
      return 'Home'
    }
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(setPageName);



  useEffect(()=>{
    debug('Entering page name: ', setPageName())
    setPage(setPageName)  
  },[location.pathname])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log('Current target: ',event.currentTarget )
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id='navbar'>
      <AppBar sx={{background:'white', color:'#403162'}} position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to={'Home'}>
            <HeaderLogo showText={false} style = {{width:'13em'}} />
          </Link>
          </Typography>
          <div className="sectionDesktop rtl w-1/2  self-end flex justify-around max-sm:hidden">
            {Object.keys(PAGES).map((item, index)=>(
             item !=='Cart' && <Typography key={index} variant="button">
                <Link to={PAGES[item]} 
                onClick={()=>setPage(item)}
                className={`mx-8 font-bold ${page===item ? 'text-red-700':''}`}>{item}</Link>
              </Typography>
              
            ))}
          </div>
          <div className="text-start ml-12 w-full hidden max-sm:block">
                <h1 style={{fontFamily:'cursive'}}>RelaxWave</h1>
          </div>
          <div className='ml-4 mr-2 self-end max-sm:self-center max-sm:mx-8'>
          <Link 
          onClick={()=>setPage('Cart')}
          className={`${page === 'Cart' ? 'text-red-700':'bg-inherit'}`}
          to="/cart" style={{ textDecoration: 'none',margin: '0 10px' }}>
              <IconButton color="inherit">
                <ShoppingBag  />
              </IconButton>
            </Link>
          </div>
          <div className="sectionMobile text-center hidden max-sm:block">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              className='text-center'
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              
              {Object.keys(PAGES).map((item, index)=>(
                <div key={index} className='flex justify-center'>
                    <MenuItem variant="button">
                    <Link 
                    onClick={()=>{setPage(item); setAnchorEl(null)}}
                    to={PAGES[item]} className={`mx-8 font-bold ${page===item ? 'text-red-700':''}`}>{item} </Link>
                    </MenuItem>
                </div>
            ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Offset />
    </div>
  );
};

export default Header;
