import React from 'react'
//import { Box, Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductListPage.css';
import ProductItem from '../../component/ProductItem/ProductItem';


const products = [
    { id: '1', name: 'Банан', image: 'image1.png', info: 'ProductPreviu.tsx' },
    { id: '2', name: 'Банан', image: 'image1.png', info: 'ProductPreviu.tsx' },
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