import React from 'react';

import { Route , Routes } from 'react-router-dom';                          
import About from './About/About';
import Register from './Register/Register';
import Home from './Home/Home';
import Layout from './Layout';




const Routers = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/home' element={<Layout/>}/>
      <Route path='/register' element={<Register/>}/>
    
  

    </Routes>
  
    </>
  )
}

export default Routers
