import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <>
   <BrowserRouter>
   {/* <NavBar/> */}
   <Routes>
        {/* <Route path='/' element = {<Home/>} />
        <Route path='/Empresas/:name' element = {<Empresas/>} />
        <Route path='/categorias' element = {<Categorias/>} />
        <Route path='/somos' element = {<Nosotros/>} />
        <Route path='/productos/:empresa' element = {<Productos/>} />
        <Route path='/contacto' element = {<Contactenos/>} /> */}
   </Routes>
   </BrowserRouter>
      <br></br>
      <br></br>
      <br></br>
    <Footer/>
    </>
  );
}

export default App;
