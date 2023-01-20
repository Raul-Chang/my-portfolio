import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

function HeaderSocialMedia() {
  return (
    <div className='header__socialMedia'>
        <a href="https://www.linkedin.com/in/raul-chang-link/" target="_blank" className='header__socialMedia-icon'><BsLinkedin/></a>
        <a href="https://github.com/Raul-Chang" target="_blank" className='header__socialMedia-icon'><FaGithub /></a>
        <a href="mailto:rauledchangto@gmail.com" target="_blank" className='header__socialMedia-icon'><FiMail /></a>
    </div>
  )
}

export default HeaderSocialMedia