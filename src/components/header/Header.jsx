import React from 'react'
import './header.css'
import HeaderContact from './HeaderContact'
import ME from '../../assets/Raul-Chang-NoBG2.png'
import HeaderSocialMedia from './HeaderSocialMedia'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="greeting" id='header'>
          <h5>¡Un Placer Conocerte!</h5>          
          <h1>Raul Chang</h1>
          <h5 className="text-light">Desarrollador Web Front-End</h5>
        </div>   
        <div className="me">
          <img src={ME} alt="Me" />
        </div>
        <HeaderContact />
        <HeaderSocialMedia />
      </div>
    </header>
  )
}

export default Header