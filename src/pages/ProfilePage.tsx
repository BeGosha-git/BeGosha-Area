import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Paper, Button } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCarousel from '../component/ProductCarousel/ProductCarousel';
import '../pages.css';

const ProfilePage: React.FC = () => {
    const { userCart } = useCart();

    const favorites = userCart?.favorites || [];
    const purchaseHistory = [...userCart?.purchaseHistory || []].reverse();
    const [showAllPurchases, setShowAllPurchases] = useState(false);
    const purchasesToShow = showAllPurchases ? purchaseHistory : purchaseHistory.slice(0, 2);

    return (
        <div className='PageForm'>
            <Box sx={{ padding: 4, color: '#FDFDFD' }}>
                <Typography variant="h4" align="center" sx={{ 
                    marginBottom: 3,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                 }}>
                    Мой профиль
                </Typography>

                <Typography variant="h6" align="center" sx={{ 
                    marginBottom: 0,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                 }}>
                    Ваше избранное
                </Typography>

                {favorites.length === 0 ? (
                    <Typography variant="body1" align="center" sx={{
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".1rem",
                        marginBottom: '25px',
                    }}>
                        Вы еще ничего не добавили в избранное.
                    </Typography>
                ) : (
                    <Box sx={{ height: '60vh' }}>
                        <ProductCarousel products={favorites} />
                    </Box>
                )}

                <Typography variant="h6" align="center" sx={{ 
                    marginBottom: 3, 
                    marginTop: 0,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    }}>
                    История покупок
                </Typography>

                {purchasesToShow.length === 0 ? (
                    <Typography variant="body1" align="center" sx={{
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".1rem",
                    }}>
                        Вы еще ничего не купили.
                    </Typography>
                ) : (
                    <List>
                        {purchasesToShow.map((purchase, index) => (
                            <ListItem key={index} sx={{ marginBottom: 2 }}>
                                <Paper elevation={2} sx={{ padding: 2, width: '100%', backgroundColor: '#060606', color: '#FDFDFD' }}>
                                    <Typography variant="h6"sx={{
                                        fontFamily: "monospace",
                                        fontWeight: 700,
                                        letterSpacing: ".1rem",
                                    }}>
                                        <ShoppingCartIcon sx={{ marginRight: 1 }} />
                                        Покупка от {purchase.date}
                                    </Typography>
                                    <List>
                                        {purchase.products.map((product, productIndex) => (
                                            <Link key={product.name} to={`/products/${product.name}`} style={{ textDecoration: 'none', color: '#FDFDFD' }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                                                    boxShadow: '0 0px 5px #0A0A0A',
                                                    backgroundColor: '#0A0A0A',
                                                    borderWidth: 0,
                                                    marginTop: '10px',
                                                    marginBottom: '10px',
                                                    '&:hover': {
                                                        boxShadow: '0 0px 10px #0A0A0A',
                                                        transform: 'scale(1.01)',
                                                    },
                                                }}>
                                                <img src={require(`../products/${product.name}/image1.jpg`)} alt={product.name} style={{
                                                    width: '3%',
                                                    height: '3%',
                                                    borderRadius: '5px',
                                                    margin: 0
                                                }} />
                                                <ListItem sx={{
                                                    fontFamily: "monospace",
                                                    fontWeight: 700,
                                                    fontSize: '16px',
                                                }}>
                                                    {product.name} - Количество: {product.quantity} - Цена: {product.price}$
                                                </ListItem>
                                                </Box>
                                            </Link>
                                        ))}
                                    </List>
                                </Paper>
                            </ListItem>
                        ))}
                    </List>
                )}
                {purchaseHistory.length > 3 && !showAllPurchases && (
                    <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                        <Button
                            variant="outlined"
                            onClick={() => setShowAllPurchases(true)}
                            sx={{
                                marginTop: -2,
                                marginBottom: '10px',
                                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                                boxShadow: '0 0px 10px #060606',
                                borderWidth: 0,
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
                            Ещё...
                        </Button>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default ProfilePage;
