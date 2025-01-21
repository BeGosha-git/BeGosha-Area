import React from 'react';
import ProductItem from '../ProductItem';
import { Box } from '@mui/material';
import './ProductCarousel.css';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface ProductCarouselProps {
    products: Product[];
}
const anim_time = 12;

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const extendedProducts = [...products, ...products, ...products, ...products, ...products];

    return (
        <Box
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                position: 'relative',
            }}>
            <Box
                sx={{
                    display: 'inline-block',
                    animation: `scroll-right ${(anim_time * products.length)}s linear infinite`,
                    marginTop: '6vh',
                    marginBottom: '3vh',
                }}
            >
                {extendedProducts.map((product, index) => (
                    <Box
                        key={product.id}
                        sx={{
                            display: 'inline-block',
                            marginRight: '25px',
                            marginLeft: '25px',
                            marginTop: '15px',
                            marginBottom: '15px',
                            width: '18vw',
                            transition: 'transform 0.8s ease, box-shadow 0.5s ease',
                            boxShadow: '0 0 20px #030303',
                            opacity: 1,
                            "&:hover": { transform: "scale(1.12)", boxShadow: '0 0 50px #030303', color: '#FEFEFE' }
                        }}
                    >
                        <ProductItem product={product} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ProductCarousel;