import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <section id='contact'>
      <h5>Let's Talk</h5>
      <h2>Get in Touch</h2>
      <div className="container contact__container">
        <div className="contact__image-bg">
          <img className='contact__image-pic' src={process.env.PUBLIC_URL + `/images/TP.jpg`} />
        </div>
        <div className="contact__content">
          <p>I'm looking for new opportunities! Whether you're looking to hire me, or want to collaborate.. Send me an Email!</p>
          <div>
            <br />
          <a href="mailto:patgiok@gmail.com" className='btn btn-primary'>Say Hello</a>
          
          </div>
        </div>
      </div>
    </section>
  )
}
