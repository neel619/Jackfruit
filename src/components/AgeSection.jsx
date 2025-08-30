import React from 'react';
import styled from 'styled-components';

// Import your images with correct relative paths
// Since your images are in src/assets/images, use this path structure:
import babyImg from '../assets/images/baby.jpg';
import childImg from '../assets/images/child.jpg';
import youngPersonImg from '../assets/images/young-person.jpg';
import adultImg from '../assets/images/adult.jpg';
import seniorImg from '../assets/images/senior.jpg';
import pregnantImg from '../assets/images/pregnant.jpg';

const AgeSectionContainer = styled.section`
  background: #e8f5e9;
  padding: 5rem 0;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  color: #2e7d32;
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
    background-color: #ff9800;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
  opacity: 0.8;
`;

const AgeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 3rem 0;
`;

const AgeItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  // Alternate layout for even items
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
const ImageContainer = styled.div`
  flex: 0 0 40%;
  min-height: 300px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    min-height: 250px;
  }
`;

const AgeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${AgeItem}:hover & {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  flex: 0 0 60%;
  padding: 2rem;
  text-align: left;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const AgeTitle = styled.h3`
  color: #2e7d32;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const AgeDescription = styled.p`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
`;

function AgeSection() {
  const ageGroups = [
    {
      image: babyImg,
      title: "For Babies",
      description: "Gentle on the tummy and rich in natural fiber, Jackfruit365 can be added to porridges for easy digestion and better gut health. Our product is specially formulated to be gentle on delicate digestive systems while providing essential nutrients for growth and development."
    },
    {
      image: childImg,
      title: "For Children",
      description: "A smart way to sneak in fiber and micronutrients without changing taste; supports active growth and immunity. Jackfruit365 helps meet nutritional needs during critical growth years while promoting healthy eating habits that last a lifetime."
    },
    {
      image: youngPersonImg,
      title: "For Young People",
      description: "Helps balance carbs in everyday meals, keeps energy steady, and supports fitness goals without cutting out favorite foods. Perfect for students and young professionals who need sustained energy throughout their busy days."
    },
    {
      image: adultImg,
      title: "For Adults",
      description: "A natural aid for managing blood sugar, weight, and digestive health while enjoying regular rice and rotis. Jackfruit365 fits seamlessly into your existing diet while providing the health benefits you need as you navigate work and family life."
    },
    {
      image: seniorImg,
      title: "For Senior Citizens",
      description: "Improves gut health, helps control diabetes, and supports heart wellness through a low glycemic diet. Our formulation addresses common age-related health concerns while being easy to digest and prepare."
    },
    {
      image: pregnantImg,
      title: "For Pregnant Women",
      description: "A safe, natural source of fiber that reduces constipation, manages sugar spikes, and supports healthy nutrition for both mother and baby. Provides essential nutrients during this critical time without any artificial additives."
    },
    
  ];

  return (
    <AgeSectionContainer id="age-benefits">
      <Container>
        <Title>Good for Every Age, Perfect for Every Plate</Title>
        <Subtitle>Discover how Jackfruit365 benefits every stage of life with our specially formulated products</Subtitle>
        
        <AgeList>
          {ageGroups.map((group, index) => (
            <AgeItem key={index}>
              <ImageContainer>
                <AgeImage src={group.image} alt={group.title} />
              </ImageContainer>
              <ContentContainer>
                <AgeTitle>{group.title}</AgeTitle>
                <AgeDescription>{group.description}</AgeDescription>
              </ContentContainer>
            </AgeItem>
          ))}
        </AgeList>
      </Container>
    </AgeSectionContainer>
  );    
}

export default AgeSection;