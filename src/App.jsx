import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About Us';
import Reservation from './pages/Reservation';

import Contact from './pages/Contact';
import AboutUs from './pages/About Us';

 function App(){
    return (<BrowserRouter><Navbar/><Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/contact' element={<Contact/>}/></Routes><Footer/>
</BrowserRouter>);}
export default App