import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './component/Header/Header'

import HomePage from './pages/HomePage/HomePage'
import AboutAreaPage from './pages/AboutAreaPage/AboutAreaPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductDetail from './pages/ProductDetail/ProductDetail';
import CartPage from './pages/CartPage/CartPage';
import Footer from './component/Footer/Footer'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about-area" element={<AboutAreaPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:productName" element={<ProductDetail />} /> 
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
