import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from 'framer-motion';

import Header from './component/Header';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import AboutAreaPage from './pages/AboutAreaPage/AboutAreaPage';
import ProfilePage from './pages/ProfilePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Footer from './component/Footer';
import VideoAnimation from './component/VideoAnimation';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <VideoAnimation />
      <Router>
        <Header />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ y: '-150vh' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-150vh' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/profile"
              element={
                <motion.div
                  initial={{ y: '-150vh' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-150vh' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <ProfilePage />
                </motion.div>
              }
            />
            <Route
              path="/about area"
              element={
                <motion.div
                  initial={{ y: '-150vh' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-150vh' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <AboutAreaPage />
                </motion.div>
              }
            />
            <Route
              path="/products"
              element={
                <motion.div
                  initial={{ y: '-150vh' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-150vh' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <ProductListPage />
                </motion.div>
              }
            />
            <Route
              path="/products/:productName"
              element={
                <motion.div
                  initial={{ y: '-150vh' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-150vh' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <ProductDetail />
                </motion.div>
              }
            />
            <Route
              path="/cart"
              element={
                <motion.div
                  initial={{ y: '-150vh' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-150vh' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <CartPage />
                </motion.div>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
          <Footer />
      </Router>
    </div>
  );
}


export default App;