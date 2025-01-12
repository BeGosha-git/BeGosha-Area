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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/About Area" element={<AboutAreaPage />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
        </Routes>
        <BottomInfo />
      </Router>
    </div>
  );
}

export default App;
