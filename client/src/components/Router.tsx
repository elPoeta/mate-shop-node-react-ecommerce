import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Home from './pages/Home';

const Router: React.FC = (): JSX.Element => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default Router;