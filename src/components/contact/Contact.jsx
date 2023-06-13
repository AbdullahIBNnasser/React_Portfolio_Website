import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_julgjlt', 'template_a6vjm0t', form.current, 'yUF-Iqke0ObZSXx4v')
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5 className='contact'>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className='container contact-container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>mohd200207@gmail.com </h5>
            <a href="mailto:mohd200207@gamil.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icons'/>
            <h4>Messenger</h4>
            <h5>abdullah</h5>
            <a href="https://m.me/abdullah._.nasser/"target='_blank'rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icons'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://web.whatsapp.com/send?phone=+919080675311"target='_blank'rel='noreferrer'>Send a message</a>
          </article>
          </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea type="text" name='message' rows='7' placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'>Send message</button>
        </form>
       
        </div>
    </section>
  )
}

export default Contact
