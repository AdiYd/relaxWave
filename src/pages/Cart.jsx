import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="pageContainer">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map(item => (
            <div key={item.id} className="border p-4 rounded shadow">
              <h2 className="font-bold">{item.name}</h2>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
      <button className="bg-pink-600 text-white px-4 py-2 rounded mt-4">Proceed to Payment</button>
    </div>
  );
};

export default Cart;
