import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../assets/json/products.json';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export const Carousel = ({onClick, children , ...props}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...props} className='w-11/12 items-center justify-center mb-12 mx-auto' {...settings}>
            {children}
    </Slider>
  );
};




export const StyledBox = () => (
  <Box
    sx={{
      width: 300,
      height: 300,
      backgroundColor: '#25D366',
      '&:hover': {
        backgroundColor: '#34B7F1',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 24,
    }}
  >
    WhatsApp Green Box
  </Box>
);


export const StyledMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};


export const StyledContainer = () => (
  <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
    <Typography variant="h4" component="div" gutterBottom>
      Welcome to My Page
    </Typography>
    <Typography variant="body1">
      This is a simple container to center content on the page.
    </Typography>
  </Container>
);


export const StyledButton = ({children, ...props}) => {
    return (
      <Button
        className='btn-primary w-2/3'
        variant="contained"
        sx={{
          backgroundColor: '#C97B5B', // Custom background color
          '&:hover': {
            backgroundColor: '#EEB85D', // Custom hover color
          },
        }}
        {...props}
      >
        {children}
      </Button>
    );
  };

