import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import poroducts from '../assets/json/products.json';
import { useLocation } from 'react-router-dom';
import Item from '../components/Item';


const Products = ({productName}) => {
  const [product, setProduct] = useState(productName);
  const location = useLocation();
  console.log(location, ' <-- This is your location')
  console.log('productName: ', productName);
  useEffect(()=>{
      if (product !== productName){
        setProduct(productName);
      }
  },[productName, product])

  return (
    <div className="pageContainer max-sm:px-4">
    <div className="text-center mb-8 mt-4 fade-in ">
      <h1 className="text-3xl font-bold ">Our Products</h1>
      <p className="text-lg mb-6">
        Our products carefully picked and designed to enrich your lifestyle and well-being. With our innovative and eco-friendly products. Designed to boost your energy levels, our collection features cool gadgets that promote relaxation, tranquility, and a healthier lifestyle.
      </p>
    </div>
    <div className='m-4 max-sm:mx-0 rounded-lg'>
      <Item />
    </div>
      <div className="p-4 flex flex-wrap gap-y-8 justify-around max-sm:p-8">
        {Object.values(poroducts)?.map((product,indx) => (
          <ProductCard key={indx}  product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
