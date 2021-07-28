import React, { useState } from 'react'
import { Nav, NavItem, NavLink, NavLinks } from './styles'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  window.onscroll = () => { scrollMove() }

  const scrollMove = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  return (
    <Nav className={scroll ? 'bgcolor' : ''}>
      <NavLinks>
        <NavItem><NavLink href='#about'>About</NavLink></NavItem>
        <NavItem><NavLink href='#projects'>Work</NavLink></NavItem>
        <NavItem><NavLink href='#contact'>Contact</NavLink></NavItem>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
