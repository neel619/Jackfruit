import React, { useState } from 'react';
import styled from 'styled-components';

// Import images
import rotiImage from '../assets/images/pexels-towfiqu-barbhuiya-3440682-9797029.jpg';
import parathaImage from '../assets/images/pexels-pranjall-kumar-150768-8346891.jpg';
import puriImage from '../assets/images/puri.jpg';
import soupImage from '../assets/images/pexels-jentstyle-photo-3559899.jpg';
import gravyThickenerImage from '../assets/images/Screenshot 2024-07-26 002332.png';

const RecipeSection = styled.section`
  background: var(--white, #fff);
  padding: 6rem 0;
  position: relative;
  
  &:before {
    content: '';
    background-image: url('/path/to/jackfruit-pattern.png'); /* Add a subtle jackfruit pattern background */
    background-size: 200px;
    opacity: 0.03;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`;

const SectionInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeading = styled.h2`
  color: var(--primary-color, #2E7D32);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--secondary-color, #F9A825) 0%, var(--primary-color, #2E7D32) 100%);
    border-radius: 2px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '100%')};
  border: 1px solid rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(46, 125, 50, 0.1);
  }
`;

const CardImage = styled.div`
  height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 130px;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  }
`;

const RecipeLabel = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--primary-color, #2E7D32);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 12px;
  border-radius: 20px;
  z-index: 2;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
`;

const CardContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  color: var(--primary-color, #2E7D32);
  margin-bottom: 1.25rem;
  font-size: 1.7rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 0.75rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color, #F9A825);
    border-radius: 1.5px;
  }
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
`;

const CardText = styled.div`
  color: var(--text-color, #333);
  font-size: 1rem;
  line-height: 1.8;
  flex-grow: 1;
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
`;

const RecipeDetails = styled.div`
  background-color: rgba(46, 125, 50, 0.05);
  padding: 1.25rem;
  border-radius: 10px;
  margin-top: 1rem;
  border-left: 3px solid var(--primary-color, #2E7D32);
`;

const RecipeButton = styled.button`
  background-color: var(--primary-color, #2E7D32);
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  margin-top: 1.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: var(--dark-green, #1B5E20);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 125, 50, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:after {
    content: ${({ isExpanded }) => (isExpanded ? '"↑"' : '"↓"')};
    margin-left: 8px;
    font-size: 1rem;
  }
`;

function RecipeCards() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const recipes = [
    {
      id: 1,
      title: 'Jackfruit Roti',
      image: rotiImage,
      description: 'A nutritious twist on traditional roti with jackfruit powder.',
      recipe: 'Mix 1 tablespoon of jackfruit powder with 2 cups of whole wheat flour, add a pinch of salt, and knead into a smooth dough with water. Let it rest for 15 minutes. Divide into small balls, roll into thin circles, and cook on a hot griddle until spots appear. Flip and cook the other side, pressing gently with a cloth for it to puff up. Serve warm with your favorite curry or lentil dish.'
    },
    {
      id: 2,
      title: 'Jackfruit Paratha',
      image: parathaImage,
      description: 'Flaky, layered flatbread enriched with jackfruit powder.',
      recipe: 'Combine 2 tablespoons of jackfruit powder with 2 cups of wheat flour, add a pinch of salt, and knead into a soft dough with water. Let it rest for 30 minutes. For stuffing, mix mashed potatoes with spices of your choice. Divide the dough into balls, roll out, add stuffing, seal and roll again. Cook on a hot griddle with ghee or butter until golden brown on both sides. Serve hot with yogurt or pickle.'
    },
    {
      id: 3,
      title: 'Jackfruit Puri',
      image: puriImage,
      description: 'Deep-fried bread with jackfruit powder for added nutrition.',
      recipe: 'Add 2 tablespoons of jackfruit powder to 2 cups of wheat flour, mix in 1/2 teaspoon salt and a pinch of ajwain (carom seeds). Knead into a firm dough with water. Cover and let it rest for 15 minutes. Divide into small balls, roll into small circles (about 4 inches in diameter), and deep fry in hot oil until they puff up and turn golden brown. Drain on paper towels and serve hot with curry or chutney.'
    },
    {
      id: 4,
      title: 'Jackfruit Soup Thickener',
      image: soupImage,
      description: 'Natural soup thickener that adds nutrition and flavor.',
      recipe: 'Prepare your favorite soup base (vegetable, chicken, or mushroom). When the soup is nearly done, whisk 1-2 tablespoons of jackfruit powder with a small amount of cool water to make a slurry. Slowly pour this mixture into the simmering soup while stirring continuously. Let it simmer for another 5-7 minutes to thicken. The jackfruit powder will add a subtle sweetness and boost of fiber. Adjust seasoning as needed before serving.'
    },
    {
      id: 5,
      title: 'Jackfruit Gravy Thickener',
      image: gravyThickenerImage,
      description: 'A healthier alternative to corn starch for thickening gravies.',
      recipe: 'For any gravy or sauce, make a slurry by mixing 1 tablespoon of jackfruit powder with 2 tablespoons of cold water. Whisk until smooth. Bring your gravy to a gentle simmer, then slowly add the slurry while continuously stirring. Continue to cook for 3-5 minutes until the gravy reaches your desired thickness. The jackfruit powder provides a smooth texture without altering the flavor profile of your dish, while adding nutritional benefits.'
    }
  ];

  const handleViewRecipe = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <RecipeSection id="recipes">
      <SectionInner>
        <SectionHeading>Delicious Jackfruit Recipes</SectionHeading>
        <CardsContainer>
          {recipes.map((recipe) => (
            <Card key={recipe.id} isExpanded={expandedCardId === recipe.id}>
              <CardImage src={recipe.image}>
                <RecipeLabel>Jackfruit Recipe</RecipeLabel>
              </CardImage>
              <CardContent>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription isExpanded={expandedCardId === recipe.id}>
                  {recipe.description}
                </CardDescription>
                <CardText isExpanded={expandedCardId === recipe.id}>
                  <RecipeDetails>
                    {recipe.recipe}
                  </RecipeDetails>
                </CardText>
                <RecipeButton 
                  onClick={() => handleViewRecipe(recipe.id)}
                  isExpanded={expandedCardId === recipe.id}
                >
                  {expandedCardId === recipe.id ? 'Hide Recipe' : 'View Recipe'}
                </RecipeButton>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      </SectionInner>
    </RecipeSection>
  );
}

export default RecipeCards;