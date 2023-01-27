import React from 'react'
import './navbar.css'
import {FaHome, FaUserTie} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {TbCertificate} from 'react-icons/tb'
import {RiServiceLine, RiComputerLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'
import { useScrollPosition } from './navbarPosition'

function Navbar() {

  const [activeNavbar, setactiveNavbar] = useState('#home')
  const scrollPosition = useScrollPosition();

const sections = document.querySelectorAll('section');
const navLi  = document.querySelectorAll(' nav ul li a');

window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    if(scrollPosition < 300) {
      current = 'home'
    } else if(scrollPosition >= (sectionTop - 300)) {
      current = section.getAttribute('id');
    }
  })

  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
})

  return (
    <nav>
      <ul className='navbar'>
        <li>
          <a href="#home" title='Home' onClick={() => setactiveNavbar('#home')} className= {activeNavbar === '#home' ? 'active home' : 'home'}><FaHome /></a>
        </li>
        <li>
          <a href="#about" title='Acerca de Mi' onClick={() => setactiveNavbar('#about')} className= {activeNavbar === '#about' ? 'active about' : 'about'}><FaUserTie /></a>
        </li>
        <li>
          <a href="#skills" title='Habilidades' onClick={() => setactiveNavbar('#skills')} className= {activeNavbar === '#skills' ? 'active skills' : 'skills'}><BiBook /></a> 
        </li>
        <li>
          <a href="#experience" title='Experiencia' onClick={() => setactiveNavbar('#experience')} className= {activeNavbar === '#experience' ? 'active experience' : 'experience'}><RiServiceLine /></a>  
        </li>
        <li>
          <a href="#education" title='Educación' onClick={() => setactiveNavbar('#education')} className= {activeNavbar === '#education' ? 'active education' : 'education'}><TbCertificate /></a>          
        </li>
        <li>
          <a href="#projects" title='Proyectos' onClick={() => setactiveNavbar('#projects')} className= {activeNavbar === '#projects' ? 'active projects' : 'projects'}><RiComputerLine /></a>      
        </li>
        <li>
          <a href="#contact" title='Contacto' onClick={() => setactiveNavbar('#contact')} className= {activeNavbar === '#contact' ? 'active contact' : 'contact'}><MdOutlineMessage /></a>
        </li>
      </ul>
    </nav>    
  )
}

export default Navbar