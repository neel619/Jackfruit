import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
`;

const Logo = styled.h1`
  color: var(--primary-green);
  font-size: 1.8rem;
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  
  span {
    color: var(--jackfruit-yellow);
  }
`;

const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--secondary-green);
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--primary-green);
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.8rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-top: 1px solid var(--primary-green);
    text-align: center;
    z-index: 1000;
    gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-green);
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: var(--primary-green);
    
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    width: 100%;
    font-size: 1rem;
    
    &:after {
      bottom: 5px;
    }
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer style={{ 
      padding: scrolled ? '0.5rem 0' : '1rem 0',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white'
    }}>
      <Nav>
        <Logo>
          <LogoIcon />
          Jackfruit<span>Daily</span>
        </Logo>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <li><NavLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="usage" smooth={true} duration={500} onClick={closeMenu}>Usage</NavLink></li>
          <li><NavLink to="process" smooth={true} duration={500} onClick={closeMenu}>Process</NavLink></li>
          <li><NavLink to="age-benefits" smooth={true} duration={500} onClick={closeMenu}>Age Benefits</NavLink></li>
          <li><NavLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</NavLink></li>
          <li><NavLink to="news" smooth={true} duration={500} onClick={closeMenu}>News</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;