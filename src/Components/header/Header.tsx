import React from 'react'
import './header.css'
import './CTA';
import CTA from './CTA';
import pfp from '../../assets/pfp.png'
import HeaderSocials from './HeaderSocials'
import { resumeData } from '../../interfaces'


interface headerProps {
  data?: resumeData;
}

const Header = (props: headerProps) => {
  return (
    <header>
      <div className=' container header__container'>
        <h5>Hello I'm</h5>
        <h1>{props.data?.main.name}</h1>
        <h5 className='text-light'>{props.data?.main.occupation}</h5>

        <HeaderSocials />
        <div className='me'>
          <img src={pfp} alt="me" width='500' height='500'/>
        </div>
        <div>{props.data?.main.description}</div>
        <CTA />
      </div>

    </header>
  )
}

export default Header