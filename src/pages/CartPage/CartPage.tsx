import React from 'react';
import { useCart, Product } from '../../context/CartContext/CartContext';
import {CartItem} from '../../component/CartItem/CartItem';
import { Box, Button, Typography, List, ListItem } from '@mui/material';
import '../../pages.css';
import './CartPage.css';


const CartPage: React.FC = () => {
    const { userCart, removeFromCart, addToCart, checkout } = useCart();

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const handleIncrease = (id: string) => {
        addToCart(userCart?.cart.find(item => item.id === id)!);
    };

    const handleDecrease = (id: string) => {
        removeFromCart(id);
    };

    const cartItems = userCart?.cart || [];

    const calculateTotal = () => {
        return userCart?.cart.reduce((total: number, item: Product) => total + item.price * (item.quantity || 1), 0) || 0;
    };

    const handleCheckout = () => {
        checkout();
        alert('Спасибо за покупку!');
    };

    return (
        <Box className='PageForm' sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
                Корзина
            </Typography>
            <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
                {userCart?.cart.length === 0 ? (
                    <Typography variant="body1" align="center">
                        Ваша корзина пуста!
                    </Typography>
                ) : (
                    <List>
                        {cartItems.map((item: Product & { quantity: number }, index: number) => (
                            <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                                <CartItem 
                                    item={item} 
                                    onRemove={handleRemove} 
                                    onIncrease={handleIncrease} 
                                    onDecrease={handleDecrease} 
                                />
                            </ListItem>
                        ))}
                        <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                            Итого: ${calculateTotal().toFixed(2)}
                        </Typography>
                    </List>
                )}
            </Box>
            {cartItems.length > 0 && (
                <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                    <Button className='checkout_button'
                        variant="contained"
                        color="success"
                        onClick={handleCheckout}
                    >
                        Оформить
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default CartPage;