import React from 'react';
import styled from 'styled-components';
import unnamedImage from '../assets/images/product.png';

const ProductSection = styled.section`
  background: var(--cream);
  padding: 6rem 0 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(139, 195, 74, 0.2) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    z-index: 0;
  }
`;

const ProductContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductTitle = styled.h2`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

const ImageWrapper = styled.div`
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  &:after {
    content: '';
    position: absolute;
    top: -15px;
    right: -15px;
    width: 60px;
    height: 60px;
    background-color: var(--accent-color);
    border-radius: 50%;
    opacity: 0.5;
    z-index: -1;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
`;

const ProductTagline = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-color);
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

function ProductImage() {
  return (
    <ProductSection>
      <ProductContainer>
        <ProductTitle>Premium Green Jackfruit Powder</ProductTitle>
        <ImageWrapper>
          <Image src={unnamedImage} alt="Premium Green Jackfruit Powder" />
        </ImageWrapper>
        <ProductTagline>Nature's superfood for a healthier lifestyle</ProductTagline>
      </ProductContainer>
    </ProductSection>
  );
}

export default ProductImage;