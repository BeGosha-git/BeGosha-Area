import React from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import CartItem from '../../component/CartItem/CartItem';
import './CartPage.css'; // Импорт стилей

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    alert('Спасибо за покупку!');
  };

  return (
    <div className='PageForm'>
      <div className="cart-page">
        <div className="cart-items">
          <h1>Shopping Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} onRemove={handleRemove} />
              ))} 
              <h2>Total: ${calculateTotal().toFixed(2)}</h2>
            </div>
          )}
        </div>
        <div>
          <button className="checkout-button" onClick={handleCheckout}>Оформить</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;