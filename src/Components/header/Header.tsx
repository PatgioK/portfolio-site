import React from 'react'
import './header.css'
import './CTA';
import CTA from './CTA';
import pfp from '../../assets/pfp.png'
import pffp from '../../assets/profilepic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className=' container header__container'>
        <h5>Hello I'm</h5>
        <h1>Patgio Kwok</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <HeaderSocials />
        <div className='me'>
          <img src={pfp} alt="me" width='500' height='500'/>
        </div>
        <CTA />
      </div>

    </header>
  )
}

export default Header