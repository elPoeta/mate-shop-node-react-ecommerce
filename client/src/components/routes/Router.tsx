import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { UserI } from '../../features/auth/userI';
import { AdminPage } from '../admin/AdminPage';
import Header from '../header/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => {
  const user: UserI = useAppSelector(state => state.auth).user || { id: '', isAdmin: false, iat: new Date(), expiresIn: new Date() };
  return (
    <div className='min-h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute user={user}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path='/notFound' element={<NotFound />} />
          <Route path="*" element={<Navigate to="notFound" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default Router;