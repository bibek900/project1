import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './frontend/Login'
import RegistrationForm from './frontend/Registration';
import Navbar from './frontend/Navbar';
import LandingPage from './frontend/LandingPage';
import Products from './frontend/Products';
import ProductDetails from './frontend/ProductDetails';
import Cart from './frontend/Cart';
import {RecoilRoot} from 'recoil';
import ProductPage from './frontend/Products';
import CheckoutPage from './frontend/checkout';

function App() {
  return (
   <div>
    <RecoilRoot>
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productPage" element={<ProductPage/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
       
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
   </div>
  );
}

export default App;
