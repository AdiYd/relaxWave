import React, {useState} from 'react';
import { StyledButton } from './MUI';
import { Button, IconButton, TextField } from '@mui/material';


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

const defaultImageClass = "w-full mx-auto max-h-56 shadow rounded-md object-cover";
const ProductCard = ({ 
  product,
  minQuantity = 1,
  maxQuantity = 10,
  showProductCount = true ,
  showPrice = true, 
  showButton = true,
  buttonText = 'Add to Cart',
  onClick = (e)=>{console.log(e.target.innerText, ' Clicked!')},
  imageWidth,
  isSale = false,
  discountPrecent,
  discountText = 'OFF',
  imageClass =  defaultImageClass,
  cardHeight }) => {
    const [quantity, setQuantity] = useState(1);
    const handleDecreaseQuantity = () => {
      if (quantity > minQuantity) {
      setQuantity(quantity - 1);
      }
  };

  const handleIncreaseQuantity = () => {
      if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      }
  };




  return (
    product && <div className="card mx-auto" style={{height:cardHeight}}>
      {discountPrecent && <button 
        className="absolute top-4 left-4 px-2 py-1 text-xs rounded-md bg-red-950 text-white">
        {`${discountPrecent}% ${discountText}`}
      </button>}
      <div className="w-full block overflow-hidden">
      <img 
      id='cardImg' 
      src={process.env.PUBLIC_URL + product.image} 
      style={{width: `${imageWidth}px`, height:imageWidth ?`${0.8*imageWidth}px`:undefined }}
      alt={product.name} className={imageClass} />
      </div>
      <h3 className="font-bold text-lg mt-2 mx-auto">{product.name}</h3>
      <hr className='mb-2 mt-0 mx-auto w-2/3 border-b' />
      <p className="text-gray-500 text-sm">{product.description}</p>
      {showPrice && <div className="mt-4 mx-auto">
        {product.originalPrice &&
        <div className="relative w-fit mx-auto">
          {isSale &&  <SaleIcon />}
          <span className="line-through text-gray-500">${product.originalPrice}</span>
        </div>}
        <span className="font-bold text-xl text-red-800 ml-2">${product.discountedPrice}</span>
      </div>}
        {(showProductCount && showButton )?  
              <div className="flex w-full align-baseline justify-between mx-auto items-center mt-4">
                  <StyledButton onClick={onClick} className="btn-primary mx-2">{buttonText}</StyledButton>
                  <div className="flex w-fit items-center">
                      <IconButton 
                      onClick={handleDecreaseQuantity} 
                      disabled={quantity <= minQuantity} 
                      sx = {{paddingX:'1em'}}
                      className={quantity <= minQuantity ? 'opacity-80' : ''}>
                        -
                      </IconButton>
                      <TextField
                        type="number"
                        fullWidth={true}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        inputProps={{ min: minQuantity, max: maxQuantity, className: 'text-center w-12' }}
                        className="mx-2"
                      />
                      <IconButton 
                      onClick={handleIncreaseQuantity} 
                      disabled={quantity >= maxQuantity} 
                      sx = {{paddingX:'1em'}}
                      className={quantity >= maxQuantity ? 'opacity-80' : ''}>
                        +
                      </IconButton>
                  </div>
             </div> : 
             <div className='mt-4 items-center w-full p0 mb-0'>
                    <Button
                    variant="contained" 
                    color="primary"
                    onClick={onClick} 
                    className="btn-primary w-2/3 rounded-md self-center mx-auto">{buttonText}</Button>
              </div>
             }

    </div>
  );
};

export default ProductCard;
