import React, { useContext } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { currDict } from '../components/Item';

const emptyBag = 
<svg className="w-24 h-24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor">
  <path fill="currentColor" fillRule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"/>
</svg>

const refBagFull = (itemCount)=> 
<svg className=" w-24 h-24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="red">
  <path fill="currentColor" fillRule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z">
  </path>
  <circle cx="30" cy="10" r="7" fill="#EEB85D"/>
  <text x="30" y="10" textAnchor="middle" dy=".3em" fontSize="10" fontWeight={'700'} fill="#17332A">{itemCount}</text>
</svg>

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (id, event) => {
  
    
  };
  let totalPrice = 0;
  for (let item of cart){
    totalPrice = Number(totalPrice) + Number(item.total);
  }

  return (
   <div className='m-4 p-8 text-center max-sm:p-4'>
        <div className='flex gap-8 items-center justify-center'>
              {!cart.length ? emptyBag : refBagFull(cart.length)}
               <h1 className="text-3xl font-bold text-primary ">Your Cart</h1>
          </div>
      {cart.length === 0 ? 
          <div className='m-3 items-center content-center'>
              <p className='mb-6'>Your cart is empty </p>
              <div className='flex justify-center gap-8'>
                  <Link to={"/Products"}>
                    <Button variant='contained' color='info'> Shop</Button>
                  </Link>
                  <Link to={"/Home"}>
                  <Button variant='contained' color='secondary'> Home</Button>
                  </Link>
              </div>
            </div>
             : 
              <div className='flex gap-12'>
                  <ul className='w-fit'>
                   {cart.map((item, indx) => (
                    <li className=' block w-fit p-4 m-4 border-b' key={indx}>
                        <img className='w-20 h-20 float-right rounded-full border shadow-lg' src={item.image} alt={item.title} />
                        <h2 className='text-start text-lg'>{item.title}</h2>
                        <div className="">
                              <div>
                                {item.options && Object.keys(item.options).map((option, index)=>(
                                  <span key={index} className='flex gap-4'>
                                  <p className='text-primary font-bold'>{option}:</p>
                                  <p>{item.options[option]}</p>
                                  </span>
                                ))}
                              </div>
                              <div className='flex items-center gap-4'>
                              <p className='text-primary font-bold'>Quantity:</p>
                              <div className='flex w-fit'>
                                    <IconButton 
                                    onClick={(e)=>handleQuantityChange(item.title, e)} 
                                    disabled={item.quantity <= 1} 
                                    sx = {{paddingX:'1em'}}
                                    className={item.quantity <= 1 ? 'opacity-80' : ''}>
                                      -
                                    </IconButton>
                                    <TextField
                                        type="number"
                                          value={item.quantity}
                                          onChange={(e) => handleQuantityChange(item.name, e)}
                                          inputProps={{ min: 1 }}
                                    />
                                    <IconButton 
                                    onClick={(e)=>handleQuantityChange(item.name, e)} 
                                    disabled={item.quantity >= 10} 
                                    sx = {{paddingX:'1em'}}
                                    className={item.quantity >= 10 ? 'opacity-80' : ''}>
                                      +
                                    </IconButton>
                                    </div>
                              </div>
                         </div>
                        <p>Total: ${(item.pricePerUnit * item.quantity).toFixed(2)}</p>
                      </li>
                        ))}
                 </ul> 
                <div className=' m-8 px-4 max-sm:m2'>
                  <h3 className='text-start text-lg my-4'>Total Price: {currDict[cart[0].currency]}{totalPrice}</h3>
                  <Button variant="contained" color="success">
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            }
          </div>);
};

export default CartPage;
