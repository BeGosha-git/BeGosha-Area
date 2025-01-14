import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext/CartContext';

// Создаем корень приложения
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);
