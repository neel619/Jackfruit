import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const UsageSection = styled.section`
  background: #fffcf2;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  text-align: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M20 5 L25 15 L35 20 L25 25 L20 35 L15 25 L5 20 L15 15 Z" fill="%23FFCC29" opacity="0.15"/></svg>');
    opacity: 0.4;
    z-index: 0;
  }
`;

const JackfruitAccent = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,20 C65,20 75,35 75,50 C75,65 65,80 50,80 C35,80 25,65 25,50 C25,35 35,20 50,20 Z" fill="%23FFB627" opacity="0.2"/><path d="M50,30 C60,30 65,40 65,50 C65,60 60,70 50,70 C40,70 35,60 35,50 C35,40 40,30 50,30 Z" fill="%23FFCC29" opacity="0.3"/></svg>');
  top: ${props => props.$top || '10%'};
  left: ${props => props.$left || '5%'};
  animation: ${float} 6s ease-in-out infinite;
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const Title = styled.h2`
  color: #594300;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  
  &:after {
    content: '';
    display: block;
    margin: 12px auto 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #FF9505, #FFB627);
    border-radius: 2px;
  }
`;

const Text = styled.p`
  line-height: 1.8;
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 1.15rem;
  color: #594300;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Open Sans', sans-serif;
`;

const UsageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const UsageCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(255, 182, 39, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 1px solid rgba(255, 204, 41, 0.2);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(255, 182, 39, 0.2);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #FF9505, #FFB627);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
  
  /* Appear one by one with delay */
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.$index * 0.15}s;
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FFEFBF, #FFEAA7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
  color: #594300;
  font-size: 2rem;
  position: relative;
  box-shadow: 0 5px 15px rgba(255, 182, 39, 0.2);
  transition: transform 0.3s ease;
  
  ${UsageCard}:hover & {
    animation: ${pulse} 0.8s ease-in-out;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    border: 2px solid transparent;
    background: linear-gradient(90deg, #FF9505, #FFB627) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${UsageCard}:hover &:after {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  color: #594300;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #FFB627;
    transition: width 0.3s ease;
  }
  
  ${UsageCard}:hover &:after {
    width: 60%;
  }
`;

const CardText = styled.p`
  color: #594300;
  font-size: 1rem;
  line-height: 1.7;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
`;

// Custom icons instead of emoji for better alignment
const BakingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#594300">
    <path d="M5,19H19V13H5V19ZM3,21V13C3,11.9 3.9,11 5,11H19C20.1,11 21,11.9 21,13V21H3ZM17,7C17,5.61 17.56,4.36 18.5,3.45C17.74,3.16 16.89,3 16,3C13.24,3 11,5.24 11,8V9H17V7ZM9,9V8C9,4.13 12.13,1 16,1C19.87,1 23,4.13 23,8V9H9Z" />
  </svg>
);

const CookingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#594300">
    <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5C5.48,1.93 8.01,1.93 9.57,3.5L13.75,7.68L8.1,13.34M14.75,7.68L19.59,12.52C21.16,14.08 21.16,16.61 19.59,18.18C18.03,19.74 15.5,19.74 13.93,18.18L9.1,13.34L14.75,7.68Z" />
  </svg>
);

const SmoothieIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#594300">
    <path d="M9,7H11V5H13V7H15V3H9V7M12,2C12.55,2 13,2.45 13,3C13,3.55 12.55,4 12,4C11.45,4 11,3.55 11,3C11,2.45 11.45,2 12,2M3,9H21C21,9 22,9 22,10C22,11 21,11 21,11H3C3,11 2,11 2,10C2,9 3,9 3,9M2.88,11H21.12C22.16,11 23,11.84 23,12.88V12.88C23,13.29 22.84,13.68 22.57,14L17.06,21.5C16.75,21.92 16.21,22 15.76,22H8.24C7.79,22 7.25,21.92 6.94,21.5L1.43,14C1.16,13.68 1,13.29 1,12.88V12.88C1,11.84 1.84,11 2.88,11Z" />
  </svg>
);

const MealIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#594300">
    <path d="M3,3A1,1 0 0,0 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5A1.5,1.5 0 0,0 6,21A1.5,1.5 0 0,0 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4A1,1 0 0,0 9,3A1,1 0 0,0 8,4V8A0.5,0.5 0 0,1 7.5,8.5A0.5,0.5 0 0,1 7,8V4A1,1 0 0,0 6,3A1,1 0 0,0 5,4V8A0.5,0.5 0 0,1 4.5,8.5A0.5,0.5 0 0,1 4,8V4A1,1 0 0,0 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z" />
  </svg>
);

function Usage() {
  const usageMethods = [
    {
      icon: <BakingIcon />,
      title: "Baking",
      text: "Add to your flour for breads, cakes, and muffins for a nutritional boost. The natural sweetness enriches flavor profiles."
    },
    {
      icon: <CookingIcon />,
      title: "Cooking",
      text: "Mix with rice or grains to enhance fiber content and lower glycemic index. Perfect for health-conscious meals."
    },
    {
      icon: <SmoothieIcon />,
      title: "Smoothies",
      text: "Blend into smoothies and shakes for an easy nutrient addition. Creates a creamy texture with natural tropical notes."
    },
    {
      icon: <MealIcon />,
      title: "Daily Meals",
      text: "Incorporate into your everyday rotis and parathas for healthier alternatives. Boosts nutritional value without changing taste."
    }
  ];

  // Add scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('#usage .animated');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <UsageSection id="usage">
      <JackfruitAccent $top="15%" $left="5%" />
      <JackfruitAccent $top="60%" $left="90%" />
      <JackfruitAccent $top="85%" $left="15%" />
      
      <Container>
        <Title className="animated">How to Use Jackfruit Powder</Title>
        <Text className="animated">
          Incorporating our premium jackfruit powder into your meals is easy and versatile. 
          Just a tablespoon adds exceptional nutritional benefits without 
          altering the taste of your dishes. Experience the natural goodness in every serving.
        </Text>
        
        <UsageGrid>
          {usageMethods.map((method, index) => (
            <UsageCard key={index} $index={index} className="animated">
              <CardContent>
                <CardIcon>{method.icon}</CardIcon>
                <CardTitle>{method.title}</CardTitle>
                <CardText>{method.text}</CardText>
              </CardContent>
            </UsageCard>
          ))}
        </UsageGrid>
      </Container>
    </UsageSection>
  );
}

export default Usage;