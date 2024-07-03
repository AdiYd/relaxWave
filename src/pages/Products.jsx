import React from 'react';
import ProductCard from '../components/ProductCard';
import product1 from '../img/product1.png';
import product2 from '../img/product2.png';

const products = [
  {
    id: 1,
    name: 'RelaxWave Massager Pro',
    description: 'Experience the ultimate relaxation with our top-rated massager.',
    image: product1,
    originalPrice: 199.99,
    discountedPrice: 149.99,
  },
  {
    id: 2,
    name: 'RelaxWave Massager Pro',
    description: 'Experience the ultimate relaxation with our top-rated massager.',
    image: product2,
    originalPrice: 199.99,
    discountedPrice: 149.99,
  },
  {
    id: 3,
    name: 'RelaxWave Massager Pro',
    description: 'Experience the ultimate relaxation with our top-rated massager.',
    image: product1,
    originalPrice: 199.99,
    discountedPrice: 149.99,
  },
  {
    id: 4,
    name: 'RelaxWave Massager Pro',
    description: 'Experience the ultimate relaxation with our top-rated massager.',
    image: product2,
    originalPrice: 199.99,
    discountedPrice: 149.99,
  },

];

const Products = () => {
  return (
    <div className="pageContainer">
      <div className="p-4 flex gap-4 flex-wrap justify-center ">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
