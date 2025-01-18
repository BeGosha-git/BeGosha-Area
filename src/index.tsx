import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import { CartProvider } from './context/CartContext/CartContext';
import { AuthProvider } from './context/AuthContext/AuthContext';
import './index.css'
// Создаем корень приложения
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    //<CartProvider>
    <AuthProvider>
        <App />
    </AuthProvider>
    //</CartProvider>
);
