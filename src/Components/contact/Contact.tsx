import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {

  // https://www.emailjs.com/docs/examples/reactjs/

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572
  // useref return type clashes with ref prop type
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_6fam00b', 'template_jj72sjn', form.current as HTMLFormElement, '_uGKsTxhg6SLylfs-')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Let's Talk</h5>
      <h2>Get in Touch</h2>
      {/* 
      <p>I'm looking for new opportunities! Whether you're looking to hire me, or want to collaborate.. Send me an Email!</p>
          <div>
            <br />
          <a href="mailto:patgiok@gmail.com" className='btn btn-primary'><AiOutlineMail />Say Hello</a>
            <br />
            <br />
          
          </div>  */}
      <div className="container contact__container">
        <div className="contact__image-bg">
          <img className='contact__image-pic' src={process.env.PUBLIC_URL + `/images/TP.jpg`} />
        </div>
        <div className="contact__form">

          <form ref={form} onSubmit={sendEmail} className='emailform'>
            <input type='text' name='name' placeholder='Your Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <input type='text' name='subject' placeholder='Subject' required />
            <textarea name="" id="" rows={10} placeholder="Your Message" required></textarea>
            <button type='submit' className='btn btn-primary'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
