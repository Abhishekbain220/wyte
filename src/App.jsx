import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Products from './components/Products'
import ScrollToTop from './utils/ScrollToTop'
import SingleProduct from './components/SingleProduct'
import ProductCategory from './components/ProductCategory'
import ExhibitionPhotos from './components/ExhibitionPhotos'
import { initGA, trackPage } from './utils/Analytics';
import NotFound from './components/NotFound'
import FloatingButtons from './components/FloatingButtons'

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPage(location.pathname + location.search);
  }, [location]);
  return (
    <div >
      
      <Nav/>
        <ScrollToTop/>
        <FloatingButtons/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/gallery' element={<ExhibitionPhotos/>}/>
        <Route path='/product/:productName/:id' element={<SingleProduct/>}/>
        <Route path='/Category/:Category' element={<ProductCategory/>}/>

        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App