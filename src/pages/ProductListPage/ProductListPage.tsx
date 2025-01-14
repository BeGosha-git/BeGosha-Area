import React from 'react'
//import { Box, Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductListPage.css';
import ProductItem from '../../component/ProductItem/ProductItem';


const products = [
    { id: '1', name: 'Продукт 1', image: 'path/to/image1.jpg', info: 'info1.tsx' },
    { id: '2', name: 'Продукт 2', image: 'path/to/image2.jpg', info: 'info2.tsx' },
    // Добавьте больше продуктов по мере необходимости
];

const ProductListPage: React.FC = () => {
    return (
        <div className="product-list-page">
            <h1>Список продуктов</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;