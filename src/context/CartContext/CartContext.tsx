/*const removeFromCart = (id: string) => {
    setCart(prevCart => {
        const index = prevCart.findIndex(item => item.id === id);
        if (index === -1) return prevCart;
        return [
            ...prevCart.slice(0, index),
            ...prevCart.slice(index + 1)
        ];
    });
};*/
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

interface UserCart {
    userId: string;
    cart: Product[];
    favorites: Product[];
}

interface CartContextType {
    userCart: UserCart | null;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const userId = 'user123'; // User ID

    const getUserCart = () => {
        const savedCart = localStorage.getItem(`cart_${userId}`);
        return savedCart ? JSON.parse(savedCart) : [];
    };

    const getUserFavorites = () => {
        const savedFavorites = localStorage.getItem(`favorites_${userId}`);
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    };

    const [userCart, setUserCart] = useState<UserCart>({
        userId,
        cart: getUserCart(),
        favorites: getUserFavorites(),
    });

    useEffect(() => {
        localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart.cart));
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(userCart.favorites));
    }, [userCart]);

    const addToCart = (product: Product) => {
        setUserCart(prev => ({
            ...prev,
            cart: [...prev.cart, product],
        }));
    };

    const removeFromCart = (id: string) => {
        setUserCart(prev => ({
            ...prev,
            cart: prev.cart.filter((item, index) => item.id !== id || index !== prev.cart.length - 1), // Убедитесь, что удаляется только последний добавленный элемент с данным id
        }));
    };

    const addToFavorites = (product: Product) => {
        setUserCart(prev => {
            // Check if the product is already in the favorites
            const alreadyExists = prev.favorites.some(favorite => favorite.id === product.id);
            // Only add if it doesn't exist already
            if (!alreadyExists) {
                return {
                    ...prev,
                    favorites: [...prev.favorites, product],
                };
            }
            return prev;
        });
    };

    const removeFromFavorites = (productId: string) => {
        setUserCart(prev => ({
            ...prev,
            favorites: prev.favorites.filter(product => product.id !== productId),
        }));
    };

    return (
        <CartContext.Provider value={{ userCart, addToCart, removeFromCart, addToFavorites, removeFromFavorites }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook for using the context
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};