import React from 'react'
import './header.css'
import './CTA';
import CTA from './CTA';
import pfp from '../../assets/profilepic.jpg'

const Header = () => {
  return (
    <header>
      <div className=' container header_container'>
        <h5>Hello I'm</h5>
        <h1>Patgio Kwok</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <div className='me'>
          <img src={pfp} alt="me" />
        </div>
      </div>

    </header>
  )
}

export default Header