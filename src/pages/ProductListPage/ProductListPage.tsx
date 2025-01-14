import React from 'react'
import { Box, Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductListPage.css';
import ProductList from '../../component/ProductList/ProductList';

const ProductListPage: React.FC = () => {
  return (
    <div className='PageForm'>
      <div className="product-list-page">
            <h1>Список продуктов</h1>
            <ProductList />
        </div>
    </div>
  )
}  

export default ProductListPage  
