import React from 'react'
import './navbar.css'
import {FaHome, FaUserTie} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {TbCertificate} from 'react-icons/tb'
import {RiServiceLine, RiComputerLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'

function Navbar() {

  const [activeNavbar, setactiveNavbar] = useState('#')

  return (
    <nav>
      <a href="#" title='Home' onClick={() => setactiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" title='Acerca de Mi' onClick={() => setactiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><FaUserTie /></a>
      <a href="#skills" title='Habilidades' onClick={() => setactiveNavbar('#skills')} className={activeNavbar === '#skills' ? 'active' : ''}><BiBook /></a> 
      <a href="#experience" title='Experiencia' onClick={() => setactiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active' : ''}><RiServiceLine /></a>  
      <a href="#education" title='Educación' onClick={() => setactiveNavbar('#education')} className={activeNavbar === '#education' ? 'active' : ''}><TbCertificate /></a>          
      <a href="#projects" title='Proyectos' onClick={() => setactiveNavbar('#projects')} className={activeNavbar === '#projects' ? 'active' : ''}><RiComputerLine /></a>      
      <a href="#contact" title='Contacto' onClick={() => setactiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
    </nav>    
  )
}

export default Navbar