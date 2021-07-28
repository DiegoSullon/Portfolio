import React from 'react'
import { Nav, NavItem, NavLink, NavLinks } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <NavItem><NavLink href='#welcome-section'>About</NavLink></NavItem>
        <NavItem><NavLink href='#projects'>Work</NavLink></NavItem>
        <NavItem><NavLink href='#contact'>Contact</NavLink></NavItem>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
