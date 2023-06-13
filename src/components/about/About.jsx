import React from 'react'
import './about.css'
import About from '../../Assets/About.png'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={About} alt="about me" />


          </div>
          
          <p>
          I'm a passionate full-stack web developer with expertise in building dynamic and 
          responsive web applications. 
          With a strong foundation in both front-end
           and back-end technologies, I strive to create 
           intuitive and visually appealing user experiences. <br />
           <br />
           From crafting pixel-perfect designs to developing robust server-side logic, I'm dedicated to delivering high-quality solutions that meet client  requirements and exceed expectations. <br />
           <br />
            My proficiency in HTML, CSS, and JavaScript allows me to bring designs to life, while my experience with frameworks like React,enables me to build interactive and feature-rich interfaces. <br />
            <br />
            On the back-end, I specialize in languages such as JavaScript, utilizing frameworks like Node.js and to create scalable and efficient server-side architectures. I'm well-versed in database management systems such as MySQL, MongoDB, and ensuring seamless data handling and storage
            </p>
        </div>
      </div>
      
    </section>
  )
}

export default about
