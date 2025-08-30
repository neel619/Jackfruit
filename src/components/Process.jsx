import React from 'react';
import styled from 'styled-components';
import processImage from "../assets/images/unnamed.jpg"; // Correct import path

const ProcessSection = styled.section`
  background: var(--light-green);
  padding: 5rem 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 3rem;
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

const ProcessSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Step = styled.div`
  flex: 1;
  min-width: 220px;
  max-width: 300px;
  position: relative;
  padding: 0 1rem;
  
  &:not(:last-child):after {
    content: '→';
    position: absolute;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--primary-color);
    font-size: 2rem;
    
    @media (max-width: 768px) {
      content: '↓';
      right: 50%;
      top: auto;
      bottom: -2rem;
      transform: translateX(50%);
    }
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: var(--primary-color);
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-color);
`;

const ProcessImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin: 3rem auto 0;
  display: block;
  border: 5px solid white;
`;

function Process() {
  const steps = [
    {
      number: 1,
      title: "Harvesting",
      description: "Young, green jackfruits are carefully selected and harvested."
    },
    {
      number: 2,
      title: "Processing",
      description: "Fruits are washed, cut, and prepared for drying."
    },
    {
      number: 3,
      title: "Drying",
      description: "Using advanced methods to preserve nutrients."
    },
    {
      number: 4,
      title: "Grinding",
      description: "Dried jackfruit is ground into fine powder."
    }
  ];

  return (
    <ProcessSection id="process">
      <Container>
        <Title>How Jackfruit Powder is Made</Title>
        
        <ProcessSteps>
          {steps.map((step) => (
            <Step key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </ProcessSteps>
        
        <ProcessImage src={processImage} alt="Process of Making Jackfruit Powder" />
      </Container>
    </ProcessSection>
  );
}

export default Process;