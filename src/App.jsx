import React from 'react';
import Header from './components/Header.jsx';
import ProductImage from './components/ProductImage.jsx';
import About from './components/About.jsx';
import Usage from './components/Usage.jsx';
import Process from './components/Process.jsx';
import RecipeCards from './components/RecipeCards.jsx';
import Contact from './components/Contact.jsx';
import SocialFollow from './components/SocialFollow.jsx';
import News from './components/News.jsx';
import Footer from './components/Footer.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';
import AgeSection from './components/AgeSection.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <ProductImage />
        <About />
        <Usage />
        <Process />
         <AgeSection /> 
        <RecipeCards />
        <Contact />
        <SocialFollow />
        <News />
        
      </main>
      <Footer />
    </>
  );
}

export default App;