import React from 'react';
import Logo from './Logo.png'; // Adjust the filename as needed
import './Navbar.css'; 

function Navbar() {
const commonBackgroundColor = 'white';
return (

<nav className="navbar navbar-expand-lg" style={{ backgroundColor: commonBackgroundColor }}>
<div className="container-fluid">
<a className="navbar-brand" href="#">
<img src={Logo} alt="Logo" className="navbar-logo" />
</a>


 <div className="collapse navbar-collapse" id="navbarSupportedContent">

 <ul className="navbar-nav  mb-lg-0">
 <li className="nav-item">
 <a className="nav-link active" aria-current="page" href="#">SignUp</a>
 </li>
 <li className="nav-item">
 <a className="nav-link active" href="#">About</a>
 </li>

 
 <li className="nav-item">
 <a className="nav-link active" href="#">Product</a>
 </li>

<li class="nav-item">
<a class="nav-link" href="#"><i class="fas fa-sliders-h"></i></a>
</li>




{/*  
 <li class="nav-item ">
 <a class="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
 Dropdown
 </a>
 <ul class="dropdown-menu">
 <li><a class="dropdown-item" href="#">Signup</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
 <li><hr class="dropdown-divider"/></li>
 <li><a class="dropdown-item" href="#">Something else here</a></li>
 </ul>
 </li>
*/}
 </ul>

 
 </div>
 </div>
 </nav>  
  

);
}
export default Navbar;