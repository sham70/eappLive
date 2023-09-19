import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

const App=()=> {
  return (
    <>
    
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    
    </>
  
  );
}

export default App;
