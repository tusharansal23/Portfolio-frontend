import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: white;
    transition: width 0.4s ease;
    -webkit-transition: width 0.4s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    background: white;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/education">Education</NavLink>
  </NavbarContainer>
);

export default Navbar;
