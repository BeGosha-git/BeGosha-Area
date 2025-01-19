import React from 'react';
import { Product } from '../../context/CartContext/CartContext';
import './CartItem.css';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    IconButton,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

interface CartItemProps {
    item: Product & { quantity: number };
    onRemove: (id: string) => void;
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
    return (
        <Card className="cart-item" sx={{ display: 'flex', paddingLeft: '5px',width: '100%' , bgcolor: '#070707', '&:hover': {bgcolor: '#0C0C0C',}, 
        alignItems: 'center', mb: 2, borderRadius: '16px'}}>
            <CardMedia
                component="img"
                sx={{ height: 100, width: 100, borderRadius: '8px', marginRight: 2 }}
                image={`../../products/${item.name}/${item.product_images[0]}`}
                alt={item.name}
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h6" component="div" color="white">
                    {item.name}
                </Typography>
                <Typography variant="body1" color="aliceblue" sx={{ 
                    mb: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem", }}>
                    ${item.price.toFixed(0)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton className='cart_button' onClick={() => onDecrease(item.id)} aria-label="decrease quantity">
                        <Remove />
                    </IconButton>
                    <Typography variant="body1" sx={{ 
                        mb: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".2rem", }}>
                    {item.quantity}</Typography>
                    <IconButton className='cart_button' onClick={() => onIncrease(item.id)} aria-label="increase quantity">
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
