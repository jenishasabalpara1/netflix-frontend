import './web.css'
import tvPng from './assets/tv.png'
import mobileJpg from './assets/mobile-0819.jpg'
import devicePng from './assets/device.png'
import childPng from './assets/child.png'
import { Link } from 'react-router-dom'
// import { Signin } from './Sign In/signin'

const Navbardata = () => {
  
  return (
    <div className='bgimg'>
      <div className='navbar'>
        <div>
          <h1 className='heading'>Netfilx</h1>
        </div>
        <div className='btn'>
          <button className='navbarbtn'>English</button>
          <Link to="/signin" ><button className='navbarbtn2'>Sign In</button></Link>
        </div>
      </div>

      <div className='tvshow'>
        <div className='unlimited'>
          <h1 className='movie'>Unlimited movies, TV shows and more</h1>
          <p className='watch'>Watch anywhere. Cancel anytime.</p>
          <p className='ready'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className='inbtn'>
          <input type='text' placeholder='Email Address' className='inputfiled'></input>
          <button className='get'>Get Started</button>
        </div>
      </div>
    </div>
  )
}



const Enjoy = () => {
  return (
    <>
      <div className='greey-line'></div>
      <div className='Enjoy'>
        <div>
          <h1 className='enjoyh1'>Enjoy on your TV</h1>
          <p className='enjoyprg'>Watch on smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players <br /> and more.</p>
        </div>
        <div>
          <img src={tvPng} className='enjimg'></img>
        </div>
      </div>
    </>
  )
}

const Download = () => {
  return (
    <>
      <div className='greey-line'></div>
      <div className='Enjoy'>
        <div>
          <img src={mobileJpg} className='enjimg' />
        </div>
        <div>
          <h1 className='enjoyh1'>Download your shows<br /> to watch offline</h1>
          <p className='enjoyprg'>Save your favourites easily and always have <br /> something to watch.</p>
        </div>
      </div>
    </>
  )
}

const Watch = () => {
  return (
    <>
      <div className='greey-line'></div>
      <div className='Enjoy'>
        <div>
          <h1 className='enjoyh1'>Watch everywhere</h1>
          <p className='enjoyprg'>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</p>
        </div>
        <div>
          <img src={devicePng} className='enjimg' />
        </div>
      </div>
    </>
  )
}

const Create = () => {
  return (
    <>
      <div className='greey-line'></div>
      <div className='Enjoy'>
        <div>
          <img src={childPng} className='enjimg' />
        </div>
        <div>
          <h1 className='enjoyh1'>Create profiles for <br /> kids</h1>
          <p className='enjoyprg'>Send children on adventures with their favourite <br /> characters in a space made just for them—free <br /> with your membership.</p>
        </div>
      </div>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <div className='greey-line'></div>
      <div className='enjoy2'>
        <div className='footerprg'>
          <p className='footerhed'>Questions? Call 000-800-919-1694</p>
          <p>FAQ</p>
          <p>Account</p>
          <p>Investor Relations</p>
          <p>Ways to Watch</p>
          <button className='navbarbtn'>English</button>
          <p>Privacy</p>
        </div>
        <div className='footerprg'>
          <p>Corporate Information</p>
          <p>Speed Test</p>
          <p>Only on Netflix</p>
          <p>
            Legal Notices</p>
        </div>
        <div className='footerprg'>
          <p>Account</p>
          <p>Ways to Watch</p>
          <p> Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div className='footerprg'>
          <p>Media Center</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
    </>
  )
}

export { Navbardata, Enjoy, Download, Watch, Create, Footer }


