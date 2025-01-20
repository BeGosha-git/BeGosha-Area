import React from 'react';
import { Box, Typography, List, ListItem, Paper } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProfilePage: React.FC = () => {
    const { userCart } = useCart();

    return (
        <Box sx={{ padding: 4, color: '#FDFDFD' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
                Мой профиль
            </Typography>
            <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
                История покупок
            </Typography>
            {userCart?.purchaseHistory.length === 0 ? (
                <Typography variant="body1" align="center">
                    Вы еще ничего не купили.
                </Typography>
            ) : (
                <List>
                    {userCart?.purchaseHistory.map((purchase, index) => (
                        <ListItem key={index} sx={{ marginBottom: 2 }}>
                            <Paper elevation={2} sx={{ padding: 2, width: '100%', backgroundColor: '#060606', color: '#FDFDFD' }}>
                                <Typography variant="h6">
                                    <ShoppingCartIcon sx={{ marginRight: 1 }} />
                                    Покупка от {purchase.date}
                                </Typography>
                                <List>
                                    {purchase.products.map(product => (
                                        <Link to={`/products/${product.name}`} style={{textDecoration: 'none', color: '#FDFDFD' }}>
                                        <ListItem key={product.name}>
                                                {product.name}
                                            {' '} - Количество: {product.quantity} - Цена: {product.price}$
                                        </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default ProfilePage;