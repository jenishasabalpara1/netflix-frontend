import { Checkbox } from '@mui/material';
import './signin.css'
import React from 'react';
import { Link } from 'react-router-dom';


const Signin = () => {

   return (
      <>
         <div className='bgimg'>
            <div>
               <h1 className='headingsign'>Netflix</h1>
            </div>
            <div className='mainbox'>
               <div className='box'>
                  <h1 className='sign'>Sign In</h1>
                  <input type='text' placeholder='email or mobile number' className='email' />
                  <input type='text' placeholder='password' className='password' />
                  <button className='signbtn'>Sign In</button>
                  <p className='or'>OR</p>
                  <button className='use'>Use a sign-in code</button>
                  <p className='forgate'>Forgot password?</p>
                  <div className='checkbox'>
                     <Checkbox label="Label" defaultChecked />
                     <label for=":Rairlpp:" data-uia="remember-me-field+label" className='forgate'>Remember me</label>
                  </div>
                  <div className='newto'>
                     <p className='new'>New to Netflix?</p>
                     <Link to="/signup"><p className='signup'>Sign up now.</p></Link>
                  </div>
                  <p className='prg'>This page is protected by Google reCAPTCHA to<br /> ensure you're not a bot. Learn more.</p>
               </div>
            </div>
         </div>

         <div className='signfooter'>
            <div className='footerprg'>
               <p>Questions? Call 000-800-919-1694</p>
               <p>FAQ</p>
               <p>Cookie Preferences</p>
               <button className='navbarbtn'>English</button>
            </div>
            <div className='footerprg'>
               <p>Help Centre</p>
               <p>Corporate Information</p>
            </div>
            <div className='footerprg'>
               <p>Terms of Use</p>
            </div>
            <div className='footerprg'>
               <p>Privacy</p>
            </div>
         </div>
      </>
   )
}

export { Signin }
