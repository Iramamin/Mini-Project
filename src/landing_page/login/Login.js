import React from 'react';
import './Login.css'
const Travel1 = './media/Travel1.png';

function Login(){
return(
  <div class='outer'>
<div class='inner'>
  <img src={Travel1} alt="Login" className="travel"></img>

<div class='form'>
  <form>
  <input placeholder="Enter UserName/email/phone No" size='30' required    style={{  height: '20px' }}></input><br></br>
  <input placeholder="Enter Password" size='30' required    style={{  height: '20px' }}></input>
  <p class='got'>Forgot your Password?</p>
  </form>
  <button class='submit' >Login</button>
</div>
<p className='para'>Don't have an account?<a href="/SignUp">SignUp</a></p>
</div>
</div>
);
}

export default Login ;