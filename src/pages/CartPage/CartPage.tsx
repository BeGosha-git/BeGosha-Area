import React from 'react';
import { useCart, Product } from '../../context/CartContext/CartContext';
import CartItem from '../../component/CartItem/CartItem';
import './CartPage.css'; // Импорт стилей

const CartPage: React.FC = () => {
    const { userCart, removeFromCart, addToCart } = useCart();

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const handleIncrease = (id: string) => {
        addToCart(userCart?.cart.find(item => item.id === id)!);
    };

    const handleDecrease = (id: string) => {
        removeFromCart(id);
    };

    const calculateTotal = () => {
        return userCart?.cart.reduce((total: number, item: Product) => total + item.price * (item.quantity || 1), 0) || 0;
    };

    const handleCheckout = () => {
        alert('Спасибо за покупку!');
    };

    return (
        <div className='PageForm'>
            <div className="cart-page">
                <div className="cart-items">
                    <h1>Shopping Cart</h1>
                    {userCart?.cart.length === 0 ? (
                        <p>Your cart is empty!</p>
                    ) : (
                        <div>
                            {userCart?.cart.map((item: Product & { quantity: number }, index: number) => (
                                <CartItem 
                                    key={item.id} 
                                    item={item} 
                                    onRemove={handleRemove} 
                                    onIncrease={handleIncrease} 
                                    onDecrease={handleDecrease} 
                                />
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