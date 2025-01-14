import React from 'react';
import { Product } from '../../context/CartContext/CartContext';

interface CartItemProps {
  item: Product;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={`../../products/${item.name}/${item.product_images[0]}`} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;