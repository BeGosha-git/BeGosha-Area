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

// Обновленный интерфейс Product
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
    quantity?: number; // Добавлено
}

// Обновленный UserCart
interface UserCart {
    userId: string;
    cart: Array<Product & { quantity: number }>; // Количество добавлено в корзину
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
        setUserCart(prev => {
            const existingProductIndex = prev.cart.findIndex(item => item.id === product.id);
            
            if (existingProductIndex >= 0) {
                // Если продукт уже есть, увеличиваем количество.
                const updatedCart = [...prev.cart];
                updatedCart[existingProductIndex].quantity! += 1;
                return { ...prev, cart: updatedCart };
            } else {
                // Иначе добавляем новый продукт с количеством 1.
                return { ...prev, cart: [...prev.cart, { ...product, quantity: 1 }] };
            }
        });
    };
    
    const removeFromCart = (id: string) => {
        setUserCart(prev => {
            const existingProductIndex = prev.cart.findIndex(item => item.id === id);
            
            if (existingProductIndex === -1) return prev;
            
            const updatedCart = [...prev.cart];
            const currentQuantity = updatedCart[existingProductIndex].quantity!;
            
            if (currentQuantity > 1) {
                // Уменьшаем количество товара, если оно больше 1.
                updatedCart[existingProductIndex].quantity! -= 1;
                return { ...prev, cart: updatedCart };
            } else {
                // Если количество товара 1, удаляем его из корзины.
                return { ...prev, cart: updatedCart.filter(item => item.id !== id) };
            }
        });
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