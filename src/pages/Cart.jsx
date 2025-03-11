import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { currDict } from '../components/Item';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Checkbox, Form, Typography, Button, AutoComplete } from 'antd';


const { Title, Text } = Typography;

const emptyBag = <svg className="w-24 h-24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor">
  <path fill="currentColor" fillRule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"/>
</svg>

const refBagFull = (itemCount)=> 
<svg className="w-20 h-20" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="red">
  <path fill="currentColor" fillRule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z">
  </path>
  <circle cx="30" cy="10" r="7" fill="#EEB85D"/>
  <text x="30" y="10" textAnchor="middle" dy=".3em" fontSize="10" fontWeight={'700'} fill="#17332A">{itemCount}</text>
</svg>

const CartPage = () => {
  const { cart, addToCart, removeFromCart, updateCart } = useContext(CartContext);

  const handleQuantityChange = (item, action) => {
    const newQuantity = action === 'add' ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateCart({ ...item, quantity: newQuantity });
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (!cart?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {emptyBag}
        <Title level={3} className="mt-4 mb-2">העגלה שלך ריקה</Title>
        <Text className="mb-4">הוסף מוצרים לעגלה כדי להמשיך בקנייה</Text>
        <Button type="primary" size="large">
          <Link to="/products">המשך בקנייה</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={2} className="text-center mb-8">העגלה שלך</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-white rounded-lg shadow">
              <div className="w-full sm:w-1/3">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <Title level={4}>{item.title}</Title>
                <Text className="text-lg font-semibold mb-2">
                  {currDict[item.currency]}{(item.price * item.quantity).toFixed(2)}
                </Text>
                <div className="flex items-center gap-2 max-2xs:flex-col max-2xs:items-start">
                  <Text strong className="text-sm">כמות:</Text>
                  <div className="flex items-center border rounded">
                    <Button 
                      type="text"
                      icon={<MinusOutlined />}
                      onClick={() => handleQuantityChange(item, 'remove')}
                      disabled={item.quantity <= 1}
                      className={item.quantity <= 1 ? 'opacity-50' : ''}
                    />
                    <Text className="px-4">{item.quantity}</Text>
                    <Button 
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={() => handleQuantityChange(item, 'add')}
                      disabled={item.quantity >= 10}
                      className={item.quantity >= 10 ? 'opacity-50' : ''}
                    />
                  </div>
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => removeFromCart(item)}
                    className="ml-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow">
            <Title level={3} className="mb-4">סיכום הזמנה</Title>
            <div className="flex justify-between mb-4">
              <Text>סה"כ מוצרים:</Text>
              <Text>{cart.length}</Text>
            </div>
            <div className="flex justify-between mb-4">
              <Text>סה"כ לתשלום:</Text>
              <Text strong>{currDict[cart[0]?.currency]}{calculateTotal().toFixed(2)}</Text>
            </div>
            <Button type="primary" size="large" block className="mb-4">
              המשך לתשלום
            </Button>
            <Button block>
              <Link to="/products">המשך בקנייה</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
