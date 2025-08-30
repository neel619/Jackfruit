import React from 'react';
import Header from './components/Header';
import ProductImage from './components/ProductImage';
import About from './components/About';
import Usage from './components/Usage';
import Process from './components/Process';
import RecipeCards from './components/RecipeCards';
import Contact from './components/Contact';
import SocialFollow from './components/SocialFollow';
import News from './components/News';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/GlobalStyle';

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