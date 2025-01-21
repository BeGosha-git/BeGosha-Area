import React from 'react'
//import { Box, Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import {
    Box,
    Typography,
} from "@mui/material";
import '../pages.css';
import ProductItem from '../component/ProductItem';


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
                    paddingBottom: '5vh',
                    marginLeft: '4vw',
                    marginRight: '3vw',
                    marginTop: '6vh',
                    marginBottom: '10vh',
                    borderRadius: "20px",
                    bgcolor: '#040404',
                }}
            >
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
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingTop: '5vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    {
                        products.map(product => (
                            <Box sx={{
                                marginRight: '15px',
                                marginLeft: '15px',
                                marginBottom: '30px',
                                width: '18vw',
                                transition: 'transform 0.8s ease, box-shadow 0.5s ease',
                                boxShadow: '0 0 20px #090909',
                                "&:hover": { transform: "scale(1.12)", boxShadow: '0 0 50px #060606', color: '#FEFEFE' }
                            }}
                            >
                                <ProductItem key={product.id} product={product} />
                            </Box>
                        ))}
                </Box>
            </Box>
        </div>
    );
}

export default ProductListPage;