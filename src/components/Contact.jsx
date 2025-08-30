import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactSection = styled.section`
  background: var(--white);
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;

  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  a {
    color: var(--primary-color);
    font-size: 2rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <Container>
        <Title>To Order and More Information</Title>
        <ContactInfo>
          <strong>Email:</strong>{' '}
          <a href="mailto:info.jkdaily@gmail.com">info.jkdaily@gmail.com</a>
        </ContactInfo>
        <ContactInfo>
          <strong>Phone:</strong> +91 9029738672
        </ContactInfo>
        <SocialIcons>
          <a 
            href="https://www.facebook.com/share/tY3YMHpgKfkjq3Yo/?mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/jackfruitdaily?igsh=aXlmZjJ5OWx3Mnl5&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialIcons>
      </Container>
    </ContactSection>
  );
}

export default Contact;