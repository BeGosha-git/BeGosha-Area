import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../component/ImageCarousel';
import { Button, Container, Typography, CircularProgress, Box } from '@mui/material';
import { useCart } from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Icon for "Add to Cart"
import FavoriteIcon from '@mui/icons-material/Favorite'; // Icon for "Add to Favorites"
import '../pages.css';

export interface Product {
    id: string;
    name: string;
    product_images: string[];
    description: string;
    feedback: Array<{
        user: string;
        comment: string;
        rating: number;
    }>;
    price: number;
}

const ProductDetail: React.FC = () => {
    const { productName } = useParams<{ productName: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const { addToCart, addToFavorites, removeFromFavorites } = useCart();

    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(`../products/${productName}/info.json`);
            const data: Product = await response.json();
            setProduct(data);
        };

        if (productName) {
            fetchProductData();
        }
    }, [productName]);

    const handleAddToCart = () => {
        if (product) {
            const productWithPrice = { ...product, price: product.price };
            addToCart(productWithPrice);
        }
    };

    const handleAddToFavorites = () => {
        if (product) {
            addToFavorites(product);
        }
    };

    const handleRemoveFromFavorites = () => {
        if (product) {
            removeFromFavorites(product);
        }
    };


    return (
        <div className='PageForm'>
            <Container sx={{
                bgcolor: '#060606', padding: 4, borderRadius: 2, boxShadow: 3,
                marginTop: '4vh',
                marginBottom: '6vh',
            }}>
                {product ? (
                    <>
                        <Typography variant="h4"
                            align="center" sx={{
                                mr: -2,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "#FDFDFD",
                                textDecoration: "none",
                            }} >{product.name}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                            <ImageCarousel product_images={product.product_images} productName={product.name} />
                        </Box>
                        <Typography variant="body1" sx={{
                            mr: -2,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "#FDFDFD",
                            textDecoration: "none",
                        }}>{product.description}</Typography>
                        <Typography variant="h6"
                            sx={{
                                marginTop: 2,
                                mr: -2,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "#FDFDFD",
                                textDecoration: "none",
                            }}>Отзывы</Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {product.feedback.map((feedback, index) => (
                                <li key={index} style={{ backgroundColor: '#010203', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
                                    <strong>{feedback.user}:</strong> {feedback.comment} - {'★'.repeat(feedback.rating)}
                                </li>
                            ))}
                        </ul>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 2 }}>
                            <Button
                                variant="contained"
                                color="success"
                                startIcon={<ShoppingCartIcon />}
                                onClick={handleAddToCart}
                                sx={{
                                    transition: 'transform 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        backgroundColor: '#4CAF50',
                                    },
                                    padding: '12px 20px',
                                    fontWeight: 700,
                                    fontFamily: "monospace",
                                }}
                            >
                                В корзину
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<FavoriteIcon />}
                                onClick={handleAddToFavorites}
                                sx={{
                                    transition: 'transform 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        backgroundColor: '#1976D2',
                                    },
                                    padding: '12px 20px',
                                    fontWeight: 700,
                                    fontFamily: "monospace",
                                }}
                            >
                                В избранное
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress color="inherit" />
                    </Box>
                )}
            </Container>
        </div>
    );
};

export default ProductDetail;