import React from 'react'
import './about.css'
import { resumeData } from '../../interfaces'
import AboutSocials from './AboutSocials';

interface aboutProps {
  data?: resumeData;
}

const About = (props: aboutProps) => {
  return (
    <div className='container'>
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About {props.data?.main.name}</h2>

      <div className='about__content'>
        <p>{props.data?.main.bio}</p>
        <br />
      </div>
      <div className="about__technical">
        <h4>Technical</h4>
        <p>I'm a recent graduate of BCIT's Computer Systems Technology Program, where I learned industry standards for coding and project management. I am most experienced with Ruby on Rails and React & Redux for quick prototyping and scalability.
        </p>
        <br />
      </div>
      <div className="about__personal">
      <h4>Personal</h4>
      <p> I was born in Hong Kong but moved to Vancouver over 20 years ago. I'm a huge foodie but also enjoy music, gaming and fishing! When at home, I enjoy playing with my cats.</p>
      </div>
    <br />
      <AboutSocials />
    </section>
    </div>
  )
}

export default About