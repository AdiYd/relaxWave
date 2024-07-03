import React from 'react';
import { debug } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const SaleIcon = (...props) => (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`w-9 text-green-700 -rotate-6 h-16 absolute opacity-80 -left-16 -bottom-8`}
    fill="currentColor"
  >
    <g transform="scale(-1, -1) translate(-24, -14)">
      <path d="M21.41,11.58,12.42,2.59A2,2,0,0,0,11,2H5A2,2,0,0,0,3,4V10a2,2,0,0,0,.59,1.41l9,9a2,2,0,0,0,2.83,0l6-6A2,2,0,0,0,21.41,11.58ZM6.5,8.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,6.5,8.5ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" />
    </g>
    <text
      x="50%"
      y="100%"
      textAnchor="middle"
      fill="black"
      fontSize="9"
      fontWeight="bold"
    >
      Sale!
    </text>
  </svg>
);

const defaultImageClass = "w-full mx-auto max-h-60 shadow rounded-md object-cover";
const ProductCard = ({ product,
  showProductCount = true ,
  showPrice = true, 
  showButton = true,
  buttonText = 'Add to Cart',
  imageHeight ,
  isSale = false,
  discountPrecent,
  discountText = 'OFF',
  imageClass =  defaultImageClass,
  cardHeight }) => {
  return (
    product && <div className="card" style={{height:cardHeight}}>
      {discountPrecent && <button 
        className="absolute top-4 left-4 px-2 py-1 text-xs rounded-md bg-red-950 text-white">
        {`${discountPrecent}% ${discountText}`}
      </button>}
      <img src={product.image} style={{height: imageHeight}}
      alt={product.name} className={imageClass} />
      <h3 className="font-bold text-lg mt-2">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>
      {showPrice && <div className="mt-4">
        {product.originalPrice &&
        <div className="relative w-fit mx-auto">
        {isSale &&  <SaleIcon />}
        <span className="line-through text-gray-500">${product.originalPrice}</span>
        </div>}
        <span className="font-bold text-xl text-red-800 ml-2">${product.discountedPrice}</span>
      </div>}
        {(showProductCount && showButton )?  
              <div className="flex w-full align-baseline justify-between mx-auto items-center mt-4">
                  <button className="btn-primary mx-2">{buttonText}</button>
                  <input type="number" min="1" defaultValue="1" className="inputField border w-16 p-2 rounded my-auto mx-2" /> 
             </div> :
                  <button className="btn-primary w-2/3 rounded-md mx-auto">{buttonText}</button>
             }

    </div>
  );
};

export default ProductCard;
