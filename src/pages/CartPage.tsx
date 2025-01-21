import React from 'react';
import { useCart, Product } from '../context/CartContext';
import { CartItem } from '../component/CartItem';
import { Box, Button, Typography, List, ListItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Импорт иконки

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
                {cartItems.length === 0 ? (
                    <Typography variant="body1" align="center"
                        sx={{
                            mb: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                        }}>
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
                        <Typography variant="h5" align="center" sx={{
                            marginTop: 2, fontWeight: 'bold',
                            fontFamily: "monospace",
                            letterSpacing: ".2rem",
                        }}>
                            Итого: {calculateTotal().toFixed(2)} рублей
                        </Typography>
                    </List>
                )}
            </Box>
            {cartItems.length > 0 && (
                <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleCheckout}
                        startIcon={<ShoppingCartIcon />}
                        sx={{
                            transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                            boxShadow: '0 0px 10px #060606',
                            color: '#FDFDFD',
                            backgroundColor: '#090909',
                            padding: '12px 24px',
                            fontSize: '18px',
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            borderRadius: '8px',
                            '&:hover': {
                                boxShadow: '0 0px 20px #060606',
                                transform: 'scale(1.08)',
                            },
                        }}
                    >
                        Оформить
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default CartPage;