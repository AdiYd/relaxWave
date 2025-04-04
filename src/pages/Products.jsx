import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Typography } from 'antd';
import products from '../assets/json/productData.json';
import { useLocation, useNavigate } from 'react-router-dom';
import Item from '../components/Item';
import { CartContext } from '../context/CartContext';

const { Title, Text } = Typography;
const productsName = products.map(item=>item.title);

const scrollToSection = (targetID = 'itemContainer') => {
  const section = document.getElementById(targetID);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Products = ({productName}) => {
  const [product, setProduct] = useState(productName);
  const {cart, addToCart, removeFromCart} = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location, ' <-- This is your location')
  useEffect(()=>{
      if (product !== productName && productsName.includes(productName)){
        setProduct(productName);
      }
  },[productName, product])

const onAddToCartClick = (customerRequest)=>{
    console.log('Am here', customerRequest);
    addToCart(customerRequest);
}

  return (
    <div className="pageContainer max-sm:px-4">
    <div className="text-center mb-8 mt-4 fade-in ">
      <Title level={1} className="text-primary">Our Products</Title>
      <Text className="text-lg block mb-6">
        Our products carefully picked and designed to enrich your lifestyle and well-being. With our innovative and eco-friendly products. Designed to boost your energy levels, our collection features cool gadgets that promote relaxation, tranquility, and a healthier lifestyle.
      </Text>
    </div>
    <div className='m-4 max-sm:mx-0 rounded-lg'>
      { products.map((item, indx)=> item.title === product ? 
      <Item key={indx} productData={item} />:undefined)}
    </div>
    {productsName.includes(product) &&
      <Title level={2} className="text-primary mb-4">Recomended for you :</Title>}
      <div className="p-4 flex flex-wrap gap-y-8 justify-around max-sm:p-8">
        {products?.map((product,indx) => (
          <ProductCard 
          onClick={()=>{navigate(`/products/${product.title}`); setTimeout(()=>{scrollToSection()},200)}}
          onBtnClick={onAddToCartClick}
          key={indx}  
          productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
