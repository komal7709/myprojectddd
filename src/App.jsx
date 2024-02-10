import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'

const App = () => {
  return <>
  
  <BrowserRouter>
  <Routes>
  <Route path='/' element = {<>
    <p>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Link to="/contact">contact</Link>
  </p>
  <Outlet/>
  </>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<h1>page not found</h1>}/>
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App