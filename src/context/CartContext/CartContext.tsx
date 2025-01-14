import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
    id: string;
    name: string;
    product_images: string[];
    description: string;
    feedback: Array<{
        user: string;
        comment: string;
        rating: number;
    }>;
    price: number;
}

interface CartContextType {
    cart: Product[];
    favorites: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>(() => {
        // Загрузка корзины и избранного из Local Storage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [favorites, setFavorites] = useState<Product[]>(() => {
        // Загрузка корзины и избранного из Local Storage
        const savedfavorites = localStorage.getItem('favorites');
        return savedfavorites ? JSON.parse(savedfavorites) : [];
    });

    useEffect(() => {
        // Сохранение корзины в Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('favorites', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const removeFromCart = (id: string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const addToFavorites = (product: Product) => {
        setFavorites((prev) => [...prev, product]);
    }
    const removeFromFavorites = (productId: string) => {
        setFavorites((prev) => prev.filter(product => product.id !== productId));
    }

    return (
        <CartContext.Provider value={{ cart, favorites, addToCart, removeFromCart, addToFavorites, removeFromFavorites }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};