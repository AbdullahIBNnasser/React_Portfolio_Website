import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const footer = () => {
  return (
    <div>
     
        <footer>
          <a href="#" className='footer__logo'>MOHAMED ABDULLAH</a>

          <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experiance">Experiance</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>
          <div className="footer__socials">
            <a href="https://www.facebook.com/profile.php?id=100054669383960" target='blank'><FaFacebookF/></a>
            <a href="https://www.instagram.com/abdullah._.nasser/" target='blank'><FaInstagram/></a>
            
          </div>

          <div className="footer__copyright">
            <small>&copy;Mohamed Abdullah.All rights reserved</small>
          </div>
        </footer>
     
    </div>
  )
}

export default footer
