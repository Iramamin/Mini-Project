import React from 'react';
import './Sign.css'

function Sign() {
  return ( 
 <div class="outer">
 <div class="inner">
   <br></br>
  <h1>Travel Buddy</h1>
 <p class="para">sign up to find your Buddy <br></br></p>

<br></br>
<hr></hr>
<form class="fom">
<input placeholder="Mobile Number or Email" size='35' required    style={{  height: '20px' }}></input>
                
<input placeholder="Enter Adhaar No" size='35' required   style={{  height: '20px' }}></input>

<input placeholder="Full Name" size='35' required   style={{  height: '20px' }}></input>
          
<input placeholder="Username" size='35' required   style={{  height: '20px' }}></input>
          
<input placeholder="Password" size='35' required   style={{  height: '20px' }}></input>
        
</form>
<button type="submit" >Sign Up</button><br></br><br></br><br></br>

<p class="para">Already have an account? <a href="/login">Login</a></p>
<p class="terms">By signing up,you agree to our <br></br>
Terms, Data Policy and Cookies<br></br>Policy.</p>
        
</div>
</div>
);
}


export default Sign;
