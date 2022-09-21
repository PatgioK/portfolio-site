import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import './headerSocials.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/patgiok' target='_blank'><BsGithub/></a>
        <a href='https://www.instagram.com/pkpkpat/?hl=en' target='_blank'><AiOutlineInstagram/></a>
        </div>
  )
}

export default HeaderSocials