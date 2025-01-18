import React from 'react';
import {
    Box,
    Container,
    Typography,
  } from "@mui/material";
import { Link } from 'react-router-dom';
import './ProductItem.css';

interface Product {
    id: string;
    name: string;
    image: string;
    info: string;
    price: number;
}

interface ProductItemProps {
    product: Product;
}


const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <Link to={`/products/${encodeURIComponent(product.name)}`} className="product-item">
            <Box
                sx={{
                width: '100%',
                height: '40vh',
                paddingTop: '0px',
                paddingBottom: '50px',
                paddingRight: '3px',
                paddingLeft: '0px',
                borderRadius: "22px",
                bgcolor: '#060606',
                '&:hover': {
                    bgcolor: '#010203',
                },
                }}
            >
            <img src={require(`../../products/${product.name}/image1.jpg`)} alt={product.name} />
            <Typography
                variant="h6"
                noWrap
                align='center'
                sx={{
                mr: -2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#FDFDFD",
                textDecoration: "none",
                }}
            >
                {product.name}
            </Typography>
            <Typography
                variant="h6"
                noWrap
                align='center'
                sx={{
                mr: -2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#FDFDFD",
                textDecoration: "none",
                }}
            >
                {product.price} рублей
            </Typography>
            </Box>
        </Link>
    );
}

export default ProductItem;