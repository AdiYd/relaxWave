import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'RelaxWave Massager Pro',
    description: 'Experience the ultimate relaxation with our top-rated massager.',
    image: '/images/massager1.jpg',
    originalPrice: 199.99,
    discountedPrice: 149.99,
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
