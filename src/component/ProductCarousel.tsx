import React from 'react';
import ProductItem from './ProductItem';
import { Box } from '@mui/material';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface ProductCarouselProps {
    products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            paddingTop: '8vh',
            alignItems: 'center',
            justifyContent: 'center',
        }} >
            {
                products.map(product => (
                    <Box sx={{
                        marginRight: '25px',
                        marginLeft: '25px',
                        marginBottom: '30px',
                        width: '16vw',
                        transition: 'transform 0.8s ease, box-shadow 0.5s ease',
                        boxShadow: '0 0 20px #030303',
                        "&:hover": { transform: "scale(1.12)", boxShadow: '0 0 50px #030303', color: '#FEFEFE' }
                    }}
                    >
                        <ProductItem key={product.id} product={product} />
                    </Box>
                ))}
        </Box>
    )
};

export default ProductCarousel;