import React from 'react';
import { Product } from '../context/CartContext';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    //Button,
    Box,
    IconButton,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface CartItemProps {
    item: Product & { quantity: number };
    onRemove: (id: string) => void;
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
    return (
        <Card sx={{
            display: 'flex', paddingLeft: '5px', width: '100%', backgroundColor: '#060606', color: '#FDFDFD',
            alignItems: 'center', mb: 2, borderRadius: '16px', boxShadow: '0 0 20px #060606',
            transition: "transform 0.8s ease, box-shadow 0.5s ease",
            "&:hover": { transform: "scale(1.2)", boxShadow: '0 0 40px #060606' },
        }}>
            <Link to={`/products/${encodeURIComponent(item.name)}`} style={{ textDecoration: "none" }}>
                <CardMedia
                    component="img"
                    sx={{ height: 100, width: 100, borderRadius: '8px', marginRight: 2 }}
                    image={`../../product/${item.name}/${item.product_images[0]}`}
                    alt={item.name}
                />
            </Link>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Link to={`/products/${encodeURIComponent(item.name)}`} style={{ textDecoration: "none" }}>
                    <Typography variant="h6" component="div" color="#FDFDFD">
                        {item.name}
                    </Typography>
                </Link>
                <Typography variant="body1" sx={{
                    mb: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                }}>
                    ${item.price.toFixed(0)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton sx={{
                        transition: "transform 0.8s ease, box-shadow 0.5s ease", color: '#FDFDFD',
                        "&:hover": { transform: "scale(1.4)", boxShadow: '0 0 10px #060606', color: '#FEFEFE' }
                    }}
                        onClick={() => onDecrease(item.id)} aria-label="decrease quantity">
                        <Remove />
                    </IconButton>
                    <Typography variant="body1" sx={{
                        mb: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".2rem"
                    }}>
                        {item.quantity}</Typography>
                    <IconButton sx={{
                        transition: "transform 0.8s ease, box-shadow 0.5s ease", color: '#FDFDFD',
                        "&:hover": { transform: "scale(1.3)", boxShadow: '0 0 10px #060606', color: '#FEFEFE' }
                    }}
                        onClick={() => onIncrease(item.id)} aria-label="increase quantity">
                        <Add />
                    </IconButton>
                    <IconButton onClick={() => onRemove(item.id)} color="error" aria-label="remove item">
                        <Delete />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};
