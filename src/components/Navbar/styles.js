import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
`
export const NavLinks = styled.ul`
  padding: 0;
  width: 75%;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 700px) {
    font-size: 1.5em;
    width: 45%;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (min-width: 1300px) {
    width: 35%;
  }
`
export const NavItem = styled.li`
  padding: 0.4em 0em 0.4em 0em;
  width: 4.5em;
  border: 1px solid #61DAFB;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 700px) {
    height: 1.5em;
    padding: 0em 0em;
  }
`
export const NavLink = styled.a`
  text-align: center;
  color: white;
`
