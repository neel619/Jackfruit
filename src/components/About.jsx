import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 0 4rem;
  background: linear-gradient(to bottom, var(--white) 0%, var(--light-green) 100%);
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--secondary-color);
  }
`;

const Text = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-color);
`;

const Highlight = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

function About() {
  return (
    <AboutSection id="about">
      <AboutContent className="container">
        <Title>About Us</Title>
        <Text>
          At <Highlight>JackfruitDaily</Highlight>, we are passionate about bringing the nutritional benefits of green jackfruit powder to the world. Our founder, <Highlight>Onkar Ambavane</Highlight>, embarked on this journey after observing the adverse health effects of modern-day diets.
        </Text>
        <Text>
          We ensure that our jackfruit powder is made from the finest unripe jackfruits, carefully processed to retain all the essential nutrients while providing a convenient and versatile ingredient to incorporate into any meal.
        </Text>
      </AboutContent>
    </AboutSection>
  );
}

export default About;