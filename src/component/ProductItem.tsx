import React from 'react';
import {
    Box,
    Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface ProductItemProps {
    product: Product;
}


const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <Link to={`/products/${encodeURIComponent(product.name)}`} style={{textDecoration: "none"}}>
            <Box
                sx={{
                    width: '100%',
                    maxHeight: '40vh',
                    paddingTop: '0px',
                    paddingBottom: '80px',
                    paddingRight: '3px',
                    paddingLeft: '0px',
                    borderRadius: "7px",
                    bgcolor: '#060606',
                    '&:hover': {
                        bgcolor: '#010203',
                    },
                }}
            >
                <img src={require(`../products/${product.name}/image1.jpg`)} alt={product.name} style={{
                    width: '100%',
                    height: '90%',
                    borderRadius: '5px',
                    marginLeft: '2px',
                    marginTop: '1px',
                    marginRight: '2px',
                    marginBottom: '2px',
                }} />
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