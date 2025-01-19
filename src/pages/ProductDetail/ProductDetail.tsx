import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../../component/ImageCarousel/ImageCarousel';
import { Button, Container, Typography, CircularProgress, Box } from '@mui/material';
import { useCart } from '../../context/CartContext/CartContext';
import '../../pages.css';
import './ProductDetail.css';

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
    const { addToCart, addToFavorites } = useCart();

    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(`../../products/${productName}/info.json`);
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
            alert(`${product.name} добавлен в корзину!`);
        }
    };

    const handleAddToFavorites = () => {
        if (product) {
            addToFavorites(product);
            alert(`${product.name} добавлен в избранное!`);
        }
    };

    return (
        <div className='PageForm'>
            <div className='padding_margin'>
            <Container sx={{ bgcolor: '#1A1A1A', padding: 4, borderRadius: 2, boxShadow: 3 }}>
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
                                <li key={index} style={{backgroundColor: '#010203', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
                                    <strong>{feedback.user}:</strong> {feedback.comment} - {'★'.repeat(feedback.rating)}
                                </li>
                            ))}
                        </ul>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 2 }}>
                            <Button variant="contained" color="success" onClick={handleAddToCart}>В корзину</Button>
                            <Button variant="contained" color="primary" onClick={handleAddToFavorites}>В избранное</Button>
                        </Box>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress color="inherit" />
                    </Box>
                )}
            </Container>
            </div>
        </div>
    );
};

export default ProductDetail;