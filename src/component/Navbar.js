import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <NavigationStyled>
      <NavLinkStyled activeClassName="active" exact to="/">
        <i className="fas fa-piggy-bank"></i>
      </NavLinkStyled>
      <NavLinkStyled activeClassName="active" to="/cart">
        <i className="fas fa-shopping-cart"></i>
      </NavLinkStyled>
      <NavLinkStyled activeClassName="active" to="/profile">
        <i className="fas fa-user-alt"></i>
      </NavLinkStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const NavLinkStyled = styled(NavLink)`
  list-style: none;
  padding: 15px;
  margin: 10px;
  background-color: var(--text);
  text-align: center;
  border-radius: 15px;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.31);

  i {
    color: var(--base);
    padding: 5px 13px;
    text-decoration: none;
    font-size: 1.6rem;
  }

  &.active {
    background-color: var(--base);

    i {
      color: #1a535c;
    }
  }
`
