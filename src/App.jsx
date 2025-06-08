import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Products from './components/Products'
import ScrollToTop from './utils/ScrollToTop'
import SingleProduct from './components/SingleProduct'
import CategoryPage from './components/CategoryPage'

const App = () => {
  return (
    <div >
      <Nav/>
        <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:productName/:id' element={<SingleProduct/>}/>
        <Route path='/:Category' element={<CategoryPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App