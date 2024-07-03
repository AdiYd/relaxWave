import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className=" w-full h-2/3 mx-auto p-2 object-cover" />
      <h3 className="font-bold text-lg mt-2">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <div className="mt-4">
        <span className="line-through text-gray-500">${product.originalPrice}</span>
        <span className="font-bold text-xl text-red-800 ml-2">${product.discountedPrice}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="btn-primary mx-2">Add to Cart</button>
        <input type="number" min="1" defaultValue="1" className="border w-16 p-2 rounded mx-2" />
      </div>
    </div>
  );
};

export default ProductCard;
