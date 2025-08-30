import React from 'react';
import styled from 'styled-components';

const AgeSectionContainer = styled.section`
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

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 3rem;
  opacity: 0.8;
`;

const AgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const AgeCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 5px solid white;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const AgeIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
`;

const AgeTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  font-size: 1.3rem;
`;

const AgeDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-color);
  line-height: 1.6;
  text-align: left;
`;

function AgeSection() {
  const ageGroups = [
    {
      icon: "👶",
      title: "For Babies",
      description: "Gentle on the tummy and rich in natural fiber, Jackfruit365 can be added to porridges for easy digestion and better gut health."
    },
    {
      icon: "🧒",
      title: "For Children",
      description: "A smart way to sneak in fiber and micronutrients without changing taste; supports active growth and immunity."
    },
    {
      icon: "🧑",
      title: "For Young People",
      description: "Helps balance carbs in everyday meals, keeps energy steady, and supports fitness goals without cutting out favorite foods."
    },
    {
      icon: "👨‍💼",
      title: "For Adults",
      description: "A natural aid for managing blood sugar, weight, and digestive health while enjoying regular rice and rotis."
    },
    {
      icon: "👴",
      title: "For Senior Citizens",
      description: "Improves gut health, helps control diabetes, and supports heart wellness through a low glycemic diet."
    },
    {
      icon: "🤰",
      title: "For Pregnant Women",
      description: "A safe, natural source of fiber that reduces constipation, manages sugar spikes, and supports healthy nutrition."
    },
    {
      icon: "💪",
      title: "For Health Conscious People",
      description: "Perfect add-on to daily meals to cut calories and carbs while boosting fiber and satiety."
    }
  ];

  return (
    <AgeSectionContainer id="age-benefits">
      <Container>
        <Title>Good for Every Age, Perfect for Every Plate</Title>
        <Subtitle>Discover how Jackfruit365 benefits every stage of life</Subtitle>
        
        <AgeGrid>
          {ageGroups.map((group, index) => (
            <AgeCard key={index}>
              <AgeIcon>{group.icon}</AgeIcon>
              <AgeTitle>{group.title}</AgeTitle>
              <AgeDescription>{group.description}</AgeDescription>
            </AgeCard>
          ))}
        </AgeGrid>
      </Container>
    </AgeSectionContainer>
  );
}

export default AgeSection;