import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from './Logo.png'; // Adjust the filename as needed
import './Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
function Navbar() {


  return (
    <nav className="navbar bg-body-tertiary fixed-top navbar-expand-lg " >
      <div className="container-fluid">
          <img src={Logo} alt="Logo" className="navbar-logo" />


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link className="nav-link active" to="/signup">Signup</Link>
          <Link className="nav-link active" to="/Login">Login</Link>
          <Link className="nav-link active" to="/Review">Reviews</Link> 
          </div>
          {/*<ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Review">Reviews</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fas fa-sliders-h"></i>
              </Link>
            </li> 
          </ul>*/}
        </div>
      </div>
    </nav>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
export default Navbar;
