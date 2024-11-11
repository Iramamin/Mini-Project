import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Sign from './landing_page/signup/Sign';
import Login from './landing_page/login/Login';


//import About from './landing_page/Footer/About'; // Assuming About is your footer section
//import SearchBar from './landing_page/home/SearchBar';
//import Userreviews from './landing_page/Review/Userreviews';
import Homepage from './landing_page/home/Homepage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <Navbar/>
 <Routes>
   <Route path="/" element={<Homepage/>}/>
   <Route path="/signup" element={<Sign/>}/>
   <Route path="/Login" element={<Login/>}/>

   </Routes>
   </BrowserRouter>
);
