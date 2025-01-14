import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface CartContextType {
    cart: Product[];
    favorites: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [favorites, setFavorites] = useState<Product[]>([]);

    const addToCart = (product: Product) => setCart((prev) => [...prev, product]);
    const removeFromCart = (productId: string) => setCart((prev) => prev.filter(product => product.id !== productId));
    const addToFavorites = (product: Product) => setFavorites((prev) => [...prev, product]);
    const removeFromFavorites = (productId: string) => setFavorites((prev) => prev.filter(product => product.id !== productId));

    return (
        <CartContext.Provider value={{ cart, favorites, addToCart, removeFromCart, addToFavorites, removeFromFavorites }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};