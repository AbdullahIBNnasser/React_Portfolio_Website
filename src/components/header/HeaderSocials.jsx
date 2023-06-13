import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{RiWhatsappFill} from 'react-icons/ri'


const headerSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/mohamed-abdullah-939137244/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/AbdullahIBNnasser" target='_blank'><BsGithub/></a>

      <a href="https://web.whatsapp.com/send?phone=+919080675311" target='_blank'><RiWhatsappFill/></a>
    </div>
  )
}

export default headerSocials
