import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GeneralLayout from './pages/GeneralLayout';
import Home from './pages/Home';
import Products from './pages/products/Products';
import Category from './pages/categories/Category';
import Login from './pages/login/Login';
import Protected from './hooks/Protected';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Protected><Home /></Protected>} />
          <Route path="products" element={<Protected><Products /></Protected>} />
          <Route path="category" element={<Protected><Category /></Protected>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
