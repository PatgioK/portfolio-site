import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const AboutSocials = () => {
  return (
    <div className='about__socials'>
        <a href='https://ca.linkedin.com/in/patgio-kwok-9b1879153' target='_blank'><BsLinkedin/> LinkedIn</a>
        <a href='https://github.com/patgiok' target='_blank'><BsGithub/> GitHub</a>
        <a href='https://www.instagram.com/pkpkpat/?hl=en' target='_blank'><AiOutlineInstagram/> Instagram</a>
        </div>
  )
}

export default AboutSocials