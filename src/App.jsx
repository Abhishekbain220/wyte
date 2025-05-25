import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Nav from './components/Nav'

const App = () => {
  return (
    <div >
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App