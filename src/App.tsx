import React from 'react';
import './App.css';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio';

function App() {
  return (
  <>
    <Header />
    <Nav />
    <About />
    <Portfolio />
    <Footer />
  </>
  );
}

export default App;
