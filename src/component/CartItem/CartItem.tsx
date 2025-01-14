import React from 'react';
import { Product } from '../../context/CartContext/CartContext';
import './CartItem.css'; // Импорт стилей

interface CartItemProps {
    item: Product & { quantity: number }; // Убедитесь, что quantity отражается в props
    onRemove: (id: string) => void;
    onIncrease: (id: string) => void; // Новая функция для увеличения
    onDecrease: (id: string) => void; // Новая функция для уменьшения
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
    return (
        <div className="cart-item">
            <img src={`../../products/${item.name}/${item.product_images[0]}`} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                    <button onClick={() => onDecrease(item.id)}>-</button>
                    <input type="number" value={item.quantity} readOnly min="1" />
                    <button onClick={() => onIncrease(item.id)}>+</button>
                </div>
            </div>
        </div>
    );
};
//<button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
export default CartItem;