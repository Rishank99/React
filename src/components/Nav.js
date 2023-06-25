import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
`;
  return (
    <Nav>
        <div className='navbar'>
            <ul className="navbar-lists">
                <li>
                    <NavLink to="/" className="navbar-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navbar-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar-link">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/orderhistory" className="navbar-link">Order History</NavLink>
                </li>
            </ul>
        </div>
    </Nav>
  )
}

export default Nav;
