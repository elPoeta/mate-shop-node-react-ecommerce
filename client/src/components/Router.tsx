import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

const Router: React.FC = (): JSX.Element => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path="*" element={<Navigate to="notFound" />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default Router;