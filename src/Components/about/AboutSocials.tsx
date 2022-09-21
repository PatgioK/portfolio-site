import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const AboutSocials = () => {
  return (
    <div className='about__socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin/> LinkedIn</a>
        <a href='https://github.com/patgiok' target='_blank'><BsGithub/> GitHub</a>
        </div>
  )
}

export default AboutSocials