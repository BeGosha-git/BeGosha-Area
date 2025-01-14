import React from 'react'
//import { Box, Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductListPage.css';
import ProductItem from '../../component/ProductItem/ProductItem';


const products = [
    { id: '1', name: 'Банан', image: 'image1.jpg', info: 'ProductPreviu.tsx' },
    { id: '2', name: 'Огурец', image: 'image1.jpg', info: 'ProductPreviu.tsx' },
    { id: '3', name: 'Помидор', image: 'image1.jpg', info: 'ProductPreviu.tsx' },
];

const ProductListPage: React.FC = () => {
    return (
      <div className='PageForm'>
        <div className="product-list-page">
            <h1>Список продуктов</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
      </div>
    );
}

export default ProductListPage;