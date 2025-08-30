import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #2a2a2a, #333, #2a2a2a);
  color: white;
  padding: 2.5rem 0;
  text-align: center;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterLogo = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--primary-color, #f8f8f8);
`;

const FooterLinks = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: #f0f0f0;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    color: var(--primary-color, #fff);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--primary-color, #fff);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 80%;
  }
`;

const Divider = styled.span`
  color: #555;
  margin: 0 0.5rem;
  font-weight: 300;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 1.5rem;
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>Jackfruit Daily</FooterLogo>
        
        <FooterLinks>
          <StyledLink to="about" smooth={true} duration={500}>About Us</StyledLink>
          <Divider>|</Divider>
          <StyledLink to="recipes" smooth={true} duration={500}>Recipes</StyledLink>
          <Divider>|</Divider>
          <StyledLink to="contact" smooth={true} duration={500}>Contact</StyledLink>
        </FooterLinks>
        
        <Copyright>&copy; {currentYear} Jackfruit Daily. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;