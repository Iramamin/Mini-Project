import React from 'react';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
const image1 = '/media/image1.jpg'; 
const image2 = './media/image2.jpg'; 
const image3 = './media/image3.jpg';
function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Book Hassle Free</h1>
      <div className="about-cards">
        <div className="about-card">
          <i className="fas fa-shield-alt about-icon"></i>
          <h5 className="card-title">A Cancellation Policy That Protects Your Vacation</h5>
          <p className="card-text">Life can be unpredictable; we've got you covered.</p>
        </div>

        <div className="about-card">
          <i className="fas fa-headset about-icon"></i>
          <h5 className="card-title">24/7 Support That Is Always There to Help You</h5>
          <p className="card-text">Whether it's a question or an emergency, we're just a call away.</p>
        </div>

        <div className="about-card">
          <i className="fas fa-star about-icon"></i>
          <h5 className="card-title">Reviews That Speak for Ourselves: 4.6/5 Since 2024</h5>
          <p className="card-text">Our track record of satisfied travelers tells our story better than we ever could.</p>
        </div>
      </div> {/* Closing the about-cards div here */}






      <div className='footer'>
        <h1>Why Travel with Us?</h1>
        <div className='footer-images'>
          <div className='image-container'>
            <img src={image1} alt='Description of image 1' />
            <div className='overlay-text'>Enjoy Trips you cannot find anywhere else </div>
          </div>
          <div className='image-container'>
            <img src={image2} alt='Description of image 2' />
            <div className='overlay-text'>Know all your TripMates before you travel </div>
          </div>
          <div className='image-container'>
            <img src={image3} alt='Description of image 3' />
            <div className='overlay-text'>Unbeatable Prices for smallest group sizes</div>
          </div>
        </div>
      </div>





      <div className="flex-container">
        <div className="flex-item">
          <b>TRAVEL</b>
          <ul className="no-bullets">
            <li>How it works</li>
            <li>Find a trip</li>
            <li>Create a trip</li>
            <li>Refer & get iPhone</li>
          </ul>
        </div>
        <div className="flex-item">
          <b>EXPLORE</b>
          <ul className="no-bullets">
            <li>Group trips by destination</li>
            <li>Group trips by TripLeaders</li>
            <li>All group trips</li>
            <li>Past group trips</li>
            <li>All categories</li>
          </ul>
        </div>
        <div className="flex-item">
          <b>JOINMYTRIP</b>
          <ul className="no-bullets">
            <li>Blog</li>
            <li>About US</li>
            <li>Trustindex reviews</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex-item">
          <b>SUPPORT</b>
          <ul className="no-bullets">
            <li>Help & FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
