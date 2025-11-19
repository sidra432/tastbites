import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';



// import AdminDashboard from "./admin/AdminDashboard";
// import AdminLogin from "./admin/AdminLogin";
// import ManageMenu from "./admin/pages/ManageMenu";
// import ManageOrders from "./admin/pages/ManageOrders";;
// import AddDish from "./admin/pages/AddDish";




// import AboutUs from './pages/About Us';



 function App(){
    return (<BrowserRouter><Navbar/><Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/contact' element={<Contact/>}/></Routes><Footer/>





        {/* <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/admin/menu" element={<ManageMenu />} />
<Route path="/admin/orders" element={<ManageOrders />} />
<Route path="/admin/add-dish" element={<AddDish />} /> */}
       



</BrowserRouter>);}
export default App