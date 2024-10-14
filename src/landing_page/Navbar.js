import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from './Logo.png'; // Adjust the filename as needed
import './Navbar.css'; 

function Navbar() {
  const commonBackgroundColor = 'white';

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: commonBackgroundColor }}>
      <div className="container-fluid">
        {/* Replace 'a' tag with 'Link' for internal navigation */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            {/* Replace 'a' tags with 'Link' */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Review">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fas fa-sliders-h"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
