import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'
import {CgScrollH} from 'react-icons/cg'

function header() {
  return (
    <header>
      <section>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohamed Abdullah</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        

       
        <a href="#contact" className='scroll__down'>Scroll Down <CgScrollH/> </a>
        


      </div>
      </section>

    </header>
  )
}

export default header
