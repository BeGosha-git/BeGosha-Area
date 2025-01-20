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
    quantity?: number; // Добавлено
}

interface UserCart {
    userId: string;
    cart: Array<Product & { quantity: number }>; // Количество добавлено в корзину
    favorites: Product[];
    purchaseHistory: Array<{ products: Array<Product & { quantity: number }>; date: string }>; // История покупок
}

interface CartContextType {
    userCart: UserCart | null;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (product: Product) => void;
    checkout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const userId = 'user123';
    const getUserCart = () => {
        const savedCart = localStorage.getItem(`cart_${userId}`);
        return savedCart ? JSON.parse(savedCart) : [];
    };
    const getUserFavorites = () => {
        const savedFavorites = localStorage.getItem(`favorites_${userId}`);
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    };
    const getPurchaseHistory = () => {
        const savedHistory = localStorage.getItem(`purchaseHistory_${userId}`);
        return savedHistory ? JSON.parse(savedHistory) : [];
    };

    const [userCart, setUserCart] = useState<UserCart>({
        userId,
        cart: getUserCart(),
        favorites: getUserFavorites(),
        purchaseHistory: getPurchaseHistory(),
    });

    useEffect(() => {
        localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart.cart));
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(userCart.favorites));
        localStorage.setItem(`purchaseHistory_${userId}`, JSON.stringify(userCart.purchaseHistory)); // Сохраняем историю покупок
    }, [userCart]);

    const addToCart = (product: Product) => {
        setUserCart(prev => {
            const existingProductIndex = prev.cart.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...prev.cart];
                updatedCart[existingProductIndex].quantity! += 1;
                return { ...prev, cart: updatedCart };
            } else {
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
                updatedCart[existingProductIndex].quantity! -= 1;
                return { ...prev, cart: updatedCart };
            } else {
                return { ...prev, cart: updatedCart.filter(item => item.id !== id) };
            }
        });
    };

    const addToFavorites = (product: Product) => {
        setUserCart(prev => {
            const alreadyExists = prev.favorites.some(favorite => favorite.id === product.id);
            if (!alreadyExists) {
                return {
                    ...prev,
                    favorites: [...prev.favorites, product],
                };
            }
            return prev;
        });
    };

    const removeFromFavorites = (product1: Product) => {
        setUserCart(prev => ({
            ...prev,
            favorites: prev.favorites.filter(product => product !== product1),
        }));
    };

    const checkout = () => {
        // Сохранение покупок в историю
        const purchaseRecord = {
            products: userCart.cart,
            date: new Date().toLocaleString(),
        };

        setUserCart(prev => ({
            ...prev,
            purchaseHistory: [...prev.purchaseHistory, purchaseRecord],
            cart: [], // Очищаем корзину после оформления заказа
        }));
    };

    return (
        <CartContext.Provider value={{ userCart, addToCart, removeFromCart, addToFavorites, removeFromFavorites, checkout }}>
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