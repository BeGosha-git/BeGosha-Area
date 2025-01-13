import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './component/Header'

import HomePage from './pages/HomePage'
import AboutAreaPage from './pages/AboutAreaPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

import BottomInfo from './component/BottomInfo'

import './App.css';

function App(){
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about area" element={<AboutAreaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
        <BottomInfo />
      </Router>
    </div>
  );
}

export default App;
