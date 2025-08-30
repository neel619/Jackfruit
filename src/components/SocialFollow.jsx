import React from 'react';
import styled from 'styled-components';

const SocialSection = styled.section`
  background: var(--white, #ffffff);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color, #ffb300), var(--secondary-color, #ff7e00));
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: var(--primary-color, #ffb300);
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary-color, #ffb300);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: var(--text-secondary, #5a5a5a);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2.5rem;
`;

const SocialCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(255, 179, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 179, 0, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(255, 126, 0, 0.15);
    border-color: rgba(255, 179, 0, 0.3);
  }
`;

const SocialLink = styled.a`
  display: block;
  text-decoration: none;
`;

const LogoContainer = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgba(255, 179, 0, 0.05);
  transition: background-color 0.5s ease;
  
  ${SocialCard}:hover & {
    background-color: rgba(255, 179, 0, 0.1);
  }
`;

const SocialInfo = styled.div`
  padding: 1.5rem;
`;

const SocialName = styled.h3`
  color: var(--text-primary, #333);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const FollowButton = styled.div`
  display: inline-block;
  background: var(--primary-color, #ffb300);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  margin-top: 0.8rem;
  transition: all 0.3s ease;
  
  ${SocialCard}:hover & {
    background: var(--secondary-color, #ff7e00);
  }
`;

// SVG logos for social platforms
const FacebookLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#3b5998">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const InstagramLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="20%" stopColor="#fdf497"/>
        <stop offset="50%" stopColor="#fd5949"/>
        <stop offset="85%" stopColor="#d6249f"/>
        <stop offset="100%" stopColor="#285AEB"/>
      </linearGradient>
    </defs>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#FF0000">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

function SocialFollow() {
  const socialPlatforms = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/tY3YMHpgKfkjq3Yo/?mibextid=LQQJ4d",
      logo: <FacebookLogo />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jackfruitdaily?igsh=aXlmZjJ5OWx3Mnl5&utm_source=qr",
      logo: <InstagramLogo />
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@jackfruitdaily?si=CpqjxY5FKKh1kTJI",
      logo: <YouTubeLogo />
    }
  ];

  return (
    <SocialSection id="follow-us">
      <Container>
        <Title>Follow Jackfruit Daily</Title>
        <Subtitle>Join our jackfruit community across social platforms to stay updated with our latest recipes, health benefits, and engage with fellow jackfruit enthusiasts.</Subtitle>
        <SocialGrid>
          {socialPlatforms.map((platform, index) => (
            <SocialCard key={index}>
              <SocialLink 
                href={platform.url} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${platform.name}`}
              >
                <LogoContainer>
                  {platform.logo}
                </LogoContainer>
                <SocialInfo>
                  <SocialName>{platform.name}</SocialName>
                  <FollowButton>Follow Us</FollowButton>
                </SocialInfo>
              </SocialLink>
            </SocialCard>
          ))}
        </SocialGrid>
      </Container>
    </SocialSection>
  );
}

export default SocialFollow;