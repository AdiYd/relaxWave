import React from 'react';
import ProductCard from '../components/ProductCard';
import poroducts from '../assets/json/products.json';


const Products = () => {
  return (
    <div className="pageContainer max-sm:px-4">
    <div className="text-center mb-8 mt-4 fade-in ">
      <h1 className="text-3xl font-bold ">Our Products</h1>
      <p className="text-lg mb-6">
        Our products carefully picked and designed to enrich your physical well-being and indoor vibes and atmosphere. with our innovative and eco-friendly products. Designed to boost your energy levels, our collection features cool gadgets that promote relaxation, tranquility, and a healthier lifestyle.
      </p>
    </div>
      <div className="p-4 flex flex-wrap gap-y-8 justify-around max-sm:p-0">
        {Object.values(poroducts)?.map(product => (
          <ProductCard  product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
