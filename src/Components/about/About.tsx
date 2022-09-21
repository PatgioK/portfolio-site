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
      </div>
    </section>
      <AboutSocials />
    </div>
  )
}

export default About