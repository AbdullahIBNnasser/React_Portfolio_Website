import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import{TbNotebook} from 'react-icons/tb'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <div>
      <nav className='nav'>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
        <a href="#about"onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
        <a href="#experiance"onClick={() => setActiveNav('#experiance')} className={activeNav === '#experiance' ? 'active': ''}><TbNotebook/></a>
        <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiOutlineMessage/></a>
      </nav>
      
    </div>
  )
}

export default Nav
