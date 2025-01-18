import React from 'react'
//import { Box, Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
  } from "@mui/material";
import '../../pages.css';
import './ProductListPage.css';
import ProductItem from '../../component/ProductItem/ProductItem';


const products = [
    { id: '1001', name: 'Банан', image: 'image1.jpg', info: 'info.json', price: 100 },
    { id: '1002', name: 'Огурец', image: 'image1.jpg', info: 'info.json', price: 99 },
    { id: '1003', name: 'Помидор', image: 'image1.jpg', info: 'info.json', price: 150 },
    { id: '1004', name: 'Гвозди', image: 'image1.jpg', info: 'info.json', price: 50 },
    { id: '1005', name: 'Unitree H1', image: 'image1.jpg', info: 'info.json', price: 15000000 },
    { id: '1006', name: 'Надфиль', image: 'image1.jpg', info: 'info.json', price: 150 },
];

const ProductListPage: React.FC = () => {
    return (
      <div className='PageForm'>
         <Box
            sx={{
            paddingTop: '5vh',
            paddingBottom: 'auto',
            marginLeft: '4vw',
            marginRight: '3vw',
            marginTop: '6vh',
            marginBottom: '8vh',
            borderRadius: "20px",
            bgcolor: '#040404',
            }}
        >
            <div className="product-list-page">
                <Typography
                    variant="h2"
                    noWrap
                    align='center'
                    sx={{
                    mr: -2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "#FDFDFD",
                    textDecoration: "none",
                    }}
                >
                    Products
                </Typography>
                <div className="product-list">
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </Box>
      </div>
    );
}

export default ProductListPage;