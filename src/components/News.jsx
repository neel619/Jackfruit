import React, { useState } from 'react';
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

// Styled Components
const NewsSection = styled.section`
  background: var(--light-green, #e8f5e9);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30 0 L60 30 L30 60 L0 30 Z" fill="%238BC34A" opacity="0.05"/></svg>'), 
                url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="%238BC34A" opacity="0.03"/></svg>');
    opacity: 0.7;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  color: var(--primary-color, #2e7d32);
  font-size: 2.75rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--accent-color, #ffc107);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsItem = styled.li`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.07);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
              box-shadow 0.4s ease;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.$index * 0.15}s;
  opacity: 0;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
`;

const NewsHeader = styled.div`
  padding: 1.5rem 1.5rem 0.5rem;
  background: linear-gradient(to right, #f1f8e9, #e8f5e9);
  border-bottom: 2px dashed rgba(139, 195, 74, 0.2);
`;

const NewsContent = styled.div`
  padding: 1.5rem;
`;

const NewsSource = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
  }
  
  span {
    font-size: 0.9rem;
    color: var(--text-medium, #546e7a);
    font-weight: 600;
  }
`;

const NewsLink = styled.a`
  color: var(--text-dark, #263238);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  
  &:hover {
    color: var(--primary-color, #2e7d32);
  }
`;

const NewsExcerpt = styled.p`
  color: var(--text-medium, #546e7a);
  font-size: 0.95rem;
  margin: 0.75rem 0 1.25rem;
  line-height: 1.5;
`;

const ReadMoreButton = styled.span`
  display: inline-flex;
  align-items: center;
  color: var(--accent-color, #ffc107);
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  
  &:after {
    content: '→';
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  ${NewsLink}:hover & {
    color: var(--primary-color, #2e7d32);
    
    &:after {
      transform: translateX(4px);
    }
  }
`;

const JackfruitIcon = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 10 C70 10, 90 30, 90 50 C90 70, 70 90, 50 90 C30 90, 10 70, 10 50 C10 30, 30 10, 50 10 Z" fill="%238BC34A" opacity="0.03"/></svg>');
  right: -200px;
  bottom: -200px;
  z-index: 0;
  animation: ${pulse} 15s infinite ease-in-out;
`;

function News() {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const newsItems = [
    {
      title: "Indian Express: Raw Jackfruit Flour Helps Lower Blood Sugar",
      url: "https://indianexpress.com/article/health-wellness/raw-jackfruit-flour-lower-blood-sugar-rice-and-wheat-in-your-diet-8828730/lite/",
      source: "Indian Express",
      logoUrl: "https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg",
      excerpt: "Studies show that raw jackfruit flour has a lower glycemic index compared to wheat and rice, making it an excellent alternative for people managing diabetes."
    },
    {
      title: "Times of India: Jackfruit Flour - A New Weapon to Fight Diabetes",
      url: "https://timesofindia.indiatimes.com/home/science/jackfruit-flour-a-new-weapon-to-fight-diabetes/amp_articleshow/79940320.cms",
      source: "Times of India",
      logoUrl: "https://static.toiimg.com/photo/47529300.cms",
      excerpt: "Green jackfruit flour is emerging as a promising dietary supplement for diabetics, with research indicating significant benefits for blood glucose management."
    },
    {
      title: "Hindustan Times: Health Benefits of Adding Green Jackfruit Flour",
      url: "https://www.hindustantimes.com/lifestyle/health/health-benefits-of-adding-green-jackfruit-flour-in-the-diet-of-diabetes-patients-101678436429178-amp.html",
      source: "Hindustan Times",
      logoUrl: "https://www.hindustantimes.com/images/app-images/ht/ht_logo_for_amp.png",
      excerpt: "Nutritionists recommend incorporating green jackfruit flour into daily diets for its high fiber content and ability to help regulate blood sugar levels."
    },
    {
      title: "Economic Times: Why Doctors Are Swearing by the Humble Green Jackfruit",
      url: "https://m.economictimes.com/why-doctors-are-swearing-by-the-humble-green-jackfruit/amp_primearticleshow/111615429.cms",
      source: "Economic Times",
      logoUrl: "https://img.etimg.com/photo/64095301.cms",
      excerpt: "Medical professionals are increasingly recommending green jackfruit products as part of dietary interventions for patients with type 2 diabetes and metabolic syndrome."
    }
  ];

  return (
    <NewsSection id="news">
      <Container>
        <Title>Green Jackfruit in the News</Title>
        <NewsList>
          {newsItems.map((item, index) => (
            <NewsItem 
              key={index} 
              $index={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NewsHeader>
                <NewsSource>
                  <img src={item.logoUrl} alt={item.source} />
                  <span>{item.source}</span>
                </NewsSource>
              </NewsHeader>
              <NewsContent>
                <NewsLink href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                  <NewsExcerpt>{item.excerpt}</NewsExcerpt>
                  <ReadMoreButton>Read Full Article</ReadMoreButton>
                </NewsLink>
              </NewsContent>
            </NewsItem>
          ))}
        </NewsList>
      </Container>
      <JackfruitIcon />
    </NewsSection>
  );
}

export default News;